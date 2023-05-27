(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[489],{2489:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ae}});var r,o,a,i,s,u,l,c,d,f,p,h,m,v=t(3433),g=t(9439),x=t(1413),k=t(2791),w=t(9434),b=t(9953),C=function(e){return e.contacts.items},S=function(e){return e.contacts.isLoading},y=function(e){return e.filter},Z=t(7247),j=t(1286),O=t(4164),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},I=t(168),D=t(6088),E=t(9504),P=t.n(E),V=D.Z.div(r||(r=(0,I.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),F=D.Z.div(o||(o=(0,I.Z)(["\n  width: 300px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #f7f9d5;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n  position: relative;\n"]))),L=D.Z.div(a||(a=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 10px;\n"]))),A=(0,D.Z)(P())(i||(i=(0,I.Z)(["\n  height: 35px;\n  border-radius: 5px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),z=t(5985),N=t(3736),R=t(3329),_=document.querySelector("#modal-root"),T=function(e){var n=e.onClose,t=e.editID,r=(0,w.v9)(C),o=function(e,n){return e.filter((function(e){return n===e.id}))}(r,t),a=(0,k.useState)(o[0].name),i=(0,g.Z)(a,2),s=i[0],u=i[1],l=(0,k.useState)(o[0].number),c=(0,g.Z)(l,2),d=c[0],f=c[1],p=(0,w.I0)();(0,k.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]);var h=M(),m=M();return(0,O.createPortal)((0,R.jsx)(V,{onClick:function(e){e.currentTarget===e.target&&n()},children:(0,R.jsx)(F,{children:(0,R.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),r.find((function(e){return e.name===s}))?z.Am.error("".concat(s," is already in contacts")):(p((0,b.mP)({name:s,number:d,id:t})),n())},children:[(0,R.jsx)("h3",{children:"Edit menu"}),(0,R.jsxs)(L,{children:[(0,R.jsx)("label",{htmlFor:h,children:"Name"}),(0,R.jsx)(A,{id:h,type:"text",value:s,onChange:function(e){var n=e.target.value;return u(n)},name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,R.jsxs)(L,{children:[(0,R.jsx)("label",{htmlFor:m,children:"Number"}),(0,R.jsx)(A,{mask:"+99-99-99-99-999",id:m,type:"tel",value:d,onChange:function(e){var n=e.target.value;return f(n)},name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,R.jsx)(N.Z,{variant:"contained",type:"submit",children:"Edit contact"})]})})}),_)},B=(0,D.Z)(N.Z)(s||(s=(0,I.Z)(["\n  min-width: 50px;\n  height: 30px;\n  padding: 5px;\n  margin-left: 10px;\n  border: 1px solid blue;\n\n  border-radius: 5px;\n  /* background-color: #78c4c8; */\n"]))),q=D.Z.li(u||(u=(0,I.Z)(["\n  padding: 5px;\n  margin: 5px;\n\n  border: 1px solid blue;\n  box-shadow: blue;\n  border-radius: 10px;\n  @media screen and (min-width: 460px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  &:hover {\n    box-shadow: -1px 13px 5px -8px rgba(0, 0, 0, 0.23);\n  }\n"]))),U=D.Z.div(l||(l=(0,I.Z)(["\n  text-align: left;\n"]))),W=D.Z.div(c||(c=(0,I.Z)(["\n  @media screen and (min-width: 460px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),X=function(e){var n=e.name,t=e.id,r=e.number,o=e.email,a=(0,k.useState)(!1),i=(0,g.Z)(a,2),s=i[0],u=i[1],l=(0,w.I0)(),c=(0,w.v9)(S),d=function(){u((function(e){return!e}))};return(0,R.jsxs)(q,{children:[s&&(0,R.jsx)(T,{onClose:d,editID:t}),(0,R.jsxs)(U,{children:[n,": ",(0,R.jsx)("br",{}),r,o]}),(0,R.jsxs)(W,{children:[(0,R.jsx)(B,{onClick:d,disabled:c,startIcon:(0,R.jsx)(j.Z,{}),children:"Edit"}),(0,R.jsx)(B,{onClick:function(){l((0,b.GK)({name:n,id:t}))},disabled:c,startIcon:(0,R.jsx)(Z.Z,{}),children:"Delete"})]})]})},Y=function(e){var n=e.contacts;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("ul",{children:0!==n.length?n.map((function(e){return(0,R.jsx)(X,(0,x.Z)({},e),e.id)})):(0,R.jsx)("li",{children:"No contacts found"})})})},G=D.Z.div(d||(d=(0,I.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),H=D.Z.div(f||(f=(0,I.Z)(["\n  width: 300px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #f7f9d5;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n  position: relative;\n"]))),J=D.Z.div(p||(p=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 10px;\n"]))),K=(0,D.Z)(P())(h||(h=(0,I.Z)(["\n  height: 35px;\n  border-radius: 5px;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),$=document.querySelector("#modal-root"),Q=function(e){var n=e.onClose,t=(0,k.useState)(""),r=(0,g.Z)(t,2),o=r[0],a=r[1],i=(0,k.useState)(""),s=(0,g.Z)(i,2),u=s[0],l=s[1],c=(0,w.v9)(C),d=(0,w.I0)(),f=function(){a(""),l("")};(0,k.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]);var p=M(),h=M();return(0,O.createPortal)((0,R.jsx)(G,{onClick:function(e){e.currentTarget===e.target&&n()},children:(0,R.jsx)(H,{children:(0,R.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),c.find((function(e){return e.name===o}))?z.Am.error("".concat(o," is already in contacts")):(d((0,b.uK)({name:o,number:u})),f(),n())},children:[(0,R.jsxs)(J,{children:[(0,R.jsx)("label",{htmlFor:p,children:"Name"}),(0,R.jsx)(K,{id:p,type:"text",value:o,onChange:function(e){var n=e.target.value;return a(n)},name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,R.jsxs)(J,{children:[(0,R.jsx)("label",{htmlFor:h,children:"Number"}),(0,R.jsx)(K,{mask:"+99-99-99-99-999",id:h,type:"tel",value:u,onChange:function(e){var n=e.target.value;return l(n)},name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,R.jsx)(N.Z,{variant:"contained",type:"submit",children:"add contact"})]})})}),$)},ee=t(6895),ne=t(7870),te=(0,t(8789).ZP)(ne.Z)({" &.MuiFormControl-root":{marginLeft:"auto",marginRight:"15px"},"& .MuiOutlinedInput-input":{padding:"6px"}," #outlined-helperText-label":{top:"-9px"}}),re=function(){var e=(0,w.v9)(y),n=(0,w.I0)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(te,{id:"outlined-helperText",label:"Filter",placeholder:"Find contacts by name",value:e,onChange:function(e){return n((0,ee.W)(e.target.value))}})})},oe=D.Z.div(m||(m=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n"]))),ae=function(){var e=(0,k.useState)(!1),n=(0,g.Z)(e,2),t=n[0],r=n[1],o=(0,w.v9)(C),a=(0,w.v9)(y),i=(0,w.I0)();(0,k.useEffect)((function(){i((0,b.yF)())}),[i]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(oe,{children:[t&&(0,R.jsx)(Q,{onClose:function(){r((function(e){return!e}))}}),(0,R.jsxs)("p",{children:["Total number of contacts: ",o.length," "]}),(0,R.jsx)(re,{}),(0,R.jsx)(N.Z,{variant:"contained",onClick:function(){r((function(e){return!e}))},children:"add contact"})]}),(0,R.jsx)(Y,{contacts:function(){var e=a.toLowerCase();return(0,v.Z)(o).filter((function(n){return n.name.toLowerCase().includes(e)})).sort((function(e,n){return e.name.localeCompare(n.name)}))}()})]})}},7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),a=t(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},1286:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),a=t(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=i},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m},unsupportedProp:function(){return v},useControlled:function(){return g.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return k.Z},useIsFocusVisible:function(){return w.Z}});var r=t(5902),o=t(4036),a=t(8949).Z,i=t(9201),s=t(3199);var u=function(e,n){return function(){return null}},l=t(9103),c=t(8301),d=t(7602);t(1413);var f=function(e,n){return function(){return null}},p=t(2971).Z,h=t(162),m=t(6248).Z;var v=function(e,n,t,r,o){return null},g=t(8744),x=t(9683),k=t(2071),w=t(3031),b={configure:function(e){r.Z.configure(e)}}},9504:function(e,n,t){e.exports=t(269)},269:function(e,n,t){"use strict";var r,o=(r=t(2791))&&"object"==typeof r&&"default"in r?r.default:r,a=t(4164);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),r=0;r<t.length;r++){var o=t[r],a=Object.getOwnPropertyDescriptor(n,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}}(e.prototype.constructor=e,n)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,r,o,a,i,s){if(!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,a,i,s],c=0;(u=new Error(n.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}};function c(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",t-n),r.select()}}var d={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function f(e,n,t){var r="",o="",a=null,i=[];if(void 0===n&&(n="_"),null==t&&(t=d),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!t[e]?(i.push(r.length),r.length===i.length-1&&(o+=e)):a=r.length+1,r+=e,!1)})),{maskChar:n,formatChars:t,prefix:o,mask:r,lastEditablePosition:a,permanents:i}}function p(e,n){return-1!==e.permanents.indexOf(n)}function h(e,n,t){var r=e.mask,o=e.formatChars;if(!t)return!1;if(p(e,n))return r[n]===t;var a=o[r[n]];return new RegExp(a).test(t)}function m(e,n){return n.split("").every((function(n,t){return p(e,t)||!h(e,t,n)}))}function v(e,n){var t=e.maskChar,r=e.prefix;if(!t){for(;n.length>r.length&&p(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var o=r.length,a=n.length;a>=r.length;a--){var i=n[a];if(!p(e,a)&&h(e,a,i)){o=a+1;break}}return o}function g(e,n){return v(e,n)===e.mask.length}function x(e,n){var t=e.maskChar,r=e.mask,o=e.prefix;if(!t){for((n=k(e,"",n,0)).length<o.length&&(n=o);n.length<r.length&&p(e,n.length);)n+=r[n.length];return n}if(n)return k(e,x(e,""),n,0);for(var a=0;a<r.length;a++)p(e,a)?n+=r[a]:n+=t;return n}function k(e,n,t,r){var o=e.mask,a=e.maskChar,i=e.prefix,s=t.split(""),u=g(e,n);return!a&&r>n.length&&(n+=o.slice(n.length,r)),s.every((function(t){for(;c=t,p(e,l=r)&&c!==o[l];){if(r>=n.length&&(n+=o[r]),s=t,a&&p(e,r)&&s===a)return!0;if(++r>=o.length)return!1}var s,l,c;return!h(e,r,t)&&t!==a||(r<n.length?n=a||u||r<i.length?n.slice(0,r)+t+n.slice(r+1):(n=n.slice(0,r)+t+n.slice(r),x(e,n)):a||(n+=t),++r<o.length)})),n}function w(e,n){for(var t=e.mask,r=n;r<t.length;++r)if(!p(e,r))return r;return null}function b(e){return e||0===e?e+"":""}function C(e,n,t,r,o){var a=e.mask,i=e.prefix,s=e.lastEditablePosition,u=n,l="",c=0,d=0,f=Math.min(o.start,t.start);return t.end>o.start?d=(c=function(e,n,t,r){var o=e.mask,a=e.maskChar,i=t.split(""),s=r;return i.every((function(n){for(;i=n,p(e,t=r)&&i!==o[t];)if(++r>=o.length)return!1;var t,i;return(h(e,r,n)||n===a)&&r++,r<o.length})),r-s}(e,0,l=u.slice(o.start,t.end),f))?o.length:0:u.length<r.length&&(d=r.length-u.length),u=r,d&&(1!==d||o.length||(f=o.start===t.start?w(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!p(e,t))return t;return null}(e,t.start)),u=function(e,n,t,r){var o=t+r,a=e.maskChar,i=e.mask,s=e.prefix,u=n.split("");if(a)return u.map((function(n,r){return r<t||o<=r?n:p(e,r)?i[r]:a})).join("");for(var l=o;l<u.length;l++)p(e,l)&&(u[l]="");return t=Math.max(s.length,t),u.splice(t,o-t),n=u.join(""),x(e,n)}(e,u,f,d)),u=k(e,u,l,f),(f+=c)>=a.length?f=a.length:f<i.length&&!c?f=i.length:f>=i.length&&f<s&&c&&(f=w(e,f)),l||(l=null),{value:u=x(e,u),enteredString:l,selection:{start:f,end:f}}}function S(e){return"function"==typeof e}function y(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Z(e){return(y()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function j(e){(y()||clearTimeout)(e)}var O=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=Z(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(j(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=a.findDOMNode(u(u(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=v(t.maskOptions,t.value),n=w(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,r){void 0===r&&(r={});var o=t.getInputDOMNode(),a=t.isFocused();o&&a&&(r.deferred||c(o,e,n),null!==t.selectionDeferId&&j(t.selectionDeferId),t.selectionDeferId=Z((function(){t.selectionDeferId=null,c(o,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(n=-r.moveStart("character",-e.value.length),t=-r.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,r=e.maskChar,o=e.permanents,a=e.formatChars;return{mask:n,maskChar:r,permanents:o,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:a}},t.isInputAutofilled=function(e,n,r,o){var a=t.getInputDOMNode();try{if(a.matches(":-webkit-autofill"))return!0}catch(l){}return!t.focused||o.end<r.length&&n.end===e.length},t.onChange=function(e){var n=u(u(t)).beforePasteState,r=u(u(t)).previousSelection,o=t.props.beforeMaskedValueChange,a=t.getInputValue(),i=t.value,s=t.getSelection();t.isInputAutofilled(a,s,i,r)&&(i=x(t.maskOptions,""),r={start:0,end:0,length:0}),n&&(r=n.selection,i=n.value,s={start:r.start+a.length,end:r.start+a.length,length:0},a=i.slice(0,r.start)+a+i.slice(r.end),t.beforePasteState=null);var l=C(t.maskOptions,a,s,i,r),c=l.enteredString,d=l.selection,f=l.value;if(S(o)){var p=o({value:f,selection:d},{value:i,selection:r},c,t.getBeforeMaskedValueChangeConfig());f=p.value,d=p.selection}t.setInputValue(f),S(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(d.start,d.end,{deferred:!0}):t.setSelection(d.start,d.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions,o=r.mask,a=r.prefix;if(t.focused=!0,t.mounted=!0,o){if(t.value)v(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var i=x(t.maskOptions,a),s=x(t.maskOptions,i),u=v(t.maskOptions,s),l=w(t.maskOptions,u),c={start:l,end:l};if(S(n)){var d=n({value:s,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());s=d.value,c=d.selection}var f=s!==t.getInputValue();f&&t.setInputValue(s),f&&S(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}S(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,r&&!t.props.alwaysShowMask&&m(t.maskOptions,t.value)){var o="";S(n)&&(o=n({value:o,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var a=o!==t.getInputValue();a&&t.setInputValue(o),a&&S(t.props.onChange)&&t.props.onChange(e)}S(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var r=Math.abs(n.clientX-t.mouseDownX),o=Math.abs(n.clientY-t.mouseDownY),a=Math.max(r,o),i=(new Date).getTime()-t.mouseDownTime;(a<=10&&i<=200||a<=5&&i<=300)&&t.setCursorToEnd()}}))}S(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){S(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&S(t.props.inputRef)&&t.props.inputRef(e)};var r=n.mask,o=n.maskChar,i=n.formatChars,s=n.alwaysShowMask,l=n.beforeMaskedValueChange,d=n.defaultValue,p=n.value;t.maskOptions=f(r,o,i),null==d&&(d=""),null==p&&(p=d);var h=b(p);if(t.maskOptions.mask&&(s||h)&&(h=x(t.maskOptions,h),S(l))){var g=n.value;null==n.value&&(g=d),h=l({value:h,selection:null},{value:g=b(g),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=h,t}s(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,r=n.alwaysShowMask,o=n.mask,a=n.maskChar,i=n.formatChars,s=this.maskOptions,u=r||this.isFocused(),l=null!=this.props.value,c=l?b(this.props.value):this.value,d=e?e.start:null;if(this.maskOptions=f(o,a,i),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||l||(c=this.getInputValue()),(p||this.maskOptions.mask&&(c||u))&&(c=x(this.maskOptions,c)),p){var h=v(this.maskOptions,c);(null===d||h<d)&&(d=g(this.maskOptions,c)?h:w(this.maskOptions,h))}!this.maskOptions.mask||!m(this.maskOptions,c)||u||l&&this.props.value||(c="");var k={start:d,end:d};if(S(t)){var C=t({value:c,selection:k},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=C.value,k=C.selection}this.value=c;var y=this.getInputValue()!==this.value;y?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var Z=!1;null!=k.start&&null!=k.end&&(Z=!e||e.start!==k.start||e.end!==k.end),(Z||y)&&this.setSelection(k.start,k.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&j(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),r=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],0<=n.indexOf(t)||(o[t]=e[t]);return o}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){S(t)||l(!1);var a=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=i({},r);a.forEach((function(e){return delete s[e]})),e=t(s),a.filter((function(n){return null!=e.props[n]&&e.props[n]!==r[n]})).length&&l(!1)}else e=o.createElement("input",i({ref:this.handleRef},r));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=r.value&&(u.value=this.value)),e=o.cloneElement(e,u)},n}(o.Component);e.exports=O},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=489.fd4e249c.chunk.js.map