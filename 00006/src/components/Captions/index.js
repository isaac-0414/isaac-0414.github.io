import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.css'
import AzureRecognition from './AzureRecognition'
import Recognition from './Recognition'
import StreamTextRender from './StreamTextRender'
import store from '../../store/';
import streamtextRender from './StreamTextRender'
import { Button } from "@material-ui/core"
import mytheme from '../Drawer/theme'
import { ThemeProvider } from "@material-ui/core/styles";


export default function Captions(props) {
  const currentAPI = useSelector((state) => state.currentAPI)
  const checkAzureKey = useSelector((state) => state.checkAzureKey)
  const lineWidth = useSelector((state) => state.lineWidth)
  const numLines = useSelector((state) => state.numLines)
  const recording = useSelector((state) => state.recording)
  const [maxHeight, setMaxHeight] = useState(64)
  const [visible, setVisible] = useState(false)
  const correctAzureKey = useSelector((state) => state.correctAzureKey)
  const stream_text = useSelector((state) => state.streamtext)

  var isCorrectKey = correctAzureKey ? true : false
  // Sloppy styling. Please change.
  var textStream = props.text
  var paddingString = (11 - lineWidth) * 3 + 'vw'
  var h = numLines + 'vh'
  var resH = (43 - numLines) + 'vh'
  var sz = props.textSize
  var iframeVisible = "hidden"
  var otherVisible = "visible"
  var iframeHeight = 0;
  var otherHeight = h;
  if (currentAPI == 2) {
    iframeHeight = h;
    iframeVisible = "visible"
    otherVisible = "hidden"
    otherHeight = 0;
  }
  const DisTop = () => {
    if (document.getElementById("captionsSpace").scrollTop >= maxHeight) {
      setMaxHeight(document.getElementById("captionsSpace").scrollTop);
    }
    if (maxHeight - document.getElementById("captionsSpace").scrollTop > 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  if (visible && currentAPI != 2) {
    return (
      <ThemeProvider theme={mytheme}>
        <div>
          <Button className={styles.scroll} variant="contained" onClick={new Recognition().scrollBottom} color="secondary">Scroll to Bottom
              </Button>
              <div onScroll={DisTop} className="captionsSpace" id="captionsSpace"
                style={{
                  visible: otherVisible,
                  scrollHeight: "1vw",
                  fontSize: sz,
                  height: otherHeight,
                  width: "100vw",
                  overflow: "auto",
                  paddingLeft: paddingString,
                  paddingRight: paddingString
                }}>
                <Recognition isRecording={recording} checkAzureKey={checkAzureKey} desiredAPI={currentAPI} props={props} />
                <AzureRecognition isRecording={recording} checkAzureKey={checkAzureKey} desiredAPI={currentAPI} props={props} />
              </div>
              <div onScroll={DisTop} className="captionsSpace" id="captionsSpace"
                style={{
                  visible: iframeVisible,
                  scrollHeight: "1vw",

                  height: iframeHeight,
                  width: "100vw",
                  overflow: "auto",
                  paddingLeft: paddingString,
                  paddingRight: paddingString
                }}>
                <StreamTextRender isRecording={recording} textSize={textStream} checkAzureKey={checkAzureKey} desiredAPI={currentAPI} props={props} fontSize={sz} />
              </div>

        </div>
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={mytheme}>
        <div>
          <Button className={styles.scrollhidden} variant="outlined" onClick={new Recognition().scrollBottom} color="secondary">Scroll to Bottom
              </Button>
              <div onScroll={DisTop} className="captionsSpace" id="captionsSpace"
                style={{
                  visible: otherVisible,
                  scrollHeight: "1vw",
                  fontSize: sz,
                  height: otherHeight,
                  width: "100vw",
                  overflow: "auto",
                  paddingLeft: paddingString,
                  paddingRight: paddingString
                }}>
                <Recognition isRecording={recording} checkAzureKey={checkAzureKey} desiredAPI={currentAPI} props={props} />
                <AzureRecognition isRecording={recording} checkAzureKey={checkAzureKey} desiredAPI={currentAPI} props={props} />
              </div>
              <div onScroll={DisTop} className="captionsSpace" id="captionsSpace"
                style={{
                  visible: iframeVisible,
                  scrollHeight: "1vw",
                  fontSize: sz,
                  height: iframeHeight,
                  width: "100vw",
                  overflow: "auto",
                  paddingLeft: paddingString,
                  paddingRight: paddingString
                }}>
                <StreamTextRender isRecording={recording} textSize={textStream} checkAzureKey={checkAzureKey} desiredAPI={currentAPI} props={props} fontSize={sz} />
              </div>
        </div>
      </ThemeProvider>
    )
  }
}
