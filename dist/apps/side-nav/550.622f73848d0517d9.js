(self.webpackChunkside_nav=self.webpackChunkside_nav||[]).push([[550],{6550:(Ve,L,m)=>{m.r(L),m.d(L,{BrowserModule:()=>Te,By:()=>Ie,DomSanitizer:()=>ee,EVENT_MANAGER_PLUGINS:()=>y,EventManager:()=>M,HAMMER_GESTURE_CONFIG:()=>S,HAMMER_LOADER:()=>N,HammerGestureConfig:()=>q,HammerModule:()=>Le,Meta:()=>Y,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>U,Title:()=>W,TransferState:()=>xe,VERSION:()=>Be,bootstrapApplication:()=>ge,createApplication:()=>ye,disableDebugTools:()=>be,enableDebugTools:()=>Oe,makeStateKey:()=>Fe,platformBrowser:()=>Me,provideClientHydration:()=>je,provideProtractorTestingSupport:()=>Ee,withNoDomReuse:()=>He,withNoHttpTransferCache:()=>Ue,\u0275BrowserDomAdapter:()=>E,\u0275BrowserGetTestability:()=>k,\u0275DomEventsPlugin:()=>x,\u0275DomRendererFactory2:()=>C,\u0275DomSanitizerImpl:()=>P,\u0275HammerGesturesPlugin:()=>Q,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>b,\u0275KeyEventsPlugin:()=>z,\u0275SharedStylesHost:()=>D,\u0275getDOM:()=>u.\u0275getDOM,\u0275initDomAdapter:()=>$});var n=m(856),u=m(2946),ne=m(671);class re extends u.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends re{static makeCurrent(){(0,u.\u0275setRootDomAdapter)(new E)}onAndCancel(r,e,t){return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return(e=e||this.getDefaultDocument()).createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return"window"===e?window:"document"===e?r:"body"===e?r.body:null}getBaseHref(r){const e=function oe(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function se(o){v=v||document.createElement("a"),v.setAttribute("href",o);const r=v.pathname;return"/"===r.charAt(0)?r:`/${r}`}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return(0,u.\u0275parseCookieValue)(document.cookie,r)}}let v,g=null;class k{addToWindow(r){n.\u0275global.getAngularTestability=(t,s=!0)=>{const i=r.findTestabilityInTree(t,s);if(null==i)throw new n.\u0275RuntimeError(5103,!1);return i},n.\u0275global.getAllAngularTestabilities=()=>r.getAllTestabilities(),n.\u0275global.getAllAngularRootElements=()=>r.getAllRootElements(),n.\u0275global.frameworkStabilizers||(n.\u0275global.frameworkStabilizers=[]),n.\u0275global.frameworkStabilizers.push(t=>{const s=n.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const c=function(l){a=a||l,i--,0==i&&t(a)};s.forEach(function(l){l.whenStable(c)})})}findTestabilityInTree(r,e,t){return null==e?null:r.getTestability(e)??(t?(0,u.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}}let ie=(()=>{class o{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();const y=new n.InjectionToken("EventManagerPlugins");let M=(()=>{class o{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s){return this._findPluginFor(t).addEventListener(e,t,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new n.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(y),n.\u0275\u0275inject(n.NgZone))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();class w{constructor(r){this._doc=r}}const T="ng-app-id";let D=(()=>{class o{constructor(e,t,s,i={}){this.doc=e,this.appId=t,this.nonce=s,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,u.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(s=>s.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${T}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(s=>{null!=s.textContent&&t.set(s.textContent,s)}),t}return null}changeUsageCount(e,t){const s=this.styleRef;if(s.has(e)){const i=s.get(e);return i.usage+=t,i.usage}return s.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const s=this.styleNodesInDOM,i=s?.get(t);if(i?.parentNode===e)return s.delete(t),i.removeAttribute(T),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(T,this.appId),a}}addStyleToHost(e,t){const s=this.getStyleElement(e,t);e.appendChild(s);const i=this.styleRef,a=i.get(t)?.elements;a?a.push(s):i.set(t,{elements:[s],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT),n.\u0275\u0275inject(n.APP_ID),n.\u0275\u0275inject(n.CSP_NONCE,8),n.\u0275\u0275inject(n.PLATFORM_ID))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();const _={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},R=/%COMP%/g,H="%COMP%",ae=`_nghost-${H}`,ce=`_ngcontent-${H}`,U=new n.InjectionToken("RemoveStylesOnCompDestory",{providedIn:"root",factory:()=>!1});function j(o,r){return r.map(e=>e.replace(R,o))}let C=(()=>{class o{constructor(e,t,s,i,a,c,l,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestory=i,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=(0,u.isPlatformServer)(c),this.defaultRenderer=new A(e,a,l,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===n.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:n.ViewEncapsulation.Emulated});const s=this.getOrCreateRenderer(e,t);return s instanceof F?s.applyToHost(e):s instanceof O&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.doc,c=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestory,p=this.platformIsServer;switch(t.encapsulation){case n.ViewEncapsulation.Emulated:i=new F(l,d,t,this.appId,h,a,c,p);break;case n.ViewEncapsulation.ShadowDom:return new he(l,d,e,t,a,c,this.nonce,p);default:i=new O(l,d,t,h,a,c,p)}i.onDestroy=()=>s.delete(t.id),s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(M),n.\u0275\u0275inject(D),n.\u0275\u0275inject(n.APP_ID),n.\u0275\u0275inject(U),n.\u0275\u0275inject(u.DOCUMENT),n.\u0275\u0275inject(n.PLATFORM_ID),n.\u0275\u0275inject(n.NgZone),n.\u0275\u0275inject(n.CSP_NONCE))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();class A{constructor(r,e,t,s){this.eventManager=r,this.doc=e,this.ngZone=t,this.platformIsServer=s,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(r,e){return e?this.doc.createElementNS(_[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(B(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(B(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let t="string"==typeof r?this.doc.querySelector(r):r;if(!t)throw new n.\u0275RuntimeError(5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,s){if(s){e=s+":"+e;const i=_[s];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){const s=_[t];s?r.removeAttributeNS(s,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,s){s&(n.RendererStyleFlags2.DashCase|n.RendererStyleFlags2.Important)?r.style.setProperty(e,t,s&n.RendererStyleFlags2.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&n.RendererStyleFlags2.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r[e]=t}setValue(r,e){r.nodeValue=e}listen(r,e,t){if("string"==typeof r&&!(r=(0,u.\u0275getDOM)().getGlobalEventTarget(this.doc,r)))throw new Error(`Unsupported event target ${r} for event ${e}`);return this.eventManager.addEventListener(r,e,this.decoratePreventDefault(t))}decoratePreventDefault(r){return e=>{if("__ngUnwrap__"===e)return r;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>r(e)):r(e))&&e.preventDefault()}}}function B(o){return"TEMPLATE"===o.tagName&&void 0!==o.content}class he extends A{constructor(r,e,t,s,i,a,c,l){super(r,i,a,l),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const d=j(s.id,s.styles);for(const h of d){const p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=h,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class O extends A{constructor(r,e,t,s,i,a,c,l){super(r,i,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestory=s,this.rendererUsageCount=0,this.styles=l?j(l,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}destroy(){this.removeStylesOnCompDestory&&(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,0===this.rendererUsageCount&&this.onDestroy?.())}}class F extends O{constructor(r,e,t,s,i,a,c,l){const d=s+"-"+t.id;super(r,e,t,i,a,c,l,d),this.contentAttr=function le(o){return ce.replace(R,o)}(d),this.hostAttr=function de(o){return ae.replace(R,o)}(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){const t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}}let x=(()=>{class o extends w{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s){return e.addEventListener(t,s,!1),()=>this.removeEventListener(e,t,s)}removeEventListener(e,t,s){return e.removeEventListener(t,s)}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();const V=["alt","control","meta","shift"],pe={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},me={alt:o=>o.altKey,control:o=>o.ctrlKey,meta:o=>o.metaKey,shift:o=>o.shiftKey};let z=(()=>{class o extends w{constructor(e){super(e)}supports(e){return null!=o.parseEventName(e)}addEventListener(e,t,s){const i=o.parseEventName(t),a=o.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,u.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=o._normalizeKey(t.pop());let a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),V.forEach(d=>{const h=t.indexOf(d);h>-1&&(t.splice(h,1),a+=d+".")}),a+=i,0!=t.length||0===i.length)return null;const l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(e,t){let s=pe[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),V.forEach(a=>{a!==s&&(0,me[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{o.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();function ge(o,r){return(0,n.\u0275internalCreateApplication)({rootComponent:o,...G(r)})}function ye(o){return(0,n.\u0275internalCreateApplication)(G(o))}function G(o){return{appProviders:[...Z,...o?.providers??[]],platformProviders:b}}function Ee(){return[...K]}function $(){E.makeCurrent()}const b=[{provide:n.PLATFORM_ID,useValue:u.\u0275PLATFORM_BROWSER_ID},{provide:n.PLATFORM_INITIALIZER,useValue:$,multi:!0},{provide:u.DOCUMENT,useFactory:function Se(){return(0,n.\u0275setDocument)(document),document},deps:[]}],Me=(0,n.createPlatformFactory)(n.platformCore,"browser",b),we=new n.InjectionToken(""),K=[{provide:n.\u0275TESTABILITY_GETTER,useClass:k,deps:[]},{provide:n.\u0275TESTABILITY,useClass:n.Testability,deps:[n.NgZone,n.TestabilityRegistry,n.\u0275TESTABILITY_GETTER]},{provide:n.Testability,useClass:n.Testability,deps:[n.NgZone,n.TestabilityRegistry,n.\u0275TESTABILITY_GETTER]}],Z=[{provide:n.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:n.ErrorHandler,useFactory:function ve(){return new n.ErrorHandler},deps:[]},{provide:y,useClass:x,multi:!0,deps:[u.DOCUMENT,n.NgZone,n.PLATFORM_ID]},{provide:y,useClass:z,multi:!0,deps:[u.DOCUMENT]},C,D,M,{provide:n.RendererFactory2,useExisting:C},{provide:u.XhrFactory,useClass:ie,deps:[]},[]];let Te=(()=>{class o{constructor(e){}static withServerTransition(e){return{ngModule:o,providers:[{provide:n.APP_ID,useValue:e.appId}]}}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(we,12))};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:o});static#n=this.\u0275inj=n.\u0275\u0275defineInjector({providers:[...Z,...K],imports:[u.CommonModule,n.ApplicationModule]})}return o})(),Y=(()=>{class o{constructor(e){this._doc=e,this._dom=(0,u.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),c=this.getTags(a).filter(l=>this._containsAttributes(e,l))[0];if(void 0!==c)return c}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return _e[e]||e}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new t:function De(){return new Y((0,n.\u0275\u0275inject)(u.DOCUMENT))}(),s},providedIn:"root"})}return o})();const _e={httpEquiv:"http-equiv"};let W=(()=>{class o{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new t:function Re(){return new W((0,n.\u0275\u0275inject)(u.DOCUMENT))}(),s},providedIn:"root"})}return o})();function X(o,r){(typeof COMPILED>"u"||!COMPILED)&&((n.\u0275global.ng=n.\u0275global.ng||{})[o]=r)}const f=typeof window<"u"&&window||{};class Ce{constructor(r,e){this.msPerTick=r,this.numTicks=e}}class Ae{constructor(r){this.appRef=r.injector.get(n.ApplicationRef)}timeChangeDetection(r){const e=r&&r.record,t="Change Detection",s=null!=f.console.profile;e&&s&&f.console.profile(t);const i=I();let a=0;for(;a<5||I()-i<500;)this.appRef.tick(),a++;const c=I();e&&s&&f.console.profileEnd(t);const l=(c-i)/a;return f.console.log(`ran ${a} change detection cycles`),f.console.log(`${l.toFixed(2)} ms per check`),new Ce(l,a)}}function I(){return f.performance&&f.performance.now?f.performance.now():(new Date).getTime()}const J="profiler";function Oe(o){return X(J,new Ae(o)),o}function be(){X(J,null)}class Ie{static all(){return()=>!0}static css(r){return e=>null!=e.nativeElement&&function Ne(o,r){return!!(0,u.\u0275getDOM)().isElementNode(o)&&(o.matches&&o.matches(r)||o.msMatchesSelector&&o.msMatchesSelector(r)||o.webkitMatchesSelector&&o.webkitMatchesSelector(r))}(e.nativeElement,r)}static directive(r){return e=>-1!==e.providerTokens.indexOf(r)}}const Pe={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},S=new n.InjectionToken("HammerGestureConfig"),N=new n.InjectionToken("HammerLoader");let q=(()=>{class o{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})(),Q=(()=>{class o extends w{constructor(e,t,s,i){super(e),this._config=t,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Pe.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(c=this.addEventListener(e,t,s)):c=()=>{}}).catch(()=>{c=()=>{}})),()=>{c()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),c=function(l){i.runGuarded(function(){s(l)})};return a.on(t,c),()=>{a.off(t,c),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT),n.\u0275\u0275inject(S),n.\u0275\u0275inject(n.\u0275Console),n.\u0275\u0275inject(N,8))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})(),Le=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:o});static#n=this.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:y,useClass:Q,multi:!0,deps:[u.DOCUMENT,S,n.\u0275Console,[new n.Optional,N]]},{provide:S,useClass:q,deps:[]}]})}return o})(),ee=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new(t||o):n.\u0275\u0275inject(P),s},providedIn:"root"})}return o})(),P=(()=>{class o extends ee{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case n.SecurityContext.NONE:return t;case n.SecurityContext.HTML:return(0,n.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,n.\u0275unwrapSafeValue)(t):(0,n.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case n.SecurityContext.STYLE:return(0,n.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,n.\u0275unwrapSafeValue)(t):t;case n.SecurityContext.SCRIPT:if((0,n.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,n.\u0275unwrapSafeValue)(t);throw new n.\u0275RuntimeError(5200,!1);case n.SecurityContext.URL:return(0,n.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,n.\u0275unwrapSafeValue)(t):(0,n.\u0275_sanitizeUrl)(String(t));case n.SecurityContext.RESOURCE_URL:if((0,n.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,n.\u0275unwrapSafeValue)(t);throw new n.\u0275RuntimeError(5201,!1);default:throw new n.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,n.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,n.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,n.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,n.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,n.\u0275bypassSanitizationTrustResourceUrl)(e)}static#e=this.\u0275fac=function(t){return new(t||o)(n.\u0275\u0275inject(u.DOCUMENT))};static#t=this.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new t:function ke(o){return new P(o.get(u.DOCUMENT))}(n.\u0275\u0275inject(n.Injector)),s},providedIn:"root"})}return o})();function te(o,r=[]){return{\u0275kind:o,\u0275providers:r}}function He(){return te(0)}function Ue(){return te(1)}function je(...o){const r=[],e=new Set;for(const{\u0275providers:t,\u0275kind:s}of o)e.add(s),t.length&&r.push(t);return(0,n.makeEnvironmentProviders)([[],e.has(0)?[]:(0,n.\u0275withDomHydration)(),e.has(1)?[]:(0,ne.\u0275withHttpTransferCache)(),r])}const Be=new n.Version("16.0.6"),Fe=n.makeStateKey,xe=n.TransferState}}]);