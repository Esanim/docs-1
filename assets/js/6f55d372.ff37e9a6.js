"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[2292],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8583:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),o=["components"],i={title:"LSP1 Universal Receiver Delegate UP",sidebar_position:3},l="LSP1UniversalReceiverDelegateUP",c={unversionedId:"standards/smart-contracts/lsp1-universal-receiver-delegate-up",id:"standards/smart-contracts/lsp1-universal-receiver-delegate-up",title:"LSP1 Universal Receiver Delegate UP",description:"The LSP1UniversalReceiverDelegateUP is the contract called by the universalReceiver function of the LSP0ERC725Account contract that:",source:"@site/docs/standards/smart-contracts/lsp1-universal-receiver-delegate-up.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up",permalink:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/lsp1-universal-receiver-delegate-up.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LSP1 Universal Receiver Delegate UP",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"LSP0 ERC725Account",permalink:"/standards/smart-contracts/lsp0-erc725-account"},next:{title:"LSP6 Key Manager",permalink:"/standards/smart-contracts/lsp6-key-manager"}},p=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[],level:3},{value:"universalReceiverDelegate",id:"universalreceiverdelegate",children:[{value:"Parameters:",id:"parameters",children:[],level:4},{value:"Return Values:",id:"return-values",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lsp1universalreceiverdelegateup"},"LSP1UniversalReceiverDelegateUP"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"LSP1UniversalReceiverDelegateUP")," is the contract called by the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account#universalreceiver"},"universalReceiver"))," function of the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account"},"LSP0ERC725Account"))," contract that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Writes the keys representing ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp7-digital-asset"},"LSP7-DigitalAsset"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8-IdentifiableDigitalAsset"))," assets you receive into your account storage, and remove them on balance equal to zero according to the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5-ReceivedAssets Standard")),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Writes the keys representing ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp9-vault"},"LSP9-Vault"))," vaults you own into your account storage, and remove them when you ",(0,s.kt)("strong",{parentName:"p"},"transfer Ownership")," to other accounts according to the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP10-ReceivedVaults Standard")),"."))),(0,s.kt)("p",null,"In order to execute the logic written above, the ",(0,s.kt)("strong",{parentName:"p"},"LSP0ERC725Account")," contract should be owned by ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp6-key-manager"},"LSP6KeyManager"))," contract and the ",(0,s.kt)("strong",{parentName:"p"},"LSP1UniversalReceiverDelegateUP")," contract should be granted ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager#-address-permissions"},"the permission to setData"))," on the account, otherwise the transaction will pass but will not write any keys to the storage."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"LSP1UniversalReceiverDelegateUP contract also contains the methods from")," ",(0,s.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},(0,s.kt)("em",{parentName:"a"},"ERC165"))," :")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(bytes4 interfaceId) public view returns (bool)\n")))),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor()\n")),(0,s.kt)("p",null,"Registers ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/interface-ids"},"LSP1UniversalReceiverDelegate InterfaceId")),"."),(0,s.kt)("h3",{id:"universalreceiverdelegate"},"universalReceiverDelegate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"function universalReceiverDelegate(\n    address sender,\n    bytes32 typeId,\n    bytes memory data\n) public payable returns (bytes memory result)\n")),(0,s.kt)("p",null,"Writes the keys of the received ",(0,s.kt)("strong",{parentName:"p"},"LSP7DigitalAsset"),", ",(0,s.kt)("strong",{parentName:"p"},"LSP8IdentifiableDigitalAsset")," assets and ",(0,s.kt)("strong",{parentName:"p"},"LSP9Vault")," vaults into the account storage according to the ",(0,s.kt)("strong",{parentName:"p"},"LSP5ReceivedAssets")," and ",(0,s.kt)("strong",{parentName:"p"},"LSP10ReceivedVaults")," Standards."),(0,s.kt)("p",null,"The keys representing an ",(0,s.kt)("strong",{parentName:"p"},"asset")," or a ",(0,s.kt)("strong",{parentName:"p"},"vault")," are cleared when the asset/vault is not owned by the account anymore."),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"sender")),(0,s.kt)("td",{parentName:"tr",align:"left"},"address"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The token/vault smart contract address.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"typeId")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The token hooks.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"data")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The concatenated data about the transfer.")))),(0,s.kt)("h4",{id:"return-values"},"Return Values:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"result")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The return value of ",(0,s.kt)("strong",{parentName:"td"},"keyManager"),"'s ",(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp6-key-manager#execute"},"execute"))," function.")))),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver"},"LSP1 Universal Receiver: Solidity implementations (GitHub)"))))}u.isMDXComponent=!0}}]);