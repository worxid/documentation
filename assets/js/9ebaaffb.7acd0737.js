"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),b=s,h=p["".concat(l,".").concat(b)]||p[b]||m[b]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,a[1]=r;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(7462),s=(n(7294),n(3905));const o={sidebar_position:2},a="Viewing All Submissions",r={unversionedId:"website-application-usage/submissions/viewing-all-submissions",id:"website-application-usage/submissions/viewing-all-submissions",title:"Viewing All Submissions",description:"In the initial Submissions page condition as shown above, the table on the Submissions page will display the data in the order of the most recent submission at the beginning and the oldest submission at the end of the table row. Here is an explanation of each column in the table on the Submissions page:",source:"@site/docs/website-application-usage/submissions/viewing-all-submissions.md",sourceDirName:"website-application-usage/submissions",slug:"/website-application-usage/submissions/viewing-all-submissions",permalink:"/website-application-usage/submissions/viewing-all-submissions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/website-application-usage/submissions/viewing-all-submissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/website-application-usage/submissions/introduction"},next:{title:"Viewing the Submission Location",permalink:"/website-application-usage/submissions/viewing-submission-location"}},l={},c=[],u={toc:c};function m(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"viewing-all-submissions"},"Viewing All Submissions"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(4722).Z,width:"1280",height:"619"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9069).Z,width:"1280",height:"619"})),(0,s.kt)("p",null,"In the initial Submissions page condition as shown above, the table on the Submissions page will display the data in the order of the most recent submission at the beginning and the oldest submission at the end of the table row. Here is an explanation of each column in the table on the Submissions page:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Static columns (columns that must be present in each submission) consisting of these columns:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Source: the source of the submission whose value can be a device label or a web browser.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Submission Date: the date and time of submission.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Map: the location of the submission."))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"The remaining columns are dynamic columns taken from each question on a form. Each form can have different questions. So the fields displayed on this submission page can be different from one form to another.")),(0,s.kt)("p",null,"The table on this page does not have all the features mentioned on the table component page documentation. The column-based filter feature in a table can only be used for the source column. The column-based sort feature can only be used in the source and submission date columns. The hide or show columns feature can only be done on columns that are static. You can set the time range of submissions that you want to display on the table by clicking the calendar icon button located at the top right of the table. The modal to change the date range will appear as shown below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(750).Z,width:"1280",height:"619"})),(0,s.kt)("p",null,'Click the "Select" button to select the final date range or click the "Cancel" button to cancel the changes to the date range value.'))}m.isMDXComponent=!0},4722:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/viewing-all-submissions-1-603d16f01a2fa27b67e030c7942daa38.png"},9069:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/viewing-all-submissions-2-1749645cf677c0c62ed1884c06a758bc.png"},750:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/viewing-all-submissions-3-7cc92e8264eea516b34838292bd2c369.png"}}]);