"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9374],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,v=u["".concat(o,".").concat(m)]||u[m]||p[m]||s;return a?r.createElement(v,l(l({ref:t},d),{},{components:a})):r.createElement(v,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1111:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=a(3117),n=a(102),s=(a(7294),a(3905)),l=["components"],i={title:"LSP1 Universal Receiver Delegate Vault",sidebar_position:9},o="LSP1UniversalReceiverDelegateVault",c={unversionedId:"standards/smart-contracts/lsp1-universal-receiver-delegate-vault",id:"standards/smart-contracts/lsp1-universal-receiver-delegate-vault",title:"LSP1 Universal Receiver Delegate Vault",description:"The LSP1UniversalReceiverDelegateVault is the contract called by the universalReceiver function of the LSP9Vault contract that:",source:"@site/docs/standards/smart-contracts/lsp1-universal-receiver-delegate-vault.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault",permalink:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/lsp1-universal-receiver-delegate-vault.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"LSP1 Universal Receiver Delegate Vault",sidebar_position:9},sidebar:"standardsSidebar",previous:{title:"LSP9 Vault",permalink:"/standards/smart-contracts/lsp9-vault"},next:{title:"Interfaces Ids",permalink:"/standards/smart-contracts/interface-ids"}},d=[{value:"Functions",id:"functions",children:[{value:"Constructor",id:"constructor",children:[],level:3},{value:"universalReceiverDelegate",id:"universalreceiverdelegate",children:[{value:"Parameters:",id:"parameters",children:[],level:4},{value:"Return Values:",id:"return-values",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp1universalreceiverdelegatevault"},"LSP1UniversalReceiverDelegateVault"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"LSP1UniversalReceiverDelegateVault")," is the contract called by the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp9-vault#universalreceiver"},"universalReceiver"))," function of the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp9-vault"},"LSP9Vault"))," contract that:\nIt writes the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/nft-2.0/LSP7-Digital-Asset"},"LSP7-DigitalAsset"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},"LSP8-IdentifiableDigitalAsset"))," assets a vault receives into the vault storage, and remove them on zero balance according to the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5-ReceivedAssets standard")),".  "),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"LSP1UniversalReceiverDelegateVault contract also contains the methods from")," ",(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},(0,s.kt)("em",{parentName:"a"},"ERC165"))," :")),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"supportsInterface (bytes4 interfaceId) public view  returns (bool)"))))),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"constructor"},"Constructor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"  constructor()\n")),(0,s.kt)("p",null,"Registers ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/interface-ids"},"LSP1UniversalReceiverDelegate InterfaceId")),"."),(0,s.kt)("h3",{id:"universalreceiverdelegate"},"universalReceiverDelegate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"  function universalReceiverDelegate(\n    address sender,\n    bytes32 typeId,\n    bytes memory data\n  ) public payable returns (bytes memory result)\n")),(0,s.kt)("p",null,"Writes the received ",(0,s.kt)("strong",{parentName:"p"},"LSP7DigitalAsset"),", ",(0,s.kt)("strong",{parentName:"p"},"LSP8IdentifiableDigitalAsset")," assets into the vault storage according to the ",(0,s.kt)("strong",{parentName:"p"},"LSP5ReceivedAssets")," Standards. "),(0,s.kt)("p",null,"The keys representing an ",(0,s.kt)("strong",{parentName:"p"},"asset")," are cleared when the asset is not owned by the vault anymore."),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"sender")),(0,s.kt)("td",{parentName:"tr",align:"left"},"address"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The token smart contract address.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"typeId")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The token hooks.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"data")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The concatenated data about asset transfer.")))),(0,s.kt)("h4",{id:"return-values"},"Return Values:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"result")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Empty bytes")))),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver"},"LSP1 Universal Receiver: Solidity implementations (GitHub)"))))}u.isMDXComponent=!0}}]);