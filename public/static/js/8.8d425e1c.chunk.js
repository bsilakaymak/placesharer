(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{106:function(e,t,a){},121:function(e,t,a){"use strict";var n=a(2),r=a(75),o=a(0),c=(a(13),a(76)),i=a(93),l=a(87),s=a(84),d=a(77),u=a(82),p=a(177),m=a(79),f=o.forwardRef((function(e,t){var a=e.edge,i=void 0!==a&&a,l=e.children,s=e.classes,d=e.className,u=e.color,f=void 0===u?"default":u,b=e.disabled,h=void 0!==b&&b,v=e.disableFocusRipple,g=void 0!==v&&v,O=e.size,j=void 0===O?"medium":O,y=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(p.a,Object(n.a)({className:Object(c.a)(s.root,d,"default"!==f&&s["color".concat(Object(m.a)(f))],h&&s.disabled,"small"===j&&s["size".concat(Object(m.a)(j))],{start:s.edgeStart,end:s.edgeEnd}[i]),centerRipple:!0,focusRipple:!g,disabled:h,ref:t},y),o.createElement("span",{className:s.label},l))})),b=Object(d.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(u.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(f),h=o.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,u=e.checkedIcon,p=e.classes,m=e.className,f=e.defaultChecked,h=e.disabled,v=e.icon,g=e.id,O=e.inputProps,j=e.inputRef,y=e.name,k=e.onBlur,E=e.onChange,x=e.onFocus,C=e.readOnly,S=e.required,z=e.tabIndex,I=e.type,R=e.value,w=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(l.a)({controlled:d,default:Boolean(f),name:"SwitchBase"}),P=Object(i.a)(N,2),B=P[0],T=P[1],F=Object(s.a)(),A=h;F&&"undefined"===typeof A&&(A=F.disabled);var V="checkbox"===I||"radio"===I;return o.createElement(b,Object(n.a)({component:"span",className:Object(c.a)(p.root,m,B&&p.checked,A&&p.disabled),disabled:A,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){k&&k(e),F&&F.onBlur&&F.onBlur(e)},ref:t},w),o.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:f,className:p.input,disabled:A,id:V&&g,name:y,onChange:function(e){var t=e.target.checked;T(t),E&&E(e,t)},readOnly:C,ref:j,required:S,tabIndex:z,type:I,value:R},O)),B?u:v)})),v=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(h),g=a(80),O=Object(g.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(g.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),y=Object(g.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),k=o.createElement(j,null),E=o.createElement(O,null),x=o.createElement(y,null),C=o.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?k:a,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.icon,p=void 0===u?E:u,f=e.indeterminate,b=void 0!==f&&f,h=e.indeterminateIcon,g=void 0===h?x:h,O=e.inputProps,j=e.size,y=void 0===j?"medium":j,C=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(v,Object(n.a)({type:"checkbox",classes:{root:Object(c.a)(l.root,l["color".concat(Object(m.a)(d))],b&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":b},O),icon:o.cloneElement(b?g:p,{fontSize:"small"===y?"small":"default"}),checkedIcon:o.cloneElement(b?g:i,{fontSize:"small"===y?"small":"default"}),ref:t},C))}));t.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(C)},172:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(8),c=a(32),i=a(1),l=a(0),s=a.n(l),d=a(12),u=(a(106),a(30)),p=a(22),m=a(23),f=a(15),b=a(31),h=a(10),v=a(21),g=a(16),O=a(89),j=a(83),y=a(121);t.default=function(){var e=Object(l.useContext)(h.a),t=Object(f.a)(),a=t.isLoading,n=t.error,k=t.sendRequest,E=t.clearError,x=Object(b.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),C=Object(i.a)(x,2),S=C[0],z=C[1],I=Object(l.useState)([]),R=Object(i.a)(I,2),w=R[0],N=R[1],P=Object(d.g)(),B=function(e){var t=e.target.name,a=e.target.checked;N(a?function(e){return e.includes(t)?e:[].concat(Object(c.a)(e),[t])}:function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e})},T=function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,(n=new FormData).append("title",S.inputs.title.value),n.append("description",S.inputs.description.value),n.append("address",S.inputs.address.value),n.append("creator",e.userId),n.append("image",S.inputs.image.value),n.append("tags",w),t.next=11,k("".concat("https://murmuring-garden-01892.herokuapp.com/api","/places"),"POST",n,{Authorization:"Bearer "+e.token});case 11:P.push("/"),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}(),F=[];return j.a.map((function(e){var t=w.includes(e.name),a=s.a.createElement("span",{key:e.name},s.a.createElement("label",null,s.a.createElement(y.a,{name:e.name,checked:t,onChange:B,inputProps:{"aria-label":"primary checkbox"}}),e.title),s.a.createElement("span",null,"\xa0\xa0"));F.push(a)})),s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"fade-in"},s.a.createElement(v.a,{error:n,onClear:E}),a&&s.a.createElement(g.a,{asOverlay:!0}),s.a.createElement("form",{className:"place-form no-select",onSubmit:T},s.a.createElement(u.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(m.c)()],errorText:"Please enter a valid title",onInput:z}),s.a.createElement(O.a,{id:"image",onInput:z,errorText:"Please provide an image"}),s.a.createElement(u.a,{id:"description",element:"textarea",type:"text",label:"Description",validators:[Object(m.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:z}),s.a.createElement(u.a,{id:"address",element:"input",type:"text",label:"Address",validators:[Object(m.c)()],errorText:"Please enter a valid description address.",onInput:z}),F,s.a.createElement(p.a,{type:"submit",disabled:!S.isValid},"ADD PLACE"))))}},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(2),r=a(0),o=a(75),c=(a(13),a(76)),i=a(77),l=a(79),s=r.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,d=e.color,u=void 0===d?"inherit":d,p=e.component,m=void 0===p?"svg":p,f=e.fontSize,b=void 0===f?"default":f,h=e.htmlColor,v=e.titleAccess,g=e.viewBox,O=void 0===g?"0 0 24 24":g,j=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return r.createElement(m,Object(n.a)({className:Object(c.a)(i.root,s,"inherit"!==u&&i["color".concat(Object(l.a)(u))],"default"!==b&&i["fontSize".concat(Object(l.a)(b))]),focusable:"false",viewBox:O,color:h,"aria-hidden":v?void 0:"true",role:v?"img":void 0,ref:t},j),a,v?r.createElement("title",null,v):null)}));s.muiName="SvgIcon";var d=Object(i.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s);function u(e,t){var a=r.memo(r.forwardRef((function(t,a){return r.createElement(d,Object(n.a)({},t,{ref:a}),e)})));return a.muiName=d.muiName,a}},83:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={natural:"Natural",historical:"Historical",outdoor:"Outdoor",touristic:"Touristic"},r=[{name:"natural",title:"Natural"},{name:"historical",title:"Historical"},{name:"outdoor",title:"Outdoor"},{name:"touristic",title:"Touristic"}]},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a(88);function o(){return n.useContext(r.a)}},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=e.controlled,a=e.default,r=(e.name,n.useRef(void 0!==t).current),o=n.useState(a),c=o[0],i=o[1];return[r?t:c,n.useCallback((function(e){r||i(e)}),[])]}},88:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(0),r=n.createContext();function o(){return n.useContext(r)}t.a=r},89:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),c=(a(90),a(22));t.a=function(e){var t,a=e.id,i=e.center,l=e.onInput,s=e.errorText,d=Object(r.useState)(),u=Object(n.a)(d,2),p=u[0],m=u[1],f=Object(r.useState)(),b=Object(n.a)(f,2),h=b[0],v=b[1],g=Object(r.useState)(!1),O=Object(n.a)(g,2),j=O[0],y=O[1],k=Object(r.useRef)(),E=j;Object(r.useEffect)((function(){if(p){var e=new FileReader;e.onload=function(){v(e.result)},e.readAsDataURL(p)}}),[p]);return o.a.createElement("div",{className:"form-control"},o.a.createElement("input",{ref:k,id:a,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(e){e.target.files||1===e.target.files.length?(t=e.target.files[0],m(t),y(!0),E=!0):(y(!1),E=!1),l(a,t,E)}}),o.a.createElement("div",{className:"image-upload ".concat(i&&"center")},o.a.createElement("div",{className:"image-upload__preview"},h&&o.a.createElement("img",{src:h,alt:"Preview"})," ",!h&&o.a.createElement("p",null,"Please pick an image.")),o.a.createElement(c.a,{type:"button",onClick:function(){return k.current.click()}},"PICK IMAGE")),!j&&o.a.createElement("p",null,s))}},90:function(e,t,a){}}]);
//# sourceMappingURL=8.8d425e1c.chunk.js.map