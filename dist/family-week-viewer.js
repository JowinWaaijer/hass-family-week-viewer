const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=r.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(s,t))}return t}toString(){return this.cssText}};const n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:o,defineProperty:a,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:l}=Object,u=globalThis,p=u.trustedTypes,f=p?p.emptyScript:"",$=u.reactiveElementPolyfillSupport,y=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},_=(t,e)=>!o(t,e),g={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),u.litPropertyMetadata??(u.litPropertyMetadata=new WeakMap);let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&a(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);i?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??g}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=l(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,r)=>{if(e)s.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=r;const n=i.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(void 0!==t){const n=this.constructor;if(!1===r&&(i=this[t]),s??(s=n.getPropertyOptions(t)),!((s.hasChanged??_)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==i||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,s,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[y("elementProperties")]=new Map,v[y("finalized")]=new Map,$?.({ReactiveElement:v}),(u.reactiveElementVersions??(u.reactiveElementVersions=[])).push("2.1.2");const b=globalThis,A=t=>t,w=b.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+E,O=`<${M}>`,k=document,C=()=>k.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,N=/>/g,W=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,R=/"/g,j=/^(?:script|style|textarea|title)$/i,L=(F=1,(t,...e)=>({_$litType$:F,strings:t,values:e})),I=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Y=new WeakMap,B=k.createTreeWalker(k,129);var F;function q(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,n=0;const o=t.length-1,a=this.parts,[h,c]=((t,e)=>{const s=t.length-1,r=[];let i,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<s;e++){const s=t[e];let a,h,c=-1,d=0;for(;d<s.length&&(o.lastIndex=d,h=o.exec(s),null!==h);)d=o.lastIndex,o===H?"!--"===h[1]?o=U:void 0!==h[1]?o=N:void 0!==h[2]?(j.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=W):void 0!==h[3]&&(o=W):o===W?">"===h[0]?(o=i??H,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?W:'"'===h[3]?R:z):o===R||o===z?o=W:o===U||o===N?o=H:(o=W,i=void 0);const l=o===W&&t[e+1].startsWith("/>")?" ":"";n+=o===H?s+O:c>=0?(r.push(a),s.slice(0,c)+x+s.slice(c)+E+l):s+E+(-2===c?e:l)}return[q(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]})(t,e);if(this.el=J.createElement(h,s),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=B.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(x)){const e=c[n++],s=r.getAttribute(t).split(E),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:o[2],strings:s,ctor:"."===o[1]?X:"?"===o[1]?tt:"@"===o[1]?et:Q}),r.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(j.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],C()),B.nextNode(),a.push({type:2,index:++i});r.append(t[e],C())}}}else if(8===r.nodeType)if(r.data===M)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)a.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,r){if(e===I)return e;let i=void 0!==r?s._$Co?.[r]:s._$Cl;const n=D(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(t),i._$AT(t,s,r)),void 0!==r?(s._$Co??(s._$Co=[]))[r]=i:s._$Cl=i),void 0!==i&&(e=Z(t,i._$AS(t,e.values),i,r)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??k).importNode(e,!0);B.currentNode=r;let i=B.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new K(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new st(i,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(i=B.nextNode(),n++)}return B.currentNode=k,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}let K=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),D(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new G(r,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new J(t)),e}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const n of e)i===s.length?s.push(r=new t(this.O(C()),this.O(C()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,r){const i=this.strings;let n=!1;if(void 0===i)t=Z(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const r=t;let o,a;for(t=i[0],o=0;o<i.length-1;o++)a=Z(this,r[s+o],e,o),a===I&&(a=this._$AH[o]),n||(n=!D(a)||a!==this._$AH[o]),a===V?t=V:t!==V&&(t+=(a??"")+i[o+1]),this._$AH[o]=a}n&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class et extends Q{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??V)===I)return;const s=this._$AH,r=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==V&&(s===V||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=b.litHtmlPolyfillSupport;rt?.(J,K),(b.litHtmlVersions??(b.litHtmlVersions=[])).push("3.3.2");const it=globalThis;class nt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const r=s?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=s?.renderBefore??null;r._$litPart$=i=new K(e.insertBefore(C(),t),t,void 0,s??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}nt._$litElement$=!0,nt.finalized=!0,it.litElementHydrateSupport?.({LitElement:nt});const ot=it.litElementPolyfillSupport;ot?.({LitElement:nt}),(it.litElementVersions??(it.litElementVersions=[])).push("4.2.2");const at={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:_},ht=(t=at,e,s)=>{const{kind:r,metadata:i}=s;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t,!0,s)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];e.call(this,s),this.requestUpdate(r,i,t,!0,s)}}throw Error("Unsupported decorator location: "+r)};function ct(t){return function(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}({...t,state:!0,attribute:!1})}const dt=((t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new i(r,t,s)})`
  :host {
    display: block;
    height: 100%;
  }

  ha-card {
    height: 100%;
    padding: 16px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    font-size: 1.2em;
    font-weight: 500;
    padding-bottom: 12px;
    color: var(--primary-text-color);
  }

  .week-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    flex: 1;
    min-height: 0;
    overflow: auto;
  }

  .day-column {
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 12px;
    padding: 12px 8px;
    transition: background-color 0.2s ease;
  }

  .day-column.today {
    background: var(--primary-color);
    border-color: var(--primary-color);
  }

  .day-column.today .day-name,
  .day-column.today .day-number {
    color: var(--text-primary-color, #fff);
  }

  .day-column.today .event-item {
    background: rgba(255, 255, 255, 0.2);
    color: var(--text-primary-color, #fff);
  }

  .day-header {
    text-align: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .day-column.today .day-header {
    border-bottom-color: rgba(255, 255, 255, 0.3);
  }

  .day-name {
    display: block;
    font-size: 0.85em;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .day-number {
    display: block;
    font-size: 1.4em;
    font-weight: bold;
    color: var(--primary-text-color);
    margin-top: 2px;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .event-item {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 8px;
    padding: 6px 8px;
    font-size: 0.8em;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .event-time {
    font-weight: 600;
    display: block;
    font-size: 0.9em;
    opacity: 0.8;
    margin-bottom: 2px;
  }

  .event-title {
    display: block;
    line-height: 1.3;
  }

  .no-events {
    font-size: 0.75em;
    color: var(--secondary-text-color);
    text-align: center;
    padding: 8px 0;
    font-style: italic;
  }

  .loading {
    text-align: center;
    padding: 40px 20px;
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color, #db4437);
    padding: 16px;
    text-align: center;
  }

  /* Responsive: smaller screens */
  @media (max-width: 768px) {
    .day-column {
      padding: 8px 6px;
    }

    .day-name {
      font-size: 0.75em;
    }

    .day-number {
      font-size: 1.2em;
    }

    .event-item {
      font-size: 0.75em;
      padding: 4px 6px;
    }
  }
`;function lt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ut,pt={exports:{}};var ft,$t=(ut||(ut=1,pt.exports=function(){var t=1e3,e=6e4,s=36e5,r="millisecond",i="second",n="minute",o="hour",a="day",h="week",c="month",d="quarter",l="year",u="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],s=t%100;return"["+t+(e[(s-20)%10]||e[s]||e[0])+"]"}},m=function(t,e,s){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(s)+t},_={s:m,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),r=Math.floor(s/60),i=s%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var r=12*(s.year()-e.year())+(s.month()-e.month()),i=e.clone().add(r,c),n=s-i<0,o=e.clone().add(r+(n?-1:1),c);return+(-(r+(s-i)/(n?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:h,d:a,D:u,h:o,m:n,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",v={};v[g]=y;var b="$isDayjsObject",A=function(t){return t instanceof E||!(!t||!t[b])},w=function t(e,s,r){var i;if(!e)return g;if("string"==typeof e){var n=e.toLowerCase();v[n]&&(i=n),s&&(v[n]=s,i=n);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;v[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},S=function(t,e){if(A(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new E(s)},x=_;x.l=w,x.i=A,x.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function y(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,n=(r[7]||"0").substring(0,3);return s?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,n)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,n)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return x},m.isValid=function(){return this.$d.toString()!==p},m.isSame=function(t,e){var s=S(t);return this.startOf(e)<=s&&s<=this.endOf(e)},m.isAfter=function(t,e){return S(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<S(t)},m.$g=function(t,e,s){return x.u(t)?this[e]:this.set(s,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var s=this,r=!!x.u(e)||e,d=x.p(t),p=function(t,e){var i=x.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return r?i:i.endOf(a)},f=function(t,e){return x.w(s.toDate()[t].apply(s.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},$=this.$W,y=this.$M,m=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case l:return r?p(1,0):p(31,11);case c:return r?p(1,y):p(0,y+1);case h:var g=this.$locale().weekStart||0,v=($<g?$+7:$)-g;return p(r?m-v:m+(6-v),y);case a:case u:return f(_+"Hours",0);case o:return f(_+"Minutes",1);case n:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var s,h=x.p(t),d="set"+(this.$u?"UTC":""),p=(s={},s[a]=d+"Date",s[u]=d+"Date",s[c]=d+"Month",s[l]=d+"FullYear",s[o]=d+"Hours",s[n]=d+"Minutes",s[i]=d+"Seconds",s[r]=d+"Milliseconds",s)[h],f=h===a?this.$D+(e-this.$W):e;if(h===c||h===l){var $=this.clone().set(u,1);$.$d[p](f),$.init(),this.$d=$.set(u,Math.min(this.$D,$.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[x.p(t)]()},m.add=function(r,d){var u,p=this;r=Number(r);var f=x.p(d),$=function(t){var e=S(p);return x.w(e.date(e.date()+Math.round(t*r)),p)};if(f===c)return this.set(c,this.$M+r);if(f===l)return this.set(l,this.$y+r);if(f===a)return $(1);if(f===h)return $(7);var y=(u={},u[n]=e,u[o]=s,u[i]=t,u)[f]||1,m=this.$d.getTime()+r*y;return x.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,s=this.$locale();if(!this.isValid())return s.invalidDate||p;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),n=this.$H,o=this.$m,a=this.$M,h=s.weekdays,c=s.months,d=s.meridiem,l=function(t,s,i,n){return t&&(t[s]||t(e,r))||i[s].slice(0,n)},u=function(t){return x.s(n%12||12,t,"0")},f=d||function(t,e,s){var r=t<12?"AM":"PM";return s?r.toLowerCase():r};return r.replace($,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return a+1;case"MM":return x.s(a+1,2,"0");case"MMM":return l(s.monthsShort,a,c,3);case"MMMM":return l(c,a);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(s.weekdaysMin,e.$W,h,2);case"ddd":return l(s.weekdaysShort,e.$W,h,3);case"dddd":return h[e.$W];case"H":return String(n);case"HH":return x.s(n,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return f(n,o,!0);case"A":return f(n,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,u,p){var f,$=this,y=x.p(u),m=S(r),_=(m.utcOffset()-this.utcOffset())*e,g=this-m,v=function(){return x.m($,m)};switch(y){case l:f=v()/12;break;case c:f=v();break;case d:f=v()/3;break;case h:f=(g-_)/6048e5;break;case a:f=(g-_)/864e5;break;case o:f=g/s;break;case n:f=g/e;break;case i:f=g/t;break;default:f=g}return p?f:x.a(f)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),r=w(t,e,!0);return r&&(s.$L=r),s},m.clone=function(){return x.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),M=E.prototype;return S.prototype=M,[["$ms",r],["$s",i],["$m",n],["$H",o],["$W",a],["$M",c],["$y",l],["$D",u]].forEach(function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),S.extend=function(t,e){return t.$i||(t(e,E,S),t.$i=!0),S},S.locale=w,S.isDayjs=A,S.unix=function(t){return S(1e3*t)},S.en=v[g],S.Ls=v,S.p={},S}()),pt.exports),yt=lt($t),mt={exports:{}};var _t,gt=lt((ft||(ft=1,mt.exports=function(t,e){e.prototype.weekday=function(t){var e=this.$locale().weekStart||0,s=this.$W,r=(s<e?s+7:s)-e;return this.$utils().u(t)?r:this.subtract(r,"day").add(t,"day")}}),mt.exports)),vt={exports:{}};var bt,At=lt((_t||(_t=1,vt.exports=(bt="day",function(t,e,s){var r=function(t){return t.add(4-t.isoWeekday(),bt)},i=e.prototype;i.isoWeekYear=function(){return r(this).year()},i.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),bt);var e,i,n,o=r(this),a=(e=this.isoWeekYear(),n=4-(i=(this.$u?s.utc:s)().year(e).startOf("year")).isoWeekday(),i.isoWeekday()>4&&(n+=7),i.add(n,bt));return o.diff(a,"week")+1},i.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var n=i.startOf;i.startOf=function(t,e){var s=this.$utils(),r=!!s.u(e)||e;return"isoweek"===s.p(t)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(t,e)}})),vt.exports));yt.extend(gt),yt.extend(At);const wt=["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"];var St=Object.defineProperty,xt=(t,e,s,r)=>{for(var i,n=void 0,o=t.length-1;o>=0;o--)(i=t[o])&&(n=i(e,s,n)||n);return n&&St(e,s,n),n};class Et extends nt{constructor(){super(...arguments),this._events=[],this._loading=!0,this._lastFetch=0,this._fetchInterval=3e5}setConfig(t){if(!t.entity)throw new Error("Je moet een calendar entity opgeven (bijv. calendar.gezin)");this._config=t}set hass(t){const e=this._hass;this._hass=t;const s=Date.now();(!e||s-this._lastFetch>this._fetchInterval)&&this._fetchEvents()}get hass(){return this._hass}getCardSize(){return 4}getGridOptions(){const t={columns:12,min_columns:6,rows:4,min_rows:2};return console.log("getGridOptions called, returning:",t),t}async _fetchEvents(){if(this._hass&&this._config){this._loading=!0,this._error=void 0,this._lastFetch=Date.now();try{const t=function(t=new Date){return yt(t).isoWeekday(1).startOf("day").toDate()}(),e=function(t=new Date){return yt(t).isoWeekday(7).endOf("day").toDate()}(),s=t.toISOString(),r=e.toISOString(),i=`calendars/${this._config.entity}?start=${s}&end=${r}`,n=await this._hass.callApi("GET",i);this._events=n||[],console.log("Calendar events fetched:",this._events)}catch(t){console.error("Error fetching calendar events:",t),this._error="Kon agenda niet laden",this._events=[]}finally{this._loading=!1}}}_getEventsForDay(t){return this._events.filter(e=>function(t,e){const s=t.start.dateTime||t.start.date,r=t.end.dateTime||t.end.date;if(!s||!r)return!1;const i=yt(s),n=yt(r),o=yt(e);return!!i.isSame(o,"day")||!!i.isBefore(o,"day")&&(t.end.date?n.isAfter(o,"day"):n.isAfter(o.startOf("day")))}(e,t)).sort((t,e)=>new Date(t.start).getTime()-new Date(e.start).getTime())}render(){if(!this._config)return L`<ha-card><div class="error">Geen configuratie</div></ha-card>`;if(this._loading&&0===this._events.length)return L`
        <ha-card>
          <div class="loading">Agenda laden...</div>
        </ha-card>
      `;if(this._error)return L`
        <ha-card>
          <div class="error">${this._error}</div>
        </ha-card>
      `;const t=function(t=new Date){const e=yt(t).isoWeekday(1);return Array.from({length:7},(t,s)=>e.add(s,"day").toDate())}();return L`
      <ha-card>
        ${this._config.title?L`<div class="card-header">${this._config.title}</div>`:""}
        <div class="week-container">
          ${t.map(t=>this._renderDay(t))}
        </div>
      </ha-card>
    `}_renderDay(t){const e=this._getEventsForDay(t),s=function(t){return yt(t).isSame(yt(),"day")}(t);return L`
      <div class="day-column ${s?"today":""}">
        <div class="day-header">
          <span class="day-name">${function(t){const e=yt(t).isoWeekday()-1;return wt[e]}(t)}</span>
          <span class="day-number">${t.getDate()}</span>
        </div>
        <div class="events-list">
          ${e.length>0?e.map(t=>this._renderEvent(t)):L`<div class="no-events">-</div>`}
        </div>
      </div>
    `}_renderEvent(t){const e=function(t){return t.date?"":t.dateTime?yt(t.dateTime).format("HH:mm"):""}(t.start);return L`
      <div class="event-item">
        ${e?L`<span class="event-time">${e}</span>`:""}
        <span class="event-title">${t.summary}</span>
      </div>
    `}}Et.styles=dt,xt([ct()],Et.prototype,"_events"),xt([ct()],Et.prototype,"_loading"),xt([ct()],Et.prototype,"_error");console.info("%c FAMILY-WEEK-VIEWER %c v1.0.8 ","color: white; background: #3498db; font-weight: bold; padding: 2px 4px; border-radius: 3px 0 0 3px;","color: #3498db; background: #ecf0f1; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;"),customElements.define("family-week-viewer",Et),window.customCards=window.customCards||[],window.customCards.push({type:"family-week-viewer",name:"Family Week Viewer",description:"Een weekoverzicht van je gezinsagenda",preview:!1});export{Et as FamilyWeekViewer};
