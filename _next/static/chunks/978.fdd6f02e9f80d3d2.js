(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[978],{2612:function(e,r,t){"use strict";t.d(r,{Z:function(){return _}});var s=t(5893),l=t(7294),n=t(6038),a=t(6820),i=t(6083),c=t(517),d=t(9311),o=t.n(d),u=t(8939),v=t.n(u);function _(e){let{show:r,hide:t,text:d,fullVid:u}=e,_=(0,l.useRef)(null),f=(0,l.useState)((0,a.Z)());return(0,l.useEffect)(()=>{if(!(0,a.Z)()){function e(e){n.p8.to(_.current,{duration:.75,x:e.clientX+(0,i.Z)(8),y:e.clientY+(0,i.Z)(20),ease:"o4"})}return addEventListener("pointermove",e),()=>{removeEventListener("pointermove",e)}}}),(0,s.jsx)("div",{className:(0,c.Z)(v().wrap,o().monoS,r&&!t?v().hover:"",u||f?v().hide:""),ref:_,children:d})}},2481:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var s=t(5893),l=t(7294),n=t(9382),a=t(6143),i=t(5492),c=t(2612),d=t(517),o=t(6500),u=t.n(o);function v(e){let{className:r,viewportClass:t,containerClass:o,slideClass:v,activeClass:_,arrowsClass:f,slideIndex:h,setSlideIndex:m,setSettle:p,sliderProgress:g,setSliderProgress:x,autoScroll:S,wheel:w,keyboardSupport:b,arrows:Z,slideRefs:j,emblaApi:E,enabled:N=!0,reInit:k,children:C}=e,L=(0,l.useRef)(),[P,y]=(0,l.useState)(!1),[A,D]=(0,l.useState)([]),[M,I]=(0,l.useState)(0),[V,R]=(0,l.useState)(!1),[T,X]=(0,l.useState)(0),B=(0,l.useRef)(0),[Y,q]=(0,l.useState)(!1),[z,G]=(0,l.useState)(!1),[W,F]=(0,l.useState)(!1),[O,U]=(0,l.useState)(!1),[H,J]=(0,l.useState)(!1),[K,Q]=(0,l.useState)(!1),$=[(0,i.Z)({selected:"selected",draggable:"draggable",dragging:"dragging"})];S&&$.push((0,a.Z)({playOnInit:!0,speed:1}));let[ee,er]=(0,n.Z)(E,$),et=(0,l.useCallback)(()=>{er&&er.scrollPrev()},[er]),es=(0,l.useCallback)(()=>{er&&er.scrollNext()},[er]);(0,l.useCallback)((e,r)=>{er&&er&&er.scrollTo(e,r)},[er]);let el=(0,l.useCallback)(e=>{if(!er)return;e.preventDefault();let r=e.deltaY||e.deltaX||e.wheelDelta,t=er.internalEngine(),s=t.scrollBody;s.useSpeed(30),s.useMass(10),t.scrollTo.distance((r>0?-1:1)*Math.abs(r),!1)},[er]);(0,l.useEffect)(()=>{if(er&&w)return L.current&&L.current.addEventListener("wheel",el),()=>{var e;return null===(e=L.current)||void 0===e?void 0:e.removeEventListener("wheel",el)}},[er,L]),(0,l.useEffect)(()=>{if(!er&&!b)return;let e=e=>{switch(e.code){case"ArrowLeft":case"ArrowUp":e.stopPropagation(),er.scrollPrev();break;case"ArrowRight":case"ArrowDown":e.stopPropagation(),er.scrollNext()}};return V?document.addEventListener("keydown",e):document.removeEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[er,V]),(0,l.useEffect)(()=>(L.current.addEventListener("pointerenter",()=>Q(!0)),L.current.addEventListener("pointerleave",()=>Q(!1)),()=>{var e,r;null===(e=L.current)||void 0===e||e.addEventListener("pointerenter",()=>Q(!0)),null===(r=L.current)||void 0===r||r.addEventListener("pointerleave",()=>Q(!1))}),[L,K]),(0,l.useEffect)(()=>{I(h)},[h]);let en=(0,l.useCallback)(()=>{er&&(I(er.selectedScrollSnap()),m&&m(er.selectedScrollSnap()),p&&p(!1),U(!er.canScrollPrev()),J(!er.canScrollNext()))},[er]),ea=(0,l.useCallback)(()=>{if(!er)return;let e=Math.max(0,Math.min(1,er.scrollProgress()));x&&x(100*e),X(100*e)},[er,X]),ei=(0,l.useCallback)(()=>{er&&(q(!0),p&&p(!0))},[er,q,G]),ec=(0,l.useCallback)(()=>{F(!0),p&&p(!1),G(!1)},[F,p,G]),ed=(0,l.useCallback)(()=>{F(!1)},[F]);return(0,l.useEffect)(()=>{er&&(D(er.scrollSnapList()),en(),ea(),ei(),er.on("select",en),er.on("scroll",ea),er.on("resize",ea),er.on("settle",ei),er.on("pointerDown",ec),er.on("pointerUp",ed))},[er,en,ea,ei]),(0,l.useEffect)(()=>{!(.01>=Math.abs(T-B.current))||z||W||(p&&p(!0),G(!0)),B.current=T},[T]),(0,l.useEffect)(()=>{k||y(!0)},[]),(0,l.useEffect)(()=>{!0==k?y(!0):!1==k&&setTimeout(()=>{y(!1)},600)},[k]),(0,l.useEffect)(()=>{!N&&er&&er.destroy()},[er,N]),(0,s.jsxs)("div",{className:(0,d.Z)(r||"",u().slider),children:[(0,s.jsx)("div",{className:(0,d.Z)(t||"",u().viewport),ref:P?ee:null,children:(0,s.jsx)("div",{className:(0,d.Z)(o||"",u().container),ref:L,children:null==C?void 0:C.map((e,r)=>e?(0,s.jsx)("div",{ref:j?e=>j[r]=e:null,className:(0,d.Z)(v||"",u().slide,M==r&&_||""),children:e},r):null)})}),Z?(0,s.jsxs)("div",{className:(0,d.Z)(f||"",u().arrows),children:[(0,s.jsx)("button",{onClick:et,disabled:O,children:"<"}),(0,s.jsx)("button",{onClick:es,disabled:H,children:">"})]}):null,!1==E.watchDrag||C.length<3?null:(0,s.jsx)(c.Z,{text:"[ Drag ]",show:K})]})}},978:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var s=t(5893),l=t(7294),n=t(6673),a=t(2481),i=t(4786),c=t(2988),d=t(1526),o=t(517),u=t(8294),v=t.n(u),_=t(9311),f=t.n(_),h=t(6591),m=t.n(h);function p(e){let{section:r}=e,t=(0,c.Z)(),[u,_]=(0,l.useState)(0),h=r.tag?"h3":"h2";return(0,s.jsxs)("section",{id:(0,d.Z)(r.tag),className:(0,o.Z)(m().section,v().scrollTo),children:[(0,s.jsxs)("header",{children:[r.tag?(0,s.jsx)("h2",{className:(0,o.Z)(f().mono,v().o),children:r.tag}):null,(0,s.jsx)(h,{className:f().M,children:(0,s.jsx)(n.Z,{value:r.heading,heading:!0})})]}),(0,s.jsxs)("div",{className:m().sliderWrap,children:[(0,s.jsx)(a.Z,{emblaApi:{axis:"x",startIndex:0,align:"start",dragFree:!0,active:r.team.length>=3,breakpoints:{"(max-width: 480px)":{active:r.team.length>=2}}},className:(0,o.Z)(m().slider,r.team.length>=2&&t?m().full:r.team.length>=3?m().full:void 0),viewportClass:m().sliderViewport,containerClass:(0,o.Z)(m().sliderContainer,1==r.team.length?m().single:void 0),slideClass:m().sliderSlide,setSliderProgress:_,children:r.team.map((e,r)=>(0,s.jsxs)("div",{className:m().card,children:[(0,s.jsx)(i.Z,{field:e.image,sizes:"(max-width: 480px) 100vw, 25vw"}),(0,s.jsx)("div",{className:m().info,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:f().P,children:e.name}),(0,s.jsx)("div",{className:f().XSP,children:"[ ".concat(e.roles.join(", ")," ]")})]})})]},r))}),r.team.length>=3||t&&r.team.length>=2?(0,s.jsx)("div",{className:m().progress,style:{"--scale":u/100}}):null]})]})}},1526:function(e,r,t){"use strict";function s(e){return null==e?void 0:e.toLowerCase().replace(/\/\&|\,|\.|\:|\;/g,"").replace(/\&/g,"and").replace(/\s+/g,"-").slice(0,200)}t.d(r,{Z:function(){return s}})},8939:function(e){e.exports={wrap:"cursor_wrap__h_AIB",hover:"cursor_hover__dtbs3",hide:"cursor_hide__Nrwg3"}},6500:function(e){e.exports={slider:"slider_slider__uOIBl",viewport:"slider_viewport__GnrGA",container:"slider_container__vTyk6",slide:"slider_slide__zoSAG",arrows:"slider_arrows__PVYr7",mobile:"slider_mobile__1lfsB"}},6591:function(e){e.exports={section:"teamSlider_section__svbIR",sliderWrap:"teamSlider_sliderWrap__ehHq2",slider:"teamSlider_slider__kVtXD",full:"teamSlider_full__YVt1x",sliderContainer:"teamSlider_sliderContainer__Ng7gF",sliderSlide:"teamSlider_sliderSlide__gyVmq",card:"teamSlider_card__do42P",info:"teamSlider_info__MXq_4",progress:"teamSlider_progress__egwnI",single:"teamSlider_single__Vvtt2"}}}]);