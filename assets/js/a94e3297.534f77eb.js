"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8960],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),v=a,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6649:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_label:"Interact with Universal Receiver",sidebar_position:2.3},c="Interact with a Universal Receiver",s={unversionedId:"standards/getting-started/interact-universal-receiver",id:"standards/getting-started/interact-universal-receiver",isDocsHomePage:!1,title:"Interact with a Universal Receiver",description:"A Universal Receiver Delegate enables you to delegate the universalReceiver functionality to another smart contract.",source:"@site/docs/standards/getting-started/03-interact-universal-receiver.md",sourceDirName:"standards/getting-started",slug:"/standards/getting-started/interact-universal-receiver",permalink:"/standards/getting-started/interact-universal-receiver",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/getting-started/03-interact-universal-receiver.md",tags:[],version:"current",sidebarPosition:2.3,frontMatter:{sidebar_label:"Interact with Universal Receiver",sidebar_position:2.3},sidebar:"standardsSidebar",previous:{title:"Add control with a Key Manager",permalink:"/standards/getting-started/add-key-manager"},next:{title:"LSP1 - Universal Receiver",permalink:"/standards/lukso-standard-proposals/lsp1-universal-receiver"}},u=[{value:"Deploy your Universal Receiver Delegate",id:"deploy-your-universal-receiver-delegate",children:[],level:2},{value:"Link your URD to your UP",id:"link-your-urd-to-your-up",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interact-with-a-universal-receiver"},"Interact with a Universal Receiver"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Coming Soon")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"A Universal Receiver Delegate enables you to delegate the ",(0,i.kt)("inlineCode",{parentName:"p"},"universalReceiver")," functionality to another smart contract."),(0,i.kt)("h2",{id:"deploy-your-universal-receiver-delegate"},"Deploy your Universal Receiver Delegate"),(0,i.kt)("p",null,"Deploy the contract with web3.js / ethers.js"),(0,i.kt)("h2",{id:"link-your-urd-to-your-up"},"Link your URD to your UP"),(0,i.kt)("p",null,"In order to enable your URD on your Universal profile, you need to set the address of your UniversalReceiverDelegate contract in the following key on your Universal Profile."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"key:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47")," (",(0,i.kt)("inlineCode",{parentName:"li"},"keccak256('LSP1UniversalReceiverDelegate')"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"<urd-contract-address>"))),(0,i.kt)("p",null,"As a result, your Universal Profile contract will know at which contract address the functionality is handled."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"add code snippets for web3.js / ethers.js")))}p.isMDXComponent=!0}}]);