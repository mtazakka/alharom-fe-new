"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[7874],{67874:function(e,r,t){t.r(r),t.d(r,{default:function(){return W}});var s=t(9019),a=t(29439),n=t(1413),i=t(47313),l=t(17592),o=t(19860),c=t(42832),u=t(66835),d=t(23477),m=t(24076),h=t(70941),p=t(57861),Z=t(66212),x=t(45110),g=t(58567),f=t(86948),j=t(15914),v=t(73842),H=t(7519),P=t(34255),b=t(36287),y=t(58597),k=t(46417),N=(0,l.ZP)("div")((function(){return{".header":{position:"sticky",zIndex:1,width:"fit-content"},"& th[data-sticky-td]":{position:"sticky",zIndex:"5 !important"}}}));function C(e){var r=e.columns,t=e.data,s=e.update,a=e.getHeaderProps,l=(0,i.useMemo)((function(){return{minWidth:80,width:100,maxWidth:400}}),[]),Z=(0,o.Z)(),P=(0,x.useTable)({columns:r,data:t,defaultColumn:l},x.useSortBy,g.useSticky),y=P.getTableProps,C=P.getTableBodyProps,w=P.headerGroups,R=P.rows,z=P.prepareRow,S=R.map((function(e){return e.original}));return Object.keys(S).forEach((function(e){return void 0===S[Number(e)]&&delete S[Number(e)]})),(0,k.jsx)(c.Z,{spacing:10,children:(0,k.jsx)(j.Z,{title:"Virtualized Infinite Scroll",content:!1,secondary:(0,k.jsx)(H.ZZ,{data:S,filename:"infinite-scroll-table.csv"}),children:(0,k.jsx)(v.Z,{sx:{height:540},id:"scrollableDiv",children:(0,k.jsx)(f.Z,{dataLength:R.length,next:s,hasMore:!0,loader:(0,k.jsx)("h4",{children:"Loading more 20 items..."}),scrollThreshold:.5,scrollableTarget:"scrollableDiv",children:(0,k.jsx)(N,{children:(0,k.jsxs)(u.Z,(0,n.Z)((0,n.Z)({},y()),{},{stickyHeader:!0,children:[(0,k.jsx)(d.Z,{children:w.map((function(e,r){return(0,k.jsx)(m.Z,(0,n.Z)((0,n.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,r){return(0,k.jsx)(h.Z,(0,n.Z)((0,n.Z)({sx:{position:"sticky !important"}},e.getHeaderProps([{className:e.className},a(e)])),{},{children:(0,k.jsx)(H.RL,{column:e})}),r)}))}),r)}))}),(0,k.jsx)(p.Z,(0,n.Z)((0,n.Z)({},C()),{},{children:R.map((function(e,r){return z(e),(0,k.jsx)(m.Z,(0,n.Z)((0,n.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e,r){return(0,k.jsx)(h.Z,(0,n.Z)((0,n.Z)({sx:{backgroundColor:Z.palette.mode===b.hY.DARK?Z.palette.grey[100]:Z.palette.common.white}},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}),r)}))}),r)}))}))]}))})})})})})}var w=function(e){switch(e.value){case"Complicated":return(0,k.jsx)(Z.Z,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return(0,k.jsx)(Z.Z,{color:"success",label:"Relationship",size:"small",variant:"light"});default:return(0,k.jsx)(Z.Z,{color:"info",label:"Single",size:"small",variant:"light"})}},R=function(e){var r=e.value;return(0,k.jsx)(P.Z,{value:r,sx:{minWidth:75}})},z=function(){var e=(0,i.useMemo)((function(){return(0,y.Z)(50)}),[]),r=(0,i.useMemo)((function(){return[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Email",accessor:"email"},{Header:"Age",accessor:"age",className:"cell-right"},{Header:"Role",accessor:"role"},{Header:"Visits",accessor:"visits",className:"cell-right"},{Header:"Status",accessor:"status",Cell:w},{Header:"Profile Progress",accessor:"progress",Cell:R}]}),[]),t=(0,i.useState)(e),s=(0,a.Z)(t,2),n=s[0],l=s[1];return(0,k.jsx)(C,{columns:r,data:n,update:function(){setTimeout((function(){l(n.concat((0,y.Z)(10)))}),1500)},getHeaderProps:function(e){return e.getSortByToggleProps()}})},S=t(17189),T=(0,l.ZP)("div")((function(){return{".header":{position:"sticky",zIndex:1,width:"fit-content"},"& th[data-sticky-td]":{position:"sticky",zIndex:"5 !important"}}}));function B(e){var r=e.columns,t=e.data,s=e.getHeaderProps,a=(0,o.Z)(),l=(0,x.useTable)({columns:r,data:t},x.useSortBy,x.useBlockLayout),Z=l.getTableProps,g=l.getTableBodyProps,f=l.headerGroups,P=l.rows,y=l.prepareRow,N=(0,i.useCallback)((function(e){var r=e.index,t=e.style,s=P[r];return y(s),(0,k.jsx)(m.Z,(0,n.Z)((0,n.Z)({},s.getRowProps({style:t})),{},{children:s.cells.map((function(e,r){return(0,k.jsx)(h.Z,(0,n.Z)((0,n.Z)({sx:{backgroundColor:a.palette.mode===b.hY.DARK?a.palette.grey[100]:a.palette.common.white}},e.getCellProps()),{},{children:e.render("Cell")}),r)}))}))}),[y,P,a]);return(0,k.jsx)(c.Z,{spacing:10,children:(0,k.jsx)(j.Z,{title:"Virtualized Rows",content:!1,secondary:(0,k.jsx)(H.ZZ,{data:t,filename:"virtualized-row-table.csv"}),sx:{maxWidth:1205},children:(0,k.jsx)(v.Z,{children:(0,k.jsx)(T,{children:(0,k.jsxs)(u.Z,(0,n.Z)((0,n.Z)({},Z()),{},{stickyHeader:!0,children:[(0,k.jsx)(d.Z,{children:f.map((function(e,r){return(0,k.jsx)(m.Z,(0,n.Z)((0,n.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,r){return(0,k.jsx)(h.Z,(0,n.Z)((0,n.Z)({sx:{position:"sticky !important"}},e.getHeaderProps([{className:e.className},s(e)])),{},{children:(0,k.jsx)(H.RL,{column:e})}),r)}))}),r)}))}),(0,k.jsx)(p.Z,(0,n.Z)((0,n.Z)({},g()),{},{children:(0,k.jsx)(S.t7,{height:600,itemCount:P.length,itemSize:60,width:"100%",children:N})}))]}))})})})})}var L=function(e){switch(e.value){case"Complicated":return(0,k.jsx)(Z.Z,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return(0,k.jsx)(Z.Z,{color:"success",label:"Relationship",size:"small",variant:"light"});default:return(0,k.jsx)(Z.Z,{color:"info",label:"Single",size:"small",variant:"light"})}},M=function(e){var r=e.value;return(0,k.jsx)(P.Z,{value:r,sx:{minWidth:75}})};var I=function(){var e=(0,i.useMemo)((function(){return(0,y.Z)(1e4)}),[]),r=(0,i.useMemo)((function(){return[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Email",accessor:"email"},{Header:"Age",accessor:"age",className:"cell-right"},{Header:"Role",accessor:"role"},{Header:"Visits",accessor:"visits",className:"cell-right"},{Header:"Status",accessor:"status",Cell:L},{Header:"Progress",accessor:"progress",Cell:M}]}),[]);return(0,k.jsx)(B,{columns:r,data:e,getHeaderProps:function(e){return e.getSortByToggleProps()}})},W=function(){return(0,k.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(z,{})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsx)(I,{})})]})}}}]);