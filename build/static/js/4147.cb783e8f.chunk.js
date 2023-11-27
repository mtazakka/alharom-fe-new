"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[4147],{42420:function(e,o,t){t.d(o,{Z:function(){return Z}});var r=t(4942),n=t(63366),a=t(87462),i=t(47313),c=t(83061),s=t(21921),l=t(38743),d=t(91615),u=t(77342),p=t(77430),h=t(32298);function v(e){return(0,h.Z)("MuiFab",e)}var m=(0,p.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),f=t(17592),b=t(46417),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],w=(0,f.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,f.FO)(e)||"classes"===e},overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["size".concat((0,d.Z)(t.size))],"inherit"===t.color&&o.colorInherit,o[(0,d.Z)(t.size)],o[t.color]]}})((function(e){var o,t,n=e.theme,i=e.ownerState;return(0,a.Z)({},n.typography.button,(0,r.Z)({minHeight:36,transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(n.vars||n).zIndex.fab,boxShadow:(n.vars||n).shadows[6],"&:active":{boxShadow:(n.vars||n).shadows[12]},color:n.vars?n.vars.palette.text.primary:null==(o=(t=n.palette).getContrastText)?void 0:o.call(t,n.palette.grey[300]),backgroundColor:(n.vars||n).palette.grey[300],"&:hover":{backgroundColor:(n.vars||n).palette.grey.A100,"@media (hover: none)":{backgroundColor:(n.vars||n).palette.grey[300]},textDecoration:"none"}},"&.".concat(m.focusVisible),{boxShadow:(n.vars||n).shadows[6]}),"small"===i.size&&{width:40,height:40},"medium"===i.size&&{width:48,height:48},"extended"===i.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===i.variant&&"small"===i.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===i.variant&&"medium"===i.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===i.color&&{color:"inherit"})}),(function(e){var o=e.theme,t=e.ownerState;return(0,a.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(o.vars||o).palette[t.color]&&{color:(o.vars||o).palette[t.color].contrastText,backgroundColor:(o.vars||o).palette[t.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[t.color].main}}})}),(function(e){var o=e.theme;return(0,r.Z)({},"&.".concat(m.disabled),{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})})),Z=i.forwardRef((function(e,o){var t=(0,u.Z)({props:e,name:"MuiFab"}),r=t.children,i=t.className,l=t.color,p=void 0===l?"default":l,h=t.component,m=void 0===h?"button":h,f=t.disabled,Z=void 0!==f&&f,x=t.disableFocusRipple,k=void 0!==x&&x,S=t.focusVisibleClassName,y=t.size,C=void 0===y?"large":y,z=t.variant,R=void 0===z?"circular":z,D=(0,n.Z)(t,g),M=(0,a.Z)({},t,{color:p,component:m,disabled:Z,disableFocusRipple:k,size:C,variant:R}),F=function(e){var o=e.color,t=e.variant,r=e.classes,n=e.size,i={root:["root",t,"size".concat((0,d.Z)(n)),"inherit"===o?"colorInherit":o]},c=(0,s.Z)(i,v,r);return(0,a.Z)({},r,c)}(M);return(0,b.jsx)(w,(0,a.Z)({className:(0,c.default)(F.root,i),component:m,disabled:Z,focusRipple:!k,focusVisibleClassName:(0,c.default)(F.focusVisible,S),ownerState:M,ref:o},D,{classes:F,children:r}))}))},60876:function(e,o,t){t.d(o,{Z:function(){return P}});var r=t(29439),n=t(4942),a=t(63366),i=t(87462),c=t(47313),s=(t(96214),t(83061)),l=t(21921),d=t(17592),u=t(77342),p=t(19860),h=t(57632),v=t(42420),m=t(91615),f=t(27816),b=t(86983),g=t(53800),w=t(77430),Z=t(32298);function x(e){return(0,Z.Z)("MuiSpeedDial",e)}var k=(0,w.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),S=t(46417),y=["ref"],C=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],z=["ref"];function R(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}var D=(0,d.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["direction".concat((0,m.Z)(t.direction))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,i.Z)({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===t.direction&&(0,n.Z)({flexDirection:"column-reverse"},"& .".concat(k.actions),{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}),"down"===t.direction&&(0,n.Z)({flexDirection:"column"},"& .".concat(k.actions),{flexDirection:"column",marginTop:-32,paddingTop:48}),"left"===t.direction&&(0,n.Z)({flexDirection:"row-reverse"},"& .".concat(k.actions),{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}),"right"===t.direction&&(0,n.Z)({flexDirection:"row"},"& .".concat(k.actions),{flexDirection:"row",marginLeft:-32,paddingLeft:48}))})),M=(0,d.ZP)(v.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:function(e,o){return o.fab}})((function(){return{pointerEvents:"auto"}})),F=(0,d.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:function(e,o){var t=e.ownerState;return[o.actions,!t.open&&o.actionsClosed]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"flex",pointerEvents:"auto"},!o.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),P=c.forwardRef((function(e,o){var t=(0,u.Z)({props:e,name:"MuiSpeedDial"}),n=(0,p.Z)(),d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},v=t.ariaLabel,w=t.FabProps,Z=(void 0===w?{}:w).ref,k=t.children,P=t.className,T=t.direction,E=void 0===T?"up":T,N=t.hidden,B=void 0!==N&&N,I=t.icon,L=t.onBlur,j=t.onClose,O=t.onFocus,V=t.onKeyDown,A=t.onMouseEnter,_=t.onMouseLeave,K=t.onOpen,W=t.open,q=t.TransitionComponent,H=void 0===q?h.Z:q,X=t.transitionDuration,U=void 0===X?d:X,$=t.TransitionProps,G=(0,a.Z)(t.FabProps,y),J=(0,a.Z)(t,C),Q=(0,g.Z)({controlled:W,default:!1,name:"SpeedDial",state:"open"}),Y=(0,r.Z)(Q,2),ee=Y[0],oe=Y[1],te=(0,i.Z)({},t,{open:ee,direction:E}),re=function(e){var o=e.classes,t=e.open,r=e.direction,n={root:["root","direction".concat((0,m.Z)(r))],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return(0,l.Z)(n,x,o)}(te),ne=c.useRef();c.useEffect((function(){return function(){clearTimeout(ne.current)}}),[]);var ae=c.useRef(0),ie=c.useRef(),ce=c.useRef([]);ce.current=[ce.current[0]];var se=c.useCallback((function(e){ce.current[0]=e}),[]),le=(0,b.Z)(Z,se),de=function(e,o){return function(t){ce.current[e+1]=t,o&&o(t)}};c.useEffect((function(){ee||(ae.current=0,ie.current=void 0)}),[ee]);var ue=function(e){"mouseleave"===e.type&&_&&_(e),"blur"===e.type&&L&&L(e),clearTimeout(ne.current),"blur"===e.type?ne.current=setTimeout((function(){oe(!1),j&&j(e,"blur")})):(oe(!1),j&&j(e,"mouseLeave"))},pe=function(e){"mouseenter"===e.type&&A&&A(e),"focus"===e.type&&O&&O(e),clearTimeout(ne.current),ee||(ne.current=setTimeout((function(){if(oe(!0),K){K(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},he=v.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ve=c.Children.toArray(k).filter((function(e){return c.isValidElement(e)})),me=ve.map((function(e,o){var t=e.props,r=t.FabProps,n=(void 0===r?{}:r).ref,s=t.tooltipPlacement,l=(0,a.Z)(t.FabProps,z),d=s||("vertical"===R(E)?"left":"top");return c.cloneElement(e,{FabProps:(0,i.Z)({},l,{ref:de(o,n)}),delay:30*(ee?o:ve.length-o),open:ee,tooltipPlacement:d,id:"".concat(he,"-action-").concat(o)})}));return(0,S.jsxs)(D,(0,i.Z)({className:(0,s.default)(re.root,P),ref:o,role:"presentation",onKeyDown:function(e){V&&V(e);var o,t,r,n=e.key.replace("Arrow","").toLowerCase(),a=ie.current,i=void 0===a?n:a;if("Escape"===e.key)return oe(!1),ce.current[0].focus(),void(j&&j(e,"escapeKeyDown"));if(R(n)===R(i)&&void 0!==R(n)){e.preventDefault();var c=n===i?1:-1,s=(o=ae.current+c,t=0,r=ce.current.length-1,o<t?t:o>r?r:o);ce.current[s].focus(),ae.current=s,ie.current=i}},onBlur:ue,onFocus:pe,onMouseEnter:pe,onMouseLeave:ue,ownerState:te},J,{children:[(0,S.jsx)(H,(0,i.Z)({in:!B,timeout:U,unmountOnExit:!0},$,{children:(0,S.jsx)(M,(0,i.Z)({color:"primary","aria-label":v,"aria-haspopup":"true","aria-expanded":ee,"aria-controls":"".concat(he,"-actions")},G,{onClick:function(e){G.onClick&&G.onClick(e),clearTimeout(ne.current),ee?(oe(!1),j&&j(e,"toggle")):(oe(!0),K&&K(e,"toggle"))},className:(0,s.default)(re.fab,G.className),ref:le,ownerState:te,children:c.isValidElement(I)&&(0,f.Z)(I,["SpeedDialIcon"])?c.cloneElement(I,{open:ee}):I}))})),(0,S.jsx)(F,{id:"".concat(he,"-actions"),role:"menu","aria-orientation":R(E),className:(0,s.default)(re.actions,!ee&&re.actionsClosed),ownerState:te,children:me})]}))}))},70024:function(e,o,t){t.d(o,{Z:function(){return y}});var r=t(4942),n=t(63366),a=t(87462),i=t(47313),c=t(83061),s=t(21921),l=t(17551),d=t(91615),u=t(97423),p=t(77342),h=t(17592),v=t(77430),m=t(32298);function f(e){return(0,m.Z)("MuiSwitch",e)}var b=(0,v.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),g=t(46417),w=["className","color","edge","size","sx"],Z=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,t.edge&&o["edge".concat((0,d.Z)(t.edge))],o["size".concat((0,d.Z)(t.size))]]}})((function(e){var o,t=e.ownerState;return(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===t.edge&&{marginLeft:-8},"end"===t.edge&&{marginRight:-8},"small"===t.size&&(o={width:40,height:24,padding:7},(0,r.Z)(o,"& .".concat(b.thumb),{width:16,height:16}),(0,r.Z)(o,"& .".concat(b.switchBase),(0,r.Z)({padding:4},"&.".concat(b.checked),{transform:"translateX(16px)"})),o))})),x=(0,h.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,o){var t=e.ownerState;return[o.switchBase,(0,r.Z)({},"& .".concat(b.input),o.input),"default"!==t.color&&o["color".concat((0,d.Z)(t.color))]]}})((function(e){var o,t=e.theme;return o={position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:"".concat("light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]),transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest})},(0,r.Z)(o,"&.".concat(b.checked),{transform:"translateX(20px)"}),(0,r.Z)(o,"&.".concat(b.disabled),{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:"".concat("light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600])}),(0,r.Z)(o,"&.".concat(b.checked," + .").concat(b.track),{opacity:.5}),(0,r.Z)(o,"&.".concat(b.disabled," + .").concat(b.track),{opacity:t.vars?t.vars.opacity.switchTrackDisabled:"".concat("light"===t.palette.mode?.12:.2)}),(0,r.Z)(o,"& .".concat(b.input),{left:"-100%",width:"300%"}),o}),(function(e){var o,t=e.theme,n=e.ownerState;return(0,a.Z)({"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(o={},(0,r.Z)(o,"&.".concat(b.checked),(0,r.Z)({color:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(b.disabled),{color:t.vars?t.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,l.$n)(t.palette[n.color].main,.62):(0,l._j)(t.palette[n.color].main,.55))})),(0,r.Z)(o,"&.".concat(b.checked," + .").concat(b.track),{backgroundColor:(t.vars||t).palette[n.color].main}),o))})),k=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,o){return o.track}})((function(e){var o=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:"".concat("light"===o.palette.mode?o.palette.common.black:o.palette.common.white),opacity:o.vars?o.vars.opacity.switchTrack:"".concat("light"===o.palette.mode?.38:.3)}})),S=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,o){return o.thumb}})((function(e){var o=e.theme;return{boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),y=i.forwardRef((function(e,o){var t=(0,p.Z)({props:e,name:"MuiSwitch"}),r=t.className,i=t.color,l=void 0===i?"primary":i,u=t.edge,h=void 0!==u&&u,v=t.size,m=void 0===v?"medium":v,b=t.sx,y=(0,n.Z)(t,w),C=(0,a.Z)({},t,{color:l,edge:h,size:m}),z=function(e){var o=e.classes,t=e.edge,r=e.size,n=e.color,i=e.checked,c=e.disabled,l={root:["root",t&&"edge".concat((0,d.Z)(t)),"size".concat((0,d.Z)(r))],switchBase:["switchBase","color".concat((0,d.Z)(n)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(l,f,o);return(0,a.Z)({},o,u)}(C),R=(0,g.jsx)(S,{className:z.thumb,ownerState:C});return(0,g.jsxs)(Z,{className:(0,c.default)(z.root,r),sx:b,ownerState:C,children:[(0,g.jsx)(x,(0,a.Z)({type:"checkbox",icon:R,checkedIcon:R,ref:o,ownerState:C},y,{classes:(0,a.Z)({},z,{root:z.switchBase})})),(0,g.jsx)(k,{className:z.track,ownerState:C})]})}))}}]);