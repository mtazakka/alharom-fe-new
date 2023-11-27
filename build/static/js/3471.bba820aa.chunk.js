"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[3471],{13471:function(e,n,s){s.r(n);var r=s(74165),t=s(15861),i=s(29439),a=s(47313),o=s(9019),c=s(42832),d=s(15103),l=s(49914),u=s(41727),p=s(15480),h=s(57829),m=s(61113),Z=s(48310),x=s(60194),f=s(74748),w=s(83213),v=s(24193),j=s(15914),g=s(94044),b=s(22150),P=s(18530),y=s(21733),E=s(21933),C=s(35604),z=s(31741),S=s(44874),A=s(43681),L=s(9751),M=s(46417);n.default=function(){var e=(0,a.useState)(!1),n=(0,i.Z)(e,2),s=n[0],R=n[1],N=(0,a.useState)(!1),k=(0,i.Z)(N,2),O=k[0],q=k[1],_=(0,a.useState)(!1),B=(0,i.Z)(_,2),F=B[0],I=B[1],$=function(){R(!s)},D=function(){q(!O)},H=function(){I(!F)},Q=function(e){e.preventDefault()};return(0,M.jsx)(j.Z,{title:"Change Password",children:(0,M.jsx)(C.J9,{initialValues:{old:"",password:"",confirm:"",submit:null},validationSchema:E.Ry().shape({old:E.Z_().required("Old Password is required"),password:E.Z_().required("New Password is required").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters, one uppercase, one number and one special case character"),confirm:E.Z_().required("Confirm Password is required").test("confirm","Passwords don't match.",(function(e,n){return n.parent.password===e}))}),onSubmit:function(){var e=(0,t.Z)((0,r.Z)().mark((function e(n,s){var t,i,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s.resetForm,i=s.setErrors,a=s.setStatus,o=s.setSubmitting;try{(0,b.WI)((0,P.ss)({open:!0,message:"Password changed successfully.",variant:"alert",alert:{color:"success"},close:!1})),t(),a({success:!1}),o(!1)}catch(n){a({success:!1}),i({submit:n.message}),o(!1)}case 2:case"end":return e.stop()}}),e)})));return function(n,s){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,t=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,j=e.touched,b=e.values;return(0,M.jsx)("form",{noValidate:!0,onSubmit:i,children:(0,M.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,M.jsxs)(o.ZP,{item:!0,container:!0,spacing:3,xs:12,sm:6,children:[(0,M.jsx)(o.ZP,{item:!0,xs:12,children:(0,M.jsxs)(c.Z,{spacing:1.25,children:[(0,M.jsx)(d.Z,{htmlFor:"password-old",children:"Old Password"}),(0,M.jsx)(l.Z,{placeholder:"Enter Old Password",id:"password-old",type:s?"text":"password",value:b.old,name:"old",onBlur:r,onChange:t,endAdornment:(0,M.jsx)(u.Z,{position:"end",children:(0,M.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:$,onMouseDown:Q,edge:"end",size:"large",color:"secondary",children:s?(0,M.jsx)(z.Z,{}):(0,M.jsx)(S.Z,{})})}),inputProps:{}}),j.old&&n.old&&(0,M.jsx)(p.Z,{error:!0,id:"password-old-helper",children:n.old})]})}),(0,M.jsx)(o.ZP,{item:!0,xs:12,children:(0,M.jsxs)(c.Z,{spacing:1.25,children:[(0,M.jsx)(d.Z,{htmlFor:"password-password",children:"New Password"}),(0,M.jsx)(l.Z,{placeholder:"Enter New Password",id:"password-password",type:O?"text":"password",value:b.password,name:"password",onBlur:r,onChange:t,endAdornment:(0,M.jsx)(u.Z,{position:"end",children:(0,M.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:Q,edge:"end",size:"large",color:"secondary",children:O?(0,M.jsx)(z.Z,{}):(0,M.jsx)(S.Z,{})})}),inputProps:{}}),j.password&&n.password&&(0,M.jsx)(p.Z,{error:!0,id:"password-password-helper",children:n.password})]})}),(0,M.jsx)(o.ZP,{item:!0,xs:12,children:(0,M.jsxs)(c.Z,{spacing:1.25,children:[(0,M.jsx)(d.Z,{htmlFor:"password-confirm",children:"Confirm Password"}),(0,M.jsx)(l.Z,{placeholder:"Enter Confirm Password",id:"password-confirm",type:F?"text":"password",value:b.confirm,name:"confirm",onBlur:r,onChange:t,endAdornment:(0,M.jsx)(u.Z,{position:"end",children:(0,M.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:Q,edge:"end",size:"large",color:"secondary",children:F?(0,M.jsx)(z.Z,{}):(0,M.jsx)(S.Z,{})})}),inputProps:{}}),j.confirm&&n.confirm&&(0,M.jsx)(p.Z,{error:!0,id:"password-confirm-helper",children:n.confirm})]})})]}),(0,M.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,M.jsxs)(h.Z,{sx:{p:{xs:0,sm:2,md:4,lg:5}},children:[(0,M.jsx)(m.Z,{variant:"h5",children:"New password must contain:"}),(0,M.jsxs)(Z.Z,{sx:{p:0,mt:1},children:[(0,M.jsxs)(x.ZP,{divider:!0,children:[(0,M.jsx)(f.Z,{sx:{color:(0,y.Ei)(b.password)?"success.main":"inherit"},children:(0,y.Ei)(b.password)?(0,M.jsx)(A.Z,{}):(0,M.jsx)(L.Z,{})}),(0,M.jsx)(w.Z,{primary:"At least 8 characters"})]}),(0,M.jsxs)(x.ZP,{divider:!0,children:[(0,M.jsx)(f.Z,{sx:{color:(0,y.Fh)(b.password)?"success.main":"inherit"},children:(0,y.Fh)(b.password)?(0,M.jsx)(A.Z,{}):(0,M.jsx)(L.Z,{})}),(0,M.jsx)(w.Z,{primary:"At least 1 lower letter (a-z)"})]}),(0,M.jsxs)(x.ZP,{divider:!0,children:[(0,M.jsx)(f.Z,{sx:{color:(0,y.bO)(b.password)?"success.main":"inherit"},children:(0,y.bO)(b.password)?(0,M.jsx)(A.Z,{}):(0,M.jsx)(L.Z,{})}),(0,M.jsx)(w.Z,{primary:"At least 1 uppercase letter (A-Z)"})]}),(0,M.jsxs)(x.ZP,{divider:!0,children:[(0,M.jsx)(f.Z,{sx:{color:(0,y.hj)(b.password)?"success.main":"inherit"},children:(0,y.hj)(b.password)?(0,M.jsx)(A.Z,{}):(0,M.jsx)(L.Z,{})}),(0,M.jsx)(w.Z,{primary:"At least 1 number (0-9)"})]}),(0,M.jsxs)(x.ZP,{children:[(0,M.jsx)(f.Z,{sx:{color:(0,y.ws)(b.password)?"success.main":"inherit"},children:(0,y.ws)(b.password)?(0,M.jsx)(A.Z,{}):(0,M.jsx)(L.Z,{})}),(0,M.jsx)(w.Z,{primary:"At least 1 special characters"})]})]})]})}),(0,M.jsx)(o.ZP,{item:!0,xs:12,children:(0,M.jsxs)(c.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,children:[(0,M.jsx)(v.Z,{variant:"outlined",color:"secondary",children:"Cancel"}),(0,M.jsx)(v.Z,{disabled:a||0!==Object.keys(n).length,type:"submit",variant:"contained",children:"Save"})]})})]})})}})})}},21733:function(e,n,s){function r(e){return new RegExp("^(?=.*[0-9]).+$").test(e)}function t(e){return new RegExp("^(?=.*[a-z]).+$").test(e)}function i(e){return new RegExp("^(?=.*[A-Z]).+$").test(e)}function a(e){return new RegExp("^(?=.*[-+_!@#$%^&*.,?]).+$").test(e)}function o(e){return e.length>7}s.d(n,{Ei:function(){return o},Fh:function(){return t},bO:function(){return i},hj:function(){return r},ws:function(){return a}})},43681:function(e,n,s){s.d(n,{Z:function(){return c}});var r=s(1413),t=s(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},a=s(20262),o=function(e,n){return t.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="CheckOutlined";var c=t.forwardRef(o)},44874:function(e,n,s){s.d(n,{Z:function(){return c}});var r=s(1413),t=s(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},a=s(20262),o=function(e,n){return t.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="EyeInvisibleOutlined";var c=t.forwardRef(o)},31741:function(e,n,s){s.d(n,{Z:function(){return c}});var r=s(1413),t=s(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},a=s(20262),o=function(e,n){return t.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="EyeOutlined";var c=t.forwardRef(o)},9751:function(e,n,s){s.d(n,{Z:function(){return c}});var r=s(1413),t=s(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"line",theme:"outlined"},a=s(20262),o=function(e,n){return t.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="LineOutlined";var c=t.forwardRef(o)},41727:function(e,n,s){s.d(n,{Z:function(){return P}});var r=s(4942),t=s(63366),i=s(87462),a=s(47313),o=s(83061),c=s(21921),d=s(91615),l=s(61113),u=s(91397),p=s(99008),h=s(17592),m=s(77430),Z=s(32298);function x(e){return(0,Z.Z)("MuiInputAdornment",e)}var f,w=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),v=s(77342),j=s(46417),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var s=e.ownerState;return[n.root,n["position".concat((0,d.Z)(s.position))],!0===s.disablePointerEvents&&n.disablePointerEvents,n[s.variant]]}})((function(e){var n=e.theme,s=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===s.variant&&(0,r.Z)({},"&.".concat(w.positionStart,"&:not(.").concat(w.hiddenLabel,")"),{marginTop:16}),"start"===s.position&&{marginRight:8},"end"===s.position&&{marginLeft:8},!0===s.disablePointerEvents&&{pointerEvents:"none"})})),P=a.forwardRef((function(e,n){var s=(0,v.Z)({props:e,name:"MuiInputAdornment"}),r=s.children,h=s.className,m=s.component,Z=void 0===m?"div":m,w=s.disablePointerEvents,P=void 0!==w&&w,y=s.disableTypography,E=void 0!==y&&y,C=s.position,z=s.variant,S=(0,t.Z)(s,g),A=(0,p.Z)()||{},L=z;z&&A.variant,A&&!L&&(L=A.variant);var M=(0,i.Z)({},s,{hiddenLabel:A.hiddenLabel,size:A.size,disablePointerEvents:P,position:C,variant:L}),R=function(e){var n=e.classes,s=e.disablePointerEvents,r=e.hiddenLabel,t=e.position,i=e.size,a=e.variant,o={root:["root",s&&"disablePointerEvents",t&&"position".concat((0,d.Z)(t)),a,r&&"hiddenLabel",i&&"size".concat((0,d.Z)(i))]};return(0,c.Z)(o,x,n)}(M);return(0,j.jsx)(u.Z.Provider,{value:null,children:(0,j.jsx)(b,(0,i.Z)({as:Z,ownerState:M,className:(0,o.default)(R.root,h),ref:n},S,{children:"string"!==typeof r||E?(0,j.jsxs)(a.Fragment,{children:["start"===C?f||(f=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,j.jsx)(l.Z,{color:"text.secondary",children:r})}))})}))}}]);