"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},i="Pagination",c={unversionedId:"website-application-usage/table-component/pagination",id:"website-application-usage/table-component/pagination",title:"Pagination",description:"There are two elements in the page numbering feature of a table, namely the number of rows of each page (left) and the number of things (right) as shown in this image below. This feature is located in the bottom right corner of a table.",source:"@site/docs/website-application-usage/table-component/pagination.md",sourceDirName:"website-application-usage/table-component",slug:"/website-application-usage/table-component/pagination",permalink:"/website-application-usage/table-component/pagination",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/website-application-usage/table-component/pagination.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Date Range Filter",permalink:"/website-application-usage/table-component/date-range-filter"},next:{title:"Detailed Information Panel",permalink:"/website-application-usage/table-component/detailed-information-panel"}},s={},p=[],l={toc:p};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"There are two elements in the page numbering feature of a table, namely the number of rows of each page (left) and the number of things (right) as shown in this image below. This feature is located in the bottom right corner of a table."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3238).Z+"#center",width:"400",height:"51"})),(0,r.kt)("p",null,"In the initial state, a table will display the first hundred data on the first page. You can view data on the other pages by clicking the left arrow icon key (to access the previous page) or the right arrow icon key (to access the right arrow button (to access the next page). You can also change the value of the number of rows you want to display on a page by passing the number of rows per page as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1361).Z,width:"1280",height:"619"})))}g.isMDXComponent=!0},3238:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pagination-2-38f9ac28ec6c8fa93a7a4e34e49f2cc1.png"}}]);