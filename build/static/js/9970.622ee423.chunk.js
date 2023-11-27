"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[9970],{89970:function(e,i,n){n.r(i);var t=n(1413),r=n(29439),s=n(47313),d=n(58467),o=n(19860),l=n(9019),c=n(42832),a=n(15103),u=n(1550),x=n(24631),h=n(88797),v=n(57829),m=n(51405),j=n(15480),Z=n(61113),p=n(24193),f=n(51629),y=n(66835),g=n(23477),I=n(24076),_=n(70941),b=n(57861),w=n(19536),P=n(13292),C=n(23208),q=n(63686),A=n(91208),O=n(12549),D=n(89600),S=n(35604),M=n(21933),N=n(11577),k=n(15914),F=n(48209),U=n(98271),T=n(7901),R=n(88464),z=n(22150),H=n(18530),B=n(12019),V=n(82138),L=n(46417),W=M.Ry({date:M.hT().required("Invoice date is required"),due_date:M.hT().when("date",(function(e,i){return e&&i.min(e,"Due date can't be before invoice date")})).nullable().required("Due date is required"),customerInfo:M.Ry({name:M.Z_().required("Invoice receiver information is required")}).required("Invoice receiver information is required"),status:M.Z_().required("Status selection is required"),invoice_detail:M.IX().required("Invoice details is required").of(M.Ry().shape({name:M.Z_().required("Product name is required")})).min(1,"Invoice must have at least 1 items")});i.default=function(){var e=(0,o.Z)(),i=(0,d.UO)().id,n=(0,d.s0)(),M=(0,z.I0)(),E=(0,s.useState)(!0),K=(0,r.Z)(E,2),G=K[0],J=K[1],Q=(0,z.v9)((function(e){return e.invoice})),X=Q.open,Y=Q.isCustomerOpen,$=Q.countries,ee=Q.country,ie=Q.isOpen,ne=Q.list;(0,s.useEffect)((function(){M((0,R.Kt)(Number(i))).then((function(){return J(!1)}))}),[i]);var te={name:"",address:"",phone:"",email:""},re=function(){M((0,R.UA)({isOpen:!1}))};return G?(0,L.jsx)(N.Z,{}):(0,L.jsx)(k.Z,{children:(0,L.jsx)(S.J9,{enableReinitialize:!0,initialValues:{id:(null===ne||void 0===ne?void 0:ne.id)||"",invoice_id:(null===ne||void 0===ne?void 0:ne.invoice_id)||"",status:(null===ne||void 0===ne?void 0:ne.status)||"",date:new Date(null===ne||void 0===ne?void 0:ne.date)||null,due_date:new Date(null===ne||void 0===ne?void 0:ne.due_date)||null,cashierInfo:(null===ne||void 0===ne?void 0:ne.cashierInfo)||te,customerInfo:(null===ne||void 0===ne?void 0:ne.customerInfo)||te,invoice_detail:(null===ne||void 0===ne?void 0:ne.invoice_detail)||[],discount:(null===ne||void 0===ne?void 0:ne.discount)||0,tax:(null===ne||void 0===ne?void 0:ne.tax)||0,notes:(null===ne||void 0===ne?void 0:ne.notes)||""},validationSchema:W,onSubmit:function(e){!function(e){var i,t,r,s={id:Number(null===ne||void 0===ne?void 0:ne.id),invoice_id:Number(e.invoice_id),customer_name:null===(i=e.cashierInfo)||void 0===i?void 0:i.name,email:null===(t=e.cashierInfo)||void 0===t?void 0:t.email,avatar:Number(null===ne||void 0===ne?void 0:ne.avatar),discount:Number(e.discount),tax:Number(e.tax),date:(0,D.Z)(new Date(e.date),"MM/dd/yyyy"),due_date:(0,D.Z)(new Date(e.due_date),"MM/dd/yyyy"),quantity:Number(null===(r=e.invoice_detail)||void 0===r?void 0:r.reduce((function(e,i){return e+i.qty}),0)),status:e.status,cashierInfo:e.cashierInfo,customerInfo:e.customerInfo,invoice_detail:e.invoice_detail,notes:e.notes};M((0,R.RD)(s)).then((function(){M((0,H.ss)({open:!0,message:"Invoice Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!0})),n("/apps/invoice/list")}))}(e)},children:function(i){var n,r,s,d,o,D,N,z,H,W,E=i.handleBlur,K=i.errors,G=i.handleChange,J=i.handleSubmit,Q=i.values,ne=i.isValid,te=i.setFieldValue,se=i.touched,de=(null===Q||void 0===Q||null===(n=Q.invoice_detail)||void 0===n?void 0:n.reduce((function(e,i){return i.name.trim().length>0?e+Number(i.price*Math.floor(i.qty)):e}),0))||0,oe=(null===Q||void 0===Q?void 0:Q.tax)*de/100,le=Q.discount*de/100,ce=de-le+oe;return(0,L.jsx)(S.l0,{onSubmit:J,children:(0,L.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Invoice Id"}),(0,L.jsx)(u.Z,{sx:{width:"100%"},children:(0,L.jsx)(x.Z,{required:!0,disabled:!0,type:"number",name:"invoice_id",id:"invoice_id",value:Q.invoice_id,onChange:G})})]})}),(0,L.jsxs)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:[(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Status"}),(0,L.jsx)(u.Z,{sx:{width:"100%"},children:(0,L.jsxs)(h.Z,{value:Q.status,displayEmpty:!0,name:"status",renderValue:function(e){return 0===e.length?(0,L.jsx)(v.Z,{sx:{color:"secondary.400"},children:"Select status"}):e},onChange:G,error:Boolean(K.status&&se.status),children:[(0,L.jsx)(m.Z,{disabled:!0,value:"",children:"Select status"}),(0,L.jsx)(m.Z,{value:"Paid",children:"Paid"}),(0,L.jsx)(m.Z,{value:"Unpaid",children:"Unpaid"}),(0,L.jsx)(m.Z,{value:"Cancelled",children:"Cancelled"})]})})]}),se.status&&K.status&&(0,L.jsx)(j.Z,{error:!0,children:K.status})]}),(0,L.jsxs)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:[(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Date"}),(0,L.jsx)(u.Z,{sx:{width:"100%"},error:Boolean(se.date&&K.date),children:(0,L.jsx)(C._,{dateAdapter:A.H,children:(0,L.jsx)(q.M,{format:"dd/MM/yyyy",value:Q.date,onChange:function(e){return te("date",e)}})})})]}),se.date&&K.date&&(0,L.jsx)(j.Z,{error:!0,children:K.date})]}),(0,L.jsxs)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:[(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Due Date"}),(0,L.jsx)(u.Z,{sx:{width:"100%"},error:Boolean(se.due_date&&K.due_date),children:(0,L.jsx)(C._,{dateAdapter:A.H,children:(0,L.jsx)(q.M,{format:"dd/MM/yyyy",value:Q.due_date,onChange:function(e){return te("due_date",e)}})})})]}),se.due_date&&K.due_date&&(0,L.jsx)(j.Z,{error:!0,children:K.due_date})]}),(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsx)(k.Z,{sx:{minHeight:168},children:(0,L.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:8,children:(0,L.jsxs)(c.Z,{spacing:2,children:[(0,L.jsx)(Z.Z,{variant:"h5",children:"From:"}),(0,L.jsxs)(c.Z,{sx:{width:"100%"},children:[(0,L.jsx)(Z.Z,{variant:"subtitle1",children:null===Q||void 0===Q||null===(r=Q.cashierInfo)||void 0===r?void 0:r.name}),(0,L.jsx)(Z.Z,{color:"secondary",children:null===Q||void 0===Q||null===(s=Q.cashierInfo)||void 0===s?void 0:s.address}),(0,L.jsx)(Z.Z,{color:"secondary",children:null===Q||void 0===Q||null===(d=Q.cashierInfo)||void 0===d?void 0:d.phone}),(0,L.jsx)(Z.Z,{color:"secondary",children:null===Q||void 0===Q||null===(o=Q.cashierInfo)||void 0===o?void 0:o.email})]})]})}),(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:4,children:(0,L.jsxs)(v.Z,{textAlign:{xs:"left",sm:"right"},color:"grey.200",children:[(0,L.jsx)(p.Z,{variant:"outlined",startIcon:(0,L.jsx)(B.Z,{}),color:"secondary",onClick:function(){return M((0,R.Uj)({open:!0}))},size:"small",children:"Change"}),(0,L.jsx)(T.Z,{open:X,setOpen:function(e){return M((0,R.Uj)({open:e}))},handlerAddress:function(e){return te("cashierInfo",e)}})]})})]})})}),(0,L.jsxs)(l.ZP,{item:!0,xs:12,sm:6,children:[(0,L.jsx)(k.Z,{sx:{minHeight:168},children:(0,L.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:8,children:(0,L.jsxs)(c.Z,{spacing:2,children:[(0,L.jsx)(Z.Z,{variant:"h5",children:"To:"}),(0,L.jsxs)(c.Z,{sx:{width:"100%"},children:[(0,L.jsx)(Z.Z,{variant:"subtitle1",children:null===Q||void 0===Q||null===(D=Q.customerInfo)||void 0===D?void 0:D.name}),(0,L.jsx)(Z.Z,{color:"secondary",children:null===Q||void 0===Q||null===(N=Q.customerInfo)||void 0===N?void 0:N.address}),(0,L.jsx)(Z.Z,{color:"secondary",children:null===Q||void 0===Q||null===(z=Q.customerInfo)||void 0===z?void 0:z.phone}),(0,L.jsx)(Z.Z,{color:"secondary",children:null===Q||void 0===Q||null===(H=Q.customerInfo)||void 0===H?void 0:H.email})]})]})}),(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:4,children:(0,L.jsxs)(v.Z,{textAlign:"right",color:"grey.200",children:[(0,L.jsx)(p.Z,{size:"small",startIcon:(0,L.jsx)(V.Z,{}),color:"secondary",variant:"outlined",onClick:function(){return M((0,R.gK)({isCustomerOpen:!0}))},children:"Add"}),(0,L.jsx)(T.Z,{open:Y,setOpen:function(e){return M((0,R.gK)({isCustomerOpen:e}))},handlerAddress:function(e){return te("customerInfo",e)}})]})})]})}),se.customerInfo&&K.customerInfo&&(0,L.jsx)(j.Z,{error:!0,children:null===K||void 0===K||null===(W=K.customerInfo)||void 0===W?void 0:W.name})]}),(0,L.jsx)(l.ZP,{item:!0,xs:12,children:(0,L.jsx)(Z.Z,{variant:"h5",children:"Detail"})}),(0,L.jsx)(l.ZP,{item:!0,xs:12,children:(0,L.jsx)(S.F2,{name:"invoice_detail",render:function(i){var n,t=i.remove,r=i.push;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(f.Z,{children:(0,L.jsxs)(y.Z,{sx:{minWidth:650},children:[(0,L.jsx)(g.Z,{children:(0,L.jsxs)(I.Z,{children:[(0,L.jsx)(_.Z,{children:"#"}),(0,L.jsx)(_.Z,{children:"Name"}),(0,L.jsx)(_.Z,{children:"Description"}),(0,L.jsx)(_.Z,{children:"Qty"}),(0,L.jsx)(_.Z,{children:"Price"}),(0,L.jsx)(_.Z,{align:"right",children:"Amount"}),(0,L.jsx)(_.Z,{align:"right",children:"Action"})]})}),(0,L.jsx)(b.Z,{children:null===Q||void 0===Q||null===(n=Q.invoice_detail)||void 0===n?void 0:n.map((function(e,i){return(0,L.jsxs)(I.Z,{children:[(0,L.jsx)(_.Z,{children:(null===Q||void 0===Q?void 0:Q.invoice_detail.indexOf(e))+1}),(0,L.jsx)(F.Z,{id:e.id,index:i,name:e.name,description:e.description,qty:e.qty,price:e.price,onDeleteItem:function(e){return t(e)},onEditItem:G,Blur:E,errors:K,touched:se},e.id)]},e.id)}))})]})}),(0,L.jsx)(w.Z,{}),se.invoice_detail&&K.invoice_detail&&!Array.isArray(null===K||void 0===K?void 0:K.invoice_detail)&&(0,L.jsx)(c.Z,{direction:"row",justifyContent:"center",sx:{p:1.5},children:(0,L.jsx)(j.Z,{error:!0,children:K.invoice_detail})}),(0,L.jsxs)(l.ZP,{container:!0,justifyContent:"space-between",children:[(0,L.jsx)(l.ZP,{item:!0,xs:12,md:8,children:(0,L.jsx)(v.Z,{sx:{pt:2.5,pr:2.5,pb:2.5,pl:0},children:(0,L.jsx)(p.Z,{color:"primary",startIcon:(0,L.jsx)(V.Z,{}),onClick:function(){return r({id:(0,O.Z)(),name:"",description:"",qty:1,price:"1.00"})},variant:"dashed",sx:{bgcolor:"transparent !important"},children:"Add Item"})})}),(0,L.jsxs)(l.ZP,{item:!0,xs:12,md:4,children:[(0,L.jsxs)(l.ZP,{container:!0,justifyContent:"space-between",spacing:2,sx:{pt:2.5,pb:2.5},children:[(0,L.jsx)(l.ZP,{item:!0,xs:6,children:(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Discount(%)"}),(0,L.jsx)(x.Z,{type:"number",fullWidth:!0,name:"discount",id:"discount",placeholder:"0.0",value:Q.discount,onChange:G,inputProps:{min:0}})]})}),(0,L.jsx)(l.ZP,{item:!0,xs:6,children:(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Tax(%)"}),(0,L.jsx)(x.Z,{type:"number",fullWidth:!0,name:"tax",id:"tax",placeholder:"0.0",value:Q.tax,onChange:G,inputProps:{min:0}})]})})]}),(0,L.jsx)(l.ZP,{item:!0,xs:12,children:(0,L.jsxs)(c.Z,{spacing:2,children:[(0,L.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,L.jsx)(Z.Z,{color:e.palette.grey[500],children:"Sub Total:"}),(0,L.jsx)(Z.Z,{children:(null===ee||void 0===ee?void 0:ee.prefix)+""+de.toFixed(2)})]}),(0,L.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,L.jsx)(Z.Z,{color:e.palette.grey[500],children:"Discount:"}),(0,L.jsx)(Z.Z,{variant:"h6",color:e.palette.success.main,children:(null===ee||void 0===ee?void 0:ee.prefix)+""+le.toFixed(2)})]}),(0,L.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,L.jsx)(Z.Z,{color:e.palette.grey[500],children:"Tax:"}),(0,L.jsx)(Z.Z,{children:(null===ee||void 0===ee?void 0:ee.prefix)+""+oe.toFixed(2)})]}),(0,L.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,L.jsx)(Z.Z,{variant:"subtitle1",children:"Grand Total:"}),(0,L.jsx)(Z.Z,{variant:"subtitle1",children:ce%1===0?(null===ee||void 0===ee?void 0:ee.prefix)+""+ce:(null===ee||void 0===ee?void 0:ee.prefix)+""+ce.toFixed(2)})]})]})})]})]})]})}})}),(0,L.jsx)(l.ZP,{item:!0,xs:12,children:(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Notes"}),(0,L.jsx)(x.Z,{placeholder:"Address",rows:3,value:Q.notes,multiline:!0,name:"notes",onChange:G,inputProps:{maxLength:500},helperText:"".concat(Q.notes.length," / ").concat(500),sx:{width:"100%","& .MuiFormHelperText-root":{mr:0,display:"flex",justifyContent:"flex-end"}}})]})}),(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsxs)(c.Z,{spacing:1,children:[(0,L.jsx)(a.Z,{children:"Set Currency*"}),(0,L.jsx)(u.Z,{sx:{width:{xs:"100%",sm:250}},children:(0,L.jsx)(P.Z,{id:"country-select-demo",fullWidth:!0,options:$,defaultValue:$[2],value:$.find((function(e){return e.code===(null===ee||void 0===ee?void 0:ee.code)})),onChange:function(e,i){M((0,R.C2)({country:i}))},autoHighlight:!0,getOptionLabel:function(e){return e.label},renderOption:function(e,i){return(0,L.jsxs)(v.Z,(0,t.Z)((0,t.Z)({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[i.code&&(0,L.jsx)("img",{loading:"lazy",width:"20",src:"https://flagcdn.com/w20/".concat(i.code.toLowerCase(),".png"),alt:""}),i.label]}))},renderInput:function(e){var i=$.find((function(e){return e.code===(null===ee||void 0===ee?void 0:ee.code)}));return(0,L.jsx)(x.Z,(0,t.Z)((0,t.Z)({},e),{},{name:"phoneCode",placeholder:"Select",InputProps:(0,t.Z)((0,t.Z)({},e.InputProps),{},{startAdornment:(0,L.jsx)(L.Fragment,{children:i&&""!==i.code&&(0,L.jsx)("img",{style:{marginRight:6},loading:"lazy",width:"20",src:"https://flagcdn.com/w20/".concat(i.code.toLowerCase(),".png"),alt:""})})}),inputProps:(0,t.Z)((0,t.Z)({},e.inputProps),{},{autoComplete:"new-password"})}))}})})]})}),(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsxs)(c.Z,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:2,sx:{height:"100%"},children:[(0,L.jsx)(p.Z,{variant:"outlined",color:"secondary",disabled:!ne,sx:{color:"secondary.dark"},onClick:function(){return M((0,R.UA)({isOpen:!0}))},children:"Preview"}),(0,L.jsx)(p.Z,{color:"primary",variant:"contained",type:"submit",children:"Update & Send"}),(0,L.jsx)(U.Z,{isOpen:ie,setIsOpen:function(e){return M((0,R.UA)({isOpen:e}))},invoiceInfo:(0,t.Z)((0,t.Z)({},Q),{},{subtotal:de,taxRate:oe,discountRate:le,total:ce}),items:null===Q||void 0===Q?void 0:Q.invoice_detail,onAddNextInvoice:re},Q.invoice_id)]})})]})})}})})}}}]);