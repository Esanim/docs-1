"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[924],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,g=u["".concat(o,".").concat(p)]||u[p]||f[p]||i;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9311:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],s={sidebar_label:"Read Profile Data",sidebar_position:1},o="Read Universal Profile Data",c={unversionedId:"guides/fetch-data/read-profile-data",id:"guides/fetch-data/read-profile-data",title:"Read Universal Profile Data",description:"In this guide, we will learn how to:",source:"@site/docs/guides/fetch-data/01-read-profile-data.md",sourceDirName:"guides/fetch-data",slug:"/guides/fetch-data/read-profile-data",permalink:"/guides/fetch-data/read-profile-data",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/fetch-data/01-read-profile-data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Read Profile Data",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Give permissions to addresses",permalink:"/guides/key-manager/give-permissions"},next:{title:"Read Asset Data",permalink:"/guides/fetch-data/read-asset-data"}},d=[{value:"Setup",id:"setup",children:[],level:2},{value:"Step 1 - Check for valid Blockchain Address",id:"step-1---check-for-valid-blockchain-address",children:[],level:2},{value:"Step 2 - Call the Universal Profile",id:"step-2---call-the-universal-profile",children:[],level:2},{value:"Step 3 - Read the Dataset",id:"step-3---read-the-dataset",children:[],level:2},{value:"Final Code",id:"final-code",children:[],level:2}],f={toc:d};function u(e){var n=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"read-universal-profile-data"},"Read Universal Profile Data"),(0,i.kt)("p",null,"In this guide, we will learn how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check the validity of the blockchain address"),(0,i.kt)("li",{parentName:"ul"},"read data from a Universal Profile")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Universal Profile example on universalprofile.cloud",src:t(6149).Z})),(0,i.kt)("p",null,"We will use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.7.0/"},"web3.js")," for utility as well as connecting to the LUKSO L14 network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../tools/erc725js/getting-started/"},"erc725.js")," library to check the interface of a profile."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/matthew-andrews/isomorphic-fetch"},"isomorphic-fetch")," to enable you to use ",(0,i.kt)("inlineCode",{parentName:"li"},"fetch()")," in Node.js code")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Open a terminal in the project's folder of your choice and install all required libraries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install web3 @erc725/erc725.js isomorphic-fetch\n")),(0,i.kt)("h2",{id:"step-1---check-for-valid-blockchain-address"},"Step 1 - Check for valid Blockchain Address"),(0,i.kt)("p",null,"Within an application, the Universal Profile address is commonly used as input. We want to make sure that the address is valid in the first place. We can do a checkup by converting the value into a checksum address using the ",(0,i.kt)("inlineCode",{parentName:"p"},"web3.js")," library."),(0,i.kt)("p",null,"To make the guide more understandable, we use a sample profile address. You will most likely change this static variable with a dynamic value from an input field or fetching process within your app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"// Import and Network Setup\nconst Web3 = require('web3');\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// Our static Universal Profile address\nconst SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';\n\n/*\n * Check if input is a valid blockchain address\n *\n * @param address input\n * @return boolean result\n */\nfunction isValidAddress(address) {\n  let formattedAddress = web3.utils.toChecksumAddress(address);\n  return web3.utils.checkAddressChecksum(formattedAddress);\n}\n\n// Debug\nconsole.log(isValidAddress(SAMPLE_PROFILE_ADDRESS));\n")),(0,i.kt)("p",null,"If the function ",(0,i.kt)("inlineCode",{parentName:"p"},"isValidAddress(...)")," gives us back ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the address is valid and can be used.`"),(0,i.kt)("h2",{id:"step-2---call-the-universal-profile"},"Step 2 - Call the Universal Profile"),(0,i.kt)("p",null,"To inspect the address and check if it has an ERC725 contract, we can call its interface through the ",(0,i.kt)("inlineCode",{parentName:"p"},"erc725.js")," library. The instance of the contract will need the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../../standards/generic-standards/lsp2-json-schema/"},"LSP2 - ERC725Y JSON Schema")," describes the data in the contract storage, and which keys to use to retrieve it."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SupportedStandards")," will fetch the interface using a Metadata Standard with a key. In our case we use ",(0,i.kt)("inlineCode",{parentName:"li"},"SupportedStandards:LSP3UniversalProfile")," to check if the contract is an Universal Profile."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LSP3Profile")," fetches the data of the Universal Profile."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LSP1UniversalReceiverDelegate")," will fetch received assets."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"address"),": the address of the contract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"provider"),": a ",(0,i.kt)("a",{parentName:"p",href:"../../tools/erc725js/providers"},"provider")," object. Usually used with the RPC endpoint URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"config"),": used to configure the IPFS gateway"))),(0,i.kt)("p",null,"Besides the schema, we also use ",(0,i.kt)("inlineCode",{parentName:"p"},"isomorphic-fetch")," to fetch the HTTP response from the profile while using ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," for execution. You may not need this library if you use browser environments like ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactJS")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"VueJS"),"."),(0,i.kt)("p",null,"After we import the ERC725 object and the fetch functionality, we can declare all data needed to instantiate the ERC725 contract instance. While fetching, we can use the function from the previous step to handle errors that might occur."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"ERC725 JSON Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="erc725schema.json"',title:'"erc725schema.json"'},'[\n  {\n    "name": "SupportedStandards:ERC725Account",\n    "key": "0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",\n    "keyType": "Mapping",\n    "valueContent": "0xafdeb5d6",\n    "valueType": "bytes"\n  },\n  {\n    "name": "LSP3Profile",\n    "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",\n    "keyType": "Singleton",\n    "valueContent": "JSONURL",\n    "valueType": "bytes"\n  },\n  {\n    "name": "LSP1UniversalReceiverDelegate",\n    "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n    "keyType": "Singleton",\n    "valueContent": "Address",\n    "valueType": "address"\n  }\n]\n'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"...\n// Import and Setup\nconst { ERC725 } = require('@erc725/erc725.js');\nrequire('isomorphic-fetch');\n\n// Parameters for ERC725 Instance\nconst erc725schema = require('./erc725schema.json');\n\nconst provider = new Web3.providers.HttpProvider(\n  'https://rpc.l14.lukso.network',\n);\n\nconst config = {\n  ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n};\n\n/*\n * Try fetching the @param's Universal Provile data\n *\n * @param address of Universal Profile\n * @return string JSON or custom error\n */\nasync function getProfile(address) {\n  if (isValidAddress(address)) {\n    try {\n      const erc725 = new ERC725(erc725schema, address, provider, config);\n      return await erc725.fetchData();\n    } catch (error) {\n      return console.log('This is not an ERC725 Contract');\n    }\n  } else {\n    return console.log('This is not an blockchain address');\n  }\n}\n\n// Debug\ngetProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>\n  console.log(JSON.stringify(profileData, undefined, 2)),\n);\n")),(0,i.kt)("p",null,"If everything went fine, we now have the profile's ",(0,i.kt)("a",{parentName:"p",href:"../../standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3 - Universal Profile Metadata")," JSON. It should look like this:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show JSON response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SupportedStandards:ERC725Account": "0xafdeb5d6",\n  "LSP3Profile": {\n    "LSP3Profile": {\n      "name": "...",\n      "links": [\n        {\n          "title": "... ",\n          "url": "..."\n        },\n        ...\n      ],\n      "description": "...",\n      "profileImage": [\n        {\n          "width": 1512,\n          "height": 1998,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x...",\n          "url": "..."\n        },\n        ...\n      ],\n      "backgroundImage": [\n        {\n          "width": 1512,\n          "height": 1998,\n          "hashFunction": "keccak256(bytes)",\n          "hash": "0x...",\n          "url": "..."\n        },\n        ...\n      ],\n      "tags": ["sample profile"]\n    }\n  },\n  "LSP1UniversalReceiverDelegate": "0x..."\n}\n'))),(0,i.kt)("h2",{id:"step-3---read-the-dataset"},"Step 3 - Read the Dataset"),(0,i.kt)("p",null,"With the JSON response, we can fetch all sorts of data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Profile metadata"),(0,i.kt)("li",{parentName:"ul"},"Pictures and their properties"),(0,i.kt)("li",{parentName:"ul"},"Receiver address containing asset data")),(0,i.kt)("p",null,"Just instantiate variables for the information you would like to process. All demo fetch functions provided with this guide will come with console logs to directly see results in your terminal."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Fetch the profile's metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"...\n// Fetchable metadata information\nlet name;\nlet description;\n\nlet links = [];\nlet firstLinkTitle;\nlet firstLinkURL;\n\nlet tags = [];\nlet firstTag;\n\n/*\n * Fetch metadata information from the JSON dataset of\n * an Universal Profile\n */\nasync function fetchProfileData() {\n  profileData = await getProfile(SAMPLE_PROFILE_ADDRESS);\n  name = profileData.LSP3Profile.LSP3Profile.name;\n  description = profileData.LSP3Profile.LSP3Profile.description;\n\n  links = profileData.LSP3Profile.LSP3Profile.links;\n  firstLinkTitle = links[0].title;\n  firstLinkURL = links[0].url;\n\n  tags = profileData.LSP3Profile.LSP3Profile.tags;\n  firstTag = tags[0];\n\n    console.log('Name ' + name);\n    console.log('Description: ' + description + '\\n');\n    console.log('Links: ' + JSON.stringify(links, undefined, 2) + '\\n');\n    console.log('Title of first Link: ' + firstLinkTitle);\n    console.log('URL of first Link: ' + firstLinkURL + '\\n');\n    console.log('Tags: ' + JSON.stringify(tags, undefined, 2) + '\\n');\n    console.log('First tag: ' + firstTag + '\\n');\n}\n\n// Debug\nfetchProfileData();\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Fetch the profile's picture properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"...\n// Fetchable picture information\nlet baseURL = 'https://ipfs.lukso.network/ipfs/';\n\nlet backgroundImageLinks = [];\nlet fullSizeBackgroundImg;\n\nlet profileImageLinks = [];\nlet fullSizeProfileImg;\n\n/*\n * Fetch picture information from the JSON dataset of\n * a Universal Profile\n *\n * @return string Error\n */\nasync function fetchPictureData() {\n  pictureData = await getProfile(SAMPLE_PROFILE_ADDRESS);\n  let backgroundImagesIPFS =\n    pictureData.LSP3Profile.LSP3Profile.backgroundImage;\n  let profileImagesIPFS = pictureData.LSP3Profile.LSP3Profile.profileImage;\n\n  try{\n    for (let i in backgroundImagesIPFS) {\n      backgroundImageLinks.push([\n        i,\n        baseURL + backgroundImagesIPFS[i].url.substring(7),\n      ]);\n    }\n\n    for (let i in profileImagesIPFS) {\n      profileImageLinks.push([\n        i,\n        baseURL + profileImagesIPFS[i].url.substring(7),\n      ]);\n    }\n\n    fullSizeBackgroundImg = backgroundImageLinks[0][1];\n    fullSizeProfileImg = profileImageLinks[0][1];\n\n    console.log('Fullsize Background Image: ' + fullSizeBackgroundImg + '\\n');\n    console.log('Fullsize Background Image: ' + fullSizeProfileImg + '\\n');\n\n    console.log(\n    'Background Image Links: ' +\n      JSON.stringify(backgroundImageLinks, undefined, 2) +\n      '\\n',\n    );\n\n    console.log(\n    'Background Image Links: ' +\n      JSON.stringify(profileImageLinks, undefined, 2) +\n      '\\n',\n    );\n  }\n  catch (error) {\n      return console.log('Could not fetch images');\n  }\n}\n\n// Debug\nfetchPictureData();\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Fetch the profile's universal receiver"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"...\n/*\n * Fetch the address of the Universal Receiver from\n * the JSON dataset of an Universal Profile\n *\n * @return address of Universal Reveicer Delegate\n */\nasync function fetchReceiverData() {\n  receiverData = await getProfile(SAMPLE_PROFILE_ADDRESS);\n  return receiverData.LSP1UniversalReceiverDelegate;\n}\n\n// Debug\nfetchReceiverData().then((receiverAddress) => console.log(receiverAddress));\n"))),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("p",null,"Below is the complete code snippet of this guide, with all the steps compiled together."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"ERC725 JSON Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="erc725schema.json"',title:'"erc725schema.json"'},'[\n  {\n    "name": "SupportedStandards:ERC725Account",\n    "key": "0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",\n    "keyType": "Mapping",\n    "valueContent": "0xafdeb5d6",\n    "valueType": "bytes"\n  },\n  {\n    "name": "LSP3Profile",\n    "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",\n    "keyType": "Singleton",\n    "valueContent": "JSONURL",\n    "valueType": "bytes"\n  },\n  {\n    "name": "LSP1UniversalReceiverDelegate",\n    "key": "0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",\n    "keyType": "Singleton",\n    "valueContent": "Address",\n    "valueType": "address"\n  }\n]\n'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="read_profile.js"',title:'"read_profile.js"'},"// Import and Setup\nconst Web3 = require('web3');\nconst web3 = new Web3('https://rpc.l14.lukso.network');\nconst { ERC725 } = require('@erc725/erc725.js');\nrequire('isomorphic-fetch');\n\n// Our static Universal Profile address\nconst SAMPLE_PROFILE_ADDRESS = '0x0C03fBa782b07bCf810DEb3b7f0595024A444F4e';\n\n// Parameters for ERC725 Instance\nconst erc725schema = require('./erc725schema.json');\n\nconst provider = new Web3.providers.HttpProvider(\n  'https://rpc.l14.lukso.network',\n);\n\nconst config = {\n  ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n};\n\n// Fetchable metadata information\nlet name;\nlet description;\n\nlet links = [];\nlet firstLinkTitle;\nlet firstLinkURL;\n\nlet tags = [];\nlet firstTag;\n\n// Fetchable picture information\nlet baseURL = 'https://ipfs.lukso.network/ipfs/';\n\nlet backgroundImageLinks = [];\nlet fullSizeBackgroundImg;\n\nlet profileImageLinks = [];\nlet fullSizeProfileImg;\n\n/*\n * Check if input is a valid blockchain address\n *\n * @param address input\n * @return boolean result\n */\nfunction isValidAddress(address) {\n  let formattedAddress = web3.utils.toChecksumAddress(address);\n  return web3.utils.checkAddressChecksum(formattedAddress);\n}\n\n/*\n * Try fetching the @param's Universal Provile data\n *\n * @param address of Universal Profile\n * @return string JSON or custom error\n */\nasync function getProfile(address) {\n  if (isValidAddress(address)) {\n    try {\n      const erc725 = new ERC725(erc725schema, address, provider, config);\n      return await erc725.fetchData();\n    } catch (error) {\n      return console.log('This is not an ERC725 Contract');\n    }\n  } else {\n    return console.log('This is not an blockchain address');\n  }\n}\n\n/*\n * Fetch metadata information from the JSON dataset of\n * an Universal Profile\n */\nasync function fetchProfileData() {\n  profileData = await getProfile(SAMPLE_PROFILE_ADDRESS);\n  name = profileData.LSP3Profile.LSP3Profile.name;\n  description = profileData.LSP3Profile.LSP3Profile.description;\n\n  links = profileData.LSP3Profile.LSP3Profile.links;\n  firstLinkTitle = links[0].title;\n  firstLinkURL = links[0].url;\n\n  tags = profileData.LSP3Profile.LSP3Profile.tags;\n  firstTag = tags[0];\n\n  console.log('Name ' + name);\n  console.log('Description: ' + description + '\\n');\n  console.log('Links: ' + JSON.stringify(links, undefined, 2) + '\\n');\n  console.log('Title of first Link: ' + firstLinkTitle);\n  console.log('URL of first Link: ' + firstLinkURL + '\\n');\n  console.log('Tags: ' + JSON.stringify(tags, undefined, 2) + '\\n');\n  console.log('First tag: ' + firstTag + '\\n');\n}\n\n/*\n * Fetch picture information from the JSON dataset of\n * a Universal Profile\n *\n * @return string Error\n */\nasync function fetchPictureData() {\n  pictureData = await getProfile(SAMPLE_PROFILE_ADDRESS);\n  let backgroundImagesIPFS =\n    pictureData.LSP3Profile.LSP3Profile.backgroundImage;\n  let profileImagesIPFS = pictureData.LSP3Profile.LSP3Profile.profileImage;\n\n  try {\n    for (let i in backgroundImagesIPFS) {\n      backgroundImageLinks.push([\n        i,\n        baseURL + backgroundImagesIPFS[i].url.substring(7),\n      ]);\n    }\n\n    for (let i in profileImagesIPFS) {\n      profileImageLinks.push([\n        i,\n        baseURL + profileImagesIPFS[i].url.substring(7),\n      ]);\n    }\n\n    fullSizeBackgroundImg = backgroundImageLinks[0][1];\n    fullSizeProfileImg = profileImageLinks[0][1];\n\n    console.log('Fullsize Background Image: ' + fullSizeBackgroundImg + '\\n');\n    console.log('Fullsize Background Image: ' + fullSizeProfileImg + '\\n');\n\n    console.log(\n      'Background Image Links: ' +\n        JSON.stringify(backgroundImageLinks, undefined, 2) +\n        '\\n',\n    );\n\n    console.log(\n      'Background Image Links: ' +\n        JSON.stringify(profileImageLinks, undefined, 2) +\n        '\\n',\n    );\n  } catch (error) {\n    return console.log('Could not fetch images');\n  }\n}\n\n/*\n * Fetch the address of the Universal Receiver from\n * the JSON dataset of an Universal Profile\n *\n * @return address of Universal Reveicer Delegate\n */\nasync function fetchReceiverData() {\n  receiverData = await getProfile(SAMPLE_PROFILE_ADDRESS);\n  return receiverData.LSP1UniversalReceiverDelegate;\n}\n\n// Debug Step 1\nconsole.log(isValidAddress(SAMPLE_PROFILE_ADDRESS));\n\n// Debug Step 2\ngetProfile(SAMPLE_PROFILE_ADDRESS).then((profileData) =>\n  console.log(JSON.stringify(profileData, undefined, 2)),\n);\n\n// Debug Step 3\nfetchProfileData();\nfetchPictureData();\nfetchReceiverData().then((receiverAddress) => console.log(receiverAddress));\n")))}u.isMDXComponent=!0},6149:function(e,n,t){n.Z=t.p+"assets/images/example-up-dfc381e8791ed507af0e74facdd91dfd.png"}}]);