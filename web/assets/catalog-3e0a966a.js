var ct=Object.defineProperty;var ht=(t,e,n)=>e in t?ct(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ke=(t,e,n)=>(ht(t,typeof e!="symbol"?e+"":e,n),n);import{L as ft}from"./index-8d9d392b.js";import{d as we,S as Se,i as qe,a as He,b as pt,c as Re,t as vt,e as gt,f as bt,g as yt,h as kt,u as Ge,U as de,j as pe,k as Ie,l as ve,m as B,n as S,o as ge,p as mt,q as Ne,r as ie,w as T,s as Ve,v as se,x as w,y as Z,z as Ue,A as Le,B as Nt,C as Te,D as je,E as $,F as We,G as M,H as E,I as A,J as X,K as _,L as x,M as k,N as R,O as I,P as re,Q as le,R as ue,T as Ce,V as Ye,W as Ee,X as F,Y as xe,_ as Y,Z as Je,$ as Ct,a0 as Et,a1 as W,a2 as xt,a3 as Dt,a4 as Qe,a5 as be,a6 as Kt,a7 as Be,a8 as he,a9 as wt,aa as St,ab as It,ac as Lt,ad as Tt,ae as q,af as ye,ag as z,ah as fe,ai as Xe,aj as Bt,ak as $e,al as Ze,am as $t,an as At,ao as P,ap as Ot,aq as Ft,ar as Mt,as as zt,at as Ae,au as Pt,av as qt}from"./index-483b83c5.js";function Ht(t){return t}function Rt(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var Gt=800,Vt=16,Ut=Date.now;function jt(t){var e=0,n=0;return function(){var a=Ut(),o=Vt-(a-n);if(n=a,o>0){if(++e>=Gt)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Wt(t){return function(){return t}}var Yt=we?function(t,e){return we(t,"toString",{configurable:!0,enumerable:!1,value:Wt(e),writable:!0})}:Ht;const Jt=Yt;var Qt=jt(Jt);const Xt=Qt;var Oe=Math.max;function Zt(t,e,n){return e=Oe(e===void 0?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=Oe(a.length-e,0),l=Array(s);++o<s;)l[o]=a[e+o];o=-1;for(var r=Array(e+1);++o<e;)r[o]=a[o];return r[e]=n(l),Rt(t,this,r)}}var Fe=Se?Se.isConcatSpreadable:void 0;function _t(t){return qe(t)||He(t)||!!(Fe&&t&&t[Fe])}function _e(t,e,n,a,o){var s=-1,l=t.length;for(n||(n=_t),o||(o=[]);++s<l;){var r=t[s];e>0&&n(r)?e>1?_e(r,e-1,n,a,o):pt(o,r):a||(o[o.length]=r)}return o}function en(t){var e=t==null?0:t.length;return e?_e(t,1):[]}function tn(t){return Xt(Zt(t,void 0,en),t+"")}function nn(t,e){return t!=null&&e in Object(t)}function on(t,e,n){e=Re(e,t);for(var a=-1,o=e.length,s=!1;++a<o;){var l=vt(e[a]);if(!(s=t!=null&&n(t,l)))break;t=t[l]}return s||++a!=o?s:(o=t==null?0:t.length,!!o&&gt(o)&&bt(l,o)&&(qe(t)||He(t)))}function an(t,e){return t!=null&&on(t,e,nn)}function sn(t,e,n){for(var a=-1,o=e.length,s={};++a<o;){var l=e[a],r=yt(t,l);n(r,l)&&kt(s,Re(l,t),r)}return s}function rn(t,e){return sn(t,e,function(n,a){return an(t,a)})}var ln=tn(function(t,e){return t==null?{}:rn(t,e)});const dn=ln,et={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Ge,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},tt={[de]:t=>pe(t)||Ie(t)||ve(t),change:t=>pe(t)||Ie(t)||ve(t)},J=Symbol("checkboxGroupContextKey"),un=({model:t,isChecked:e})=>{const n=B(J,void 0),a=S(()=>{var s,l;const r=(s=n==null?void 0:n.max)==null?void 0:s.value,p=(l=n==null?void 0:n.min)==null?void 0:l.value;return!ge(r)&&t.value.length>=r&&!e.value||!ge(p)&&t.value.length<=p&&e.value});return{isDisabled:mt(S(()=>(n==null?void 0:n.disabled.value)||a.value)),isLimitDisabled:a}},cn=(t,{model:e,isLimitExceeded:n,hasOwnLabel:a,isDisabled:o,isLabeledByFormItem:s})=>{const l=B(J,void 0),{formItem:r}=Ne(),{emit:p}=ie();function h(u){var v,g;return u===t.trueLabel||u===!0?(v=t.trueLabel)!=null?v:!0:(g=t.falseLabel)!=null?g:!1}function d(u,v){p("change",h(u),v)}function f(u){if(n.value)return;const v=u.target;p("change",h(v.checked),u)}async function c(u){n.value||!a.value&&!o.value&&s.value&&(u.composedPath().some(y=>y.tagName==="LABEL")||(e.value=h([!1,t.falseLabel].includes(e.value)),await se(),d(e.value,u)))}const i=S(()=>(l==null?void 0:l.validateEvent)||t.validateEvent);return T(()=>t.modelValue,()=>{i.value&&(r==null||r.validate("change").catch(u=>Ve()))}),{handleChange:f,onClickRoot:c}},hn=t=>{const e=w(!1),{emit:n}=ie(),a=B(J,void 0),o=S(()=>ge(a)===!1),s=w(!1);return{model:S({get(){var r,p;return o.value?(r=a==null?void 0:a.modelValue)==null?void 0:r.value:(p=t.modelValue)!=null?p:e.value},set(r){var p,h;o.value&&Z(r)?(s.value=((p=a==null?void 0:a.max)==null?void 0:p.value)!==void 0&&r.length>(a==null?void 0:a.max.value),s.value===!1&&((h=a==null?void 0:a.changeEvent)==null||h.call(a,r))):(n(de,r),e.value=r)}}),isGroup:o,isLimitExceeded:s}},fn=(t,e,{model:n})=>{const a=B(J,void 0),o=w(!1),s=S(()=>{const h=n.value;return ve(h)?h:Z(h)?Ue(t.label)?h.map(Le).some(d=>Nt(d,t.label)):h.map(Le).includes(t.label):h!=null?h===t.trueLabel:!!h}),l=Te(S(()=>{var h;return(h=a==null?void 0:a.size)==null?void 0:h.value}),{prop:!0}),r=Te(S(()=>{var h;return(h=a==null?void 0:a.size)==null?void 0:h.value})),p=S(()=>!!(e.default||t.label));return{checkboxButtonSize:l,isChecked:s,isFocused:o,checkboxSize:r,hasOwnLabel:p}},pn=(t,{model:e})=>{function n(){Z(e.value)&&!e.value.includes(t.label)?e.value.push(t.label):e.value=t.trueLabel||!0}t.checked&&n()},nt=(t,e)=>{const{formItem:n}=Ne(),{model:a,isGroup:o,isLimitExceeded:s}=hn(t),{isFocused:l,isChecked:r,checkboxButtonSize:p,checkboxSize:h,hasOwnLabel:d}=fn(t,e,{model:a}),{isDisabled:f}=un({model:a,isChecked:r}),{inputId:c,isLabeledByFormItem:i}=je(t,{formItemContext:n,disableIdGeneration:d,disableIdManagement:o}),{handleChange:u,onClickRoot:v}=cn(t,{model:a,isLimitExceeded:s,hasOwnLabel:d,isDisabled:f,isLabeledByFormItem:i});return pn(t,{model:a}),{inputId:c,isLabeledByFormItem:i,isChecked:r,isDisabled:f,isFocused:l,checkboxButtonSize:p,checkboxSize:h,hasOwnLabel:d,model:a,handleChange:u,onClickRoot:v}},vn=["tabindex","role","aria-checked"],gn=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],bn=["id","aria-hidden","disabled","value","name","tabindex"],yn=$({name:"ElCheckbox"}),kn=$({...yn,props:et,emits:tt,setup(t){const e=t,n=We(),{inputId:a,isLabeledByFormItem:o,isChecked:s,isDisabled:l,isFocused:r,checkboxSize:p,hasOwnLabel:h,model:d,handleChange:f,onClickRoot:c}=nt(e,n),i=M("checkbox"),u=S(()=>[i.b(),i.m(p.value),i.is("disabled",l.value),i.is("bordered",e.border),i.is("checked",s.value)]),v=S(()=>[i.e("input"),i.is("disabled",l.value),i.is("checked",s.value),i.is("indeterminate",e.indeterminate),i.is("focus",r.value)]);return(g,y)=>(E(),A(xe(!k(h)&&k(o)?"span":"label"),{class:x(k(u)),"aria-controls":g.indeterminate?g.controls:null,onClick:k(c)},{default:X(()=>[_("span",{class:x(k(v)),tabindex:g.indeterminate?0:void 0,role:g.indeterminate?"checkbox":void 0,"aria-checked":g.indeterminate?"mixed":void 0},[g.trueLabel||g.falseLabel?R((E(),I("input",{key:0,id:k(a),"onUpdate:modelValue":y[0]||(y[0]=C=>re(d)?d.value=C:null),class:x(k(i).e("original")),type:"checkbox","aria-hidden":g.indeterminate?"true":"false",name:g.name,tabindex:g.tabindex,disabled:k(l),"true-value":g.trueLabel,"false-value":g.falseLabel,onChange:y[1]||(y[1]=(...C)=>k(f)&&k(f)(...C)),onFocus:y[2]||(y[2]=C=>r.value=!0),onBlur:y[3]||(y[3]=C=>r.value=!1)},null,42,gn)),[[le,k(d)]]):R((E(),I("input",{key:1,id:k(a),"onUpdate:modelValue":y[4]||(y[4]=C=>re(d)?d.value=C:null),class:x(k(i).e("original")),type:"checkbox","aria-hidden":g.indeterminate?"true":"false",disabled:k(l),value:g.label,name:g.name,tabindex:g.tabindex,onChange:y[5]||(y[5]=(...C)=>k(f)&&k(f)(...C)),onFocus:y[6]||(y[6]=C=>r.value=!0),onBlur:y[7]||(y[7]=C=>r.value=!1)},null,42,bn)),[[le,k(d)]]),_("span",{class:x(k(i).e("inner"))},null,2)],10,vn),k(h)?(E(),I("span",{key:0,class:x(k(i).e("label"))},[ue(g.$slots,"default"),g.$slots.default?F("v-if",!0):(E(),I(Ce,{key:0},[Ye(Ee(g.label),1)],64))],2)):F("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var mn=Y(kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Nn=["name","tabindex","disabled","true-value","false-value"],Cn=["name","tabindex","disabled","value"],En=$({name:"ElCheckboxButton"}),xn=$({...En,props:et,emits:tt,setup(t){const e=t,n=We(),{isFocused:a,isChecked:o,isDisabled:s,checkboxButtonSize:l,model:r,handleChange:p}=nt(e,n),h=B(J,void 0),d=M("checkbox"),f=S(()=>{var i,u,v,g;const y=(u=(i=h==null?void 0:h.fill)==null?void 0:i.value)!=null?u:"";return{backgroundColor:y,borderColor:y,color:(g=(v=h==null?void 0:h.textColor)==null?void 0:v.value)!=null?g:"",boxShadow:y?`-1px 0 0 0 ${y}`:void 0}}),c=S(()=>[d.b("button"),d.bm("button",l.value),d.is("disabled",s.value),d.is("checked",o.value),d.is("focus",a.value)]);return(i,u)=>(E(),I("label",{class:x(k(c))},[i.trueLabel||i.falseLabel?R((E(),I("input",{key:0,"onUpdate:modelValue":u[0]||(u[0]=v=>re(r)?r.value=v:null),class:x(k(d).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:k(s),"true-value":i.trueLabel,"false-value":i.falseLabel,onChange:u[1]||(u[1]=(...v)=>k(p)&&k(p)(...v)),onFocus:u[2]||(u[2]=v=>a.value=!0),onBlur:u[3]||(u[3]=v=>a.value=!1)},null,42,Nn)),[[le,k(r)]]):R((E(),I("input",{key:1,"onUpdate:modelValue":u[4]||(u[4]=v=>re(r)?r.value=v:null),class:x(k(d).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:k(s),value:i.label,onChange:u[5]||(u[5]=(...v)=>k(p)&&k(p)(...v)),onFocus:u[6]||(u[6]=v=>a.value=!0),onBlur:u[7]||(u[7]=v=>a.value=!1)},null,42,Cn)),[[le,k(r)]]),i.$slots.default||i.label?(E(),I("span",{key:2,class:x(k(d).be("button","inner")),style:Je(k(o)?k(f):void 0)},[ue(i.$slots,"default",{},()=>[Ye(Ee(i.label),1)])],6)):F("v-if",!0)],2))}});var ot=Y(xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Dn=Ct({modelValue:{type:Et(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Ge,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Kn={[de]:t=>Z(t),change:t=>Z(t)},wn=$({name:"ElCheckboxGroup"}),Sn=$({...wn,props:Dn,emits:Kn,setup(t,{emit:e}){const n=t,a=M("checkbox"),{formItem:o}=Ne(),{inputId:s,isLabeledByFormItem:l}=je(n,{formItemContext:o}),r=async h=>{e(de,h),await se(),e("change",h)},p=S({get(){return n.modelValue},set(h){r(h)}});return W(J,{...dn(xt(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:p,changeEvent:r}),T(()=>n.modelValue,()=>{n.validateEvent&&(o==null||o.validate("change").catch(h=>Ve()))}),(h,d)=>{var f;return E(),A(xe(h.tag),{id:k(s),class:x(k(a).b("group")),role:"group","aria-label":k(l)?void 0:h.label||"checkbox-group","aria-labelledby":k(l)?(f=k(o))==null?void 0:f.labelId:void 0},{default:X(()=>[ue(h.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var at=Y(Sn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const In=Dt(mn,{CheckboxButton:ot,CheckboxGroup:at});Qe(ot);Qe(at);const j="$treeNodeId",Me=function(t,e){!e||e[j]||Object.defineProperty(e,j,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},De=function(t,e){return t?e[t]:e[j]},ke=(t,e,n)=>{const a=t.value.currentNode;n();const o=t.value.currentNode;a!==o&&e("current-change",o?o.data:null,o)},me=t=>{let e=!0,n=!0,a=!0;for(let o=0,s=t.length;o<s;o++){const l=t[o];(l.checked!==!0||l.indeterminate)&&(e=!1,l.disabled||(a=!1)),(l.checked!==!1||l.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:a,half:!e&&!n}},oe=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:a}=me(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):a?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const o=t.parent;!o||o.level===0||t.store.checkStrictly||oe(o)},ne=function(t,e){const n=t.store.props,a=t.data||{},o=n[e];if(typeof o=="function")return o(a,t);if(typeof o=="string")return a[o];if(typeof o>"u"){const s=a[e];return s===void 0?"":s}};let Ln=0;class H{constructor(e){this.id=Ln++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)be(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const s=ne(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||Me(this,this.data),!this.data)return;const a=e.defaultExpandedKeys,o=e.key;o&&a&&a.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Me(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=ne(this,"children")||[];for(let a=0,o=n.length;a<o;a++)this.insertChild({data:n[a]})}get label(){return ne(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ne(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(a=>a===e||n&&a.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,a){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof H)){if(!a){const o=this.getChildren(!0);o.includes(e.data)||(typeof n>"u"||n<0?o.push(e.data):o.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Kt(new H(e)),e instanceof H&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let a;n&&(a=this.childNodes.indexOf(n)),this.insertChild(e,a)}insertAfter(e,n){let a;n&&(a=this.childNodes.indexOf(n),a!==-1&&(a+=1)),this.insertChild(e,a)}removeChild(e){const n=this.getChildren()||[],a=n.indexOf(e.data);a>-1&&n.splice(a,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let a=0;a<this.childNodes.length;a++)if(this.childNodes[a].data===e){n=this.childNodes[a];break}n&&this.removeChild(n)}expand(e,n){const a=()=>{if(n){let o=this.parent;for(;o.level>0;)o.expanded=!0,o=o.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(o=>{o.canFocus=!0})};this.shouldLoadData()?this.loadData(o=>{Array.isArray(o)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||oe(this),a())}):a()}doCreateChildren(e,n={}){e.forEach(a=>{this.insertChild(Object.assign({data:a},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,a,o){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:l,allWithoutDisable:r}=me(this.childNodes);!this.isLeaf&&!l&&r&&(this.checked=!1,e=!1);const p=()=>{if(n){const h=this.childNodes;for(let c=0,i=h.length;c<i;c++){const u=h[c];o=o||e!==!1;const v=u.disabled?u.checked:o;u.setChecked(v,n,!0,o)}const{half:d,all:f}=me(h);f||(this.checked=f,this.indeterminate=d)}};if(this.shouldLoadData()){this.loadData(()=>{p(),oe(this)},{checked:e!==!1});return}else p()}const s=this.parent;!s||s.level===0||a||oe(s)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const a=this.store.props;let o="children";return a&&(o=a.children||"children"),n[o]===void 0&&(n[o]=null),e&&!n[o]&&(n[o]=[]),n[o]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(s=>s.data),a={},o=[];e.forEach((s,l)=>{const r=s[j];!!r&&n.findIndex(h=>h[j]===r)>=0?a[r]={index:l,data:s}:o.push({index:l,data:s})}),this.store.lazy||n.forEach(s=>{a[s[j]]||this.removeChildByData(s)}),o.forEach(({index:s,data:l})=>{this.insertChild({data:l},s)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const a=o=>{this.childNodes=[],this.doCreateChildren(o,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,o)};this.store.load(this,a)}else e&&e.call(this)}}class Tn{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)be(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new H({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,a=this.lazy,o=function(s){const l=s.root?s.root.childNodes:s.childNodes;if(l.forEach(r=>{r.visible=n.call(r,e,r.data,r),o(r)}),!s.visible&&l.length){let r=!0;r=!l.some(p=>p.visible),s.root?s.root.visible=r===!1:s.visible=r===!1}e&&s.visible&&!s.isLeaf&&!a&&s.expand()};o(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof H)return e;const n=Ue(e)?De(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const a=this.getNode(n);a.parent.insertBefore({data:e},a)}insertAfter(e,n){const a=this.getNode(n);a.parent.insertAfter({data:e},a)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const a=n?this.getNode(n):this.root;a&&a.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(a=>{const o=n[a];o&&o.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(a=>{this.deregisterNode(a)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const a=[],o=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(r=>{(r.checked||n&&r.indeterminate)&&(!e||e&&r.isLeaf)&&a.push(r.data),o(r)})};return o(this),a}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(a){(a.root?a.root.childNodes:a.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),n(s)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const a in n)be(n,a)&&e.push(n[a]);return e}updateChildren(e,n){const a=this.nodesMap[e];if(!a)return;const o=a.childNodes;for(let s=o.length-1;s>=0;s--){const l=o[s];this.remove(l.data)}for(let s=0,l=n.length;s<l;s++){const r=n[s];this.append(r,a.data)}}_setCheckedKeys(e,n=!1,a){const o=this._getAllNodes().sort((r,p)=>p.level-r.level),s=Object.create(null),l=Object.keys(a);o.forEach(r=>r.setChecked(!1,!1));for(let r=0,p=o.length;r<p;r++){const h=o[r],d=h.data[e].toString();if(!l.includes(d)){h.checked&&!s[d]&&h.setChecked(!1,!1);continue}let c=h.parent;for(;c&&c.level>0;)s[c.data[e]]=!0,c=c.parent;if(h.isLeaf||this.checkStrictly){h.setChecked(!0,!1);continue}if(h.setChecked(!0,!0),n){h.setChecked(!1,!1);const i=function(u){u.childNodes.forEach(g=>{g.isLeaf||g.setChecked(!1,!1),i(g)})};i(h)}}}setCheckedNodes(e,n=!1){const a=this.key,o={};e.forEach(s=>{o[(s||{})[a]]=!0}),this._setCheckedKeys(a,n,o)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const a=this.key,o={};e.forEach(s=>{o[s]=!0}),this._setCheckedKeys(a,n,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const a=this.getNode(n);a&&a.expand(null,this.autoExpandParent)})}setChecked(e,n,a){const o=this.getNode(e);o&&o.setChecked(!!n,a)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const a=e[this.key],o=this.nodesMap[a];this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const a=this.getNode(e);a&&(this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const Bn=$({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=M("tree"),n=B("NodeInstance"),a=B("RootTree");return()=>{const o=t.node,{data:s,store:l}=o;return t.renderContent?t.renderContent(Be,{_self:n,node:o,data:s,store:l}):a.ctx.slots.default?a.ctx.slots.default({node:o,data:s}):Be("span",{class:e.be("node","label")},[o.label])}}});var $n=Y(Bn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function st(t){const e=B("TreeNodeMap",null),n={treeNodeExpand:a=>{t.node!==a&&t.node.collapse()},children:[]};return e&&e.children.push(n),W("TreeNodeMap",n),{broadcastExpanded:a=>{if(t.accordion)for(const o of n.children)o.treeNodeExpand(a)}}}const rt=Symbol("dragEvents");function An({props:t,ctx:e,el$:n,dropIndicator$:a,store:o}){const s=M("tree"),l=w({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return W(rt,{treeNodeDragStart:({event:d,treeNode:f})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(f.node))return d.preventDefault(),!1;d.dataTransfer.effectAllowed="move";try{d.dataTransfer.setData("text/plain","")}catch{}l.value.draggingNode=f,e.emit("node-drag-start",f.node,d)},treeNodeDragOver:({event:d,treeNode:f})=>{const c=f,i=l.value.dropNode;i&&i.node.id!==c.node.id&&he(i.$el,s.is("drop-inner"));const u=l.value.draggingNode;if(!u||!c)return;let v=!0,g=!0,y=!0,C=!0;typeof t.allowDrop=="function"&&(v=t.allowDrop(u.node,c.node,"prev"),C=g=t.allowDrop(u.node,c.node,"inner"),y=t.allowDrop(u.node,c.node,"next")),d.dataTransfer.dropEffect=g||v||y?"move":"none",(v||g||y)&&(i==null?void 0:i.node.id)!==c.node.id&&(i&&e.emit("node-drag-leave",u.node,i.node,d),e.emit("node-drag-enter",u.node,c.node,d)),(v||g||y)&&(l.value.dropNode=c),c.node.nextSibling===u.node&&(y=!1),c.node.previousSibling===u.node&&(v=!1),c.node.contains(u.node,!1)&&(g=!1),(u.node===c.node||u.node.contains(c.node))&&(v=!1,g=!1,y=!1);const O=c.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),G=n.value.getBoundingClientRect();let L;const ee=v?g?.25:y?.45:1:-1,te=y?g?.75:v?.55:0:1;let V=-9999;const m=d.clientY-O.top;m<O.height*ee?L="before":m>O.height*te?L="after":g?L="inner":L="none";const D=c.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),K=a.value;L==="before"?V=D.top-G.top:L==="after"&&(V=D.bottom-G.top),K.style.top=`${V}px`,K.style.left=`${D.right-G.left}px`,L==="inner"?wt(c.$el,s.is("drop-inner")):he(c.$el,s.is("drop-inner")),l.value.showDropIndicator=L==="before"||L==="after",l.value.allowDrop=l.value.showDropIndicator||C,l.value.dropType=L,e.emit("node-drag-over",u.node,c.node,d)},treeNodeDragEnd:d=>{const{draggingNode:f,dropType:c,dropNode:i}=l.value;if(d.preventDefault(),d.dataTransfer.dropEffect="move",f&&i){const u={data:f.node.data};c!=="none"&&f.node.remove(),c==="before"?i.node.parent.insertBefore(u,i.node):c==="after"?i.node.parent.insertAfter(u,i.node):c==="inner"&&i.node.insertChild(u),c!=="none"&&o.value.registerNode(u),he(i.$el,s.is("drop-inner")),e.emit("node-drag-end",f.node,i.node,c,d),c!=="none"&&e.emit("node-drop",f.node,i.node,c,d)}f&&!i&&e.emit("node-drag-end",f.node,null,c,d),l.value.showDropIndicator=!1,l.value.draggingNode=null,l.value.dropNode=null,l.value.allowDrop=!0}}),{dragState:l}}const On=$({name:"ElTreeNode",components:{ElCollapseTransition:St,ElCheckbox:In,NodeContent:$n,ElIcon:It,Loading:Lt},props:{node:{type:H,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=M("tree"),{broadcastExpanded:a}=st(t),o=B("RootTree"),s=w(!1),l=w(!1),r=w(null),p=w(null),h=w(null),d=B(rt),f=ie();W("NodeInstance",f),t.node.expanded&&(s.value=!0,l.value=!0);const c=o.props.children||"children";T(()=>{const m=t.node.data[c];return m&&[...m]},()=>{t.node.updateChildren()}),T(()=>t.node.indeterminate,m=>{v(t.node.checked,m)}),T(()=>t.node.checked,m=>{v(m,t.node.indeterminate)}),T(()=>t.node.expanded,m=>{se(()=>s.value=m),m&&(l.value=!0)});const i=m=>De(o.props.nodeKey,m.data),u=m=>{const D=t.props.class;if(!D)return{};let K;if(Bt(D)){const{data:ce}=m;K=D(ce,m)}else K=D;return pe(K)?{[K]:!0}:K},v=(m,D)=>{(r.value!==m||p.value!==D)&&o.ctx.emit("check-change",t.node.data,m,D),r.value=m,p.value=D},g=m=>{ke(o.store,o.ctx.emit,()=>o.store.value.setCurrentNode(t.node)),o.currentNode.value=t.node,o.props.expandOnClickNode&&C(),o.props.checkOnClickNode&&!t.node.disabled&&O(null,{target:{checked:!t.node.checked}}),o.ctx.emit("node-click",t.node.data,t.node,f,m)},y=m=>{o.instance.vnode.props.onNodeContextmenu&&(m.stopPropagation(),m.preventDefault()),o.ctx.emit("node-contextmenu",m,t.node.data,t.node,f)},C=()=>{t.node.isLeaf||(s.value?(o.ctx.emit("node-collapse",t.node.data,t.node,f),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,f)))},O=(m,D)=>{t.node.setChecked(D.target.checked,!o.props.checkStrictly),se(()=>{const K=o.store.value;o.ctx.emit("check",t.node.data,{checkedNodes:K.getCheckedNodes(),checkedKeys:K.getCheckedKeys(),halfCheckedNodes:K.getHalfCheckedNodes(),halfCheckedKeys:K.getHalfCheckedKeys()})})};return{ns:n,node$:h,tree:o,expanded:s,childNodeRendered:l,oldChecked:r,oldIndeterminate:p,getNodeKey:i,getNodeClass:u,handleSelectChange:v,handleClick:g,handleContextMenu:y,handleExpandIconClick:C,handleCheckChange:O,handleChildNodeExpand:(m,D,K)=>{a(D),o.ctx.emit("node-expand",m,D,K)},handleDragStart:m=>{o.props.draggable&&d.treeNodeDragStart({event:m,treeNode:t})},handleDragOver:m=>{m.preventDefault(),o.props.draggable&&d.treeNodeDragOver({event:m,treeNode:{$el:h.value,node:t.node}})},handleDrop:m=>{m.preventDefault()},handleDragEnd:m=>{o.props.draggable&&d.treeNodeDragEnd(m)},CaretRight:Tt}}}),Fn=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],Mn=["aria-expanded"];function zn(t,e,n,a,o,s){const l=q("el-icon"),r=q("el-checkbox"),p=q("loading"),h=q("node-content"),d=q("el-tree-node"),f=q("el-collapse-transition");return R((E(),I("div",{ref:"node$",class:x([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=z((...c)=>t.handleClick&&t.handleClick(...c),["stop"])),onContextmenu:e[2]||(e[2]=(...c)=>t.handleContextMenu&&t.handleContextMenu(...c)),onDragstart:e[3]||(e[3]=z((...c)=>t.handleDragStart&&t.handleDragStart(...c),["stop"])),onDragover:e[4]||(e[4]=z((...c)=>t.handleDragOver&&t.handleDragOver(...c),["stop"])),onDragend:e[5]||(e[5]=z((...c)=>t.handleDragEnd&&t.handleDragEnd(...c),["stop"])),onDrop:e[6]||(e[6]=z((...c)=>t.handleDrop&&t.handleDrop(...c),["stop"]))},[_("div",{class:x(t.ns.be("node","content")),style:Je({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(E(),A(l,{key:0,class:x([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:z(t.handleExpandIconClick,["stop"])},{default:X(()=>[(E(),A(xe(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):F("v-if",!0),t.showCheckbox?(E(),A(r,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=z(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):F("v-if",!0),t.node.loading?(E(),A(l,{key:2,class:x([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:X(()=>[fe(p)]),_:1},8,["class"])):F("v-if",!0),fe(h,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),fe(f,null,{default:X(()=>[!t.renderAfterExpand||t.childNodeRendered?R((E(),I("div",{key:0,class:x(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(E(!0),I(Ce,null,Xe(t.node.childNodes,c=>(E(),A(d,{key:t.getNodeKey(c),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:c,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,Mn)),[[ye,t.expanded]]):F("v-if",!0)]),_:1})],42,Fn)),[[ye,t.node.visible]])}var Pn=Y(On,[["render",zn],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);function qn({el$:t},e){const n=M("tree"),a=$e([]),o=$e([]);Ze(()=>{l()}),$t(()=>{a.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),T(o,r=>{r.forEach(p=>{p.setAttribute("tabindex","-1")})}),At(t,"keydown",r=>{const p=r.target;if(!p.className.includes(n.b("node")))return;const h=r.code;a.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const d=a.value.indexOf(p);let f;if([P.up,P.down].includes(h)){if(r.preventDefault(),h===P.up){f=d===-1?0:d!==0?d-1:a.value.length-1;const i=f;for(;!e.value.getNode(a.value[f].dataset.key).canFocus;){if(f--,f===i){f=-1;break}f<0&&(f=a.value.length-1)}}else{f=d===-1?0:d<a.value.length-1?d+1:0;const i=f;for(;!e.value.getNode(a.value[f].dataset.key).canFocus;){if(f++,f===i){f=-1;break}f>=a.value.length&&(f=0)}}f!==-1&&a.value[f].focus()}[P.left,P.right].includes(h)&&(r.preventDefault(),p.click());const c=p.querySelector('[type="checkbox"]');[P.enter,P.space].includes(h)&&c&&(r.preventDefault(),c.click())});const l=()=>{var r;a.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const p=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(p.length){p[0].setAttribute("tabindex","0");return}(r=a.value[0])==null||r.setAttribute("tabindex","0")}}const Hn=$({name:"ElTree",components:{ElTreeNode:Pn},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Ot}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Ft(),a=M("tree"),o=w(new Tn({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));o.value.initialize();const s=w(o.value.root),l=w(null),r=w(null),p=w(null),{broadcastExpanded:h}=st(t),{dragState:d}=An({props:t,ctx:e,el$:r,dropIndicator$:p,store:o});qn({el$:r},o);const f=S(()=>{const{childNodes:b}=s.value;return!b||b.length===0||b.every(({visible:N})=>!N)});T(()=>t.currentNodeKey,b=>{o.value.setCurrentNodeKey(b)}),T(()=>t.defaultCheckedKeys,b=>{o.value.setDefaultCheckedKey(b)}),T(()=>t.defaultExpandedKeys,b=>{o.value.setDefaultExpandedKeys(b)}),T(()=>t.data,b=>{o.value.setData(b)},{deep:!0}),T(()=>t.checkStrictly,b=>{o.value.checkStrictly=b});const c=b=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");o.value.filter(b)},i=b=>De(t.nodeKey,b.data),u=b=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const N=o.value.getNode(b);if(!N)return[];const U=[N.data];let Q=N.parent;for(;Q&&Q!==s.value;)U.push(Q.data),Q=Q.parent;return U.reverse()},v=(b,N)=>o.value.getCheckedNodes(b,N),g=b=>o.value.getCheckedKeys(b),y=()=>{const b=o.value.getCurrentNode();return b?b.data:null},C=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const b=y();return b?b[t.nodeKey]:null},O=(b,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");o.value.setCheckedNodes(b,N)},G=(b,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");o.value.setCheckedKeys(b,N)},L=(b,N,U)=>{o.value.setChecked(b,N,U)},ee=()=>o.value.getHalfCheckedNodes(),te=()=>o.value.getHalfCheckedKeys(),V=(b,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ke(o,e.emit,()=>o.value.setUserCurrentNode(b,N))},m=(b,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ke(o,e.emit,()=>o.value.setCurrentNodeKey(b,N))},D=b=>o.value.getNode(b),K=b=>{o.value.remove(b)},ce=(b,N)=>{o.value.append(b,N)},lt=(b,N)=>{o.value.insertBefore(b,N)},dt=(b,N)=>{o.value.insertAfter(b,N)},it=(b,N,U)=>{h(N),e.emit("node-expand",b,N,U)},ut=(b,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");o.value.updateChildren(b,N)};return W("RootTree",{ctx:e,props:t,store:o,root:s,currentNode:l,instance:ie()}),W(Mt,void 0),{ns:a,store:o,root:s,currentNode:l,dragState:d,el$:r,dropIndicator$:p,isEmpty:f,filter:c,getNodeKey:i,getNodePath:u,getCheckedNodes:v,getCheckedKeys:g,getCurrentNode:y,getCurrentKey:C,setCheckedNodes:O,setCheckedKeys:G,setChecked:L,getHalfCheckedNodes:ee,getHalfCheckedKeys:te,setCurrentNode:V,setCurrentKey:m,t:n,getNode:D,remove:K,append:ce,insertBefore:lt,insertAfter:dt,handleNodeExpand:it,updateKeyChildren:ut}}});function Rn(t,e,n,a,o,s){const l=q("el-tree-node");return E(),I("div",{ref:"el$",class:x([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(E(!0),I(Ce,null,Xe(t.root.childNodes,r=>(E(),A(l,{key:t.getNodeKey(r),node:r,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(E(),I("div",{key:0,class:x(t.ns.e("empty-block"))},[ue(t.$slots,"empty",{},()=>{var r;return[_("span",{class:x(t.ns.e("empty-text"))},Ee((r=t.emptyText)!=null?r:t.t("el.tree.emptyText")),3)]})],2)):F("v-if",!0),R(_("div",{ref:"dropIndicator$",class:x(t.ns.e("drop-indicator"))},null,2),[[ye,t.dragState.showDropIndicator]])],2)}var ae=Y(Hn,[["render",Rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);ae.install=t=>{t.component(ae.name,ae)};const Gn=ae,Vn=Gn;class Un{constructor(){Ke(this,"pools",{})}remove(e,n,a){const s=this.pools[e]&&this.pools[e][n];s&&(this.pools[e][n]=s.filter(l=>l!==a))}clear(e){this.pools[e]={}}on(e,n){return this.pools[e]||(this.pools[e]={}),this.pools[e][n.name]||(this.pools[e][n.name]=[]),this.pools[e][n.name].push(n.callback),this.pools[e][n.name].includes(n.callback)}emit(e,n,...a){this.pools[e]||(this.pools[e]={});const s=this.pools[e][n];s&&s.forEach(l=>{try{l(...a)}catch(r){console.error(`${n} monitor event exception！`,r)}})}}const ze=new Un;const Pe="douyin",jn=20,Wn=$({__name:"catalog",setup(t){const e=w(void 0),n=B("catalog"),a=B("scrollElement"),o=w(1),s={children:"children",label:"text"},l=d=>{const f=Ae(d.text,d.level,d.index),c=document.getElementById(f),i=a==null?void 0:a.value;if(c&&i){let u=c.offsetParent,v=c.offsetTop;if(i.contains(u))for(;u&&i!=u;)v+=u==null?void 0:u.offsetTop,u=u==null?void 0:u.offsetParent;i==null||i.scrollTo({top:v-70,behavior:"smooth"})}},r=S(()=>{const d=[];return n&&n.value.forEach((f,c)=>{const{text:i,level:u}=f,v={level:u,text:i,index:c+1};if(d.length===0)d.push(v);else{let g=d[d.length-1];if(v.level>g.level)for(let y=g.level+1;y<=6;y++){const{children:C}=g;if(!C){g.children=[v];break}if(g=C[C.length-1],v.level<=g.level){C.push(v);break}}else d.push(v)}}),d}),p=ft(d=>{if(!n)return!1;if(!d||d.length===0)return n.value=[],!1;const{index:f}=d.reduce((c,i,u)=>{const v=document.getElementById(Ae(i.text,i.level,u+1));if(v instanceof HTMLElement){const g=a==null?void 0:a.value,y=Pt(v,g);if(y<jn&&y>c.minTop)return{activeHead:i,index:u+1,minTop:y}}return c},{activeHead:d[0],index:1,minTop:Number.MIN_SAFE_INTEGER});e.value.setCurrentKey(f,!0),n.value=d}),h=()=>{p(n==null?void 0:n.value)};return Ze(()=>{const d=a==null?void 0:a.value;d==null||d.addEventListener("scroll",h),ze.on(Pe,{name:"catalogChanged",callback:f=>{p(f)}}),ze.emit(Pe,"pushCatalog")}),zt(()=>{var f;const d=a==null?void 0:a.value;(f=d===document.documentElement?window:d)==null||f.removeEventListener("scroll",h)}),(d,f)=>(E(),A(k(Vn),{ref_key:"treeRef",ref:e,data:k(r),props:s,accordion:!1,"default-expand-all":"",onNodeClick:l,"current-node-key":k(o),"highlight-current":!1,"node-key":"index",indent:13},null,8,["data","current-node-key"]))}});const Xn=qt(Wn,[["__scopeId","data-v-8b3b510b"]]);export{Xn as default};
