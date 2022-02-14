"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9920],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(h,o(o({ref:e},d),{},{components:n})):a.createElement(h,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7039:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"Introduction",sidebar_position:1},l="Smart Contract Implementation",c={unversionedId:"standards/smart-contracts/introduction",id:"standards/smart-contracts/introduction",title:"Introduction",description:"In this section, you will find the implementation of LUKSO Standard Proposals, some of the standards do not have a contract implementation as they represent Metadata-Standards to be used in the implementation contracts.",source:"@site/docs/standards/smart-contracts/01-introduction.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/introduction",permalink:"/standards/smart-contracts/introduction",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"standardsSidebar",previous:{title:"LSP8 - Identifiable Digital Asset (NFT)",permalink:"/standards/nft-2.0/LSP8-Identifiable-Digital-Asset"},next:{title:"LSP0 ERC725Account",permalink:"/standards/smart-contracts/lsp0-erc725-account"}},d=[{value:"Overview",id:"overview",children:[{value:"UniversalProfile",id:"universalprofile",children:[],level:3},{value:"Digtal Assets (Tokens) and NFT 2.0",id:"digtal-assets-tokens-and-nft-20",children:[],level:3},{value:"Periphery",id:"periphery",children:[],level:3}],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Create your own UniversalProfile",id:"create-your-own-universalprofile",children:[],level:3},{value:"Create your own Fungible token",id:"create-your-own-fungible-token",children:[],level:3}],level:2},{value:"Learn More",id:"learn-more",children:[],level:2}],u={toc:d};function p(t){var e=t.components,n=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"smart-contract-implementation"},"Smart Contract Implementation"),(0,s.kt)("p",null,"In this section, you will find the implementation of ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/standards/introduction"},"LUKSO Standard Proposals")),", some of the standards do not have a contract implementation as they represent ",(0,s.kt)("strong",{parentName:"p"},"Metadata-Standards")," to be used in the implementation contracts."),(0,s.kt)("p",null,"Developers wishing to understand the standards in terms of code and the tradeoffs within, will be well-advised to read these documents alongside the Solidity code itself."),(0,s.kt)("p",null,"The smart contracts are public and open source. They can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},"on Github"),", and in the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},"NPM package available here"),"."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The contracts could be divided by their usage, some of them are related to the ",(0,s.kt)("strong",{parentName:"p"},"UniversalProfiles"),", some of them are related to the ",(0,s.kt)("strong",{parentName:"p"},"Digtal Assets and NFT 2.0")," and some have more ",(0,s.kt)("strong",{parentName:"p"},"general usecases"),"."),(0,s.kt)("h3",{id:"universalprofile"},"UniversalProfile"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"UniversalProfile")," contracts allows a better representation of the identity on the blockchain and a better control over it."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp0-erc725-account"},"LSP0ERC725Account")),": The contract to be used as an account that represent an ",(0,s.kt)("strong",{parentName:"li"},"identity on-chain"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP")),": The contract that allows the account to react to the calls that it receives (Normal transaction, Token transfer, Vaults transfer etc .. )."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp6-key-manager"},"LSP6KeyManager")),": The contract that allows a better ",(0,s.kt)("strong",{parentName:"li"},"multi-control")," over the account along with different permissions.")),(0,s.kt)("h3",{id:"digtal-assets-tokens-and-nft-20"},"Digtal Assets (Tokens) and NFT 2.0"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Digtal Assets and NFT 2.0")," contracts are the newest advanced version of the token standards with many features that enhance the securiy and the overall user experience, as well as compatibility with ",(0,s.kt)("a",{parentName:"p",href:"../universal-profile/lsp0-erc725account"},"ERC725Accounts")," and ",(0,s.kt)("a",{parentName:"p",href:"../generic-standards/lsp1-universal-receiver"},"universal recievers"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"./lsp4-digital-asset-metadata"},"LSP4DigitalAsset-Metadata")),": The contract that sets the ",(0,s.kt)("strong",{parentName:"li"},"DigitalAsset-Metadata"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp7-digital-asset"},"LSP7DigitalAsset")),": The contract that can represent either fungible or non-fungible tokens (NFTs)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp8-identifiable-digital-asset"},"LSP8IdentifiableDigitalAsset")),": The contract that represent an non-fungible token (NFTs), with a ",(0,s.kt)("strong",{parentName:"li"},"bytes32 tokenId")," to allow many uses of token identification including numbers, contract addresses, and hashed values (ie. serial numbers).")),(0,s.kt)("h3",{id:"periphery"},"Periphery"),(0,s.kt)("p",null,"These contracts are not just related to one specific section but could be used together with the ",(0,s.kt)("strong",{parentName:"p"},"UniversalProfile")," and ",(0,s.kt)("strong",{parentName:"p"},"Digital Asset and NFT 2.0")," contracts."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp9-vault"},"LSP9Vault")),": The contract that represent a ",(0,s.kt)("strong",{parentName:"li"},"Vault")," able to execute and hold assets, could be owned by a ",(0,s.kt)("strong",{parentName:"li"},"LSP0ERC725Account")," contract."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},"LSP1UniversalReceiverDelegateVault")),": The contract that allow the vault to react to the calls it receives (Normal transaction, Token transfer, etc .. ).")),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lukso/lsp-smart-contracts\n")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"create-your-own-universalprofile"},"Create your own UniversalProfile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},'// MyUP.sol\n// SPDX-License-Identifier: MIT\n\nimport "@lukso/lsp-smart-contracts/contracts/UniversalProfile.sol";\n\npragma solidity ^0.8.0;\n\ncontract MyUP is UniversalProfile {\n\n    constructor() UniversalProfile(msg.sender) {\n        // ..\n    }\n}\n')),(0,s.kt)("h3",{id:"create-your-own-fungible-token"},"Create your own Fungible token"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},'// MyToken.sol\n// SPDX-License-Identifier: MIT\n\nimport "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";\n\npragma solidity ^0.8.0;\n\ncontract MyToken is LSP7DigitalAsset {\n    // 4th argument (false) marks that this contract serves as a Fungible Token and not as a NFT.\n    constructor() LSP7DigitalAsset("MyToken","MTKN",msg.sender,false) {\n        // ..\n    }\n\n    function mint() public {\n        _mint(...);\n    }\n}\n')),(0,s.kt)("h2",{id:"learn-more"},"Learn More"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://youtu.be/SbTo_e3l_Lk?t=1727"},"UniversalProfile & Identity Section"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://youtu.be/hg1Ow6u9QVk"},"NFT 2.0 Section")))))}p.isMDXComponent=!0}}]);