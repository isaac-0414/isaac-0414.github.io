import React from 'react'
import './index.css'
import '../MiddleSpace/index.css'
import PersistentDrawerLeft from '../newDrawer'
import {useSelector} from 'react-redux'

// JavaScript functions used: setTimeout, clearTimeout, bind, getElementById,
// addEventListener, removeEventListener
// React functions used: constructor, setState, componentDidMount, render
export default function TopSpace(props){

          var h = '9vh'; // I don't remember why I set the height like this.
          // The Options component takes a function as a prop.
          const meh = (state) => state.meh
          const setting = useSelector(meh)
          var choice = setting ? "hidden" : "visible"
          return (
               <div className="TopSpace" id="outer" style={{ height: h , visibility:choice}}>
                    <div >
                          <div className="item-wrapper" >
                              <PersistentDrawerLeft color = {props.color}/>
                         </div>

                    </div>
               </div>
          )
}
