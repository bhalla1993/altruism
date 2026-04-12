import{r as a,x as Ae,R as A,b as X,_ as oe,c as x,j as k,a as Me,u as Te,s as se,S as ae,g as Xe,e as Ye}from"./index-zCjXDqou.js";function We(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function H(e){const t=a.useRef(e);return Ae(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function he(...e){return a.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{We(n,t)})},e)}const me={};function He(e,t){const n=a.useRef(me);return n.current===me&&(n.current=e(t)),n}const Ge=[];function qe(e){a.useEffect(e,Ge)}class G{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new G}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Ze(){const e=He(G.create).current;return qe(e.disposeEffect),e}let q=!0,ne=!1;const Je=new G,Qe={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function et(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Qe[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function tt(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function te(){q=!1}function nt(){this.visibilityState==="hidden"&&ne&&(q=!0)}function rt(e){e.addEventListener("keydown",tt,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",nt,!0)}function it(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||et(t)}function ot(){const e=a.useCallback(r=>{r!=null&&rt(r.ownerDocument)},[]),t=a.useRef(!1);function n(){return t.current?(ne=!0,Je.start(100,()=>{ne=!1}),t.current=!1,!0):!1}function u(r){return it(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,u){return n.__proto__=u,n},re(e,t)}function st(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,re(e,t)}const be=A.createContext(null);function at(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){var n=function(i){return t&&a.isValidElement(i)?t(i):i},u=Object.create(null);return e&&a.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function ut(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var i in e)i in t?r.length&&(u[i]=r,r=[]):r.push(i);var o,c={};for(var l in t){if(u[l])for(o=0;o<u[l].length;o++){var p=u[l][o];c[u[l][o]]=n(p)}c[l]=n(l)}for(o=0;o<r.length;o++)c[r[o]]=n(r[o]);return c}function S(e,t,n){return n[t]!=null?n[t]:e.props[t]}function lt(e,t){return ue(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:S(n,"appear",e),enter:S(n,"enter",e),exit:S(n,"exit",e)})})}function ct(e,t,n){var u=ue(e.children),r=ut(t,u);return Object.keys(r).forEach(function(i){var o=r[i];if(a.isValidElement(o)){var c=i in t,l=i in u,p=t[i],d=a.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[i]=a.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:S(o,"exit",e),enter:S(o,"enter",e)}):!l&&c&&!d?r[i]=a.cloneElement(o,{in:!1}):l&&c&&a.isValidElement(p)&&(r[i]=a.cloneElement(o,{onExited:n.bind(null,o),in:p.props.in,exit:S(o,"exit",e),enter:S(o,"enter",e)}))}}),r}var pt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ft={component:"div",childFactory:function(t){return t}},le=function(e){st(t,e);function t(u,r){var i;i=e.call(this,u,r)||this;var o=i.handleExited.bind(at(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var o=i.children,c=i.handleExited,l=i.firstRender;return{children:l?lt(r,c):ct(r,o,c),firstRender:!1}},n.handleExited=function(r,i){var o=ue(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,i=r.component,o=r.childFactory,c=oe(r,["component","childFactory"]),l=this.state.contextValue,p=pt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(be.Provider,{value:l},p):A.createElement(be.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);le.propTypes={};le.defaultProps=ft;function dt(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:i,rippleSize:o,in:c,onExited:l,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),C={width:o,height:o,top:-(o/2)+i,left:-(o/2)+r},h=x(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),k.jsx("span",{className:b,style:C,children:k.jsx("span",{className:h})})}const m=Me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ht=["center","classes","className"];let Z=e=>e,ge,Re,ye,Ee;const ie=550,mt=80,bt=ae(ge||(ge=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gt=ae(Re||(Re=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Rt=ae(ye||(ye=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yt=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Et=se(dt,{name:"MuiTouchRipple",slot:"Ripple"})(Ee||(Ee=Z`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,bt,ie,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,gt,ie,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,Rt,({theme:e})=>e.transitions.easing.easeInOut),Mt=a.forwardRef(function(t,n){const u=Te({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:o}=u,c=oe(u,ht),[l,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=a.useRef(!1),C=Ze(),h=a.useRef(null),R=a.useRef(null),_=a.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:O,cb:$}=f;p(M=>[...M,k.jsx(Et,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ie,pulsate:y,rippleX:E,rippleY:D,rippleSize:O},d.current)]),d.current+=1,g.current=$},[i]),N=a.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:O=r||y.pulsate,fakeElement:$=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=$?null:R.current,w=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,L,B;if(O||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(w.width/2),L=Math.round(w.height/2);else{const{clientX:I,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(I-w.left),L=Math.round(V-w.top)}if(O)B=Math.sqrt((2*w.width**2+w.height**2)/3),B%2===0&&(B+=1);else{const I=Math.max(Math.abs((M?M.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((M?M.clientHeight:0)-L),L)*2+2;B=Math.sqrt(I**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:v,rippleY:L,rippleSize:B,cb:E})},C.start(mt,()=>{h.current&&(h.current(),h.current=null)})):_({pulsate:D,rippleX:v,rippleY:L,rippleSize:B,cb:E})},[r,_,C]),U=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((f,y)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{j(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[C]);return a.useImperativeHandle(n,()=>({pulsate:U,start:N,stop:j}),[U,N,j]),k.jsx(yt,X({className:x(m.root,i.root,o),ref:R},c,{children:k.jsx(le,{component:null,exit:!0,children:l})}))});function Tt(e){return Xe("MuiButtonBase",e)}const xt=Me("MuiButtonBase",["root","disabled","focusVisible"]),Ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,o=Ye({root:["root",t&&"disabled",n&&"focusVisible"]},Tt,r);return n&&u&&(o.root+=` ${u}`),o},Vt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${xt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Lt=a.forwardRef(function(t,n){const u=Te({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:o,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:N,onFocus:U,onFocusVisible:j,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:O,onTouchEnd:$,onTouchMove:M,onTouchStart:w,tabIndex:v=0,TouchRippleProps:L,touchRippleRef:B,type:I}=u,V=oe(u,Ct),K=a.useRef(null),T=a.useRef(null),xe=he(T,B),{isFocusVisibleRef:ce,onFocus:Ce,onBlur:ve,ref:Ve}=ot(),[F,Y]=a.useState(!1);p&&F&&Y(!1),a.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),K.current.focus()}}),[]);const[J,Pe]=a.useState(!1);a.useEffect(()=>{Pe(!0)},[]);const we=J&&!d&&!p;a.useEffect(()=>{F&&b&&!d&&J&&T.current.pulsate()},[d,b,F,J]);function P(s,fe,ze=g){return H(de=>(fe&&fe(de),!ze&&T.current&&T.current[s](de),!0))}const Le=P("start",E),Be=P("stop",_),De=P("stop",N),Ie=P("stop",O),Fe=P("stop",s=>{F&&s.preventDefault(),D&&D(s)}),Se=P("start",w),ke=P("stop",$),Ne=P("stop",M),je=P("stop",s=>{ve(s),ce.current===!1&&Y(!1),h&&h(s)},!1),Oe=H(s=>{K.current||(K.current=s.currentTarget),Ce(s),ce.current===!0&&(Y(!0),j&&j(s)),U&&U(s)}),Q=()=>{const s=K.current;return l&&l!=="button"&&!(s.tagName==="A"&&s.href)},ee=a.useRef(!1),_e=H(s=>{b&&!ee.current&&F&&T.current&&s.key===" "&&(ee.current=!0,T.current.stop(s,()=>{T.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Ue=H(s=>{b&&s.key===" "&&T.current&&F&&!s.defaultPrevented&&(ee.current=!1,T.current.stop(s,()=>{T.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=l;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=I===void 0?"button":I,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const $e=he(n,Ve,K),pe=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:F}),Ke=vt(pe);return k.jsxs(Vt,X({as:W,className:x(Ke.root,c),ownerState:pe,onBlur:je,onClick:R,onContextMenu:Be,onFocus:Oe,onKeyDown:_e,onKeyUp:Ue,onMouseDown:Le,onMouseLeave:Fe,onMouseUp:Ie,onDragLeave:De,onTouchEnd:ke,onTouchMove:Ne,onTouchStart:Se,ref:$e,tabIndex:p?-1:v,type:I},z,V,{children:[o,we?k.jsx(Mt,X({ref:xe,center:i},L)):null]}))});export{Lt as B,be as T,st as _,ot as a,Ze as b,H as c,We as s,he as u};
