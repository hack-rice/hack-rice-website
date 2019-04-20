module.exports=__NEXT_REGISTER_PAGE("/sponsors",function(){return{page:webpackJsonp([0],{164:function(e,t){e.exports=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},361:function(e,t,n){e.exports=n(362)},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33),o=n.n(r),i=n(1),a=n.n(i),s=n(27),c=n(47),l=(n(29),n(151)),p=n.n(l),u=n(3),d=n.n(u),f=function(e){return a.a.createElement(p.a,null,a.a.createElement("meta",{charSet:"UTF-8"}),a.a.createElement("title",null,e.title),a.a.createElement("meta",{name:"description",content:e.description}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),a.a.createElement("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),a.a.createElement("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),a.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),a.a.createElement("meta",{property:"og:url",content:e.url}),a.a.createElement("meta",{property:"og:title",content:e.title}),a.a.createElement("meta",{property:"og:description",content:e.description}),a.a.createElement("meta",{name:"twitter:site",content:e.url}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:image",content:e.ogImage}),a.a.createElement("meta",{property:"og:image",content:e.ogImage}),a.a.createElement("meta",{property:"og:image:width",content:"1200"}),a.a.createElement("meta",{property:"og:image:height",content:"630"}),a.a.createElement("meta",{"http-equiv":"refresh",content:"0; URL='../static/sponsorships.pdf'"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",rel:"stylesheet"}))};f.defaultProps={title:"",description:"",url:"",ogImage:""};var h=f,m=n(154),v=n(97),y=n.n(v),b=n(98),g=n.n(b),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),x(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.forceRender||!g()(this.props,e)}},{key:"render",value:function(){var e;if(this._isActived=this.props.forceRender||this._isActived||this.props.isActive,!this._isActived)return null;var t=this.props,n=t.prefixCls,r=t.isActive,o=t.children,i=t.destroyInactivePanel,s=t.forceRender,c=t.role,l=y()((w(e={},n+"-content",!0),w(e,n+"-content-active",r),w(e,n+"-content-inactive",!r),e)),p=s||r||!i?a.a.createElement("div",{className:n+"-content-box"},o):null;return a.a.createElement("div",{className:l,role:c},p)}}]),t}();k.propTypes={prefixCls:d.a.string,isActive:d.a.bool,children:d.a.any,destroyInactivePanel:d.a.bool,forceRender:d.a.bool,role:d.a.string};var E=k,A=n(363),j=n.n(A),T=n(365),O=n.n(T),_=n(44),C=n.n(_),P=n(45),L=n.n(P),S=n(87),I=n.n(S),R=n(89),K=n.n(R);function W(e){var t=[];return a.a.Children.forEach(e,function(e){t.push(e)}),t}function N(e,t){var n=null;return e&&e.forEach(function(e){n||e&&e.key===t&&(n=e)}),n}function M(e,t,n){var r=null;return e&&e.forEach(function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}}),r}var z=n(43),q=n.n(z),H=n(88),F=n.n(H),D={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},U={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Y=[],B=[];function V(e,t,n){e.addEventListener(t,n,!1)}function G(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];for(var i in o)if(i in e){n.push(o[i]);break}}}"AnimationEvent"in window||(delete D.animationstart.animation,delete U.animationend.animation),"TransitionEvent"in window||(delete D.transitionstart.transition,delete U.transitionend.transition),t(D,Y),t(U,B)}();var J={startEvents:Y,addStartEventListener:function(e,t){0!==Y.length?Y.forEach(function(n){V(e,n,t)}):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==Y.length&&Y.forEach(function(n){G(e,n,t)})},endEvents:B,addEndEventListener:function(e,t){0!==B.length?B.forEach(function(n){V(e,n,t)}):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==B.length&&B.forEach(function(n){G(e,n,t)})}},X=n(366),$=n.n(X),Q=0!==J.endEvents.length,Z=["Webkit","Moz","O","ms"],ee=["-webkit-","-moz-","-o-","ms-",""];function te(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<ee.length&&!(r=n.getPropertyValue(ee[o]+t));o++);return r}function ne(e){if(Q){var t=parseFloat(te(e,"transition-delay"))||0,n=parseFloat(te(e,"transition-duration"))||0,r=parseFloat(te(e,"animation-delay"))||0,o=parseFloat(te(e,"animation-duration"))||0,i=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout(function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()},1e3*i+200)}}function re(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var oe=function(e,t,n){var r="object"===(void 0===t?"undefined":F()(t)),o=r?t.name:t,i=r?t.active:t+"-active",a=n,s=void 0,c=void 0,l=$()(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(a=n.end,s=n.start,c=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),re(e),l.remove(o),l.remove(i),J.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,a&&a())},J.addEndEventListener(e,e.rcEndListener),s&&s(),l.add(o),e.rcAnimTimeout=setTimeout(function(){e.rcAnimTimeout=null,l.add(i),c&&setTimeout(c,0),ne(e)},30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};oe.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),re(e),J.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},J.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,ne(e)},0)},oe.setTransition=function(e,t,n){var r=t,o=n;void 0===n&&(o=r,r=""),r=r||"",Z.forEach(function(t){e.style[t+"Transition"+r]=o})},oe.isCssAnimationSupported=Q;var ie=oe,ae={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},se={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},ce=function(e){function t(){return C()(this,t),I()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return K()(t,e),L()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){ae.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){ae.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){ae.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=q.a.findDOMNode(this),o=this.props,i=o.transitionName,a="object"==typeof i;this.stop();var s=function(){n.stopper=null,t()};if((Q||!o.animation[e])&&i&&o[se[e]]){var c=a?i[e]:i+"-"+e,l=c+"-active";a&&i[e+"Active"]&&(l=i[e+"Active"]),this.stopper=ie(r,{name:c,active:l},s)}else this.stopper=o.animation[e](r,s)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(a.a.Component);ce.propTypes={children:d.a.any};var le=ce,pe="rc_animate_"+Date.now();function ue(e){var t=e.children;return a.a.isValidElement(t)&&!t.key?a.a.cloneElement(t,{key:pe}):t}function de(){}var fe=function(e){function t(e){C()(this,t);var n=I()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return he.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:W(ue(e))},n.childrenRefs={},n}return K()(t,e),L()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter(function(e){return!!e.props[t]})),n.forEach(function(t){t&&e.performAppear(t.key)})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=W(ue(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(e){t.stop(e)});var o,i,s,c,l=r.showProp,p=this.currentlyAnimatingKeys,u=r.exclusive?W(ue(r)):this.state.children,d=[];l?(u.forEach(function(e){var t=e&&N(n,e.key),r=void 0;(r=t&&t.props[l]||!e.props[l]?t:a.a.cloneElement(t||e,O()({},l,!0)))&&d.push(r)}),n.forEach(function(e){e&&N(u,e.key)||d.push(e)})):(o=n,i=[],s={},c=[],u.forEach(function(e){e&&N(o,e.key)?c.length&&(s[e.key]=c,c=[]):c.push(e)}),o.forEach(function(e){e&&Object.prototype.hasOwnProperty.call(s,e.key)&&(i=i.concat(s[e.key])),i.push(e)}),d=i=i.concat(c)),this.setState({children:d}),n.forEach(function(e){var n=e&&e.key;if(!e||!p[n]){var r=e&&N(u,n);if(l){var o=e.props[l];if(r)!M(u,n,l)&&o&&t.keysToEnter.push(n);else o&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}}),u.forEach(function(e){var r=e&&e.key;if(!e||!p[r]){var o=e&&N(n,r);if(l){var i=e.props[l];if(o)!M(n,r,l)&&i&&t.keysToLeave.push(r);else i&&t.keysToLeave.push(r)}else o||t.keysToLeave.push(r)}})}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?M(e,t,n):N(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map(function(n){if(null===n||void 0===n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return a.a.createElement(le,{key:n.key,ref:function(t){e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)}));var o=t.component;if(o){var i=t;return"string"==typeof o&&(i=j()({className:t.className,style:t.style},t.componentProps)),a.a.createElement(o,i,r)}return r[0]||null}}]),t}(a.a.Component);fe.isAnimate=!0,fe.propTypes={component:d.a.any,componentProps:d.a.object,animation:d.a.object,transitionName:d.a.oneOfType([d.a.string,d.a.object]),transitionEnter:d.a.bool,transitionAppear:d.a.bool,exclusive:d.a.bool,transitionLeave:d.a.bool,onEnd:d.a.func,onEnter:d.a.func,onLeave:d.a.func,onAppear:d.a.func,showProp:d.a.string,children:d.a.node},fe.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:de,onEnter:de,onLeave:de,onAppear:de};var he=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var r=e.props;if(delete e.currentlyAnimatingKeys[t],!r.exclusive||r===e.nextProps){var o=W(ue(r));e.isValidChildByKey(o,t)?"appear"===n?ae.allowAppearCallback(r)&&(r.onAppear(t),r.onEnd(t,!0)):ae.allowEnterCallback(r)&&(r.onEnter(t),r.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var r,o,i,a,s=W(ue(n));if(e.isValidChildByKey(s,t))e.performEnter(t);else{var c=function(){ae.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};r=e.state.children,o=s,i=n.showProp,(a=r.length===o.length)&&r.forEach(function(e,t){var n=o[t];e&&n&&(e&&!n||!e&&n?a=!1:e.key!==n.key?a=!1:i&&e.props[i]!==n.props[i]&&(a=!1))}),a?c():e.setState({children:s},c)}}}},me=fe,ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var xe=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=ge(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleItemClick=function(){var e=r.props,t=e.onItemClick,n=e.panelKey;"function"==typeof t&&t(n)},r.handleKeyPress=function(e){"Enter"!==e.key&&13!==e.keyCode&&13!==e.which||r.handleItemClick()},ge(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),ye(t,[{key:"shouldComponentUpdate",value:function(e){return!g()(this.props,e)}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.id,o=t.style,i=t.prefixCls,s=t.header,c=t.headerClass,l=t.children,p=t.isActive,u=t.showArrow,d=t.destroyInactivePanel,f=t.disabled,h=t.accordion,m=t.forceRender,v=t.expandIcon,b=t.extra,g=y()(i+"-header",be({},c,c)),x=y()((be(e={},i+"-item",!0),be(e,i+"-item-active",p),be(e,i+"-item-disabled",f),e),n),w=null;return u&&"function"==typeof v&&(w=a.a.createElement(v,ve({},this.props))),a.a.createElement("div",{className:x,style:o,id:r},a.a.createElement("div",{className:g,onClick:this.handleItemClick,role:h?"tab":"button",tabIndex:f?-1:0,"aria-expanded":""+p,onKeyPress:this.handleKeyPress},u&&(w||a.a.createElement("i",{className:"arrow"})),s,b&&a.a.createElement("div",{className:i+"-extra"},b)),a.a.createElement(me,{showProp:"isActive",exclusive:!0,component:"",animation:this.props.openAnimation},a.a.createElement(E,{prefixCls:i,isActive:p,destroyInactivePanel:d,forceRender:m,role:h?"tabpanel":null},l)))}}]),t}();xe.propTypes={className:d.a.oneOfType([d.a.string,d.a.object]),id:d.a.string,children:d.a.any,openAnimation:d.a.object,prefixCls:d.a.string,header:d.a.oneOfType([d.a.string,d.a.number,d.a.node]),headerClass:d.a.string,showArrow:d.a.bool,isActive:d.a.bool,onItemClick:d.a.func,style:d.a.object,destroyInactivePanel:d.a.bool,disabled:d.a.bool,accordion:d.a.bool,forceRender:d.a.bool,expandIcon:d.a.func,extra:d.a.node,panelKey:d.a.any},xe.defaultProps={showArrow:!0,isActive:!1,destroyInactivePanel:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var we=xe;function ke(e,t,n,r){var o=void 0;return ie(e,n,{start:function(){t?(o=e.offsetHeight,e.style.height=0):e.style.height=e.offsetHeight+"px"},active:function(){e.style.height=(t?o:0)+"px"},end:function(){e.style.height="",r()}})}var Ee=function(e){return{enter:function(t,n){return ke(t,!0,e+"-anim",n)},leave:function(t,n){return ke(t,!1,e+"-anim",n)}}},Ae=n(145),je=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oe(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t}var _e=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));Ce.call(n);var r=e.activeKey,o=e.defaultActiveKey;return"activeKey"in e&&(o=r),n.state={openAnimation:e.openAnimation||Ee(e.prefixCls),activeKey:Oe(o)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),je(t,[{key:"componentWillReceiveProps",value:function(e){"activeKey"in e&&this.setState({activeKey:Oe(e.activeKey)}),"openAnimation"in e&&this.setState({openAnimation:e.openAnimation})}},{key:"shouldComponentUpdate",value:function(e,t){return!g()(this.props,e)||!g()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,i=t.accordion,s=y()((Te(e={},n,!0),Te(e,r,!!r),e));return a.a.createElement("div",{className:s,style:o,role:i?"tablist":null},this.getItems())}}]),t}(),Ce=function(){var e=this;this.onClickItem=function(t){var n=e.state.activeKey;if(e.props.accordion)n=n[0]===t?[]:[t];else{var r=(n=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n))).indexOf(t);r>-1?n.splice(r,1):n.push(t)}e.setActiveKey(n)},this.getNewChild=function(t,n){if(!t)return null;var r=e.state.activeKey,o=e.props,i=o.prefixCls,s=o.accordion,c=o.destroyInactivePanel,l=o.expandIcon,p=t.key||String(n),u=t.props,d=u.header,f=u.headerClass,h=u.disabled,m={key:p,panelKey:p,header:d,headerClass:f,isActive:s?r[0]===p:r.indexOf(p)>-1,prefixCls:i,destroyInactivePanel:c,openAnimation:e.state.openAnimation,accordion:s,children:t.props.children,onItemClick:h?null:e.onClickItem,expandIcon:l};return a.a.cloneElement(t,m)},this.getItems=function(){var t=e.props.children,n=Object(Ae.isFragment)(t)?t.props.children:t,r=i.Children.map(n,e.getNewChild);return Object(Ae.isFragment)(t)?a.a.createElement(a.a.Fragment,null,r):r},this.setActiveKey=function(t){"activeKey"in e.props||e.setState({activeKey:t}),e.props.onChange(e.props.accordion?t[0]:t)}};_e.propTypes={children:d.a.any,prefixCls:d.a.string,activeKey:d.a.oneOfType([d.a.string,d.a.arrayOf(d.a.string)]),defaultActiveKey:d.a.oneOfType([d.a.string,d.a.arrayOf(d.a.string)]),openAnimation:d.a.object,onChange:d.a.func,accordion:d.a.bool,className:d.a.string,style:d.a.object,destroyInactivePanel:d.a.bool,expandIcon:d.a.func},_e.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},_e.Panel=we;_e.Panel;var Pe=[".rc-collapse{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}",".rc-collapse-anim-active{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}",".rc-collapse>.rc-collapse-item{border-top:1px solid #d9d9d9;}",".rc-collapse>.rc-collapse-item:first-child{border-top:none;}",".rc-collapse>.rc-collapse-item>.rc-collapse-header{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}",".rc-collapse>.rc-collapse-item>.rc-collapse-header .arrow{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}",".rc-collapse>.rc-collapse-item>.rc-collapse-header .rc-collapse-extra{margin:0 16px 0 auto;}",".rc-collapse>.rc-collapse-item-disabled>.rc-collapse-header{cursor:not-allowed;color:#999;background-color:#f3f3f3;}",".rc-collapse-content{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}",".rc-collapse-content>.rc-collapse-content-box{margin-top:16px;margin-bottom:16px;}",".rc-collapse-content-inactive{display:none;}",".rc-collapse-item:last-child>.rc-collapse-content{border-radius:0 0 3px 3px;}",".rc-collapse>.rc-collapse-item-active>.rc-collapse-header .arrow{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"];Pe.__hash="2694693201",Pe.__scoped=[".rc-collapse.jsx-4154084816{background-color:#f7f7f7;border-radius:3px;border:1px solid #d9d9d9;}",".rc-collapse-anim-active.jsx-4154084816{-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out;}",".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816{border-top:1px solid #d9d9d9;}",".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816:first-child{border-top:none;}",".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:22px;padding:10px 16px;color:#666;cursor:pointer;}",".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{display:inline-block;content:'\\20';width:0;height:0;font-size:0;line-height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #666;vertical-align:middle;margin-right:8px;}",".rc-collapse.jsx-4154084816>.rc-collapse-item.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .rc-collapse-extra.jsx-4154084816{margin:0 16px 0 auto;}",".rc-collapse.jsx-4154084816>.rc-collapse-item-disabled.jsx-4154084816>.rc-collapse-header.jsx-4154084816{cursor:not-allowed;color:#999;background-color:#f3f3f3;}",".rc-collapse-content.jsx-4154084816{overflow:hidden;color:#666;padding:0 16px;background-color:#fff;}",".rc-collapse-content.jsx-4154084816>.rc-collapse-content-box.jsx-4154084816{margin-top:16px;margin-bottom:16px;}",".rc-collapse-content-inactive.jsx-4154084816{display:none;}",".rc-collapse-item.jsx-4154084816:last-child>.rc-collapse-content.jsx-4154084816{border-radius:0 0 3px 3px;}",".rc-collapse.jsx-4154084816>.rc-collapse-item-active.jsx-4154084816>.rc-collapse-header.jsx-4154084816 .arrow.jsx-4154084816{position:relative;top:2px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #666;margin-right:6px;}"],Pe.__scopedHash="4154084816";var Le=[".rc-collapse{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}",".rc-collapse-header{text-indent:unset !important;}",".rc-collapse-header:focus{border:none;box-shadow:unset;outline:none;}",".rc-collapse>.rc-collapse-item:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}",'.faqCard{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:"Overpass Mono",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:280px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}',".faqCard:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}",".rc-collapse-item-active{height:auto !important;}",'.arrow{display:none;content:"";margin-right:0px !important;border:none !important;}',".rc-collapse-header{color:#fff !important;height:auto !important;line-height:unset !important;}",'.rc-collapse-content{background-color:unset;color:#fff;padding:0px;font-family:"Open Sans",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}',".rc-collapse-content-box{margin-bottom:15px !important;}",".rc-collapse-content-box>p{margin:0px !important;padding:0px !important;font-size:0.9em;line-height:1.3em;font-weight:normal;}","tr:nth-child(even){background-color:rgba(255,255,255,0.05);}"];Le.__hash="2296635189",Le.__scoped=[".rc-collapse.jsx-2217165812{background-color:unset;color:#fff;border:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0.5em;}",".rc-collapse-header.jsx-2217165812{text-indent:unset !important;}",".rc-collapse-header.jsx-2217165812:focus{border:none;box-shadow:unset;outline:none;}",".rc-collapse.jsx-2217165812>.rc-collapse-item.jsx-2217165812:first-child{border-top:4px solid rgba(255,255,255,1) !important;border-left:4px solid rgba(255,255,255,1) !important;}",'.faqCard.jsx-2217165812{border:1px solid rgba(255,255,255,0.2);color:#ecedf0;font-family:"Overpass Mono",monospace;font-weight:300;padding:18px;text-align:left;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;transition:border-color 0.3s ease-in-out,background 0.3s ease-in-out;height:auto;width:280px;-webkit-transition:-webkit-transform 0.15s ease-in-out;-webkit-transition:transform 0.15s ease-in-out;transition:transform 0.15s ease-in-out;}',".faqCard.jsx-2217165812:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}",".rc-collapse-item-active.jsx-2217165812{height:auto !important;}",'.arrow.jsx-2217165812{display:none;content:"";margin-right:0px !important;border:none !important;}',".rc-collapse-header.jsx-2217165812{color:#fff !important;height:auto !important;line-height:unset !important;}",'.rc-collapse-content.jsx-2217165812{background-color:unset;color:#fff;padding:0px;font-family:"Open Sans",sans-serif !important;font-size:0.9em;line-height:1.5em !important;}',".rc-collapse-content-box.jsx-2217165812{margin-bottom:15px !important;}",".rc-collapse-content-box.jsx-2217165812>p.jsx-2217165812{margin:0px !important;padding:0px !important;font-size:0.9em;line-height:1.3em;font-weight:normal;}","tr.jsx-2217165812:nth-child(even){background-color:rgba(255,255,255,0.05);}"],Le.__scopedHash="2217165812";[{question:"How long is HackRice?",answer:"The event is held from Friday, September 20th to Sunday, September 22th. Students hack for 36 hours. Stay tuned for more info."},{question:"How many hackers attend HackRice? Where are they from?",answer:"We expect around 400 hackers from schools around the country, including (but not limited to) UT Austin, Berkeley, USC, University of Waterloo, Georgia Tech, University of Washington, and many more."},{question:"How many hackers per team are permitted?",answer:"Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."},{question:"Is there a HackRice Facebook page?",answer:a.a.createElement(a.a.Fragment,null,"Yes there is! Click"," ",a.a.createElement("a",{className:"styledlink",href:"https://www.facebook.com/hackrice/"},"here")," ","to access it!")},{question:"Who is eligible to participate in HackRice?",answer:a.a.createElement(a.a.Fragment,null,"Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the"," ",a.a.createElement("a",{className:"styledlink",href:"http://static.mlh.io/docs/mlh-code-of-conduct.pdf"},"MLH Code of Conduct."))},{question:"Will my travel be reimbursed?",answer:a.a.createElement(a.a.Fragment,null,"Yes! Stay tuned for more information as we finalize the details for HackRice 9.")},{question:"Will there be food?",answer:"Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."},{question:"What are the acceptance criteria?",answer:"Rice students, alumni, and University of Houston undergraduates are guaranteed acceptance. For Non-Rice students, we ask for some background information so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!"},{question:"What do I need to bring?",answer:"Please bring a student and legal ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, a sleeping bag, and a pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."},{question:"What if I'm not very experienced?",answer:"We do our best to point people in the right direction and use tools and languages with a low barrier to entry. There will also be upperclassmen participating in the hackathon who can guide you in the right direction. We will also be having workshops the week before the hackathon!"},{question:"Can Rice alumni attend?",answer:"Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel."},{question:"What if I don't have a team before the event?",answer:"You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."},{question:"Do I need to stay the whole time?",answer:"Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might need fresh air or to tend to other commitments. You may leave and go as you deem necessary, though we prefer you to stay!"}].map(function(e){return e.key="faq-".concat(e.question),e}),n(92);var Se=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  * { box-sizing: border-box; }\n  body { max-width: 900px; margin: 2% auto; color: #fff;}\n"]);Object(c.injectGlobal)(Se);t.default=function(){return a.a.createElement(s.Provider,{theme:{fonts:{sans:"'Open Sans', sans-serif",mono:"'Overpass Mono', monospace"}}},a.a.createElement(h,{title:"HackRice 9",description:"The premier hackathon of the south.",url:"https://hack.rice.edu",ogImage:"../static/og.png"}),a.a.createElement(m.a,null),a.a.createElement(o.a,{styleId:"1287042519",css:["html{background:#60b2b2 !important;}"]}))}},363:function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(364),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},364:function(e,t,n){e.exports={default:n(136),__esModule:!0}},365:function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(142),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},366:function(e,t,n){try{var r=n(164)}catch(e){r=n(164)}var o=/\s+/,i=Object.prototype.toString;function a(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList}e.exports=function(e){return new a(e)},a.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return~r(t,e)||t.push(e),this.el.className=t.join(" "),this},a.prototype.remove=function(e){if("[object RegExp]"==i.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=r(t,e);return~n&&t.splice(n,1),this.el.className=t.join(" "),this},a.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},a.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},a.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(o);return""===e[0]&&e.shift(),e},a.prototype.has=a.prototype.contains=function(e){return this.list?this.list.contains(e):!!~r(this.array(),e)}},97:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},98:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var p=e[l],u=t[l];if(!1===(o=n?n.call(r,p,u,l):void 0)||void 0===o&&p!==u)return!1}return!0}}},[361]).default}});