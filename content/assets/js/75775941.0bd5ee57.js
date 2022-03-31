"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60135],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,f=m["".concat(p,".").concat(h)]||m[h]||s[h]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},140:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"pulsar-client-go-0.3.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},p=void 0,u={unversionedId:"versioned/pulsar-client-go-0.3.0",id:"versioned/pulsar-client-go-0.3.0",title:"Pulsar Client Go",description:"Feature",source:"@site/release-notes/versioned/pulsar-client-go-0.3.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.3.0",permalink:"/release-notes/versioned/pulsar-client-go-0.3.0",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.3.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},c={},s=[{value:"Feature",id:"feature",level:2},{value:"Improve",id:"improve",level:2}],m={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"feature"},"Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support retry letter topic in Go client, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/359"},"PR-359"),"."),(0,l.kt)("li",{parentName:"ul"},"Support limit the retry number of reconnectToBroker, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/360"},"PR-360"),"."),(0,l.kt)("li",{parentName:"ul"},"Support key shared policy in Go client, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/363"},"PR-363"),"."),(0,l.kt)("li",{parentName:"ul"},"Add schema logic in producer and consumer, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/368"},"PR-368"),".")),(0,l.kt)("h2",{id:"improve"},"Improve"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix panic on receiverQueueSize set to ",(0,l.kt)("inlineCode",{parentName:"li"},"-1"),", see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/361"},"PR-361"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix may lead to panic test case, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/369"},"PR-369"),"."),(0,l.kt)("li",{parentName:"ul"},"Send delay message individually even batching is enabled, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/372"},"PR-372"),"."),(0,l.kt)("li",{parentName:"ul"},"Fixed buffer resize when writing request on connection, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/374"},"PR-374"),"."),(0,l.kt)("li",{parentName:"ul"},"Fixed deadlock in DLQ ack processing, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/375"},"PR-375"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix deadlock when connection closed, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/376"},"PR-376"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix producer deadlock after write failure, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/378"},"PR-378"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix maxMessageSize not effective even if aligned with broker, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/381"},"PR-381"),"."),(0,l.kt)("li",{parentName:"ul"},"Update default router to switch partition on all batching thresholds, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/383"},"PR-383"),"."),(0,l.kt)("li",{parentName:"ul"},"Replaced ",(0,l.kt)("inlineCode",{parentName:"li"},"github.com/DataDog/zstd")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"github.com/datadog/zstd"),", see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/385"},"PR-385"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix retry policy not effective with non-FQDN topics, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/386"},"PR-386"),".")))}h.isMDXComponent=!0}}]);