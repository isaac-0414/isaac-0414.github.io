
import React from 'react'
import store from '../../../store/';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.lang = 'en-US'
recognition.continuous = false
recognition.interimResults = true

// In this document, a 'line' is more like a sentence.
// this.state.line is like a buffer of text held at the end of the page. When the line
// is finished, the buffer is flushed: a new div is appended to the 'out' div and
// this.state.line is reset for the next line.

class Recognition extends React.PureComponent {
   constructor() {
        super()
        this.state = {
             line: '',
             //recording: true
        }
        this.appendLine = this.appendLine.bind(this)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
   }

   componentDidMount() {
      if (store.azureKeyReducer == undefined) {
        this.start()
      }  else {
        this.stop()
      }
   }

   // Global state 'recording' is passed as a prop. componentDidUpdate is invoked
   // when props change, therefore also when 'recording' changes.
   componentDidUpdate(prevProps, prevState) {
     if (this.props.checkAzureKey == true) {
       if (this.props.isRecording == true && this.props.desiredAPI == 0) {
         this.stop()
       }
       return
     }
     if (this.props.desiredAPI == 0) {
       if (prevProps.desiredAPI == 0) {
         if (this.props.isRecording == prevProps.isRecording) {
           return
         } else {
           if (this.props.isRecording == false) {
             this.stop()
             return
           } else {
             this.start()
             return
           }
         }
       } else {
         this.start()
         return
       }

     } else {
       if (prevProps.desiredAPI == 0 && this.props.isRecording == true) {
         this.stop()
       } else {
         return;
       }
     }
     return
   }

   start() {
        recognition.start()
        // Map the complex recognition result object to a string. You can explore
        // the full object with console.log(e).
        recognition.onresult = (e) => {
             let words = Array.from(e.results)
               .map(result => result[0])
               .map(result => result.transcript)
               .join('');
             words = words.charAt(0).toUpperCase() + words.slice(1)
             if (e.results[0].isFinal) // if line is final
                  this.appendLine(words + '.') // flush buffer
             else this.updateCurrentLine(words) // update state
        }
        // By default, recognition stops when it gets a final result.
        recognition.onend = recognition.start // override this behavior
   }

   stop() {
     this.setState({ line: '' })

        recognition.onresult = () => {} // do nothing with results
        recognition.onend = () => {} // don't restart when ending
        recognition.stop()
   }

   updateCurrentLine(str) {
        const capts = document.getElementById('captionsSpace')
        var isScrolledToBottom = capts.scrollHeight - capts.clientHeight <= capts.scrollTop + 1
        this.setState({ line: str })
        if (isScrolledToBottom)
             capts.scrollTop = capts.scrollHeight - capts.clientHeight
   }

   appendLine(str) {
        const capts = document.getElementById('captionsSpace')
        const out = document.getElementById('out')
        var isScrolledToBottom = capts.scrollHeight - capts.clientHeight <= capts.scrollTop + 1
        var div = document.createElement('div') // create new div
        div.textContent = str // set new div's text to the updated current line
        out.appendChild(div) // add the new div to the document inside 'out' element
        this.setState({ line: '' }) // reset line
        if (isScrolledToBottom)
             capts.scrollTop = capts.scrollHeight - capts.clientHeight // scroll to bottom
   }

   render() {
        // out holds all past lines. curr holds the current line.
    
        return (
             <div>
                  <div id='out'></div>
                  <div id='curr'>{this.state.line}</div>

             </div>
        )
   }
}

export default Recognition
