import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './EnterButton.css'
import store from '../../../../store';
import { flip_entered_key, flip_check_azureKey } from '../../../../redux/actions'
import { Button } from "@material-ui/core"
import '../Language/Language'


// This code only works if the initial state is Off. It's surprisingly way harder
// to get this to work if you want the inital state of the checkbox to be checked.

export default function EnterButton(props) {
  const dispatch = useDispatch()
  var s = document.getElementById("languageOptions");
  var t = document.getElementById("targetlanguageoptions");
  var r = document.getElementById("regionOptions");
  if (s != null) {
    store.currentLanguageReducer = s.options[s.selectedIndex].value;
  } else {
    store.currentLanguageReducer = 'en-US';
  }

  if (t != null) {
    store.targetLanguageReducer = t.options[t.selectedIndex].value;
  } else {
    store.targetLanguageReducer = 'en';
  }

  if (r != null) {
    store.azureRegionOptionsReducer = r.options[r.selectedIndex].value;
  }

  // flip recording when space bar is pressed

  //const setting = useSelector(props.setting)
  // useDispatch returns the state modifying function, invoked below.

  return (
    <div>
      <div className="setting-wrapper">
        <div className="setting-wrapper2">
          <Button className="enter"
            onClick={() => dispatch(flip_check_azureKey())} >
            <div id="entertext">
              Enter
                            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
