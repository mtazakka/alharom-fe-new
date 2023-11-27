"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[6280,1950],{34255:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(1413),a=r(45987),i=r(57829),s=r(79176),o=r(61113),l=r(46417),c=["value"];function u(e){var t=e.value,r=(0,a.Z)(e,c);return(0,l.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,l.jsx)(s.Z,(0,n.Z)({variant:"determinate",value:t},r))}),(0,l.jsx)(i.Z,{sx:{minWidth:35},children:(0,l.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(t),"%")})})]})}},73842:function(e,t,r){var n=(0,r(17592).ZP)("div")({width:"100%",overflowX:"auto",display:"block"});t.Z=n},7519:function(e,t,r){r.d(t,{IY:function(){return E},RL:function(){return O},Ty:function(){return X},XC:function(){return _},YQ:function(){return B},ZZ:function(){return U},bG:function(){return V},c:function(){return L},hF:function(){return W},o1:function(){return J},vI:function(){return Y}});var n=r(45987),a=r(29439),i=r(1413),s=r(47313),o=r(19860),l=r(17592),c=r(42832),u=r(57829),d=r(9019),m=r(61113),f=r(1550),p=r(88797),g=r(51405),h=r(24631),Z=r(74312),x=r(44758),v=r(66212),y=r(24076),j=r(70941),b=r(49914),w=r(83213),N=r(49709),S=r(36287),C=r(53245),P=r(91687),H=r(73989),D=r(79117),R=r(46817),k=r(10054),z=r(40737),M=r(87538),F=r(43681),T=r(6986),I=r(46417),A=["indeterminate"],O=function(e){var t=e.column,r=e.sort,n=(0,o.Z)();return(0,I.jsxs)(c.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsx)(u.Z,{sx:{width:"max-content"},children:t.render("Header")}),!t.disableSortBy&&(0,I.jsxs)(c.Z,(0,i.Z)((0,i.Z)({sx:{color:"secondary.light"}},r&&(0,i.Z)({},t.getHeaderProps(t.getSortByToggleProps()))),{},{children:[(0,I.jsx)(k.Z,{style:{fontSize:"0.625rem",color:t.isSorted&&!t.isSortedDesc?n.palette.text.secondary:"inherit"}}),(0,I.jsx)(z.Z,{style:{fontSize:"0.625rem",marginTop:-2,color:t.isSortedDesc?n.palette.text.secondary:"inherit"}})]}))]})},V=function(e){var t=e.gotoPage,r=e.rows,n=e.setPageSize,i=e.pageSize,o=e.pageIndex,l=(0,s.useState)(!1),u=(0,a.Z)(l,2),x=u[0],v=u[1];return(0,I.jsxs)(d.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",sx:{width:"auto"},children:[(0,I.jsx)(d.ZP,{item:!0,children:(0,I.jsxs)(c.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsxs)(c.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Row per page"}),(0,I.jsx)(f.Z,{sx:{m:1},children:(0,I.jsxs)(p.Z,{id:"demo-controlled-open-select",open:x,onClose:function(){v(!1)},onOpen:function(){v(!0)},value:i,onChange:function(e){n(+e.target.value)},size:"small",sx:{"& .MuiSelect-select":{py:.75,px:1.25}},children:[(0,I.jsx)(g.Z,{value:5,children:"5"}),(0,I.jsx)(g.Z,{value:10,children:"10"}),(0,I.jsx)(g.Z,{value:25,children:"25"}),(0,I.jsx)(g.Z,{value:50,children:"50"}),(0,I.jsx)(g.Z,{value:100,children:"100"})]})})]}),(0,I.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Go to"}),(0,I.jsx)(h.Z,{size:"small",type:"number",value:o+1,onChange:function(e){var r=e.target.value?Number(e.target.value):0;t(r-1)},sx:{"& .MuiOutlinedInput-input":{py:.75,px:1.25,width:36}}})]})}),(0,I.jsx)(d.ZP,{item:!0,sx:{mt:{xs:2,sm:0}},children:(0,I.jsx)(Z.Z,{count:Math.ceil(r.length/i),page:o+1,onChange:function(e,r){t(r-1)},color:"primary",variant:"combined",showFirstButton:!0,showLastButton:!0})})]})},B=(0,s.forwardRef)((function(e,t){var r=e.indeterminate,a=(0,n.Z)(e,A),o=(0,s.useRef)(),l=t||o;return(0,I.jsx)(x.Z,(0,i.Z)({indeterminate:r,ref:l},a))})),L=function(e){var t=e.selected;return(0,I.jsx)(I.Fragment,{children:t>0&&(0,I.jsx)(v.Z,{size:"small",label:"".concat(t," row(s) selected"),color:"secondary",variant:"light",sx:{position:"absolute",right:-1,top:-1,borderRadius:"0 4px 0 4px"}})})},E=function(e){var t=e.children,r=e.column,n=e.index,l=e.reorder,c=(0,o.Z)(),d=(0,s.useRef)(),m=r.id,f=r.Header,p="column",g=(0,H.L)({accept:p,drop:function(e){l(e,n)},collect:function(e){return{isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})}}}),h=(0,a.Z)(g,2),Z=h[0].isOverCurrent,x=h[1],v=(0,D.c)({type:p,item:function(){return{id:m,index:n,header:f}},collect:function(e){return{isDragging:e.isDragging()}}}),y=(0,a.Z)(v,3),j=y[0].isDragging,b=y[1],w=y[2];(0,s.useEffect)((function(){w((0,P.r)(),{captureDraggingState:!0})}),[w]),b(x(d));var N=c.palette.text.primary;return Z&&(N=c.palette.primary.main),(0,I.jsx)(u.Z,(0,i.Z)((0,i.Z)({sx:{cursor:"move",opacity:j?.5:1,color:N},ref:d},j),{},{children:t}))},G=(0,l.ZP)("div")((function(e){var t=e.theme,r=e.x,n=e.y;return{color:t.palette.text.secondary,position:"fixed",pointerEvents:"none",left:12,top:24,transform:"translate(".concat(r,"px, ").concat(n,"px)"),opacity:.6}})),Y=function(){var e=(0,o.Z)(),t=(0,R.f)((function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),r=t.isDragging,n=t.item,a=t.currentOffset||{},i=a.x,s=a.y;return r?(0,I.jsx)(G,{theme:e,x:i,y:s,children:n.header&&(0,I.jsxs)(c.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,I.jsx)(M.Z,{style:{fontSize:"1rem"}}),(0,I.jsx)(m.Z,{children:n.header})]})}):null},_=function(e){var t=e.index,r=e.moveRow,n=e.children,i=(0,s.useRef)(null),o=(0,s.useRef)(null),l=(0,H.L)({accept:"row",hover:function(e,n){if(i.current){var a=e.index,s=t;if(a!==s){var o=i.current.getBoundingClientRect(),l=(o.bottom-o.top)/2,c=n.getClientOffset().y-o.top;a<s&&c<l||a>s&&c>l||(r(a,s),e.index=s)}}}}),c=(0,a.Z)(l,2)[1],u=(0,D.c)({type:"row",item:{index:t},collect:function(e){return{isDragging:e.isDragging()}}}),d=(0,a.Z)(u,3),m=d[0].isDragging,f=d[1],p=m?0:1;return(0,d[2])(c(i)),f(o),(0,I.jsxs)(y.Z,{ref:i,style:{opacity:p,backgroundColor:m?"red":"inherit"},children:[(0,I.jsx)(j.Z,{ref:o,sx:{cursor:"pointer",textAlign:"center"},children:(0,I.jsx)(M.Z,{})}),n]})},K={PaperProps:{style:{maxHeight:224,width:200}}},W=function(e){var t=e.hiddenColumns,r=e.setHiddenColumns,n=e.allColumns,a=(0,o.Z)(),i=n.filter((function(e){return!t.includes(e.id)})).length;return(0,I.jsx)(f.Z,{sx:{width:200},children:(0,I.jsx)(p.Z,{id:"column-hiding",multiple:!0,displayEmpty:!0,value:t,onChange:function(e){var t=e.target.value;r("string"===typeof t?t.split(","):t)},input:(0,I.jsx)(b.Z,{id:"select-column-hiding",placeholder:"select column"}),renderValue:function(e){return 0===e.length||e.length>0&&e.length===n.length?(0,I.jsx)(m.Z,{variant:"subtitle1",children:"All columns visible"}):(0,I.jsxs)(m.Z,{variant:"subtitle1",children:[i," column(s) visible"]})},MenuProps:K,size:"small",children:n.map((function(e){var r="#"===e.id||!(t.indexOf(e.id)>-1);return(0,I.jsxs)(g.Z,{value:e.id,sx:{bgcolor:"success.lighter","&.Mui-selected":{bgcolor:"background.paper"}},children:[(0,I.jsx)(x.Z,{checked:r,color:"success",checkedIcon:(0,I.jsx)(u.Z,{className:"icon",sx:{width:16,height:16,border:"1px solid",borderColor:"inherit",borderRadius:.25,position:"relative",backgroundColor:a.palette.success.main},children:(0,I.jsx)(F.Z,{className:"filled",style:{position:"absolute",color:a.palette.common.white}})})}),(0,I.jsx)(w.Z,{primary:"string"===typeof e.Header?e.Header:null===e||void 0===e?void 0:e.title})]},e.id)}))})})},X=function(e){var t=e.sortBy,r=e.setSortBy,n=e.allColumns,i=(0,s.useState)(t),o=(0,a.Z)(i,2),l=o[0],c=o[1];return(0,I.jsx)(f.Z,{sx:{width:200},children:(0,I.jsx)(p.Z,{id:"column-hiding",displayEmpty:!0,value:l,onChange:function(e){var t=e.target.value;c(t),r([{id:t,desc:!1}])},input:(0,I.jsx)(b.Z,{id:"select-column-hiding",placeholder:"Sort by"}),renderValue:function(e){var t=n.filter((function(t){return t.id===e}))[0];return e?(0,I.jsxs)(m.Z,{variant:"subtitle2",children:["Sort by (","string"===typeof t.Header?t.Header:null===t||void 0===t?void 0:t.title,")"]}):(0,I.jsx)(m.Z,{variant:"subtitle1",children:"Sort By"})},size:"small",children:n.filter((function(e){return e.canSort})).map((function(e){return(0,I.jsx)(g.Z,{value:e.id,children:(0,I.jsx)(w.Z,{primary:"string"===typeof e.Header?e.Header:null===e||void 0===e?void 0:e.title})},e.id)}))})})},U=function(e){var t=e.data,r=e.filename,n=e.headers;return(0,I.jsx)(C.CSVLink,{data:t,filename:r,headers:n,children:(0,I.jsx)(N.Z,{title:"CSV Export",children:(0,I.jsx)(T.Z,{style:{fontSize:"24px",color:"gray",marginTop:4,marginRight:4,marginLeft:4}})})})},q=(0,l.ZP)(c.Z)((function(e){var t=e.theme;return{height:"400px","& .ant-empty-img-1":{fill:t.palette.mode===S.hY.DARK?t.palette.secondary[200]:t.palette.secondary[400]},"& .ant-empty-img-2":{fill:t.palette.secondary.light},"& .ant-empty-img-3":{fill:t.palette.mode===S.hY.DARK?t.palette.secondary.A200:t.palette.secondary[200]},"& .ant-empty-img-4":{fill:t.palette.mode===S.hY.DARK?t.palette.secondary.A300:t.palette.secondary.A100},"& .ant-empty-img-5":{fillOpacity:t.palette.mode===S.hY.DARK?"0.09":"0.95",fill:t.palette.mode===S.hY.DARK?t.palette.secondary.darker:t.palette.secondary.light}}})),J=function(e){var t=e.msg,r=e.colSpan;return(0,I.jsx)(y.Z,{children:(0,I.jsx)(j.Z,{colSpan:r,children:(0,I.jsxs)(q,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,I.jsx)("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:(0,I.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,I.jsxs)("g",{transform:"translate(24 31.67)",children:[(0,I.jsx)("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),(0,I.jsx)("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),(0,I.jsx)("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),(0,I.jsx)("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),(0,I.jsx)("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),(0,I.jsxs)("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[(0,I.jsx)("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),(0,I.jsx)("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),(0,I.jsx)(m.Z,{align:"center",color:"secondary",children:t})]})})})}},58597:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(1413),a=r(2690),i=function(e){var t,r,n=(0,a.Z)(e);switch(n.number.status(0,2)){case 2:t="Complicated";break;case 1:t="Relationship";break;default:t="Single"}switch(n.number.status(0,7)){case 7:r="Refunded";break;case 6:r="Completed";break;case 5:r="Delivered";break;case 4:r="Dispatched";break;case 3:r="Cancelled";break;case 2:r="Shipped";break;case 1:r="Processing";break;default:r="Pending"}return{id:e,firstName:n.name.first,lastName:n.name.last,email:n.email,age:n.number.age,role:n.role,visits:n.number.amount,progress:n.number.percentage,status:t,orderStatus:r,contact:n.contact,country:n.address.country,address:n.address.full,fatherName:n.name.full,about:n.text.sentence,avatar:n.number.status(1,10),skills:n.skill,time:n.time}};function s(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=t[r];return(0,a.w)(s).map((function(a,s){return(0,n.Z)((0,n.Z)({},i(s+1)),{},{subRows:t[r+1]?e(r+1):void 0})}))}()}},6280:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(47313),a=r(9019),i=r(1413),s=r(66835),o=r(23477),l=r(24076),c=r(70941),u=r(57861),d=r(66212),m=r(42832),f=r(45110),p=r(15914),g=r(73842),h=r(34255),Z=r(7519),x=r(46417);function v(e){var t=e.columns,r=e.data,a=e.striped,d=(0,f.useTable)({columns:t,data:r}),m=d.getTableProps,p=d.getTableBodyProps,g=d.headerGroups,h=d.rows,Z=d.prepareRow;return(0,x.jsxs)(s.Z,(0,i.Z)((0,i.Z)({},m()),{},{children:[(0,x.jsx)(o.Z,{children:g.map((function(e,t){return(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,t){return(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e.getHeaderProps([{className:e.className}])),{},{children:e.render("Header")}),t)}))}),t)}))}),(0,x.jsx)(u.Z,(0,i.Z)((0,i.Z)((0,i.Z)({},p()),a&&{className:"striped"}),{},{children:h.map((function(e,t){return Z(e),(0,n.createElement)(l.Z,(0,i.Z)((0,i.Z)({},e.getRowProps()),{},{key:t}),e.cells.map((function(e,t){return(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}),t)})))}))}))]}))}var y=function(e){switch(e.value){case"Complicated":return(0,x.jsx)(d.Z,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return(0,x.jsx)(d.Z,{color:"success",label:"Relationship",size:"small",variant:"light"});default:return(0,x.jsx)(d.Z,{color:"info",label:"Single",size:"small",variant:"light"})}},j=function(e){var t=e.value;return(0,x.jsx)(h.Z,{value:t,sx:{minWidth:75}})},b=function(e){var t=e.data,r=e.striped,a=e.title,i=(0,n.useMemo)((function(){return[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",className:"cell-right"},{Header:"Visits",accessor:"visits",className:"cell-right"},{Header:"Status",accessor:"status",Cell:y},{Header:"Profile Progress",accessor:"progress",Cell:j}]}),[]);return(0,x.jsxs)(p.Z,{content:!1,title:a,secondary:(0,x.jsx)(Z.ZZ,{data:t.slice(0,10),filename:r?"striped-table.csv":"basic-table.csv"}),children:[(0,x.jsx)(m.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2}),(0,x.jsx)(g.Z,{children:(0,x.jsx)(v,{columns:i,data:t,striped:r})})]})},w=r(37771);function N(e){var t=e.columns,r=e.data,a=(0,f.useTable)({columns:t,data:r}),d=a.getTableProps,m=a.getTableBodyProps,p=a.headerGroups,g=a.footerGroups,h=a.rows,Z=a.prepareRow;return(0,x.jsxs)(s.Z,(0,i.Z)((0,i.Z)({},d()),{},{children:[(0,x.jsx)(o.Z,{children:p.map((function(e,t){return(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,t){return(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e.getHeaderProps([{className:e.className}])),{},{children:e.render("Header")}),t)}))}),t)}))}),(0,x.jsx)(u.Z,(0,i.Z)((0,i.Z)({},m()),{},{children:h.map((function(e,t){return Z(e),(0,n.createElement)(l.Z,(0,i.Z)((0,i.Z)({},e.getRowProps()),{},{key:t}),e.cells.map((function(e,t){return(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}),t)})))}))})),(0,x.jsx)(w.Z,{children:g.map((function(e,t){return(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e,t){return(0,x.jsx)(c.Z,(0,i.Z)((0,i.Z)({},e.getFooterProps([{className:e.className}])),{},{children:e.render("Footer")}),t)}))}),t)}))})]}))}var S=function(e){switch(e.value){case"Complicated":return(0,x.jsx)(d.Z,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return(0,x.jsx)(d.Z,{color:"success",label:"Relationship",size:"small",variant:"light"});default:return(0,x.jsx)(d.Z,{color:"info",label:"Single",size:"small",variant:"light"})}},C=function(e){var t=e.value;return(0,x.jsx)(h.Z,{value:t,sx:{minWidth:75}})},P=function(e){var t=e.data,r=(0,n.useMemo)((function(){return[{Header:"First Name",Footer:"First Name",accessor:"firstName"},{Header:"Last Name",Footer:"Last Name",accessor:"lastName"},{Header:"Email",Footer:"Email",accessor:"email"},{Header:"Age",Footer:"Age",accessor:"age",className:"cell-right"},{Header:"Role",Footer:"Role",accessor:"role"},{Header:"Visits",Footer:"Visits",accessor:"visits",className:"cell-right"},{Header:"Status",Footer:"Status",accessor:"status",Cell:S},{Header:"Profile Progress",Footer:"Profile Progress",accessor:"progress",Cell:C}]}),[]);return(0,x.jsx)(p.Z,{title:"Footer",content:!1,secondary:(0,x.jsx)(Z.ZZ,{data:t.slice(0,10),filename:"footer-table.csv"}),children:(0,x.jsx)(g.Z,{children:(0,x.jsx)(N,{columns:r,data:t})})})},H=r(58597),D=function(){var e=(0,n.useMemo)((function(){return(0,H.Z)(20)}),[]);return(0,x.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,x.jsx)(a.ZP,{item:!0,xs:12,lg:6,children:(0,x.jsx)(b,{title:"Basic Table",data:e.slice(0,10)})}),(0,x.jsx)(a.ZP,{item:!0,xs:12,lg:6,children:(0,x.jsx)(b,{title:"Striped Table",data:e.slice(0,10),striped:!0})}),(0,x.jsx)(a.ZP,{item:!0,xs:12,children:(0,x.jsx)(P,{data:e.slice(10,19)})})]})}},2690:function(e,t,r){r.d(t,{w:function(){return u}});var n=r(88620),a=r(60940),i=r(16031),s=r.n(i),o=new a.Chance,l=["UI Design","Mobile App","Web App","UX","Wireframing","Prototyping","Backend","React","Angular","Javascript","HTML","ES6","Figma","Codeigniter"],c=["just now","1 day ago","2 min ago","2 days ago","1 week ago","1 year ago","5 months ago","3 hours ago","1 hour ago"],u=function(e){for(var t=[],r=0;r<e;r+=1)t.push(r);return t};t.Z=function(e){return{id:"".concat(o.bb_pin()).concat(e),email:o.email({domain:"gmail.com"}),contact:o.phone(),datetime:(0,n.Z)(new Date,{days:o.integer({min:0,max:30}),hours:o.integer({min:0,max:23}),minutes:o.integer({min:0,max:59})}),boolean:o.bool(),role:o.profession(),company:o.company(),address:{full:"".concat(o.address(),", ").concat(o.city(),", ").concat(o.country({full:!0})," - ").concat(o.zip()),country:o.country({full:!0})},name:{first:o.first(),last:o.last(),full:o.name()},text:{title:o.sentence({words:o.integer({min:4,max:12})}),sentence:o.sentence(),description:o.paragraph},number:{percentage:o.integer({min:0,max:100}),rating:o.floating({min:0,max:5,fixed:2}),status:function(e,t){return o.integer({min:e,max:t})},age:o.age(),amount:o.integer({min:1,max:1e4})},image:{product:"product_".concat(e),avatar:"avatar_".concat(e)},skill:s().sampleSize(l,o.integer({min:2,max:6})),time:s().sampleSize(c)}}},37771:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(87462),a=r(63366),i=r(47313),s=r(83061),o=r(21921),l=r(56062),c=r(77342),u=r(17592),d=r(77430),m=r(32298);function f(e){return(0,m.Z)("MuiTableFooter",e)}(0,d.Z)("MuiTableFooter",["root"]);var p=r(46417),g=["className","component"],h=(0,u.ZP)("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-footer-group"}),Z={variant:"footer"},x="tfoot",v=i.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiTableFooter"}),i=r.className,u=r.component,d=void 0===u?x:u,m=(0,a.Z)(r,g),v=(0,n.Z)({},r,{component:d}),y=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},f,t)}(v);return(0,p.jsx)(l.Z.Provider,{value:Z,children:(0,p.jsx)(h,(0,n.Z)({as:d,className:(0,s.default)(y.root,i),ref:t,role:d===x?null:"rowgroup",ownerState:v},m))})}))},34800:function(e,t,r){function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return n}})},68627:function(e,t,r){function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,{Z:function(){return n}})},99004:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(68627),a=r(93601),i=r(34800);function s(e,t){(0,i.Z)(2,arguments);var r=(0,a.Z)(e),s=(0,n.Z)(t);return isNaN(s)?new Date(NaN):s?(r.setDate(r.getDate()+s),r):r}},79254:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(68627),a=r(93601),i=r(34800);function s(e,t){(0,i.Z)(2,arguments);var r=(0,a.Z)(e),s=(0,n.Z)(t);if(isNaN(s))return new Date(NaN);if(!s)return r;var o=r.getDate(),l=new Date(r.getTime());return l.setMonth(r.getMonth()+s+1,0),o>=l.getDate()?l:(r.setFullYear(l.getFullYear(),l.getMonth(),o),r)}},88620:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(99004),a=r(34800),i=r(68627);var s=r(79254);function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){if((0,a.Z)(2,arguments),!t||"object"!==o(t))return new Date(NaN);var r=t.years?(0,i.Z)(t.years):0,l=t.months?(0,i.Z)(t.months):0,c=t.weeks?(0,i.Z)(t.weeks):0,u=t.days?(0,i.Z)(t.days):0,d=t.hours?(0,i.Z)(t.hours):0,m=t.minutes?(0,i.Z)(t.minutes):0,f=t.seconds?(0,i.Z)(t.seconds):0,p=function(e,t){(0,a.Z)(2,arguments);var r=(0,i.Z)(t);return(0,s.Z)(e,-r)}(e,l+12*r),g=function(e,t){(0,a.Z)(2,arguments);var r=(0,i.Z)(t);return(0,n.Z)(e,-r)}(p,u+7*c),h=1e3*(f+60*(m+60*d));return new Date(g.getTime()-h)}},93601:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(34800);function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){(0,n.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}}}]);