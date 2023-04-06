import React from 'react'
import "./AzureOptions.css"
import UserInput from './Key/Key'
import Dropdown from './Region/Region'
import EnterButton from './EnterButton/EnterButton'
import { Divider } from '@material-ui/core';
import {
     flip_switchMenus,
     flip_invertColors,
     flip_micVisual,
     increment_textSize,
     decrement_textSize,
     increment_lineWidth,
     decrement_lineWidth,
     increment_numLines,
     decrement_numLines
} from '../../../redux/actions'

import store from '../../../store';
import LanguageOptions from './Language/Language'
import TargetLanguage from './TargetLanguage/TargetLanguage'



export default function AzureOptions() {
    // These are functions that take an object and return an element of the object.
    // They are passed to useSelector, which feeds the global state object into them.
    return (

         <div className="AzureOptions" id="azure-options-space">
                  <h2 style = {{fontFamily:"Arial"}}>AZURE LOGIN</h2>
              <div className="item-wrapper">
                       <UserInput store ={store}/>
              </div>

               <div>
                <div className = "Dropdown">
                    Region:
                </div>
                <Dropdown/>
              </div>

             <div>
               <div className = "Dropdown">
                   Source Lang:
               </div>
               <LanguageOptions/>
             </div>
             <div>
               <div className = "Dropdown">
                   Translational Lang:
               </div>
               <TargetLanguage/>
             </div>

             <div className="item-wrapper">
                  <EnterButton />
             </div>
         </div>
    );
}
