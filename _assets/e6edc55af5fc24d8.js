(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[97668],{

/***/ 634217:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var jyc=__webpack_require__(186901).EW;__c.rZ=class{static G(a){__c.M(a,{step:jyc})}get kind(){return"point"}clone({mc:a=this.mc,wc:b=this.wc,Ri:c=this.Ri,Pd:d=this.Pd,inverse:e=this.inverse}){return new __c.rZ({mc:a,wc:b,Ri:c,Pd:d,inverse:e})}snapshot(){const a=this.mc(),b=this.wc();return new __c.rZ({mc:()=>a,wc:()=>b,Ri:this.Ri,Pd:this.Pd,inverse:this.inverse})}get(a){const b=this.mc();var c=b.indexOf(a);c=this.inverse?b.length-1-c:c;__c.w(c!==-1,`value ${a} must exist in domain`);const [d,e]=this.wc();a=b.length===1?.5:this.Ri();return d+
(a*this.step+c*this.step)*Math.sign(e-d)}get step(){const a=this.mc().length+2*this.Ri(),[b,c]=this.wc();return Math.abs(c-b)/Math.max(a-1,1)}$W(a,b,c){__c.w(a.index!==b.index);const d=this.Ri(),e=(b.center-a.center)/(b.index-a.index);return[a.center-(d+a.index)*e,b.center+(d+c-b.index-1)*e]}ZW(a,b,c){const d=this.Ri();return[b,a.center+(a.center-b)/(a.index+d)*(d+c-a.index-1)]}YW(a,b,c){const d=this.Ri();return[a.center-(b-a.center)/(c-a.index-1+d)*(d+a.index),b]}constructor({mc:a,wc:b,Ri:c,Pd:d,
inverse:e=!1}){__c.rZ.G(this);this.mc=a;this.wc=b;this.Ri=c;this.Pd=d;this.inverse=e}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/e6edc55af5fc24d8.js.map