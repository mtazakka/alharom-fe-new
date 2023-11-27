"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[8069],{22889:function(e,n,r){var t=r(47313);n.Z=function(){var e=(0,t.useRef)(!0);return(0,t.useEffect)((function(){return function(){e.current=!1}}),[]),e}},98069:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t=r(2135),i=r(9019),s=r(42832),a=r(61113),l=r(54285),o=r(54796),c=r(74165),d=r(15861),u=r(29439),m=r(47313),h=r(58467),x=r(15103),p=r(49914),Z=r(15480),f=r(41727),g=r(1550),j=r(57829),v=r(90891),L=r(24193),b=r(21933),y=r(35604),w=r(94044),P=r(51404),C=r(22889),k=r(22150),B=r(18530),S=r(2419),H=r(31741),z=r(44874),E=r(46417),M=function(){var e=(0,l.Z)().register,n=(0,C.Z)(),r=(0,h.s0)(),o=(0,m.useState)(),M=(0,u.Z)(o,2),_=M[0],q=M[1],R=(0,m.useState)(!1),W=(0,u.Z)(R,2),A=W[0],F=W[1],I=function(){F(!A)},N=function(e){e.preventDefault()},D=function(e){var n=(0,S.X)(e);q((0,S.V)(n))};return(0,m.useEffect)((function(){D("")}),[]),(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(y.J9,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:b.Ry().shape({firstname:b.Z_().max(255).required("First Name is required"),lastname:b.Z_().max(255).required("Last Name is required"),email:b.Z_().email("Must be a valid email").max(255).required("Email is required"),password:b.Z_().max(255).required("Password is required")}),onSubmit:function(){var t=(0,d.Z)((0,c.Z)().mark((function t(i,s){var a,l,o;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.setErrors,l=s.setStatus,o=s.setSubmitting,t.prev=1,t.next=4,e(i.email,i.password,i.firstname,i.lastname);case 4:n.current&&(l({success:!0}),o(!1),(0,k.WI)((0,B.ss)({open:!0,message:"Your registration has been successfully completed.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){r("/login",{replace:!0})}),1500)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0),n.current&&(l({success:!1}),a({submit:t.t0.message}),o(!1));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,l=e.handleChange,o=e.handleSubmit,c=e.isSubmitting,d=e.touched,u=e.values;return(0,E.jsx)("form",{noValidate:!0,onSubmit:o,children:(0,E.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,E.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(s.Z,{spacing:1,children:[(0,E.jsx)(x.Z,{htmlFor:"firstname-signup",children:"First Name*"}),(0,E.jsx)(p.Z,{id:"firstname-login",type:"firstname",value:u.firstname,name:"firstname",onBlur:r,onChange:l,placeholder:"John",fullWidth:!0,error:Boolean(d.firstname&&n.firstname)}),d.firstname&&n.firstname&&(0,E.jsx)(Z.Z,{error:!0,id:"helper-text-firstname-signup",children:n.firstname})]})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(s.Z,{spacing:1,children:[(0,E.jsx)(x.Z,{htmlFor:"lastname-signup",children:"Last Name*"}),(0,E.jsx)(p.Z,{fullWidth:!0,error:Boolean(d.lastname&&n.lastname),id:"lastname-signup",type:"lastname",value:u.lastname,name:"lastname",onBlur:r,onChange:l,placeholder:"Doe",inputProps:{}}),d.lastname&&n.lastname&&(0,E.jsx)(Z.Z,{error:!0,id:"helper-text-lastname-signup",children:n.lastname})]})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsxs)(s.Z,{spacing:1,children:[(0,E.jsx)(x.Z,{htmlFor:"company-signup",children:"Company"}),(0,E.jsx)(p.Z,{fullWidth:!0,error:Boolean(d.company&&n.company),id:"company-signup",value:u.company,name:"company",onBlur:r,onChange:l,placeholder:"Demo Inc.",inputProps:{}}),d.company&&n.company&&(0,E.jsx)(Z.Z,{error:!0,id:"helper-text-company-signup",children:n.company})]})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsxs)(s.Z,{spacing:1,children:[(0,E.jsx)(x.Z,{htmlFor:"email-signup",children:"Email Address*"}),(0,E.jsx)(p.Z,{fullWidth:!0,error:Boolean(d.email&&n.email),id:"email-login",type:"email",value:u.email,name:"email",onBlur:r,onChange:l,placeholder:"demo@company.com",inputProps:{}}),d.email&&n.email&&(0,E.jsx)(Z.Z,{error:!0,id:"helper-text-email-signup",children:n.email})]})}),(0,E.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,E.jsxs)(s.Z,{spacing:1,children:[(0,E.jsx)(x.Z,{htmlFor:"password-signup",children:"Password"}),(0,E.jsx)(p.Z,{fullWidth:!0,error:Boolean(d.password&&n.password),id:"password-signup",type:A?"text":"password",value:u.password,name:"password",onBlur:r,onChange:function(e){l(e),D(e.target.value)},endAdornment:(0,E.jsx)(f.Z,{position:"end",children:(0,E.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:I,onMouseDown:N,edge:"end",color:"secondary",children:A?(0,E.jsx)(H.Z,{}):(0,E.jsx)(z.Z,{})})}),placeholder:"******",inputProps:{}}),d.password&&n.password&&(0,E.jsx)(Z.Z,{error:!0,id:"helper-text-password-signup",children:n.password})]}),(0,E.jsx)(g.Z,{fullWidth:!0,sx:{mt:2},children:(0,E.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,E.jsx)(i.ZP,{item:!0,children:(0,E.jsx)(j.Z,{sx:{bgcolor:null===_||void 0===_?void 0:_.color,width:85,height:8,borderRadius:"7px"}})}),(0,E.jsx)(i.ZP,{item:!0,children:(0,E.jsx)(a.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===_||void 0===_?void 0:_.label})})]})})]}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsxs)(a.Z,{variant:"body2",children:["By Signing up, you agree to our \xa0",(0,E.jsx)(v.Z,{variant:"subtitle2",component:t.rU,to:"#",children:"Terms of Service"}),"\xa0 and \xa0",(0,E.jsx)(v.Z,{variant:"subtitle2",component:t.rU,to:"#",children:"Privacy Policy"})]})}),n.submit&&(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(Z.Z,{error:!0,children:n.submit})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(P.Z,{children:(0,E.jsx)(L.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})}})})},_=function(){var e=(0,l.Z)().isLoggedIn;return(0,E.jsx)(o.Z,{children:(0,E.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,E.jsx)(a.Z,{variant:"h3",children:"Sign up"}),(0,E.jsx)(a.Z,{component:t.rU,to:e?"/auth/login":"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),(0,E.jsx)(i.ZP,{item:!0,xs:12,children:(0,E.jsx)(M,{})})]})})}},54796:function(e,n,r){r.d(n,{Z:function(){return L}});var t=r(57829),i=r(9019),s=r(24813),a=r(47825),l=r(42832),o=r(61113),c=r(90891),d=r(46417),u=function(){var e=(0,s.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(a.Z,{maxWidth:"xl",children:(0,d.jsxs)(l.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(o.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(o.Z,{component:c.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(l.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(o.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(o.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(o.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},m=r(79876),h=r(1413),x=r(45987),p=r(19860),Z=r(15914),f=["children"],g=function(e){var n=e.children,r=(0,x.Z)(e,f),i=(0,p.Z)();return(0,d.jsx)(Z.Z,(0,h.Z)((0,h.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:i.customShadows.z1,children:(0,d.jsx)(t.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},j=r(36287),v=function(){var e=(0,p.Z)();return(0,d.jsx)(t.Z,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0,transform:e.direction===j.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsxs)("svg",{width:"100%",height:"calc(100vh - 175px)",viewBox:"0 0 405 809",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",fill:e.palette.primary.light}),(0,d.jsx)("path",{d:"M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",fill:e.palette.success.light,opacity:"0.6"}),(0,d.jsx)("path",{d:"M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",fill:e.palette.error.lighter,opacity:e.palette.mode===j.hY.DARK?"0.9":"1"})]})})},L=function(e){var n=e.children;return(0,d.jsxs)(t.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(v,{}),(0,d.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(m.Z,{})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(i.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(g,{children:n})})})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(u,{})})]})]})}},2419:function(e,n,r){r.d(n,{V:function(){return t},X:function(){return i}});var t=function(e){return e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"}},i=function(e){var n=0;return e.length>5&&(n+=1),e.length>7&&(n+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(n+=1),n}},44874:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(1413),i=r(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},a=r(20262),l=function(e,n){return i.createElement(a.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:s}))};l.displayName="EyeInvisibleOutlined";var o=i.forwardRef(l)},31741:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(1413),i=r(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},a=r(20262),l=function(e,n){return i.createElement(a.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:s}))};l.displayName="EyeOutlined";var o=i.forwardRef(l)}}]);