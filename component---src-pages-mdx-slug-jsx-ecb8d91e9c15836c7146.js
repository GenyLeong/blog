(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[650],{1547:function(e,t,r){"use strict";r.d(t,{X:function(){return m}});var n=r(4942),o=r(4925),i=r(5010),a=r(7984),s=r(8328),c=r(3673),u=r(9131),l=r(5893),d=["className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=(0,i.G)((function(e,t){var r=(0,a.mq)("Heading",e),n=(0,s.Lr)(e),i=(n.className,(0,o.Z)(n,d));return(0,l.jsx)(c.m.h2,f(f({ref:t,className:(0,u.cx)("chakra-heading",e.className)},i),{},{__css:r}))}));m.displayName="Heading"},6973:function(e,t,r){"use strict";r.d(t,{x:function(){return m}});var n=r(4942),o=r(4925),i=r(5010),a=r(7984),s=r(8328),c=r(3673),u=r(9131);var l=r(5893),d=["className","align","decoration","casing"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=(0,i.G)((function(e,t){var r=(0,a.mq)("Text",e),n=(0,s.Lr)(e),i=(n.className,n.align,n.decoration,n.casing,(0,o.Z)(n,d)),p=function(e){var t=Object.assign({},e);for(var r in t)void 0===t[r]&&delete t[r];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(c.m.p,f(f(f({ref:t,className:(0,u.cx)("chakra-text",e.className)},p),i),{},{__css:r}))}));m.displayName="Text"},1254:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(434)),i=n(r(7071)),a=n(r(7867)),s=n(r(7294)),c=n(r(5697)),u=r(989),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var r;return(r=e.call(this,t)||this).shortname="genyleong",r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.loadInstance()},r.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},r.componentDidUpdate=function(){this.loadInstance()},r.componentWillUnmount=function(){this.cleanInstance()},r.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},r.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},r.render=function(){var e=this.props,t=e.config,r=e.className,n=e.placeholder,a=(0,i.default)(e,["config","className","placeholder"]),c="disqus-comment-count"+(r?" "+r:"");return s.default.createElement("span",(0,o.default)({className:c,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a),n)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),placeholder:c.default.string,className:c.default.string}},4294:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(434)),i=n(r(7071)),a=n(r(7867)),s=n(r(7294)),c=n(r(5697)),u=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var r=t.prototype;return r.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},r.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:c.default.oneOfType([c.default.number,c.default.string]).isRequired,width:c.default.number,height:c.default.number,showMedia:c.default.bool,showParentComment:c.default.bool}},2605:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.default=void 0;var o=n(r(434)),i=n(r(7071)),a=n(r(7867)),s=n(r(7294)),c=n(r(5697)),u=r(989),l=function(e){function t(t){var r;return(r=e.call(this,t)||this).shortname="genyleong",r.embedUrl="https://"+r.shortname+".disqus.com/embed.js",r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.loadInstance()},r.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},r.componentDidUpdate=function(){this.loadInstance()},r.componentWillUnmount=function(){this.cleanInstance()},r.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},r.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},r.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},r.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var r=window.document.getElementById(t.id);r.parentNode.removeChild(r)}},r.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=l,l.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string,language:c.default.string,remoteAuthS3:c.default.string,apiKey:c.default.string})}},8200:function(e,t,r){"use strict";var n=r(4836);var o=n(r(2605));t.h$=o.default,n(r(1254)).default,n(r(4294)).default,o.default},989:function(e,t,r){"use strict";var n=r(4836);t.__esModule=!0,t.insertScript=function(e,t,r){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,r.appendChild(n),n},t.removeScript=function(e,t){var r=window.document.getElementById(e);r&&t.removeChild(r)},t.debounce=function(e,t,r){var n;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this,c=function(){n=null,r||e.apply(s,i)},u=r&&!n;window.clearTimeout(n),n=setTimeout(c,t),u&&e.apply(s,i)}},t.isReactElement=a,t.shallowComparison=function e(t,r){var n,i=new Set(Object.keys(t).concat(Object.keys(r))),s=(n=[]).concat.apply(n,(0,o.default)(i)).filter((function(n){if("object"==typeof t[n]){if(e(t[n],r[n]))return!0}else if(t[n]!==r[n]&&!a(t[n]))return!0;return!1}));return 0!==s.length};var o=n(r(861)),i=n(r(7294));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),i=r(8416),a=r(7071),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),d=r(4983).mdx,p=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,s),c=p(t),f=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:d},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(i)))}),[r,t]);return l.createElement(f,u({},i))}},2346:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n=r(7294),o=r(8200),i=r(2416),a=r(1082),s=r(4975),c=r(2549);function u(){return n.createElement(s.xu,{px:9},n.createElement(a.Link,{to:"/"},n.createElement(c.E,{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDA4cHgiIGhlaWdodD0iNDA4cHgiIHZpZXdCb3g9IjAgMCA0MDggNDA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDggNDA4OyBmaWxsOiBoc2woMCwgMCUsIDUlKSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8ZyBpZD0iYXJyb3ctYmFjayI+DQoJCTxwYXRoIGQ9Ik00MDgsMTc4LjVIOTYuOUwyMzkuNywzNS43TDIwNCwwTDAsMjA0bDIwNCwyMDRsMzUuNy0zNS43TDk2LjksMjI5LjVINDA4VjE3OC41eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K",alt:"Back",className:"arrowback"})))}var l=r(8759),d=r(1547),p=r(6973),f=r(4942),m=r(4925),g=r(9439),h=r(587),y=r(1783);var b=r(5010),v=r(7984),w=r(8328),O=r(3673),j=r(5893),x=["children","styleType","stylePosition","spacing"],P=["as"],D=["as"];function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=(0,y.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),_=(0,g.Z)(I,2),C=_[0],N=_[1],M=(0,b.G)((function(e,t){var r=(0,v.jC)("List",e),o=(0,w.Lr)(e),i=o.children,a=o.styleType,s=void 0===a?"none":a,c=o.stylePosition,u=o.spacing,l=(0,m.Z)(o,x),d=function(e){return n.Children.toArray(e).filter((function(e){return(0,n.isValidElement)(e)}))}(i),p=u?(0,f.Z)({},"& > *:not(style) ~ *:not(style)",{mt:u}):{};return(0,j.jsx)(C,{value:r,children:(0,j.jsx)(O.m.ul,E(E({ref:t,listStyleType:s,listStylePosition:c,role:"list",__css:E(E({},r.container),p)},l),{},{children:d}))})}));M.displayName="List",(0,b.G)((function(e,t){e.as;var r=(0,m.Z)(e,P);return(0,j.jsx)(M,E({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList";var Z=(0,b.G)((function(e,t){e.as;var r=(0,m.Z)(e,D);return(0,j.jsx)(M,E({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));Z.displayName="UnorderedList";var z=(0,b.G)((function(e,t){var r=N();return(0,j.jsx)(O.m.li,E(E({ref:t},e),{},{__css:r.item}))}));z.displayName="ListItem",(0,b.G)((function(e,t){var r=N();return(0,j.jsx)(h.J,E(E({ref:t,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var T=r(709),k=r(9131),B=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],L=["className","orientation","__css"];function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=(0,b.G)((function(e,t){var r=(0,v.mq)("Divider",e),n=r.borderLeftWidth,o=r.borderBottomWidth,i=r.borderTopWidth,a=r.borderRightWidth,s=r.borderWidth,c=r.borderStyle,u=r.borderColor,l=(0,m.Z)(r,B),d=(0,w.Lr)(e),p=d.className,f=d.orientation,g=void 0===f?"horizontal":f,h=d.__css,y=(0,m.Z)(d,L),b={vertical:{borderLeftWidth:n||a||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||i||s||"1px",width:"100%"}};return(0,j.jsx)(O.m.hr,G(G({ref:t,"aria-orientation":g},y),{},{__css:G(G(G({},l),{},{border:"0",borderColor:u,borderStyle:c},b[g]),h),className:(0,k.cx)("chakra-divider",p)}))}));W.displayName="Divider";var q=r(6559),Q=["direction","align","justify","wrap","basis","grow","shrink"];function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var X=(0,b.G)((function(e,t){var r=e.direction,n=e.align,o=e.justify,i=e.wrap,a=e.basis,s=e.grow,c=e.shrink,u=(0,m.Z)(e,Q),l={display:"flex",flexDirection:r,alignItems:n,justifyContent:o,flexWrap:i,flexBasis:a,flexGrow:s,flexShrink:c};return(0,j.jsx)(O.m.div,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,__css:l},u))}));X.displayName="Flex";var R=r(4983),K=r(1955),Y=r(7241),H=(0,l.B1)({fonts:{heading:"IBM Plex Mono",body:"IBM Plex Mono"}}),J={h1:function(e){return n.createElement(d.X,Object.assign({as:"h1",paddingY:"12",size:"2xl"},e))},h2:function(e){return n.createElement(d.X,Object.assign({as:"h2",paddingTop:"10",paddingBottom:"4",size:"xl"},e))},h3:function(e){return n.createElement(d.X,Object.assign({as:"h3",paddingTop:"4",paddingBottom:"2",size:"md"},e))},h4:function(e){return n.createElement(d.X,Object.assign({as:"h4",paddingY:"2",size:"md"},e))},h5:function(e){return n.createElement(d.X,Object.assign({as:"h5",paddingY:"2",size:"sm"},e))},h6:function(e){return n.createElement(d.X,Object.assign({as:"h6",paddingY:"2",size:"xl"},e))},p:function(e){return n.createElement(p.x,Object.assign({lineHeight:2,paddingBottom:"4",fontSize:"lg"},e))},img:function(e){return n.createElement(c.E,Object.assign({marginBottom:"4"},e))},ul:function(e){return n.createElement(Z,e)},li:function(e){return n.createElement(z,e)},a:function(e){return n.createElement(T.r,Object.assign({},e,{color:"red.500"}))},hr:function(e){return n.createElement(W,Object.assign({borderColor:"blackAlpha.700",orientation:"horizontal",paddingTop:"8",marginBottom:"8"},e))}};function V(e){var t=e.data,r=e.location,a=t.mdx,l=a.frontmatter,p=a.body,f=a.timeToRead,m=a.excerpt,g={url:""+(r.href+p.slug),identifier:p.slug,title:l.title};return n.createElement(n.Fragment,null,n.createElement(u,null),n.createElement(i.Z,null,n.createElement(Y.Z,{title:l.title,description:m,image:l.cover}),n.createElement(q.x,{theme:H},n.createElement(d.X,{fontFamily:"IBM Plex Mono",as:"h2",size:"2xl",paddingTop:"52px",paddingBottom:"2",color:"black",align:"center"},l.title),n.createElement(X,{justifyContent:"space-between"},n.createElement("p",null,f," min"),n.createElement("p",null,l.date)),l.cover&&n.createElement(s.xu,{paddingY:"2"},n.createElement(c.E,{src:l.cover})),n.createElement(s.xu,{paddingY:"4"},n.createElement(R.MDXProvider,{components:J},n.createElement(K.MDXRenderer,null,p)))),n.createElement(o.h$,{config:g})))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function i(t,r,a){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),i=r(6116),a=r(2281);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-mdx-slug-jsx-ecb8d91e9c15836c7146.js.map