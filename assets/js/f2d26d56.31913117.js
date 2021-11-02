"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[812],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"getting-started",title:"Getting Started",sidebar_position:1},i=void 0,c={unversionedId:"tools/getting-started",id:"tools/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Here you will find tutorials and tools that help you building on LUKSO. As LUKSO is an EVM based Blockchain, all tools tutorials for Ethereum work well for LUKSO to, if you need EVM and Smart Contract knowledge we advise you look at these great resources from the Ethereum Foundation.",source:"@site/docs/tools/getting-started.md",sourceDirName:"tools",slug:"/tools/getting-started",permalink:"/tools/getting-started",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started",sidebar_position:1},sidebar:"toolsSidebar",next:{title:"Getting Started",permalink:"/tools/erc725js/getting-started"}},d=[{value:"UP in 1-2-3",id:"up-in-1-2-3",children:[],level:2},{value:"\ud83d\udee0 Tools",id:"-tools",children:[],level:2},{value:"\ud83d\udd0c Services",id:"-services",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here you will find tutorials and tools that help you building on LUKSO. As LUKSO is an EVM based Blockchain, all tools tutorials for Ethereum work well for LUKSO to, if you need EVM and Smart Contract knowledge we advise you look at ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/learning-tools/"},"these great resources from the Ethereum Foundation"),"."),(0,o.kt)("p",null,"Other than most EVM chains, you're encouraged on LUKSO to mainly use ",(0,o.kt)("a",{parentName:"p",href:"/standards/Universal-Profiles"},"Universal Profiles")," as the main account of your dApps and as a gateway for your users to the LUKSO Blockchain. It is discouraged to use simple EOAs as accounts, as they are insecure, inflexible and don't track incoming assets."),(0,o.kt)("h2",{id:"up-in-1-2-3"},"UP in 1-2-3"),(0,o.kt)("p",null,"This little tutorial will show you how to deploy and interact with a UniversalProfile.\nYou can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run this tutorial in the console of ",(0,o.kt)("a",{parentName:"li",href:"https://universalprofile.cloud"},"https://universalprofile.cloud"),", which has all necessary contract objects available"),(0,o.kt)("li",{parentName:"ul"},"clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Hugoo/up-sample-react-app"},(0,o.kt)("inlineCode",{parentName:"a"},"up-sample-react-app"))," repo and work in it"),(0,o.kt)("li",{parentName:"ul"},"write your own JS/TS scripts"),(0,o.kt)("li",{parentName:"ul"},"check the ",(0,o.kt)("a",{parentName:"li",href:"https://hugoo.github.io/up-sample-react-app/"},"demo app"))),(0,o.kt)("p",null,"First, generate a key that will control your UP and fund it via the ",(0,o.kt)("a",{parentName:"p",href:"http://faucet.l14.lukso.network"},"L14 Faucet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Load web3"',title:'"Load','web3"':!0},"import Web3 from 'web3'\n\nconst web3 = new Web3('https://rpc.l14.lukso.network')\n\nconst myDummyPassword = 'mypassword'\n\n// Here we try to load an already created key from the localstorage\nweb3.eth.accounts.wallet.load(myDummyPassword)\n\n// If none exists we create a new key\nif(!web3.eth.accounts.wallet.length) {\n  \n    web3.eth.accounts.wallet.create(1)\n    web3.eth.accounts.wallet.save(myDummyPassword)\n\n    // Then we log the address and send test LYX from the L14 faucet here: http://faucet.l14.lukso.network\n    console.log('My new key address ', web3.eth.accounts.wallet[0].address)\n\n// If we already have a key created we display it, with its current balance\n} else {\n    const myKeyAddress = web3.eth.accounts.wallet[0].address\n\n    console.log('Loaded existing key address ', myKeyAddress)\n    console.log('Balance ', web3.utils.fromWei(await web3.eth.getBalance(myKeyAddress), 'ether'), 'LYXt')\n}\n\n// Stop here if our key is yet created and funded\nif(!myKeyAddress)\n    return\n")),(0,o.kt)("p",null,"Next we deploy your UP smart contracts using the ",(0,o.kt)("a",{parentName:"p",href:"./lsp-factoryjs/getting-started"},"lsp-factory.js NPM package"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Deploy and configure contracts with lsp-factory.js"',title:'"Deploy',and:!0,configure:!0,contracts:!0,with:!0,'lsp-factory.js"':!0},'import { LSPFactory } from \'@lukso/lsp-factory.js\'\n\n// We initialize the LSPFactory with the right chain RPC endpoint and a privatekey from which we will deploy the UPs\nconst lspFactory = new LSPFactory("https://rpc.l14.lukso.network", {\n   chainId: 22, // L14s chain Id\n   deployKey: web3.eth.accounts.wallet[0].privateKey\n});\n\nconst deployedContracts = await lspFactory.LSP3UniversalProfile.deploy({\n  controllerAddresses: [myKeyAddress], // our key will be controlling our UP in the beginning\n  lsp3Profile: {\n    name: "My Universal Profile",\n    description: "My Cool Universal Profile",\n    profileImage: [fileBlob], // got some Image uploaded?\n    backgroundImage: [],\n    tags: [\'Public Profile\'],\n    links: [\n      {\n        title: "My Website",\n        url: "http://my-website.com",\n      },\n   ],\n  }\n});\n\n// Get the UP address\nconst myUPAddress = deployedContracts.ERC725Account.address;\n// 0xB46BBD556589565730C06bB4B7454B1596c9E70A\n')),(0,o.kt)("p",null,"We can read the UP smart contract ERC725Y keys/values with the ",(0,o.kt)("a",{parentName:"p",href:"./erc725js/getting-started"},"erc725.js NPM package"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Read Universal Profile ERC725 keys/values with erc725.js"',title:'"Read',Universal:!0,Profile:!0,ERC725:!0,"keys/values":!0,with:!0,'erc725.js"':!0},"import { ERC725 } from '@erc725/erc725.js';\n\n// Part of LSP3-UniversalProfile Schema\n// https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-3-UniversalProfile.md\nconst schema = [\n  {\n    name: 'SupportedStandards:ERC725Account',\n    key: '0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6',\n    keyType: 'Mapping',\n    valueContent: '0xafdeb5d6',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP3Profile',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n    keyType: 'Singleton',\n    valueContent: 'JSONURL',\n    valueType: 'bytes',\n  },\n  {\n    name: 'LSP1UniversalReceiverDelegate',\n    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',\n    keyType: 'Singleton',\n    valueContent: 'Address',\n    valueType: 'address',\n  },\n];\n\nconst provider = new Web3.providers.HttpProvider(\"https://rpc.l14.lukso.network\");\n\nconst erc725 = new ERC725(schema, myUPAddress, provider);\nconst config = {\n    ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n};\n\nconst data = await erc725.fetchData();\n\nconsole.log(data);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="console.log(data)"',title:'"console.log(data)"'},'{\n  "SupportedStandards:ERC725Account": "0xafdeb5d6",\n  "LSP3Profile": {\n    "LSP3Profile": {\n      "name": "My Universal Profile",\n      "description": "My Cool Universal Profile",\n      "backgroundImage": [],\n      "tags": [\n        "Public Profile"\n      ],\n      "links": [\n        {\n          "title": "My Website",\n          "url": "http://my-website.com"\n        }\n      ]\n    }\n  },\n  "LSP1UniversalReceiverDelegate": "0x9A668677384CD4F5c49Cb057f0cEB2b783Ed670F"\n}\n')),(0,o.kt)("p",null,"If you prefer interact directly with the contracts, you can load the ABIs from ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lukso/universalprofile-smart-contracts"},(0,o.kt)("inlineCode",{parentName:"a"},"@lukso/universalprofile-smart-contracts NPM package")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Interact directly through your UP"',title:'"Interact',directly:!0,through:!0,your:!0,'UP"':!0},"import UniversalProfile from '@lukso/universalprofile-smart-contracts/build/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/universalprofile-smart-contracts/build/artifacts/KeyManager.json';\n\nconst myUP = new web3.eth.Contract(\n    UniversalProfile.abi,\n    erc725Address,\n);\n\nconst keyManagerAddress = await myUP.methods.owner().call();\n\nconsole.log(keyManagerAddress);\n// 0x72662E4da74278430123cE51405c1e7A1B87C294\n\nconst myKeyManager = new web3.eth.Contract(\n  KeyManager.abi,\n  keyManagerAddress,\n);\n\nconst abi = myUP.methods\n  .setData(\n    ['0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5'], // LSP3Profile\n    [\n      '0x6f357c6ad6c04598b25d41b96fb88a8c8ec4f4c3de2dc9bdaab7e71f40ed012b84d0c126697066733a2f2f516d6262447348577a4d4d724538594345766e3342633254706756793176535736414d3946376168595642573874',\n    ], // encoded JSONURL: https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl\n  )\n  .encodeABI();\n\n// send your tx to the blockchain, from the controlling key address, through the key manager\nawait myKeyManager.methods.execute(abi).send({\n  from: web3.eth.accounts.wallet[0].address,\n  gas: 200_000,\n  gasPrice: web3.utils.toWei('20', 'gwei'),\n});\n")),(0,o.kt)("h2",{id:"-tools"},"\ud83d\udee0 Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./erc725js/getting-started"},"erc725.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./lsp-factoryjs/getting-started"},"lsp-factory.js"))),(0,o.kt)("h2",{id:"-services"},"\ud83d\udd0c Services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./relayer-api/execute-transaction"},"Relayer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./erc725-tools"},"ERC725 Inspect \ud83d\udcdd\ud83d\udd0d"))))}p.isMDXComponent=!0}}]);