import*as R from"http://localhost:4201/remoteEntry.mjs";import*as W from"http://localhost:4202/remoteEntry.mjs";import*as X from"http://localhost:4203/remoteEntry.mjs";import*as k from"http://localhost:4204/remoteEntry.mjs";var D={6573:(o,v,l)=>{Promise.all([l.e(856),l.e(278),l.e(321)]).then(l.bind(l,9321)).catch(f=>console.error(f))},8272:o=>{o.exports=R},4974:o=>{o.exports=W},6325:o=>{o.exports=X},387:o=>{o.exports=k}},N={};function e(o){var v=N[o];if(void 0!==v)return v.exports;var l=N[o]={exports:{}};return D[o](l,l.exports,e),l.exports}e.m=D,e.c=N,(()=>{var v,o=Object.getPrototypeOf?l=>Object.getPrototypeOf(l):l=>l.__proto__;e.t=function(l,f){if(1&f&&(l=this(l)),8&f||"object"==typeof l&&l&&(4&f&&l.__esModule||16&f&&"function"==typeof l.then))return l;var d=Object.create(null);e.r(d);var c={};v=v||[null,o({}),o([]),o(o)];for(var u=2&f&&l;"object"==typeof u&&!~v.indexOf(u);u=o(u))Object.getOwnPropertyNames(u).forEach(y=>c[y]=()=>l[y]);return c.default=()=>l,e.d(d,c),d}})(),e.d=(o,v)=>{for(var l in v)e.o(v,l)&&!e.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:v[l]})},e.f={},e.e=o=>Promise.all(Object.keys(e.f).reduce((v,l)=>(e.f[l](o,v),v),[])),e.u=o=>o+"."+{115:"09d73ebfd3a6f7e4",144:"e17888b3fb9603b5",221:"66601517fa6079be",278:"62ba29c261d66012",321:"a2028647769cef0e",358:"e7fa22fdba6f9927",422:"bae40601600313e6",550:"406d72aa9d089e9d",599:"45a7a3526a8943bc",645:"4aa733297b196f9f",706:"e290e32128367a57",727:"f7b7c92985a0e2fe",755:"a28ac89d4d78f1b2",856:"59c78a6594eada88",902:"ff2d30250d15cb50",946:"520586a1fcea1325",968:"b6c9ba3fd4375ff0",986:"6a74bf8b0aed6547"}[o]+".js",e.miniCssF=o=>{},e.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="shell-app:";e.l=(l,f,d,c)=>{if(o[l])o[l].push(f);else{var u,y;if(void 0!==d)for(var b=document.getElementsByTagName("script"),w=0;w<b.length;w++){var _=b[w];if(_.getAttribute("src")==l||_.getAttribute("data-webpack")==v+d){u=_;break}}u||(y=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",v+d),u.src=e.tu(l)),o[l]=[f];var g=(P,S)=>{u.onerror=u.onload=null,clearTimeout(h);var E=o[l];if(delete o[l],u.parentNode&&u.parentNode.removeChild(u),E&&E.forEach(p=>p(S)),P)return P(S)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=g.bind(null,u.onerror),u.onload=g.bind(null,u.onload),y&&document.head.appendChild(u)}}})(),e.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={115:[6115],221:[4221],422:[8422],645:[9645],727:[4727],755:[142],968:[8968],986:[4986]},v={142:["default","./Module",6325],4221:["default","./component",387],4727:["default","./component",4974],4986:["default","./Module",8272],6115:["default","./Module",4974],8422:["default","./Module",387],8968:["default","./component",6325],9645:["default","./component",8272]};e.f.remotes=(l,f)=>{e.o(o,l)&&o[l].forEach(d=>{var c=e.R;c||(c=[]);var u=v[d];if(!(c.indexOf(u)>=0)){if(c.push(u),u.p)return f.push(u.p);var y=h=>{h||(h=new Error("Container missing")),"string"==typeof h.message&&(h.message+='\nwhile loading "'+u[1]+'" from '+u[2]),e.m[d]=()=>{throw h},u.p=0},b=(h,P,S,E,p,F)=>{try{var C=h(P,S);if(!C||!C.then)return p(C,E,F);var U=C.then(A=>p(A,E),y);if(!F)return U;f.push(u.p=U)}catch(A){y(A)}},_=(h,P,S)=>b(P.get,u[1],c,0,g,S),g=h=>{u.p=1,e.m[d]=P=>{P.exports=h()}};b(e,u[2],0,0,(h,P,S)=>h?b(e.I,u[0],0,h,_,S):y(),1)}})}})(),(()=>{e.S={};var o={},v={};e.I=(l,f)=>{f||(f=[]);var d=v[l];if(d||(d=v[l]={}),!(f.indexOf(d)>=0)){if(f.push(d),o[l])return o[l];e.o(e.S,l)||(e.S[l]={});var c=e.S[l],y="shell-app",b=(g,h,P,S)=>{var E=c[g]=c[g]||{},p=E[h];(!p||!p.loaded&&(!S!=!p.eager?S:y>p.from))&&(E[h]={get:P,from:y,eager:!!S})},w=g=>{var h=p=>(g=>typeof console<"u"&&console.warn&&console.warn(g))("Initialization of sharing external failed: "+p);try{var P=e(g);if(!P)return;var S=p=>p&&p.init&&p.init(e.S[l],f);if(P.then)return _.push(P.then(S,h));var E=S(P);if(E&&E.then)return _.push(E.catch(h))}catch(p){h(p)}},_=[];return"default"===l&&(b("@angular/common/http","16.0.6",()=>Promise.all([e.e(706),e.e(856),e.e(946),e.e(144)]).then(()=>()=>e(3144))),b("@angular/common","16.0.6",()=>Promise.all([e.e(856),e.e(358)]).then(()=>()=>e(4755))),b("@angular/core","16.0.6",()=>Promise.all([e.e(706),e.e(902)]).then(()=>()=>e(1902))),b("@angular/platform-browser","16.0.6",()=>Promise.all([e.e(856),e.e(946),e.e(550)]).then(()=>()=>e(6550))),b("@angular/router","16.0.6",()=>Promise.all([e.e(706),e.e(856),e.e(946),e.e(599),e.e(278)]).then(()=>()=>e(2599))),w(8272),w(387),w(6325),w(4974)),o[l]=_.length?Promise.all(_).then(()=>o[l]=1):1}}})(),(()=>{var o;e.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),e.tu=o=>e.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=o})(),(()=>{var o=t=>{var a=i=>i.split(".").map(s=>+s==s?+s:s),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),n=r[1]?a(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,a(r[2]))),r[3]&&(n.push([]),n.push.apply(n,a(r[3]))),n},l=t=>{var a=t[0],r="";if(1===t.length)return"*";if(a+.5){r+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";for(var n=1,i=1;i<t.length;i++)n--,r+="u"==(typeof(m=t[i]))[0]?"-":(n>0?".":"")+(n=2,m);return r}var s=[];for(i=1;i<t.length;i++){var m=t[i];s.push(0===m?"not("+x()+")":1===m?"("+x()+" || "+x()+")":2===m?s.pop()+" "+s.pop():l(m))}return x();function x(){return s.pop().replace(/^\((.+)\)$/,"$1")}},f=(t,a)=>{if(0 in t){a=o(a);var r=t[0],n=r<0;n&&(r=-r-1);for(var i=0,s=1,m=!0;;s++,i++){var x,T,O=s<t.length?(typeof t[s])[0]:"";if(i>=a.length||"o"==(T=(typeof(x=a[i]))[0]))return!m||("u"==O?s>r&&!n:""==O!=n);if("u"==T){if(!m||"u"!=O)return!1}else if(m)if(O==T)if(s<=r){if(x!=t[s])return!1}else{if(n?x>t[s]:x<t[s])return!1;x!=t[s]&&(m=!1)}else if("s"!=O&&"n"!=O){if(n||s<=r)return!1;m=!1,s--}else{if(s<=r||T<O!=n)return!1;m=!1}else"s"!=O&&"n"!=O&&(m=!1,s--)}}var $=[],j=$.pop.bind($);for(i=1;i<t.length;i++){var L=t[i];$.push(1==L?j()|j():2==L?j()&j():L?f(L,a):!j())}return!!j()},u=(t,a)=>{var r=t[a];return Object.keys(r).reduce((n,i)=>!n||!r[n].loaded&&((t,a)=>{t=o(t),a=o(a);for(var r=0;;){if(r>=t.length)return r<a.length&&"u"!=(typeof a[r])[0];var n=t[r],i=(typeof n)[0];if(r>=a.length)return"u"==i;var s=a[r],m=(typeof s)[0];if(i!=m)return"o"==i&&"n"==m||"s"==m||"u"==i;if("o"!=i&&"u"!=i&&n!=s)return n<s;r++}})(n,i)?i:n,0)},_=(t,a,r,n)=>{var i=u(t,r);if(!f(n,i))throw new Error(((t,a,r,n)=>"Unsatisfied version "+r+" from "+(r&&t[a][r].from)+" of shared singleton module "+a+" (required "+l(n)+")")(t,r,i,n));return E(t[r][i])},E=t=>(t.loaded=1,t.get()),M=(t=>function(a,r,n,i){var s=e.I(a);return s&&s.then?s.then(t.bind(t,a,e.S[a],r,n,i)):t(a,e.S[a],r,n,i)})((t,a,r,n,i)=>a&&e.o(a,r)?_(a,0,r,n):i()),V={},K={856:()=>M("default","@angular/core",[2,16,0,0],()=>Promise.all([e.e(706),e.e(902)]).then(()=>()=>e(1902))),9278:()=>M("default","@angular/platform-browser",[2,16,0,0],()=>Promise.all([e.e(946),e.e(550)]).then(()=>()=>e(6550))),2823:()=>M("default","@angular/router",[2,16,0,0],()=>Promise.all([e.e(706),e.e(946),e.e(599)]).then(()=>()=>e(2599))),2946:()=>M("default","@angular/common",[2,16,0,0],()=>e.e(358).then(()=>()=>e(4755))),671:()=>M("default","@angular/common/http",[2,16,0,0],()=>Promise.all([e.e(706),e.e(144)]).then(()=>()=>e(3144)))},B={278:[9278],321:[2823],550:[671],856:[856],946:[2946]};e.f.consumes=(t,a)=>{e.o(B,t)&&B[t].forEach(r=>{if(e.o(V,r))return a.push(V[r]);var n=m=>{V[r]=0,e.m[r]=x=>{delete e.c[r],x.exports=m()}},i=m=>{delete V[r],e.m[r]=x=>{throw delete e.c[r],m}};try{var s=K[r]();s.then?a.push(V[r]=s.then(n).catch(i)):n(s)}catch(m){i(m)}})}})(),(()=>{var o={179:0};e.f.j=(f,d)=>{var c=e.o(o,f)?o[f]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(144|179|321|358|550|599|706|902)$/.test(f)){var u=new Promise((_,g)=>c=o[f]=[_,g]);d.push(c[2]=u);var y=e.p+e.u(f),b=new Error;e.l(y,_=>{if(e.o(o,f)&&(0!==(c=o[f])&&(o[f]=void 0),c)){var g=_&&("load"===_.type?"missing":_.type),h=_&&_.target&&_.target.src;b.message="Loading chunk "+f+" failed.\n("+g+": "+h+")",b.name="ChunkLoadError",b.type=g,b.request=h,c[1](b)}},"chunk-"+f,f)}else o[f]=0};var v=(f,d)=>{var b,w,[c,u,y]=d,_=0;if(c.some(h=>0!==o[h])){for(b in u)e.o(u,b)&&(e.m[b]=u[b]);y&&y(e)}for(f&&f(d);_<c.length;_++)e.o(o,w=c[_])&&o[w]&&o[w][0](),o[w]=0},l=self.webpackChunkshell_app=self.webpackChunkshell_app||[];l.forEach(v.bind(null,0)),l.push=v.bind(null,l.push.bind(l))})();var q=e(6573);