(self.webpackChunkgatsby_starter_shopify=self.webpackChunkgatsby_starter_shopify||[]).push([[254],{935:function(e,t,n){var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,o=parseInt,i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,m=i||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,f=Math.min,p=function(){return m.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?o(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var r,a,c,l,o,i,u=0,m=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,c=a;return r=a=void 0,u=t,l=e.apply(c,n)}function E(e){return u=e,o=setTimeout(N,t),m?y(e):l}function b(e){var n=e-i;return void 0===i||n>=t||n<0||s&&e-u>=c}function N(){var e=p();if(b(e))return w(e);o=setTimeout(N,function(e){var n=t-(e-i);return s?f(n,c-(e-u)):n}(e))}function w(e){return o=void 0,g&&r?y(e):(r=a=void 0,l)}function O(){var e=p(),n=b(e);if(r=arguments,a=this,i=e,n){if(void 0===o)return E(i);if(s)return o=setTimeout(N,t),y(i)}return void 0===o&&(o=setTimeout(N,t)),l}return t=v(t)||0,h(n)&&(m=!!n.leading,c=(s="maxWait"in n)?d(v(n.maxWait)||0,t):c,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==o&&clearTimeout(o),u=0,r=i=a=o=void 0},O.flush=function(){return void 0===o?l:w(p())},O}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.createContext&&r.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return r.createElement(m,l({attr:l({},e.attr)},t),i(e.child))}}function m(e){var t=function(t){var n,a=e.attr,c=e.size,i=e.title,u=o(e,["attr","size","title"]),m=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==c?r.createElement(c.Consumer,null,(function(e){return t(e)})):t(a)}},4961:function(e,t,n){"use strict";n.r(t),n.d(t,{GatsbyImage:function(){return r.G},LaterHydrator:function(){return r.c},MainImage:function(){return r.M},Placeholder:function(){return r.P},StaticImage:function(){return r.S},generateImageData:function(){return r.i},getImage:function(){return r.d},getImageData:function(){return r.h},getLowResolutionImageURL:function(){return r.j},getSrc:function(){return r.e},getSrcSet:function(){return r.f},withArtDirection:function(){return r.w}});var r=n(396);n(7294),n(4041),n(2369),n(3935)},7549:function(e,t,n){"use strict";var r=n(319),a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.getShopifyImage=t.urlBuilder=void 0;var c=n(4961),l=new Set(["jpg","png","webp","auto"]);function o(e){var t=e.width,n=e.height,a=e.baseUrl,c=e.format;l.has(c)||(console.warn(c+" is not a valid format. Valid formats are: "+r(l).join(", ")),c="auto");var o=a.split("?"),i=o[0],u=o[1],m=i.lastIndexOf("."),s="";-1!==m&&(s=i.slice(m+1),i=i.slice(0,m));return i+"_"+t+"x"+n+"_crop_center"+(c===s||"auto"===c?"."+s:"."+s+"."+c)+"?"+u}t.urlBuilder=o,t.getShopifyImage=function(e){var t=e.image,n=a(e,["image"]),r=t.originalSrc,l=t.width,i=t.height;return(0,c.getImageData)(Object.assign(Object.assign({},n),{baseUrl:r,sourceWidth:l,sourceHeight:i,urlBuilder:o,formats:["auto"]}))}},9816:function(e,t,n){"use strict";t.f=void 0;var r=n(7549);Object.defineProperty(t,"f",{enumerable:!0,get:function(){return r.getShopifyImage}})},1928:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(3366),a=n(7294),c=n(2775),l="numeric-input-module--input--aI96j",o=["onIncrement","onDecrement","className","disabled"];function i(e){var t=e.onIncrement,n=e.onDecrement,i=e.className,u=e.disabled,m=(0,r.Z)(e,o);return a.createElement("div",{className:"numeric-input-module--wrap---fT8G"},a.createElement("input",Object.assign({disabled:u,type:"numeric",className:[l,i].join(" ")},m)),a.createElement("button",{disabled:u,className:"numeric-input-module--increment--KIhFN","aria-label":"Increment",onClick:t},a.createElement("span",null,"+"),a.createElement(c.y$z,null)),a.createElement("button",{disabled:u,className:"numeric-input-module--decrement--Wep4c","aria-label":"Decrement",onClick:n},a.createElement("span",null,"-"),a.createElement(c.gwH,null)))}},5830:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(7294),a=n(1597),c=n(3587),l=n(2794),o=n(935),i=n.n(o),u=n(5325),m=n(396),s=n(9816);var d=function(e){return r.createElement("svg",Object.assign({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M9 9h2v8H9V9zM12.999 9h2v8h-2V9z",fill:"currentColor"}),r.createElement("path",{stroke:"currentColor",strokeWidth:2,d:"M10 9v8"}),r.createElement("path",{stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",d:"M20 6H4"}),r.createElement("path",{stroke:"currentColor",strokeWidth:2,d:"M14 9v8M8 4.75C8 3.784 8.784 3 9.75 3h4.5c.966 0 1.75.784 1.75 1.75V6H8V4.75z"}),r.createElement("path",{d:"M6 6h12v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6z",stroke:"currentColor",strokeWidth:2}))},f=n(1928);function p(e){var t,n=e.item,a=r.useContext(l.x),c=a.removeLineItem,o=a.checkout,p=a.updateLineItem,h=a.loading,v=r.useState(n.quantity),g=v[0],y=v[1],E=Object.assign({},n.variant.image,{originalSrc:n.variant.image.src}),b=(0,u.T)(n.variant.priceV2.currencyCode,Number(n.variant.priceV2.amount)),N=(0,u.T)(n.variant.priceV2.currencyCode,Number(n.variant.priceV2.amount)*g),w=i()((function(e){return p(o.id,n.id,e)}),300),O=r.useCallback((function(e){return w(e)}),[]),j=function(e){""!==e&&Number(e)<1||(y(e),Number(e)>=1&&O(e))};var C=r.useMemo((function(){return(0,s.f)({image:E,layout:"constrained",crop:"contain",width:160,height:160})}),[E.src]);return r.createElement("tr",null,r.createElement("td",null,C&&r.createElement(m.G,{key:E.src,image:C,alt:null!==(t=E.altText)&&void 0!==t?t:n.variant.title})),r.createElement("td",null,r.createElement("h2",{className:"line-item-module--title--5L2ju"},n.title),r.createElement("div",{className:"line-item-module--variant--K9VDH"},"Default Title"===n.variant.title?"":n.variant.title),r.createElement("div",{className:"line-item-module--remove--d53MQ"},r.createElement("button",{onClick:function(){c(o.id,n.id)}},r.createElement(d,null)," Remove"))),r.createElement("td",{className:"line-item-module--priceColumn--4fOMG"},b),r.createElement("td",null,r.createElement(f.A,{disabled:h,value:g,"aria-label":"Quantity",onIncrement:function(){j(Number(g||0)+1)},onDecrement:function(){j(Number(g||0)-1)},onChange:function(e){return j(e.currentTarget.value)}})),r.createElement("td",{className:"line-item-module--totals--aZEC6"},N))}var h="cart-module--totals--uOD2I",v="cart-module--summary--FNRo3",g="cart-module--labelColumn--7C3iw",y="cart-module--collapseColumn--iNrRF";function E(){var e=r.useContext(l.x),t=e.checkout,n=e.loading,o=0===t.lineItems.length;return r.createElement(c.A,null,r.createElement("div",{className:"cart-module--wrap--Aqn7N"},o?r.createElement("div",{className:"cart-module--emptyStateContainer--HM5Yo"},r.createElement("h1",{className:"cart-module--emptyStateHeading--u5LZO"},"Your cart is empty"),r.createElement("p",null,"Looks like you haven’t found anything yet. We understand that sometimes it’s hard to choose — maybe this helps:"),r.createElement(a.rU,{to:"/search?s=BEST_SELLING",className:"cart-module--emptyStateLink--CBOMh"},"View trending products")):r.createElement(r.Fragment,null,r.createElement("h1",{className:"cart-module--title--Z68P9"},"Your cart"),r.createElement("table",{className:"cart-module--table--rAqU3"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"cart-module--imageHeader--xEUH4"},"Image"),r.createElement("th",{className:"cart-module--productHeader--aAjB+"},"Product"),r.createElement("th",{className:y},"Price"),r.createElement("th",null,"Qty."),r.createElement("th",{className:[h,y].join(" ")},"Total"))),r.createElement("tbody",null,t.lineItems.map((function(e){return r.createElement(p,{item:e,key:e.id})})),r.createElement("tr",{className:v},r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:g},"Subtotal"),r.createElement("td",{className:h},(0,u.T)(t.subtotalPriceV2.currencyCode,t.subtotalPriceV2.amount))),r.createElement("tr",{className:v},r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:g},"Taxes"),r.createElement("td",{className:h},(0,u.T)(t.totalTaxV2.currencyCode,t.totalTaxV2.amount))),r.createElement("tr",{className:v},r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:g},"Shipping"),r.createElement("td",{className:h},"Calculated at checkout")),r.createElement("tr",{className:"cart-module--grandTotal--KehhY"},r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:y}),r.createElement("td",{className:g},"Total Price"),r.createElement("td",{className:h},(0,u.T)(t.totalPriceV2.currencyCode,t.totalPriceV2.amount))))),r.createElement("button",{onClick:function(){window.open(t.webUrl)},disabled:n,className:"cart-module--checkoutButton--T0q0g"},"Checkout"))))}},5325:function(e,t,n){"use strict";n.d(t,{T:function(){return r},j:function(){return a}});var r=function(e,t){return Intl.NumberFormat("en-US",{currency:e,minimumFractionDigits:2,style:"currency"}).format(t)},a=function(e,t){if(void 0===t&&(t=void 0),e){var n=Intl.NumberFormat(t,{currency:e,style:"currency"}),r=n.formatToParts(100).find((function(e){return"currency"===e.type})).value;return{symbol:r,symbolAtEnd:n.format(100).endsWith(r)}}}}}]);
//# sourceMappingURL=component---src-pages-cart-jsx-8baf666105a5bb8bff9e.js.map