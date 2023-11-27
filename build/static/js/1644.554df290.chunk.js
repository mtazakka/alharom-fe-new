"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[1644],{78490:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(63366),o=r(87462),n=r(47313),i=r(83061),l=r(21921),c=r(23054),s=r(70984),d=r(77342),v=r(17592),p=r(77430),u=r(32298);function m(e){return(0,u.Z)("MuiStep",e)}(0,p.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);var f=r(46417),b=["active","children","className","component","completed","disabled","expanded","index","last"],Z=(0,v.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})})),x=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStep"}),v=r.active,p=r.children,u=r.className,x=r.component,h=void 0===x?"div":x,S=r.completed,L=r.disabled,C=r.expanded,w=void 0!==C&&C,y=r.index,g=r.last,M=(0,a.Z)(r,b),N=n.useContext(c.Z),R=N.activeStep,j=N.connector,P=N.alternativeLabel,z=N.orientation,I=N.nonLinear,k=void 0!==v&&v,T=void 0!==S&&S,W=void 0!==L&&L;R===y?k=void 0===v||v:!I&&R>y?T=void 0===S||S:!I&&R<y&&(W=void 0===L||L);var A=n.useMemo((function(){return{index:y,last:g,expanded:w,icon:y+1,active:k,completed:T,disabled:W}}),[y,g,w,k,T,W]),_=(0,o.Z)({},r,{active:k,orientation:z,alternativeLabel:P,completed:T,disabled:W,expanded:w,component:h}),D=function(e){var t=e.classes,r={root:["root",e.orientation,e.alternativeLabel&&"alternativeLabel",e.completed&&"completed"]};return(0,l.Z)(r,m,t)}(_),F=(0,f.jsxs)(Z,(0,o.Z)({as:h,className:(0,i.default)(D.root,u),ref:t,ownerState:_},M,{children:[j&&P&&0!==y?j:null,p]}));return(0,f.jsx)(s.Z.Provider,{value:A,children:j&&!P&&0!==y?(0,f.jsxs)(n.Fragment,{children:[j,F]}):F})}))},70984:function(e,t,r){var a=r(47313).createContext({});t.Z=a},80315:function(e,t,r){r.d(t,{Z:function(){return W}});var a=r(4942),o=r(63366),n=r(87462),i=r(47313),l=r(83061),c=r(21921),s=r(17592),d=r(77342),v=r(54750),p=r(46417),u=(0,v.Z)((0,p.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,v.Z)((0,p.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),f=r(90210),b=r(77430),Z=r(32298);function x(e){return(0,Z.Z)("MuiStepIcon",e)}var h,S=(0,b.Z)("MuiStepIcon",["root","active","completed","error","text"]),L=["active","className","completed","error","icon"],C=(0,s.ZP)(f.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme;return t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest}),color:(r.vars||r).palette.text.disabled},(0,a.Z)(t,"&.".concat(S.completed),{color:(r.vars||r).palette.primary.main}),(0,a.Z)(t,"&.".concat(S.active),{color:(r.vars||r).palette.primary.main}),(0,a.Z)(t,"&.".concat(S.error),{color:(r.vars||r).palette.error.main}),t})),w=(0,s.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:function(e,t){return t.text}})((function(e){var t=e.theme;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),y=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepIcon"}),a=r.active,i=void 0!==a&&a,s=r.className,v=r.completed,f=void 0!==v&&v,b=r.error,Z=void 0!==b&&b,S=r.icon,y=(0,o.Z)(r,L),g=(0,n.Z)({},r,{active:i,completed:f,error:Z}),M=function(e){var t=e.classes,r={root:["root",e.active&&"active",e.completed&&"completed",e.error&&"error"],text:["text"]};return(0,c.Z)(r,x,t)}(g);if("number"===typeof S||"string"===typeof S){var N=(0,l.default)(s,M.root);return Z?(0,p.jsx)(C,(0,n.Z)({as:m,className:N,ref:t,ownerState:g},y)):f?(0,p.jsx)(C,(0,n.Z)({as:u,className:N,ref:t,ownerState:g},y)):(0,p.jsxs)(C,(0,n.Z)({className:N,ref:t,ownerState:g},y,{children:[h||(h=(0,p.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,p.jsx)(w,{className:M.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:g,children:S})]}))}return S})),g=r(23054),M=r(70984);function N(e){return(0,Z.Z)("MuiStepLabel",e)}var R=(0,b.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),j=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],P=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation]]}})((function(e){var t,r=e.ownerState;return(0,n.Z)((t={display:"flex",alignItems:"center"},(0,a.Z)(t,"&.".concat(R.alternativeLabel),{flexDirection:"column"}),(0,a.Z)(t,"&.".concat(R.disabled),{cursor:"default"}),t),"vertical"===r.orientation&&{textAlign:"left",padding:"8px 0"})})),z=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t,r=e.theme;return(0,n.Z)({},r.typography.body2,(t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest})},(0,a.Z)(t,"&.".concat(R.active),{color:(r.vars||r).palette.text.primary,fontWeight:500}),(0,a.Z)(t,"&.".concat(R.completed),{color:(r.vars||r).palette.text.primary,fontWeight:500}),(0,a.Z)(t,"&.".concat(R.alternativeLabel),{marginTop:16}),(0,a.Z)(t,"&.".concat(R.error),{color:(r.vars||r).palette.error.main}),t))})),I=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:function(e,t){return t.iconContainer}})((function(){return(0,a.Z)({flexShrink:0,display:"flex",paddingRight:8},"&.".concat(R.alternativeLabel),{paddingRight:0})})),k=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:function(e,t){return t.labelContainer}})((function(e){var t=e.theme;return(0,a.Z)({width:"100%",color:(t.vars||t).palette.text.secondary},"&.".concat(R.alternativeLabel),{textAlign:"center"})})),T=i.forwardRef((function(e,t){var r,a=(0,d.Z)({props:e,name:"MuiStepLabel"}),s=a.children,v=a.className,u=a.componentsProps,m=void 0===u?{}:u,f=a.error,b=void 0!==f&&f,Z=a.icon,x=a.optional,h=a.slotProps,S=void 0===h?{}:h,L=a.StepIconComponent,C=a.StepIconProps,w=(0,o.Z)(a,j),R=i.useContext(g.Z),T=R.alternativeLabel,W=R.orientation,A=i.useContext(M.Z),_=A.active,D=A.disabled,F=A.completed,B=A.icon,H=Z||B,E=L;H&&!E&&(E=y);var V=(0,n.Z)({},a,{active:_,alternativeLabel:T,completed:F,disabled:D,error:b,orientation:W}),q=function(e){var t=e.classes,r=e.orientation,a=e.active,o=e.completed,n=e.error,i=e.disabled,l=e.alternativeLabel,s={root:["root",r,n&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",a&&"active",o&&"completed",n&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",a&&"active",o&&"completed",n&&"error",i&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]};return(0,c.Z)(s,N,t)}(V),G=null!=(r=S.label)?r:m.label;return(0,p.jsxs)(P,(0,n.Z)({className:(0,l.default)(q.root,v),ref:t,ownerState:V},w,{children:[H||E?(0,p.jsx)(I,{className:q.iconContainer,ownerState:V,children:(0,p.jsx)(E,(0,n.Z)({completed:F,active:_,error:b,icon:H},C))}):null,(0,p.jsxs)(k,{className:q.labelContainer,ownerState:V,children:[s?(0,p.jsx)(z,(0,n.Z)({ownerState:V},G,{className:(0,l.default)(q.label,null==G?void 0:G.className),children:s})):null,x]})]}))}));T.muiName="StepLabel";var W=T},21917:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(63366),o=r(87462),n=r(47313),i=r(83061),l=r(21921),c=r(77342),s=r(17592),d=r(77430),v=r(32298);function p(e){return(0,v.Z)("MuiStepper",e)}(0,d.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);var u=r(91615),m=r(23054),f=r(70984);function b(e){return(0,v.Z)("MuiStepConnector",e)}(0,d.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);var Z=r(46417),x=["className"],h=(0,s.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),S=(0,s.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var r=e.ownerState;return[t.line,t["line".concat((0,u.Z)(r.orientation))]]}})((function(e){var t=e.ownerState,r=e.theme,a="light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600];return(0,o.Z)({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:a},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),L=n.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiStepConnector"}),s=r.className,d=(0,a.Z)(r,x),v=n.useContext(m.Z),p=v.alternativeLabel,L=v.orientation,C=void 0===L?"horizontal":L,w=n.useContext(f.Z),y=w.active,g=w.disabled,M=w.completed,N=(0,o.Z)({},r,{alternativeLabel:p,orientation:C,active:y,completed:M,disabled:g}),R=function(e){var t=e.classes,r=e.orientation,a={root:["root",r,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,u.Z)(r))]};return(0,l.Z)(a,b,t)}(N);return(0,Z.jsx)(h,(0,o.Z)({className:(0,i.default)(R.root,s),ref:t,ownerState:N},d,{children:(0,Z.jsx)(S,{className:R.line,ownerState:N})}))})),C=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],w=(0,s.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),y=(0,Z.jsx)(L,{}),g=n.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiStepper"}),s=r.activeStep,d=void 0===s?0:s,v=r.alternativeLabel,u=void 0!==v&&v,f=r.children,b=r.className,x=r.component,h=void 0===x?"div":x,S=r.connector,L=void 0===S?y:S,g=r.nonLinear,M=void 0!==g&&g,N=r.orientation,R=void 0===N?"horizontal":N,j=(0,a.Z)(r,C),P=(0,o.Z)({},r,{alternativeLabel:u,orientation:R,component:h}),z=function(e){var t=e.orientation,r=e.alternativeLabel,a=e.classes,o={root:["root",t,r&&"alternativeLabel"]};return(0,l.Z)(o,p,a)}(P),I=n.Children.toArray(f).filter(Boolean),k=I.map((function(e,t){return n.cloneElement(e,(0,o.Z)({index:t,last:t+1===I.length},e.props))})),T=n.useMemo((function(){return{activeStep:d,alternativeLabel:u,connector:L,nonLinear:M,orientation:R}}),[d,u,L,M,R]);return(0,Z.jsx)(m.Z.Provider,{value:T,children:(0,Z.jsx)(w,(0,o.Z)({as:h,ownerState:P,className:(0,i.default)(z.root,b),ref:t},j,{children:k}))})}))},23054:function(e,t,r){var a=r(47313).createContext({});t.Z=a}}]);