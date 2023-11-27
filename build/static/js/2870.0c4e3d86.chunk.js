"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[2870],{62870:function(e,t,r){r.d(t,{HH:function(){return B},h3:function(){return j}});var n,a=r(47313);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function i(){}function u(e){return!!(e||"").match(/\d/)}function l(e){return null===e||void 0===e}function s(e){return"number"===typeof e&&isNaN(e)}function c(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function f(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function v(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function d(e,t){return Array(t+1).join(e)}function g(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;var i=1+o,u=(a=a.replace(".","")).length;return i<0?a="0."+d("0",Math.abs(i))+a:i>=u?a+=d("0",i-u):a=(a.substring(0,i)||"0")+"."+a.substring(i),r+a}function m(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=f(e),o=a.beforeDecimal,i=a.afterDecimal,u=a.hasNegation,l=parseFloat("0."+(i||"0")),s=(i.length<=t?"0."+i:l.toFixed(t)).split(".");return""+(u?"-":"")+o.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),s[0])+(n?".":"")+v(s[1]||"",t,r)}function p(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function h(e){return Math.max(e.selectionStart,e.selectionEnd)}function S(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function b(e,t){return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "}function w(e,t,r,n){var a,o,i,u=e.length;if(a=t,o=0,i=u,t=Math.min(Math.max(a,o),i),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=u&&!r[t];)t++;t>u&&(t=r.lastIndexOf(!0))}return-1===t&&(t=u),t}function y(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(u(e[r])||u(e[r-1]));return t}function x(e,t,r,n,o,u){void 0===u&&(u=i);var c=(0,a.useRef)(),f=function(e){var t=(0,a.useRef)(e);t.current=e;var r=(0,a.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e){var t,a;return l(e)||s(e)?(a="",t=""):"number"===typeof e||r?(a="number"===typeof e?g(e):e,t=n(a)):(a=o(e,void 0),t=e),{formattedValue:t,numAsString:a}})),v=(0,a.useState)((function(){return f(t)})),d=v[0],m=v[1];return(0,a.useMemo)((function(){l(e)?c.current=void 0:(c.current=f(e),m(c.current))}),[e,f]),[d,function(e,t){m({formattedValue:e.formattedValue,numAsString:e.value}),u(e,t)}]}function D(e){return e.replace(/[^0-9]/g,"")}function V(e){return e}function O(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var l=e.customInput,s=e.renderText,c=e.getInputRef,f=e.format;void 0===f&&(f=V);var v=e.removeFormatting;void 0===v&&(v=D);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,S=e.isAllowed,b=e.onChange;void 0===b&&(b=i);var O=e.onKeyDown;void 0===O&&(O=i);var C=e.onMouseUp;void 0===C&&(C=i);var N=e.onFocus;void 0===N&&(N=i);var E=e.onBlur;void 0===E&&(E=i);var k=e.value,j=e.getCaretBoundary;void 0===j&&(j=y);var A=e.isValidInputCharacter;void 0===A&&(A=u);var B=o(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),T=x(k,d,Boolean(g),f,v,m),R=T[0],F=R.formattedValue,I=R.numAsString,M=T[1],P=(0,a.useRef)();(0,a.useEffect)((function(){var e=f(I);if(void 0===P.current||e!==P.current){var t=U.current,r=v(e,void 0);z({formattedValue:e,numAsString:r,input:t,setCaretPosition:!0,source:n.props,event:void 0})}}));var K=(0,a.useState)(!1),W=K[0],L=K[1],U=(0,a.useRef)(null),_=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return L(!0),function(){clearTimeout(_.current.setCaretTimeout),clearTimeout(_.current.focusTimeout)}}),[]);var G=f,$=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},H=function(e,t,r){p(e,t),_.current.setCaretTimeout=setTimeout((function(){e.value===r&&p(e,t)}),0)},Z=function(e,t,r){return w(e,t,j(e),r)},q=function(e,t,r){var n=j(t),a=function(e,t,r,n,a,o){var i=a.findIndex((function(e){return e})),u=e.slice(0,i);t||r.startsWith(u)||(r=u+r,n+=u.length);for(var l=r.length,s=e.length,c={},f=new Array(l),v=0;v<l;v++){f[v]=-1;for(var d=0,g=s;d<g;d++)if(r[v]===e[d]&&!0!==c[d]){f[v]=d,c[d]=!0;break}}for(var m=n;m<l&&(-1===f[m]||!o(r[m]));)m++;var p=m===l||-1===f[m]?s:f[m];for(m=n-1;m>0&&-1===f[m];)m--;var h=-1===m||-1===f[m]?0:f[m]+1;return h>p?p:n-h<p-n?h:p}(t,F,e,r,n,A);return a=w(t,a,n)},z=function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a=e.source,o=e.event,i=e.numAsString,u=e.caretPos;if(r){if(void 0===u&&n){var l=e.inputValue||r.value,s=h(r);r.value=t,u=q(l,t,s)}r.value=t,n&&void 0!==u&&H(r,u,t)}t!==F&&function(e,t){P.current=e.formattedValue,M(e,t)}($(t,i),{event:o,source:a})},J=!W||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",Q=Object.assign({inputMode:J},B,{type:t,value:F,onChange:function(e){var t=function(e,t,r){var n=function(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}(F,e),a=Object.assign(Object.assign({},n),{lastValue:F}),o=v(e,a),i=G(o);if(o=v(i,void 0),S&&!S($(i,o))){var u=t.target,l=h(u),s=q(e,F,l);return H(u,s,F),!1}return z({formattedValue:i,numAsString:o,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0}(e.target.value,e,n.event);t&&b(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,i=r.value;if(void 0===i&&(i=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,i.length):"Delete"===n&&(t=a),void 0!==t&&a===o){var u=t;if("ArrowLeft"===n||"ArrowRight"===n)u=Z(i,t,"ArrowLeft"===n?"left":"right");else"Delete"!==n||A(i[t])?"Backspace"!==n||A(i[t])||(u=Z(i,t,"left")):u=Z(i,t,"right");u!==t&&H(r,u,i),e.isUnitTestRun&&H(r,u,i),O(e)}else O(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=Z(a,r);o!==r&&H(t,o,a)}C(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;U.current=t,_.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=Z(a,r);o===r||0===r&&n===a.length||H(t,o,a),N(e)}),0)},onBlur:function(e){U.current=null,clearTimeout(_.current.focusTimeout),clearTimeout(_.current.setCaretTimeout),E(e)}});if("text"===r)return s?a.createElement(a.Fragment,null,s(F,B)||null):a.createElement("span",Object.assign({},B,{ref:c}),F);if(l){var X=l;return a.createElement(X,Object.assign({},Q,{ref:c}))}return a.createElement("input",Object.assign({},Q,{ref:c}))}function C(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var i=t.allowNegative,u=t.thousandsGroupStyle;if(void 0===u&&(u="thousand"),""===e||"-"===e)return e;var l=N(t),s=l.thousandSeparator,c=l.decimalSeparator,d=0!==r&&-1!==e.indexOf(".")||r&&n,g=f(e,i),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=v(p,r,!!n)),s&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,s,u)),a&&(m=a+m),o&&(p+=o),h&&(m="-"+m),e=m+(d&&c||"")+p}function N(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function E(e,t,r){var n;void 0===t&&(t=S(e));var a=r.allowNegative,o=r.prefix;void 0===o&&(o="");var i=r.suffix;void 0===i&&(i="");var l=r.decimalScale,s=t.from,v=t.to,d=v.start,g=v.end,m=N(r),p=m.allowedDecimalSeparators,h=m.decimalSeparator,b=e[g]===h;if(u(e)&&(e===o||e===i)&&""===t.lastValue)return e;if(g-d===1&&-1!==p.indexOf(e[d])){var w=0===l?"":h;e=e.substring(0,d)+w+e.substring(d+1,e.length)}var y=function(e,t,r){var n=!1,a=!1;o.startsWith("-")?n=!1:e.startsWith("--")?(n=!1,a=!0):i.startsWith("-")&&e.length===i.length?n=!1:"-"===e[0]&&(n=!0);var u=n?1:0;return a&&(u=2),u&&(e=e.substring(u),t-=u,r-=u),{value:e,start:t,end:r,hasNegation:n}},x=y(e,d,g),D=x.hasNegation;e=(n=x).value,d=n.start,g=n.end;var V=y(t.lastValue,s.start,s.end),O=V.start,C=V.end,E=V.value,k=e.substring(d,g);!(e.length&&E.length&&(O>E.length-i.length||C<o.length))||k&&i.startsWith(k)||(e=E);var j=0;e.startsWith(o)?j+=o.length:d<o.length&&(j=d),g-=j;var A=(e=e.substring(j)).length,B=e.length-i.length;e.endsWith(i)?A=B:(g>B||g>e.length-i.length)&&(A=g),e=e.substring(0,A),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(D?"-"+e:e,a),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+c(e),t?"g":void 0)}(h,!0))||[]).join("");var T=e.indexOf(h),R=f(e=e.replace(new RegExp(c(h),"g"),(function(e,t){return t===T?".":""})),a),F=R.beforeDecimal,I=R.afterDecimal,M=R.addNegation;return v.end-v.start<s.end-s.start&&""===F&&b&&!parseFloat(I)&&(e=M?"-":""),e}function k(e){e=function(e){var t=N(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var o=e.allowNegative;if(void 0===o&&(o=!0),r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(e);var t=e.decimalSeparator;void 0===t&&(t=".");e.allowedDecimalSeparators,e.thousandsGroupStyle,e.suffix;var r=e.allowNegative,a=e.allowLeadingZeros,c=e.onKeyDown;void 0===c&&(c=i);var f=e.onBlur;void 0===f&&(f=i);var v=e.thousandSeparator,d=e.decimalScale,h=e.fixedDecimalScale,S=e.prefix;void 0===S&&(S="");var b=e.defaultValue,w=e.value,y=e.valueIsNumericString,D=e.onValueChange,V=o(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),O=function(t){return C(t,e)},k=function(t,r){return E(t,r,e)},j=y;l(w)?l(b)||(j=null!==y&&void 0!==y?y:"number"===typeof b):j=null!==y&&void 0!==y?y:"number"===typeof w;var A=function(e){return l(e)||s(e)?e:("number"===typeof e&&(e=g(e)),j&&"number"===typeof d?m(e,d,Boolean(h)):e)},B=x(A(w),A(b),Boolean(j),O,k,D),T=B[0],R=T.numAsString,F=T.formattedValue,I=B[1];return Object.assign(Object.assign({},V),{value:F,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===t||u(e)},onValueChange:I,format:O,removeFormatting:k,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,r.length+(o?1:0));var i=e.length;return a.fill(!1,i-n.length+1,i+1),a}(t,e)},onKeyDown:function(t){var n=t.target,a=t.key,o=n.selectionStart,i=n.selectionEnd,u=n.value;if(void 0===u&&(u=""),o===i){"Backspace"===a&&"-"===u[0]&&o===S.length+1&&r&&p(n,1);var l=N(e),s=l.decimalSeparator,f=l.allowedDecimalSeparators;"Backspace"===a&&u[o-1]===s&&d&&h&&(p(n,o-1),t.preventDefault()),(null===f||void 0===f?void 0:f.includes(a))&&u[o]===s&&p(n,o+1);var g=!0===v?",":v;"Backspace"===a&&u[o-1]===g&&p(n,o-1),"Delete"===a&&u[o]===g&&p(n,o+1),c(t)}else c(t)},onBlur:function(t){var r=R;if(r.match(/\d/g)||(r=""),a||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(r)),h&&d&&(r=m(r,d,h)),r!==R){var o=C(r,e);I({formattedValue:o,value:r,floatValue:parseFloat(r)},{event:t,source:n.event})}f(t)}})}function j(e){var t=k(e);return a.createElement(O,Object.assign({},t))}function A(e){e.mask,e.allowEmptyFormatting;var t=e.format,r=e.inputMode;void 0===r&&(r="numeric");var n=e.onKeyDown;void 0===n&&(n=i);var a=e.patternChar;void 0===a&&(a="#");var l=o(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar"]);!function(e){var t=e.mask;if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}(e);var s=function(t){return function(e,t){var r=t.format,n=t.mask,a=t.patternChar;void 0===a&&(a="#");var o=Array.from({length:e.length+1}).map((function(){return!0})),i=0,u=-1,l={};r.split("").forEach((function(t,r){var o=void 0;t===a&&(i++,o=b(n,i-1),-1===u&&e[r]===o&&(u=r)),l[r]=o}));for(var s=function(t){return r[t]===a&&e[t]!==l[t]},c=0,f=o.length;c<f;c++)o[c]=c===u||s(c)||s(c-1);return o[r.indexOf(a)]=!0,o}(t,e)};return Object.assign(Object.assign({},l),{inputMode:r,format:function(t){return function(e,t){var r=t.format,n=t.allowEmptyFormatting,a=t.mask,o=t.patternChar;if(void 0===o&&(o="#"),""===e&&!n)return"";for(var i=0,u=r.split(""),l=0,s=r.length;l<s;l++)r[l]===o&&(u[l]=e[i]||b(a,i),i+=1);return u.join("")}(t,e)},removeFormatting:function(t,r){return function(e,t,r){void 0===t&&(t=S(e));var n=r.format,a=r.patternChar;void 0===a&&(a="#");var o=t.from,i=t.to,l=t.lastValue;void 0===l&&(l="");var s=function(e){return n[e]===a},c=function(e,t){for(var r="",n=0;n<e.length;n++)s(t+n)&&u(e[n])&&(r+=e[n]);return r},f=function(e){return e.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return f(e);if(""===l&&e.length===n.length){for(var v="",d=0;d<e.length;d++)if(s(d))u(e[d])&&(v+=e[d]);else if(e[d]!==n[d])return f(e);return v}var g=l.substring(0,o.start),m=e.substring(i.start,i.end),p=l.substring(o.end);return""+c(g,0)+f(m)+c(p,o.end)}(t,r,e)},getCaretBoundary:s,onKeyDown:function(e){var r=e.key,o=e.target,i=o.selectionStart,u=o.selectionEnd,l=o.value;if(i===u){var c=i;if("Backspace"===r||"Delete"===r){var f="right";if("Backspace"===r){for(;c>0&&t[c-1]!==a;)c--;f="left"}else{for(var v=t.length;c<v&&t[c]!==a;)c++;f="right"}c=w(l,c,s(l),f)}else t[c]!==a&&"ArrowLeft"!==r&&"ArrowRight"!==r&&(c=w(l,c+1,s(l),"right"));c!==i&&p(o,c),n(e)}else n(e)}})}function B(e){var t=A(e);return a.createElement(O,Object.assign({},t))}!function(e){e.event="event",e.props="prop"}(n||(n={}))}}]);