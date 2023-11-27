"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[9700],{29700:function(e,i,r){r.d(i,{Z:function(){return R}});var t=r(1413),n=r(93433),o=r(17592),s=r(57829),a=r(42832),c=r(24193),l=r(80614),d=r(15150),p=r(52813),u=r(19860),h=r(48310),x=r(60194),f=r(83213),m=r(94044),g=r(74143),Z=r(96020),j=r(98315),v=r(46417);function y(e){var i=e.showList,r=void 0!==i&&i,n=e.files,o=e.onRemove,s=e.type,a=(0,u.Z)(),c=n.length>0,l=s;return(0,v.jsx)(h.Z,{disablePadding:!0,sx:(0,t.Z)((0,t.Z)({},c&&"STANDARD"!==l&&{my:3}),"STANDARD"===l&&{width:"calc(100% - 84px)"}),children:n.map((function(e,i){var t=(0,g.Z)(e,i),n=t.key,s=t.name,c=t.size,d=t.preview,p=t.type;return r?(0,v.jsxs)(x.ZP,{sx:{p:0,m:.5,width:"STANDARD"===l?64:80,height:"STANDARD"===l?64:80,borderRadius:1.25,position:"relative",display:"inline-flex",verticalAlign:"text-top",border:"solid 1px ".concat(a.palette.divider),overflow:"hidden"},children:[(null===p||void 0===p?void 0:p.includes("image"))&&(0,v.jsx)("img",{alt:"preview",src:d,style:{width:"100%"}}),!(null!==p&&void 0!==p&&p.includes("image"))&&(0,v.jsx)(Z.Z,{style:{width:"100%",fontSize:"1.5rem"}}),o&&(0,v.jsx)(m.Z,{size:"small",color:"error",shape:"rounded",onClick:function(){return o(e)},sx:{fontSize:"0.875rem",bgcolor:"background.paper",p:0,width:"auto",height:"auto",top:2,right:2,position:"absolute"},children:(0,v.jsx)(j.Z,{})})]},n):(0,v.jsxs)(x.ZP,{sx:{my:1,px:2,py:.75,borderRadius:.75,border:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[(0,v.jsx)(Z.Z,{style:{width:"30px",height:"30px",fontSize:"1.15rem",marginRight:4}}),(0,v.jsx)(f.Z,{primary:"string"===typeof e?e:s,secondary:"string"===typeof e?"":c,primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),o&&(0,v.jsx)(m.Z,{edge:"end",size:"small",onClick:function(){return o(e)},children:(0,v.jsx)(j.Z,{style:{fontSize:"1.15rem"}})})]},n)}))})}var D=(0,o.ZP)("div")((function(e){var i=e.theme;return{outline:"none",padding:i.spacing(5,1),borderRadius:i.shape.borderRadius,backgroundColor:i.palette.background.paper,border:"1px dashed ".concat(i.palette.secondary.main),"&:hover":{opacity:.72,cursor:"pointer"}}})),R=function(e){var i=e.error,r=e.showList,o=void 0!==r&&r,u=e.files,h=e.setFieldValue,x=e.sx,f=e.type,m=e.onUpload,g=(0,l.uI)({multiple:!0,onDrop:function(e){h("files",u?[].concat((0,n.Z)(u),(0,n.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))):e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),Z=g.getRootProps,j=g.getInputProps,R=g.isDragActive,b=g.isDragReject,w=g.fileRejections,A=function(){h("files",null)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(s.Z,{sx:(0,t.Z)((0,t.Z)({width:"100%"},"STANDARD"===f&&{width:"auto",display:"flex"}),x),children:[(0,v.jsxs)(a.Z,(0,t.Z)((0,t.Z)({},"STANDARD"===f&&{alignItems:"center"}),{},{children:[(0,v.jsxs)(D,(0,t.Z)((0,t.Z)({},Z()),{},{sx:(0,t.Z)((0,t.Z)((0,t.Z)({},"STANDARD"===f&&{p:0,m:1,width:64,height:64}),R&&{opacity:.72}),(b||i)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[(0,v.jsx)("input",(0,t.Z)({},j())),(0,v.jsx)(p.Z,{type:f})]})),"STANDARD"===f&&u&&u.length>1&&(0,v.jsx)(c.Z,{variant:"contained",color:"error",size:"extraSmall",onClick:A,children:"Remove all"})]})),w.length>0&&(0,v.jsx)(d.Z,{fileRejections:w}),u&&u.length>0&&(0,v.jsx)(y,{files:u,showList:o,onRemove:function(e){var i=u&&u.filter((function(i){return i!==e}));h("files",i)},type:f})]}),"STANDARD"!==f&&u&&u.length>0&&(0,v.jsxs)(a.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,sx:{mt:1.5},children:[(0,v.jsx)(c.Z,{color:"inherit",size:"small",onClick:A,children:"Remove all"}),(0,v.jsx)(c.Z,{size:"small",variant:"contained",onClick:m,children:"Upload files"})]})]})}},52813:function(e,i,r){r.d(i,{Z:function(){return l}});var t=r(10392),n=r(42832),o=r(16957),s=r(61113);r(47313);var a=r.p+"static/media/upload.3ed2ccee1f91d502b9a91137a23c265d.svg",c=r(46417);function l(e){var i=e.type;return(0,c.jsxs)(c.Fragment,{children:["STANDARD"!==i&&(0,c.jsxs)(n.Z,{spacing:2,alignItems:"center",justifyContent:"center",direction:{xs:"column",md:"row"},sx:{width:1,textAlign:{xs:"center",md:"left"}},children:[(0,c.jsx)(o.Z,{component:"img",image:a,sx:{width:150}}),(0,c.jsxs)(n.Z,{sx:{p:3},spacing:1,children:[(0,c.jsx)(s.Z,{variant:"h5",children:"Drag & Drop or Select file"}),(0,c.jsxs)(s.Z,{color:"secondary",children:["Drop files here or click\xa0",(0,c.jsx)(s.Z,{component:"span",color:"primary",sx:{textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]})]}),"STANDARD"===i&&(0,c.jsx)(n.Z,{alignItems:"center",justifyContent:"center",sx:{height:1},children:(0,c.jsx)(t.Z,{style:{fontSize:"32px"}})})]})}},15150:function(e,i,r){r.d(i,{Z:function(){return l}});var t=r(17551),n=r(70501),o=r(57829),s=r(61113),a=r(74143),c=r(46417);function l(e){var i=e.fileRejections;return(0,c.jsx)(n.Z,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return(0,t.Fq)(e.palette.error.main,.08)}},children:i.map((function(e){var i=e.file,r=e.errors,t=(0,a.Z)(i),n=t.path,l=t.size;return(0,c.jsxs)(o.Z,{sx:{my:1},children:[(0,c.jsxs)(s.Z,{variant:"subtitle2",noWrap:!0,children:[n," - ",l||""]}),r.map((function(e){return(0,c.jsx)(o.Z,{component:"li",sx:{typography:"caption"},children:e.message},e.code)}))]},n)}))})}},74143:function(e,i,r){function t(e,i){return"string"===typeof e?{key:i?"".concat(e,"-").concat(i):e,preview:e}:{key:i?"".concat(e.name,"-").concat(i):e.name,name:e.name,size:e.size,path:e.path,type:e.type,preview:e.preview,lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate}}r.d(i,{Z:function(){return t}})}}]);