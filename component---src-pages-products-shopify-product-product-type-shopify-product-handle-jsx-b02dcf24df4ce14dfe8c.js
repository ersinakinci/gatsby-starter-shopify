(self.webpackChunkgatsby_starter_shopify=self.webpackChunkgatsby_starter_shopify||[]).push([[581],{4934:function(e,t,r){e=r.nmd(e);var n="__lodash_hash_undefined__",a=9007199254740991,o="[object Arguments]",i="[object Array]",c="[object Boolean]",u="[object Date]",l="[object Error]",s="[object Function]",f="[object Map]",p="[object Number]",d="[object Object]",m="[object Promise]",v="[object RegExp]",h="[object Set]",y="[object String]",g="[object Symbol]",b="[object WeakMap]",_="[object ArrayBuffer]",j="[object DataView]",E=/^\[object .+?Constructor\]$/,O=/^(?:0|[1-9]\d*)$/,w={};w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w[o]=w[i]=w[_]=w[c]=w[j]=w[u]=w[l]=w[s]=w[f]=w[p]=w[d]=w[v]=w[h]=w[y]=w[b]=!1;var N="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,z="object"==typeof self&&self&&self.Object===Object&&self,I=N||z||Function("return this")(),A=t&&!t.nodeType&&t,k=A&&e&&!e.nodeType&&e,C=k&&k.exports===A,S=C&&N.process,x=function(){try{return S&&S.binding&&S.binding("util")}catch(e){}}(),T=x&&x.isTypedArray;function P(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function F(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function D(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var U,M,V,W=Array.prototype,L=Function.prototype,$=Object.prototype,B=I["__core-js_shared__"],R=L.toString,q=$.hasOwnProperty,G=(U=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Z=$.toString,H=RegExp("^"+R.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=C?I.Buffer:void 0,K=I.Symbol,Q=I.Uint8Array,X=$.propertyIsEnumerable,Y=W.splice,ee=K?K.toStringTag:void 0,te=Object.getOwnPropertySymbols,re=J?J.isBuffer:void 0,ne=(M=Object.keys,V=Object,function(e){return M(V(e))}),ae=xe(I,"DataView"),oe=xe(I,"Map"),ie=xe(I,"Promise"),ce=xe(I,"Set"),ue=xe(I,"WeakMap"),le=xe(Object,"create"),se=De(ae),fe=De(oe),pe=De(ie),de=De(ce),me=De(ue),ve=K?K.prototype:void 0,he=ve?ve.valueOf:void 0;function ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ge(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function _e(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new be;++t<r;)this.add(e[t])}function je(e){var t=this.__data__=new ge(e);this.size=t.size}function Ee(e,t){var r=Ve(e),n=!r&&Me(e),a=!r&&!n&&We(e),o=!r&&!n&&!a&&qe(e),i=r||n||a||o,c=i?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],u=c.length;for(var l in e)!t&&!q.call(e,l)||i&&("length"==l||a&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Fe(l,u))||c.push(l);return c}function Oe(e,t){for(var r=e.length;r--;)if(Ue(e[r][0],t))return r;return-1}function we(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?function(e){var t=q.call(e,ee),r=e[ee];try{e[ee]=void 0;var n=!0}catch(o){}var a=Z.call(e);n&&(t?e[ee]=r:delete e[ee]);return a}(e):function(e){return Z.call(e)}(e)}function Ne(e){return Re(e)&&we(e)==o}function ze(e,t,r,n,a){return e===t||(null==e||null==t||!Re(e)&&!Re(t)?e!=e&&t!=t:function(e,t,r,n,a,s){var m=Ve(e),b=Ve(t),E=m?i:Pe(e),O=b?i:Pe(t),w=(E=E==o?d:E)==d,N=(O=O==o?d:O)==d,z=E==O;if(z&&We(e)){if(!We(t))return!1;m=!0,w=!1}if(z&&!w)return s||(s=new je),m||qe(e)?ke(e,t,r,n,a,s):function(e,t,r,n,a,o,i){switch(r){case j:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!o(new Q(e),new Q(t)));case c:case u:case p:return Ue(+e,+t);case l:return e.name==t.name&&e.message==t.message;case v:case y:return e==t+"";case f:var s=F;case h:var d=1&n;if(s||(s=D),e.size!=t.size&&!d)return!1;var m=i.get(e);if(m)return m==t;n|=2,i.set(e,t);var b=ke(s(e),s(t),n,a,o,i);return i.delete(e),b;case g:if(he)return he.call(e)==he.call(t)}return!1}(e,t,E,r,n,a,s);if(!(1&r)){var I=w&&q.call(e,"__wrapped__"),A=N&&q.call(t,"__wrapped__");if(I||A){var k=I?e.value():e,C=A?t.value():t;return s||(s=new je),a(k,C,r,n,s)}}if(!z)return!1;return s||(s=new je),function(e,t,r,n,a,o){var i=1&r,c=Ce(e),u=c.length,l=Ce(t).length;if(u!=l&&!i)return!1;var s=u;for(;s--;){var f=c[s];if(!(i?f in t:q.call(t,f)))return!1}var p=o.get(e);if(p&&o.get(t))return p==t;var d=!0;o.set(e,t),o.set(t,e);var m=i;for(;++s<u;){var v=e[f=c[s]],h=t[f];if(n)var y=i?n(h,v,f,t,e,o):n(v,h,f,e,t,o);if(!(void 0===y?v===h||a(v,h,r,n,o):y)){d=!1;break}m||(m="constructor"==f)}if(d&&!m){var g=e.constructor,b=t.constructor;g==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(d=!1)}return o.delete(e),o.delete(t),d}(e,t,r,n,a,s)}(e,t,r,n,ze,a))}function Ie(e){return!(!Be(e)||function(e){return!!G&&G in e}(e))&&(Le(e)?H:E).test(De(e))}function Ae(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||$,t!==n)return ne(e);var t,r,n,a=[];for(var o in Object(e))q.call(e,o)&&"constructor"!=o&&a.push(o);return a}function ke(e,t,r,n,a,o){var i=1&r,c=e.length,u=t.length;if(c!=u&&!(i&&u>c))return!1;var l=o.get(e);if(l&&o.get(t))return l==t;var s=-1,f=!0,p=2&r?new _e:void 0;for(o.set(e,t),o.set(t,e);++s<c;){var d=e[s],m=t[s];if(n)var v=i?n(m,d,s,t,e,o):n(d,m,s,e,t,o);if(void 0!==v){if(v)continue;f=!1;break}if(p){if(!P(t,(function(e,t){if(i=t,!p.has(i)&&(d===e||a(d,e,r,n,o)))return p.push(t);var i}))){f=!1;break}}else if(d!==m&&!a(d,m,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f}function Ce(e){return function(e,t,r){var n=t(e);return Ve(e)?n:function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}(n,r(e))}(e,Ge,Te)}function Se(e,t){var r,n,a=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof t?"string":"hash"]:a.map}function xe(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Ie(r)?r:void 0}ye.prototype.clear=function(){this.__data__=le?le(null):{},this.size=0},ye.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ye.prototype.get=function(e){var t=this.__data__;if(le){var r=t[e];return r===n?void 0:r}return q.call(t,e)?t[e]:void 0},ye.prototype.has=function(e){var t=this.__data__;return le?void 0!==t[e]:q.call(t,e)},ye.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=le&&void 0===t?n:t,this},ge.prototype.clear=function(){this.__data__=[],this.size=0},ge.prototype.delete=function(e){var t=this.__data__,r=Oe(t,e);return!(r<0)&&(r==t.length-1?t.pop():Y.call(t,r,1),--this.size,!0)},ge.prototype.get=function(e){var t=this.__data__,r=Oe(t,e);return r<0?void 0:t[r][1]},ge.prototype.has=function(e){return Oe(this.__data__,e)>-1},ge.prototype.set=function(e,t){var r=this.__data__,n=Oe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},be.prototype.clear=function(){this.size=0,this.__data__={hash:new ye,map:new(oe||ge),string:new ye}},be.prototype.delete=function(e){var t=Se(this,e).delete(e);return this.size-=t?1:0,t},be.prototype.get=function(e){return Se(this,e).get(e)},be.prototype.has=function(e){return Se(this,e).has(e)},be.prototype.set=function(e,t){var r=Se(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},_e.prototype.add=_e.prototype.push=function(e){return this.__data__.set(e,n),this},_e.prototype.has=function(e){return this.__data__.has(e)},je.prototype.clear=function(){this.__data__=new ge,this.size=0},je.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},je.prototype.get=function(e){return this.__data__.get(e)},je.prototype.has=function(e){return this.__data__.has(e)},je.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ge){var n=r.__data__;if(!oe||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new be(n)}return r.set(e,t),this.size=r.size,this};var Te=te?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,o=[];++r<n;){var i=e[r];t(i,r,e)&&(o[a++]=i)}return o}(te(e),(function(t){return X.call(e,t)})))}:function(){return[]},Pe=we;function Fe(e,t){return!!(t=null==t?a:t)&&("number"==typeof e||O.test(e))&&e>-1&&e%1==0&&e<t}function De(e){if(null!=e){try{return R.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Ue(e,t){return e===t||e!=e&&t!=t}(ae&&Pe(new ae(new ArrayBuffer(1)))!=j||oe&&Pe(new oe)!=f||ie&&Pe(ie.resolve())!=m||ce&&Pe(new ce)!=h||ue&&Pe(new ue)!=b)&&(Pe=function(e){var t=we(e),r=t==d?e.constructor:void 0,n=r?De(r):"";if(n)switch(n){case se:return j;case fe:return f;case pe:return m;case de:return h;case me:return b}return t});var Me=Ne(function(){return arguments}())?Ne:function(e){return Re(e)&&q.call(e,"callee")&&!X.call(e,"callee")},Ve=Array.isArray;var We=re||function(){return!1};function Le(e){if(!Be(e))return!1;var t=we(e);return t==s||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function $e(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function Be(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Re(e){return null!=e&&"object"==typeof e}var qe=T?function(e){return function(t){return e(t)}}(T):function(e){return Re(e)&&$e(e.length)&&!!w[we(e)]};function Ge(e){return null!=(t=e)&&$e(t.length)&&!Le(t)?Ee(e):Ae(e);var t}e.exports=function(e,t){return ze(e,t)}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var r,a=e.attr,o=e.size,u=e.title,l=c(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},1928:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(3366),a=r(7294),o=r(2775),i="numeric-input-module--input--aI96j",c=["onIncrement","onDecrement","className","disabled"];function u(e){var t=e.onIncrement,r=e.onDecrement,u=e.className,l=e.disabled,s=(0,n.Z)(e,c);return a.createElement("div",{className:"numeric-input-module--wrap---fT8G"},a.createElement("input",Object.assign({disabled:l,type:"numeric",className:[i,u].join(" ")},s)),a.createElement("button",{disabled:l,className:"numeric-input-module--increment--KIhFN","aria-label":"Increment",onClick:t},a.createElement("span",null,"+"),a.createElement(o.y$z,null)),a.createElement("button",{disabled:l,className:"numeric-input-module--decrement--Wep4c","aria-label":"Decrement",onClick:r},a.createElement("span",null,"-"),a.createElement(o.gwH,null)))}},5903:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5785),a=r(7294),o=r(1597),i=r(3587),c=r(4934),u=r.n(c),l=r(396),s=r(2794),f=r(3366),p=["variantId","quantity","available"];function d(e){var t=e.variantId,r=e.quantity,n=e.available,o=(0,f.Z)(e,p),i=a.useContext(s.x),c=i.addVariantToCart,u=i.loading;return a.createElement("button",Object.assign({type:"submit",className:"add-to-cart-module--addToCart--i+zPd",onClick:function(e){e.preventDefault(),c(t,r)},disabled:!n||u},o),n?"Add to Cart":"Out of Stock")}var m=r(1928),v=r(5325),h=r(3771),y=r(1997),g="product-page-module--labelFont--nMPhI",b="product-page-module--tagList--I5sOk";function _(e){var t=e.data,r=t.product,c=(t.suggestions,r.options),f=r.variants,p=r.variants[0],_=r.priceRangeV2,j=r.title,E=r.description,O=r.images,w=r.images[0],N=a.useContext(s.x).client,z=a.useState(Object.assign({},p)),I=z[0],A=z[1],k=a.useState(1),C=k[0],S=k[1],x=N.product.helpers.variantForOptions(r,I)||I,T=a.useState(x.availableForSale),P=T[0],F=T[1],D=a.useCallback((function(e){N.product.fetch(e).then((function(e){var t,r=null!==(t=null==e?void 0:e.variants.filter((function(e){return e.id===x.storefrontId})))&&void 0!==t?t:[];r.length>0&&F(r[0].available)}))}),[x.storefrontId,N.product]);a.useEffect((function(){D(r.storefrontId)}),[x.storefrontId,D,r.storefrontId]);var U=(0,v.T)(_.minVariantPrice.currencyCode,I.price),M=f.length>1,V=O.length>0;return a.createElement(i.A,null,w?a.createElement(h.p,{title:j,description:E,image:(0,l.e)(w.gatsbyImageData)}):void 0,a.createElement("div",{className:"product-page-module--container--EREiA"},a.createElement("div",{className:"product-page-module--productBox--futuv"},V&&a.createElement("div",{className:"product-page-module--productImageWrapper--++InC"},a.createElement("div",{role:"group","aria-label":"gallery","aria-describedby":"instructions"},a.createElement("ul",{className:"product-page-module--productImageList--6cRAn"},O.map((function(e,t){return a.createElement("li",{key:"product-image-"+e.id,className:"product-page-module--productImageListItem--P3+RE"},a.createElement(l.G,{objectFit:"contain",loading:0===t?"eager":"lazy",alt:e.altText?e.altText:"Product Image of "+j+" #"+(t+1),image:e.gatsbyImageData}))})))),a.createElement("div",{className:"product-page-module--scrollForMore--Wcc95",id:"instructions"},a.createElement("span",{"aria-hidden":"true"},"←")," scroll for more"," ",a.createElement("span",{"aria-hidden":"true"},"→"))),!V&&a.createElement("span",{className:"product-page-module--noImagePreview--uzW3V"},"No Preview image"),a.createElement("div",null,a.createElement("div",{className:"product-page-module--breadcrumb--TUr7s"},a.createElement(o.rU,{to:r.productTypeSlug},r.productType),a.createElement(y.BM9,{size:12})),a.createElement("h1",{className:"product-page-module--header--ZAnqx"},j),a.createElement("p",{className:"product-page-module--productDescription--GKu-y"},E),a.createElement("h2",{className:"product-page-module--priceValue--gk0OJ"},a.createElement("span",null,U)),a.createElement("fieldset",{className:"product-page-module--optionsWrapper--jH9zF"},M&&c.map((function(e,t){var r=e.id,o=e.name,i=e.values;return a.createElement("div",{className:"product-page-module--selectVariant--m-gJw",key:r},a.createElement("select",{"aria-label":"Variants",onChange:function(e){return function(e,t){var r=t.target.value;if(""!==r){var a=(0,n.Z)(I.selectedOptions);a[e]=Object.assign({},a[e],{value:r});var o=f.find((function(e){return u()(a,e.selectedOptions)}));A(Object.assign({},o))}}(t,e)}},a.createElement("option",{value:""},"Select "+o),i.map((function(e){return a.createElement("option",{value:e,key:o+"-"+e},e)}))))}))),a.createElement("div",{className:"product-page-module--addToCartStyle--r5Cxs"},a.createElement(m.A,{"aria-label":"Quantity",onIncrement:function(){return S((function(e){return Math.min(e+1,20)}))},onDecrement:function(){return S((function(e){return Math.max(1,e-1)}))},onChange:function(e){return S(e.currentTarget.value)},value:C,min:"1",max:"20"}),a.createElement(d,{variantId:x.storefrontId,quantity:C,available:P})),a.createElement("div",{className:"product-page-module--metaSection--lSCM7"},a.createElement("span",{className:g},"Type"),a.createElement("span",{className:b},a.createElement(o.rU,{to:r.productTypeSlug},r.productType)),a.createElement("span",{className:g},"Tags"),a.createElement("span",{className:b},r.tags.map((function(e){return a.createElement(o.rU,{to:"/search?t="+e},e)}))))))))}},5325:function(e,t,r){"use strict";r.d(t,{T:function(){return n},j:function(){return a}});var n=function(e,t){return Intl.NumberFormat("en-US",{currency:e,minimumFractionDigits:2,style:"currency"}).format(t)},a=function(e,t){if(void 0===t&&(t=void 0),e){var r=Intl.NumberFormat(t,{currency:e,style:"currency"}),n=r.formatToParts(100).find((function(e){return"currency"===e.type})).value;return{symbol:n,symbolAtEnd:r.format(100).endsWith(n)}}}}}]);
//# sourceMappingURL=component---src-pages-products-shopify-product-product-type-shopify-product-handle-jsx-b02dcf24df4ce14dfe8c.js.map