"use strict";(self.webpackChunkvac_dev=self.webpackChunkvac_dev||[]).push([[8161],{40100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={layout:"post",name:"Device Pairing in Js-waku and Go-waku",title:"Device Pairing in Js-waku and Go-waku",date:new Date("2023-04-24T12:00:00.000Z"),authors:"rramos",published:!0,slug:"device-pairing-in-js-waku-and-go-waku",categories:"platform"},o=void 0,s={permalink:"/rlog/device-pairing-in-js-waku-and-go-waku",source:"@site/rlog/2023-04-24-device-pairing-in-js-waku-and-go-waku.mdx",title:"Device Pairing in Js-waku and Go-waku",description:"Device pairing and secure message exchange using Waku and noise protocol.",date:"2023-04-24T12:00:00.000Z",formattedDate:"April 24, 2023",tags:[],readingTime:4.09,hasTruncateMarker:!0,authors:[{name:"Richard",twitter:"richardramos_me",github:"richard-ramos",website:"https://richard-ramos.github.io/",key:"rramos"}],frontMatter:{layout:"post",name:"Device Pairing in Js-waku and Go-waku",title:"Device Pairing in Js-waku and Go-waku",date:"2023-04-24T12:00:00.000Z",authors:"rramos",published:!0,slug:"device-pairing-in-js-waku-and-go-waku",categories:"platform"},nextItem:{title:"The Future of Waku Network: Scaling, Incentivization, and Heterogeneity",permalink:"/rlog/future-of-waku-network"}},c={authorsImageUrls:[void 0]},l=[{value:"Device Pairing",id:"device-pairing",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"References",id:"references",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Device pairing and secure message exchange using Waku and noise protocol."),(0,i.kt)("p",null,"As the world becomes increasingly connected through the internet, the need for secure and reliable communication becomes paramount. In ",(0,i.kt)("a",{parentName:"p",href:"https://vac.dev/wakuv2-noise"},"this article")," it is described how the Noise protocol can be used as a key-exchange mechanism for Waku."),(0,i.kt)("p",null,"Recently, this feature was introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-noise"},"js-waku")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/go-waku"},"go-waku"),", providing a simple API for developers to implement secure communication protocols using the Noise Protocol framework. These open-source libraries provide a solid foundation for building secure and decentralized applications that prioritize data privacy and security."),(0,i.kt)("p",null,"This functionality is designed to be simple and easy to use, even for developers who are not experts in cryptography. The library offers a clear and concise API that abstracts away the complexity of the Noise Protocol framework and provides an straightforward interface for developers to use. Using this, developers can effortlessly implement secure communication protocols on top of their JavaScript and Go applications, without having to worry about the low-level details of cryptography."),(0,i.kt)("p",null,"One of the key benefits of using Noise is that it provides end-to-end encryption, which means that the communication between two parties is encrypted from start to finish. This is essential for ensuring the security and privacy of sensitive information"),(0,i.kt)("h3",{id:"device-pairing"},"Device Pairing"),(0,i.kt)("p",null,"In today's digital world, device pairing has become an integral part of our lives. Whether it's connecting our smartphones with other computers or web applications, the need for secure device pairing has become more crucial than ever. With the increasing threat of cyber-attacks and data breaches, it's essential to implement secure protocols for device pairing to ensure data privacy and prevent unauthorized access."),(0,i.kt)("p",null,"To demonstrate how device pairing can be achieved using Waku and Noise, we have examples available at ",(0,i.kt)("a",{parentName:"p",href:"https://examples.waku.org/noise-js/"},"https://examples.waku.org/noise-js/"),". You can try pairing different devices, such as mobile and desktop, via a web application. This can be done by scanning a QR code or opening a URL that contains the necessary data for a secure handshake."),(0,i.kt)("p",null,"The process works as follows:"),(0,i.kt)("p",null,"Actors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alice the initiator"),(0,i.kt)("li",{parentName:"ul"},"Bob the responder")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The first step in achieving secure device pairing using Noise and Waku is for Bob generate the pairing information which could be transmitted out-of-band. For this, Bob opens ",(0,i.kt)("a",{parentName:"li",href:"https://examples.waku.org/noise-js/"},"https://examples.waku.org/noise-js/")," and a QR code is generated, containing the data required to do the handshake. This pairing QR code is timeboxed, meaning that after 2 minutes, it will become invalid and a new QR code must be generated"),(0,i.kt)("li",{parentName:"ol"},"Alice scans the QR code using a mobile phone. This will open the app with the QR code parameters initiating the handshake process which is described in ",(0,i.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/43/#protocol-flow"},"43/WAKU2-DEVICE-PAIRING"),". These messages are exchanged between two devices over Waku to establish a secure connection. The handshake messages consist of three main parts: the initiator's message, the responder's message, and the final message, which are exchanged to establish a secure connection. While using js-noise, the developer is abstracted of this process, since the messaging happens automatically depending on the actions performed by the actors in the pairing process."),(0,i.kt)("li",{parentName:"ol"},"Both Alice and Bob will be asked to verify each other's identity. This is done by confirming if an 8-digits authorization code match in both devices. If both actors confirm that the authorization code is valid, the handshake concludes succesfully"),(0,i.kt)("li",{parentName:"ol"},"Alice and Bob receive a set of shared keys that can be used to start exchanging encrypted messages. The shared secret keys generated during the handshake process are used to encrypt and decrypt messages sent between the devices. This ensures that the messages exchanged between the devices are secure and cannot be intercepted or modified by an attacker.")),(0,i.kt)("p",null,"The above example demonstrates device pairing using js-waku. Additionally, You can also try building and experimenting with other noise implementations like nwaku, or go-waku, with an example available at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/go-waku/tree/master/examples/noise"},"https://github.com/waku-org/go-waku/tree/master/examples/noise")," in which the same flow described before is done with Bob (the receiver) using go-waku instead of js-waku."),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"With its easy to use API built on top of the Noise Protocol framework and the LibP2P networking stack, if you are a developer looking to implement secure messaging in their applications that are both decentralized and censorship resistant, Waku is definitely an excellent choice worth checking out!"),(0,i.kt)("p",null,"Waku is also Open source with a MIT and APACHEv2 licenses, which means that developers are encouraged to contribute code, report bugs, and suggest improvements to make it even better."),(0,i.kt)("p",null,"Don't hesitate to try the live example at ",(0,i.kt)("a",{parentName:"p",href:"https://examples.waku.org/noise-js"},"https://examples.waku.org/noise-js")," and build your own webapp using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-noise"},"https://github.com/waku-org/js-noise"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku"},"https://github.com/waku-org/js-waku")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/go-waku"},"https://github.com/waku-org/go-waku"),". This will give you a hands-on experience of implementing secure communication protocols using the Noise Protocol framework in a practical setting. Happy coding!"),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vac.dev/wakuv2-noise"},"Noise handshakes as key-exchange mechanism for Waku")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/35/"},"Noise Protocols for Waku Payload Encryption")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/37/"},"Session Management for Waku Noise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/43/"},"Device pairing and secure transfers with Noise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/go-waku/tree/master/examples/noise"},"go-waku Noise's example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/js-waku-examples/tree/master/examples/noise-js"},"js-waku Noise's example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/js-noise/"},"js-noise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/js-noise/"},"go-noise"))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=i,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);