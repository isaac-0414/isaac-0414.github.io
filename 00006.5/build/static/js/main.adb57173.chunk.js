(this.webpackJsonpscribear=this.webpackJsonpscribear||[]).push([[0],{197:function(e,t){},199:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},204:function(e,t){},263:function(e,t,n){},264:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(57),c=n.n(r),i=(n(263),n(264),n(21)),s=n(17),o=n(384),u=n(370),l=n(6),j=n(385),d=n(361),b=n(383),O=n(382),p=n(386),h=n(192),x=n.n(h),g=n(145),f=n.n(g),m=n(193),v=n.n(m),S=n(79),A=n.n(S),y=n(188),E=n.n(y),R=n(189),L=n.n(R),I=n(26),z=n(388),w=n(1);function C(e){var t=Object(I.b)(),n=Object(I.c)((function(e){return e.ControlReducer}));return Object(w.jsx)("div",{children:Object(w.jsx)(z.a,{id:"demo-customized-button",variant:"contained",disableElevation:!0,onClick:function(e){n.listening=!n.listening,t({type:"FLIP_RECORDING",payload:n})},sx:{width:50,height:30},children:!1===n.listening?Object(w.jsx)(E.a,{}):Object(w.jsx)(L.a,{})})})}var T=n(80),P=n.n(T),N=n(378),k=n(363),U=n(354),_=n(356),B=n(375),G=n(357),M=n(376),H=Object(U.a)({slider:{width:"16vw",marginLeft:"2vw"},textBox:{width:"2.5vw",marginLeft:"1vw"}});function D(e){return"".concat(e)}function V(e){var t=Object(I.b)(),n=Object(I.c)((function(e){return e.DisplayReducer})),a=H();return Object(w.jsxs)("div",{className:a.slider,children:[Object(w.jsx)(_.a,{id:"discrete-slider",gutterBottom:!0}),Object(w.jsxs)(G.a,{container:!0,spacing:2,alignItems:"center",children:[Object(w.jsx)(G.a,{item:!0,xs:!0,children:Object(w.jsx)(B.a,{defaultValue:n.textSize,getAriaValueText:D,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",onChange:function(e,a){!function(e){var a=Object.assign({},n);a.textSize=e,t({type:"SET_TEXT",payload:a})}(a)},step:1,marks:!0,min:1,max:15})}),Object(w.jsx)("div",{className:a.textBox,children:Object(w.jsx)(G.a,{item:!0,children:Object(w.jsx)(M.a,{value:n.textSize,margin:"dense",onChange:function(e){var a=Object.assign({},n);a.textSize=Number(e.target.value),t({type:"SET_TEXT",payload:a})},onBlur:function(){var e=Object.assign({},n);(n.textSize<1||n.textSize>15)&&(e.textSize=1),t({type:"SET_TEXT",payload:e})},inputProps:{step:1,min:1,max:15,type:"number","aria-labelledby":"input-slider"}})})})]})]})}var K=n(8),W=n(108),F=n(212),X=n(390),J=["ar-EG","ca-ES","da-DK","da-DK","de-DE","en-AU","en-CA","en-GB","en-IN","en-NZ","en-US","es-ES","es-MX","fi-FI","fr-CA","fr-FR","hi-IN","it-IT","ja-JP","ko-KR","nb-NO","nl-NL","pl-PL","pt-BR","pt-PT","ru-RU","sv-SE","zh-CN","zh-HK","zh-TW"],Z=Object(K.a)((function(e){return Object(w.jsx)(F.a,Object(i.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:10,color:t.palette.text.secondary,marginRight:t.spacing(1.5),innerHeight:40,outerHeight:40},"&:active":{backgroundColor:Object(W.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function Y(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.ControlReducer})),n=a.useState(null),r=Object(s.a)(n,2),c=r[0],o=r[1],u=a.useState({language:t.speechLanguage}),l=Object(s.a)(u,2),j=l[0],d=l[1],b=Boolean(c),O=function(t){d(Object(i.a)(Object(i.a)({},j),{},{language:t.target.id})),e({type:"SET_SPEECH_LANGUAGE",payload:t.target.id}),o(null)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":b?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){o(e.currentTarget)},sx:{width:"2vw",height:30,padding:0},children:Object(w.jsx)("h2",{className:"tryout",style:{fontSize:"12px"},children:j.language})}),Object(w.jsx)(Z,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:c,open:b,onClose:function(){o(null)},children:J.map((function(e,t){return Object(w.jsx)(X.a,{id:e,onClick:O,disableRipple:!0,children:e})}))})]})}var q=["ar","da","de","en","es","fi","fr","hi","it","ja","ko","nb","nl","pl","pt","ru","sv","zh"],Q=Object(K.a)((function(e){return Object(w.jsx)(F.a,Object(i.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:10,color:t.palette.text.secondary,marginRight:t.spacing(1.5),innerHeight:40,outerHeight:40},"&:active":{backgroundColor:Object(W.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function $(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.ControlReducer})),n=a.useState(null),r=Object(s.a)(n,2),c=r[0],o=r[1],u=a.useState({language:t.textLanguage}),l=Object(s.a)(u,2),j=l[0],d=l[1],b=Boolean(c),O=function(t){d(Object(i.a)(Object(i.a)({},j),{},{language:t.target.id})),e({type:"SET_TEXT_LANGUAGE",payload:t.target.id}),o(null)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":b?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){o(e.currentTarget)},sx:{width:"2vw",height:30,padding:0},children:Object(w.jsx)("h2",{className:"tryout",style:{fontSize:"12px"},children:j.language})}),Object(w.jsx)(Q,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:c,open:b,onClose:function(){o(null)},children:q.map((function(e,t){return Object(w.jsx)(X.a,{id:e,onClick:O,disableRipple:!0,children:e})}))})]})}function ee(e){var t=a.useState({display:!0,stt:!0,visualization:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1],o=function(e){return function(t){c(Object(i.a)(Object(i.a)({},r),{},Object(l.a)({},e,!r[e])))}};return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Menu"}),Object(w.jsxs)(j.a,{sx:{width:"20vw",bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",children:[Object(w.jsxs)(N.a,{children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{})}),Object(w.jsx)(O.a,{primary:"Speech To Text"}),Object(w.jsx)(b.a,{onClick:o("stt"),children:r.stt?Object(w.jsx)(A.a,{}):Object(w.jsx)(P.a,{})})]}),Object(w.jsx)(p.a,{in:r.stt,timeout:"auto",unmountOnExit:!0,children:Object(w.jsxs)(j.a,{component:"div",disablePadding:!0,children:[Object(w.jsxs)(N.a,{sx:{pl:4,mb:1},children:[Object(w.jsx)(O.a,{primary:"Listening"}),Object(w.jsx)(C,{isRecording:e.isRecording})]}),Object(w.jsxs)(N.a,{sx:{pl:4,mb:1},children:[Object(w.jsx)(O.a,{primary:"Speech Language"}),Object(w.jsx)(Y,{})]}),Object(w.jsxs)(N.a,{sx:{pl:4,mb:2},children:[Object(w.jsx)(O.a,{primary:"Text Language"}),Object(w.jsx)($,{})]})]})}),Object(w.jsx)(k.a,{}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(f.a,{})}),Object(w.jsx)(O.a,{primary:"Display"}),Object(w.jsx)(b.a,{onClick:o("display"),children:r.display?Object(w.jsx)(A.a,{}):Object(w.jsx)(P.a,{})})]}),Object(w.jsx)(p.a,{in:r.display,timeout:"auto",unmountOnExit:!0,children:Object(w.jsxs)(j.a,{component:"div",disablePadding:!0,children:[Object(w.jsx)(N.a,{sx:{pl:4},children:Object(w.jsx)(O.a,{primary:"Textsize"})}),Object(w.jsx)(V,{}),Object(w.jsxs)(N.a,{sx:{pl:4,pt:5},children:[Object(w.jsx)(O.a,{primary:"Theme"}),Object(w.jsx)(f.a,{})]})]})}),Object(w.jsx)(k.a,{}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(v.a,{})}),Object(w.jsx)(O.a,{primary:"Audio Visualization"}),Object(w.jsx)(b.a,{onClick:o("visualization"),children:r.visualization?Object(w.jsx)(A.a,{}):Object(w.jsx)(P.a,{})})]}),Object(w.jsx)(p.a,{in:r.visualization,timeout:"auto",unmountOnExit:!0,children:Object(w.jsxs)(j.a,{component:"div",disablePadding:!0,children:[Object(w.jsxs)(N.a,{sx:{pl:4},children:[Object(w.jsx)(O.a,{primary:"Visualizing"}),Object(w.jsx)(C,{isRecording:e.isRecording})]}),Object(w.jsx)(N.a,{sx:{pl:4},children:Object(w.jsx)(O.a,{primary:"Design"})})]})}),Object(w.jsx)(k.a,{})]})]})}var te,ne,ae=n(211),re=n(380),ce=n(381),ie=n(210),se=n.n(ie),oe=n(387),ue=n(209),le=n.n(ue),je=n(371),de=n(369),be=n(208),Oe=n.n(be),pe=n(102),he=n.n(pe),xe=n(207),ge=n.n(xe),fe=n(372),me=n(205),ve=n.n(me),Se=n(206),Ae=n.n(Se),ye=n(5),Ee=n.n(ye),Re=n(64),Le=n(32),Ie=n(379),ze=n(374),we=n(377);function Ce(e){var t=Object(I.b)(),n=function(){var e="hi",t=Object(a.useCallback)(function(){var e=Object(Re.a)(Ee.a.mark((function e(t,n){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var r=Ie.a.fromSubscription(n.azureKey,n.azureRegion);r.speechRecognitionLanguage=t.speechLanguage,r.addTargetLanguage(t.textLanguage);var c=ze.a.fromDefaultMicrophoneInput(),i=new we.a(r,c);i.canceled=function(){e(!1)},i.sessionStarted=function(){e(!0)},i.recognizeOnceAsync()})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[e]);return Object(a.useMemo)((function(){return{pog:e,test:t}}),[e])}(),r=(n.pog,n.test),c=a.useState({openAzure:!1,azureStatus:Object(I.c)((function(e){return e.AzureReducer})),controlStatus:Object(I.c)((function(e){return e.ControlReducer})),apiStatus:e.apiStatus}),o=Object(s.a)(c,2),u=o[0],l=o[1],d=function(e){var n=Object.assign({},u.azureStatus);n[e.target.id]=e.target.value,l(Object(i.a)(Object(i.a)({},u),{},{azureStatus:n})),t({type:"CHANGE_AZURE_LOGIN",payload:n})},b=function(){var e=Object(Re.a)(Ee.a.mark((function e(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FLIP_RECORDING",payload:u.controlStatus}),e.next=3,r(u.controlStatus,u.azureStatus).then((function(e){var n=Object.assign({},u.apiStatus);!0===e?(n.azureStatus=0,localStorage.setItem("azureStatus",JSON.stringify(u.azureStatus)),he()({title:"Success!",text:"Switching to Microsoft Azure",icon:"success",timer:1500,buttons:{no:{text:"Cancel",value:"no"}}}).then((function(e){switch(e){case"no":l(Object(i.a)(Object(i.a)({},u),{},{openAzure:!1}));break;default:n.currentAPI=1,t({type:"CHANGE_API_STATUS",payload:n})}})),l(Object(i.a)(Object(i.a)({},u),{},{apiStatus:n}))):(n.azureStatus=2,he()({title:"Warning!",text:"Wrong key or region!",icon:"warning"}),l(Object(i.a)(Object(i.a)({},u),{},{apiStatus:n}))),t({type:"CHANGE_API_STATUS",payload:n})}));case 3:e.sent,t({type:"FLIP_RECORDING",payload:u.controlStatus});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsxs)(j.a,{component:"div",disablePadding:!0,children:[Object(w.jsx)(N.a,{sx:{pl:4},children:Object(w.jsx)(oe.a,{component:"form",sx:{"& > :not(style)":{pr:"1vw",width:"15vw"}},noValidate:!0,autoComplete:"off",children:Object(w.jsx)(fe.a,{onChange:d,value:u.azureStatus.azureKey,id:"azureKey",label:"Key",variant:"outlined"})})}),Object(w.jsx)(N.a,{sx:{pl:4},children:Object(w.jsx)(oe.a,{component:"form",sx:{"& > :not(style)":{mr:"1vw",width:"15vw"}},noValidate:!0,autoComplete:"off",children:Object(w.jsx)(fe.a,{onChange:d,value:u.azureStatus.azureRegion,id:"azureRegion",label:"Region",variant:"outlined"})})}),Object(w.jsx)(z.a,{sx:{pl:4},children:Object(w.jsx)(O.a,{primary:"Enter",onClick:b})})]})})}!function(e){e[e.AVAILABLE=0]="AVAILABLE",e[e.NULL=1]="NULL",e[e.UNAVAILABLE=2]="UNAVAILABLE",e[e.INPROGRESS=3]="INPROGRESS",e[e.ERROR=4]="ERROR"}(te||(te={})),function(e){e[e.AVAILABLE=0]="AVAILABLE",e[e.NULL=1]="NULL",e[e.UNAVAILABLE=2]="UNAVAILABLE",e[e.INPROGRESS=3]="INPROGRESS",e[e.ERROR=4]="ERROR"}(ne||(ne={}));var Te=Object(ae.a)({palette:{primary:{main:"#ffffff"},success:{main:"#4caf50"},warning:{main:"#f44336"},error:{main:"#C8C224"}}}),Pe=function(e){var t=Te;switch(e.currentAPI){case ne.NULL:return Object(w.jsx)(re.a,{theme:t,children:Object(w.jsx)(ve.a,{})});case ne.AVAILABLE:return Object(w.jsx)(re.a,{theme:t,children:Object(w.jsx)(Ae.a,{color:"success"})});case ne.UNAVAILABLE:return Object(w.jsx)(re.a,{theme:t,children:Object(w.jsx)(ge.a,{color:"warning"})})}return Object(w.jsx)(re.a,{theme:t,children:Object(w.jsx)(Oe.a,{color:"error"})})};function Ne(e){var t=Object(I.b)(),n=Te,r=a.useState({azureStatus:!1,streamTextStatus:!1,webspeechStatus:!1,apiStatus:Object(I.c)((function(e){return e.APIStatusReducer}))}),c=Object(s.a)(r,2),o=c[0],u=c[1],h=function(e,n,a){return function(r){if(o.apiStatus.currentAPI!==n)if(a||0!==o.apiStatus[e])u(Object(i.a)(Object(i.a)({},o),{},Object(l.a)({},e,!o[e])));else{var c="Webspeech";1==n?c="Microsoft Azure":2==n&&(c="Streamtext"),he()({title:"Success!",text:"Switching to "+c,icon:"success",timer:2500});var s=Object.assign({},o.apiStatus);s.currentAPI=n,u(Object(i.a)(Object(i.a)({},o),{},{apiStatus:s})),t({type:"CHANGE_API_STATUS",payload:s})}else a&&u(Object(i.a)(Object(i.a)({},o),{},Object(l.a)({},e,!o[e])))}};return Object(w.jsxs)("div",{children:[Object(w.jsxs)(de.a,{onClick:h("webspeechStatus",0,!1),children:[Object(w.jsx)(re.a,{theme:n,children:Object(w.jsx)(d.a,{children:Object(w.jsx)(Pe,{currentAPI:o.apiStatus.webspeechStatus})})}),Object(w.jsx)(O.a,{primary:"Webspeech"})]}),Object(w.jsxs)(de.a,{onClick:h("azureStatus",1,!1),children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(Pe,{currentAPI:o.apiStatus.azureStatus})}),Object(w.jsx)(O.a,{primary:"Microsoft Azure"}),Object(w.jsx)(b.a,{onClick:h("azureStatus",1,!0),children:o.streamTextStatus?Object(w.jsx)(A.a,{}):Object(w.jsx)(P.a,{})})]}),Object(w.jsx)(p.a,{in:o.azureStatus,timeout:"auto",unmountOnExit:!0,children:Object(w.jsx)(Ce,{apiStatus:o.apiStatus})}),Object(w.jsxs)(de.a,{onClick:h("streamTextStatus",2,!1),children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(Pe,{currentAPI:o.apiStatus.streamtextStatus})}),Object(w.jsx)(O.a,{primary:"StreamText"}),Object(w.jsx)(b.a,{children:o.streamTextStatus?Object(w.jsx)(A.a,{}):Object(w.jsx)(P.a,{})})]}),Object(w.jsx)(p.a,{in:o.streamTextStatus,timeout:"auto",unmountOnExit:!0,children:Object(w.jsxs)(j.a,{component:"div",disablePadding:!0,children:[Object(w.jsx)(N.a,{sx:{pl:4},children:Object(w.jsx)(oe.a,{component:"form",sx:{"& > :not(style)":{mr:"1vw",width:"15vw"}},noValidate:!0,autoComplete:"off",children:Object(w.jsx)(fe.a,{id:"outlined-basic",label:"Key",variant:"outlined"})})}),Object(w.jsx)(z.a,{sx:{pl:4},children:Object(w.jsx)(O.a,{primary:"Enter"})})]})})]})}function ke(){var e=a.useState(null),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Boolean(n);return Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)(oe.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:Object(w.jsx)(je.a,{title:"API choice",children:Object(w.jsx)(b.a,{onClick:function(e){r(e.currentTarget)},size:"small",sx:{ml:2},children:Object(w.jsx)(le.a,{sx:{width:32,height:32,color:"white"},children:"M"})})})}),Object(w.jsx)(F.a,{anchorEl:n,open:c,onClose:function(){r(null)},PaperProps:{elevation:0,sx:{width:"20vw",overflow:"invisible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{boxSizing:"border-box",height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:"48%",width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"center",vertical:"top"},anchorOrigin:{horizontal:"center",vertical:"bottom"},children:Object(w.jsx)(Ne,{})})]})}var Ue=Object(ae.a)({palette:{primary:{main:"#ffffff"}}});function _e(e){var t=Ue,n=a.useState({isOpen:!1}),r=Object(s.a)(n,2),c=r[0],l=r[1],j=Object(I.c)((function(e){return e.APIStatusReducer})),d="Webspeech";d=1==j.currentAPI?"Azure":2==j.currentAPI?"StreamText":"Webspeech";var O=function(e){return function(t){l(Object(i.a)(Object(i.a)({},c),{},{isOpen:e}))}};return Object(w.jsx)(o.a,{position:"fixed",style:{height:"10vh"},children:Object(w.jsxs)(u.a,{children:[Object(w.jsxs)("div",{className:"d-table-cell tar",children:[Object(w.jsx)(b.a,{onClick:O(!0),children:Object(w.jsx)(re.a,{theme:t,children:Object(w.jsx)(se.a,{color:"primary"})})}),Object(w.jsx)(ce.a,{open:c.isOpen,onClose:O(!1),children:Object(w.jsx)(ee,{isRecording:e.isRecording})})]}),Object(w.jsx)("div",{className:"border d-table w-100",children:Object(w.jsx)("h2",{className:"d-table-cell tar2",children:"ScribeAR"})}),Object(w.jsx)("div",{style:{position:"fixed",right:"7vw"},children:Object(w.jsx)(ke,{})}),Object(w.jsxs)("h3",{style:{position:"fixed",right:"10vw"},children:[" ",d," "]})]})})}var Be=function(){if(!window||!window.webkitSpeechRecognition)throw new Error("Your browser does not support web speech recognition");var e=new window.webkitSpeechRecognition;return e.continuous=!0,e.interimResults=!0,e},Ge=n(146),Me=n.n(Ge),He="testing",De=0,Ve=function(e){var t=Object(I.b)(),n=Object(I.c)((function(e){return e.ControlReducer})),r=Object(I.c)((function(e){return e.DisplayReducer})),c=Object(I.c)((function(e){return e.AzureReducer})),i=Object(I.c)((function(e){return e.APIStatusReducer}));a.useEffect((function(){1==n.listening&&(0==i.currentAPI?(De=0,f()):1==i.currentAPI&&(De=1,m()))}),[n.listening,i.currentAPI]),document.addEventListener("DOMContentLoaded",(function(){1==i.currentAPI&&Me.a.fire({title:"It appears you have a valid Microsoft Azure key, would you like to use Microsoft Azure?",icon:"info",allowOutsideClick:!1,showDenyButton:!0,confirmButtonText:"Yes!"}).then((function(e){if(e.isConfirmed)Me.a.fire("Switching to Azure","","success"),De=1,m();else{var n=Object.assign({},i);n.currentAPI=0,t({type:"CHANGE_API_STATUS",payload:n}),f()}}))}));var o=r.textSize+"vh",u=function(){var e="",t=a.useState([]),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useCallback)(function(){var t=Object(Re.a)(Ee.a.mark((function t(n,a,i,s){return Ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,o){var u=(new Date).getTime(),l=a.current.textLanguage,j=Ie.a.fromSubscription(i.current.azureKey,i.current.azureRegion);j.speechRecognitionLanguage=a.current.speechLanguage,j.addTargetLanguage(a.current.textLanguage),j.setProfanity(2);var d=ze.a.fromDefaultMicrophoneInput(),b=new we.a(j,d),O="";b.startContinuousRecognitionAsync(),b.recognizing=function(i,o){0==a.current.listening||1!=s.current.currentAPI?(b.stopContinuousRecognitionAsync(),t(n)):(e=O+o.result.translations.get(l),c([].concat(Object(Le.a)(r),[e])),n=e)},b.recognized=function(i,o){0==a.current.listening||1!=s.current.currentAPI?(b.stopContinuousRecognitionAsync(),t(n)):(O+=o.result.translations.get(l)+" ",e=O,c([].concat(Object(Le.a)(r),[e])),n=e)},b.sessionStopped=function(e,r){var c=(new Date).getTime()-u;0==a.current.listening||1!=s.current.currentAPI?t(n):c>1e3&&b.startContinuousRecognitionAsync()}})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),[c]);return Object(a.useMemo)((function(){return{azureTranscripts:r,azureListen:i}}),[r])}(),l=u.azureTranscripts,j=u.azureListen,d=function(){var e="",t="",n=a.useState([]),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useCallback)(function(){var n=Object(Re.a)(Ee.a.mark((function n(a,r,s){return Ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,o){var u=(new Date).getTime(),l=Be();l.onresult=function(o){if(0==r.current.listening||0!=s.current.currentAPI)l.stop(),n(a);else{var u=Array.from(o.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");u&&(e=t+u),i([].concat(Object(Le.a)(c),[e])),a=e}},l.onend=function(){var c=(new Date).getTime()-u;r.current.listening&&0===s.current.currentAPI?(t=e+" ",c>1e3&&l.start()):n(a)},l.start()})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),[i]);return Object(a.useMemo)((function(){return{transcripts:c,listen:o}}),[c])}(),b=d.transcripts,O=d.listen,p=a.useRef(n),h=a.useRef(c),x=a.useRef(i);p.current=n,h.current=c,x.current=i;var g,f=function(){var e=Object(Re.a)(Ee.a.mark((function e(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(He,p,x).then((function(e){p.current.listening&&0==x.current.currentAPI&&(He+=e,f())}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(Re.a)(Ee.a.mark((function e(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(He,p,h,x).then((function(e){p.current.listening&&1==x.current.currentAPI&&(He+=e,m())}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();g=0==De?b:l;var v=document.getElementById("captionsSpace");null!=v&&(v.scrollHeight-v.clientHeight<=v.scrollTop+1&&(v.scrollTop=v.scrollHeight-v.clientHeight));return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:g.map((function(e){return Object(w.jsx)("h3",{id:"captionsSpace",style:{position:"fixed",width:"90%",textAlign:"left",left:"0",fontSize:o,paddingLeft:"5%",paddingRight:"60%",overflowY:"scroll",height:"40%"},children:e})}))})})};function Ke(e){var t=Object(I.c)((function(e){return e}));console.log(t);Object(I.b)();return Object(w.jsxs)("div",{children:[Object(w.jsx)(_e,{isRecording:t}),Object(w.jsx)(Ve,{})]})}n(289);var We,Fe=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("header",{className:"App-header",children:Object(w.jsx)(Ke,{})})})};!function(e){e[e.BLACK=0]="BLACK",e[e.WHITE=1]="WHITE"}(We||(We={}));var Xe,Je,Ze={textSize:6,color:We.BLACK},Ye=function(e,t){localStorage.setItem(e,JSON.stringify(t))},qe=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):Ze};!function(e){e[e.WEBSPEECH=0]="WEBSPEECH",e[e.AZURE=1]="AZURE",e[e.STREAMTEXT=2]="STREAMTEXT"}(Xe||(Xe={})),function(e){e[e.AVAILABLE=0]="AVAILABLE",e[e.NULL=1]="NULL",e[e.UNAVAILABLE=2]="UNAVAILABLE",e[e.INPROGRESS=3]="INPROGRESS",e[e.ERROR=4]="ERROR"}(Je||(Je={}));var Qe={currentAPI:Xe.WEBSPEECH,webspeechStatus:Je.AVAILABLE,azureStatus:Je.NULL,streamtextStatus:Je.NULL},$e={azureKey:"NULL",azureRegion:"NULL"},et={key:"NULL"},tt=function(e,t){localStorage.setItem(e,JSON.stringify(t))},nt=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):"apiStatus"==e?Qe:"azureStatus"==e?$e:void 0},at={listening:!0,speechLanguage:"en-US",textLanguage:"en"};var rt=n(147),ct=Object(rt.a)({DisplayReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe("displayReducer"),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PICK_BLACK":return e.color=0,e.color;case"PICK_WHITE":return e.color=1,e.color;case"SET_TEXT":return Ye("displayReducer",t.payload),Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},APIStatusReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt("apiStatus"),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CURRENT_API":return Object(i.a)(Object(i.a)({},e),t.payload);case"CHANGE_API_STATUS":return 0!=t.payload.azureStatus&&t.payload.currentAPI===e.currentAPI||tt("apiStatus",t.payload),Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},AzureReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt("azureStatus"),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_AZURE_LOGIN":case"CHANGE_AZURE_STATUS":return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},StreamtextReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_RECORDING":return!e;default:return e}},ControlReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_RECORDING":return Object(i.a)(Object(i.a)({},e),t.payload);case"SET_SPEECH_LANGUAGE":case"SET_TEXT_LANGUAGE":return Object(i.a)(Object(i.a)({},e),{},{speechLanguage:t.payload});default:return e}}}),it=Object(rt.b)(ct),st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,392)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};c.a.render(Object(w.jsx)(I.a,{store:it,children:Object(w.jsx)(Fe,{})}),document.getElementById("root")),st()},83:function(e,t){},94:function(e,t){}},[[290,1,2]]]);
//# sourceMappingURL=main.adb57173.chunk.js.map