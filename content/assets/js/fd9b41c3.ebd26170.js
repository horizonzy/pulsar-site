"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6402],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={id:"client-cpp-2.5.1",title:"Client CPP 2.5.1",sidebar_label:"Client CPP 2.5.1"},c=void 0,l={unversionedId:"versioned/client-cpp-2.5.1",id:"versioned/client-cpp-2.5.1",title:"Client CPP 2.5.1",description:"Issue 6461Avoid calling redeliverMessages() when message list is empty #6480",source:"@site/release-notes/versioned/client-cpp-2.5.1.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.5.1",permalink:"/release-notes/versioned/client-cpp-2.5.1",tags:[],version:"current",frontMatter:{id:"client-cpp-2.5.1",title:"Client CPP 2.5.1",sidebar_label:"Client CPP 2.5.1"}},s={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[Issue 6461][C++]","Avoid calling redeliverMessages() when message list is empty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6480"},"#6480"),(0,a.kt)("br",{parentName:"p"}),"\n","Improve cpp-client-lib: provide another ",(0,a.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," in dep/rpm ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6458"},"#6458"),(0,a.kt)("br",{parentName:"p"}),"\n","[Issue 4070][pulsar-client-cpp]"," Fix for possible deadlock when closing Pulsar client ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6277"},"#6277"),(0,a.kt)("br",{parentName:"p"}),"\n","[C++]"," Fixed handling of canceled timer events on NegativeAcksTracker ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6272"},"#6272")))}m.isMDXComponent=!0}}]);