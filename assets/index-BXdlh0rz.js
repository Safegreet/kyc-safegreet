import{V as Z,W as L,X as v,Y as J,r as s,e as G,Z as Y,o as U,$ as a,a0 as ri,a1 as ai,a2 as li,a3 as ci,a4 as si,a5 as di,a6 as mi,a7 as gi,a8 as pi,a9 as $i,aa as ui,ab as hi,ac as Si}from"./index-CQNAUKtq.js";var fi=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function Q(i){return typeof i=="string"}function k(i){var e,t=i.className,n=i.prefixCls,o=i.style,r=i.active,l=i.status,p=i.iconPrefix,c=i.icon;i.wrapperStyle;var d=i.stepNumber,u=i.disabled,h=i.description,w=i.title,C=i.subTitle,q=i.progressDot,N=i.stepIcon,O=i.tailContent,$=i.icons,T=i.stepIndex,g=i.onStepClick,I=i.onClick,W=i.render,_=Z(i,fi),E=!!g&&!u,y={};E&&(y.role="button",y.tabIndex=0,y.onClick=function(z){I==null||I(z),g(T)},y.onKeyDown=function(z){var S=z.which;(S===Y.ENTER||S===Y.SPACE)&&g(T)});var B=function(){var S,m,f=L("".concat(n,"-icon"),"".concat(p,"icon"),(S={},v(S,"".concat(p,"icon-").concat(c),c&&Q(c)),v(S,"".concat(p,"icon-check"),!c&&l==="finish"&&($&&!$.finish||!$)),v(S,"".concat(p,"icon-cross"),!c&&l==="error"&&($&&!$.error||!$)),S)),P=s.createElement("span",{className:"".concat(n,"-icon-dot")});return q?typeof q=="function"?m=s.createElement("span",{className:"".concat(n,"-icon")},q(P,{index:d-1,status:l,title:w,description:h})):m=s.createElement("span",{className:"".concat(n,"-icon")},P):c&&!Q(c)?m=s.createElement("span",{className:"".concat(n,"-icon")},c):$&&$.finish&&l==="finish"?m=s.createElement("span",{className:"".concat(n,"-icon")},$.finish):$&&$.error&&l==="error"?m=s.createElement("span",{className:"".concat(n,"-icon")},$.error):c||l==="finish"||l==="error"?m=s.createElement("span",{className:f}):m=s.createElement("span",{className:"".concat(n,"-icon")},d),N&&(m=N({index:d-1,status:l,title:w,description:h,node:m})),m},x=l||"wait",D=L("".concat(n,"-item"),"".concat(n,"-item-").concat(x),t,(e={},v(e,"".concat(n,"-item-custom"),c),v(e,"".concat(n,"-item-active"),r),v(e,"".concat(n,"-item-disabled"),u===!0),e)),M=J({},o),H=s.createElement("div",G({},_,{className:D,style:M}),s.createElement("div",G({onClick:I},y,{className:"".concat(n,"-item-container")}),s.createElement("div",{className:"".concat(n,"-item-tail")},O),s.createElement("div",{className:"".concat(n,"-item-icon")},B()),s.createElement("div",{className:"".concat(n,"-item-content")},s.createElement("div",{className:"".concat(n,"-item-title")},w,C&&s.createElement("div",{title:typeof C=="string"?C:void 0,className:"".concat(n,"-item-subtitle")},C)),h&&s.createElement("div",{className:"".concat(n,"-item-description")},h))));return W&&(H=W(H)||null),H}var bi=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function K(i){var e,t=i.prefixCls,n=t===void 0?"rc-steps":t,o=i.style,r=o===void 0?{}:o,l=i.className;i.children;var p=i.direction,c=p===void 0?"horizontal":p,d=i.type,u=d===void 0?"default":d,h=i.labelPlacement,w=h===void 0?"horizontal":h,C=i.iconPrefix,q=C===void 0?"rc":C,N=i.status,O=N===void 0?"process":N,$=i.size,T=i.current,g=T===void 0?0:T,I=i.progressDot,W=I===void 0?!1:I,_=i.stepIcon,E=i.initial,y=E===void 0?0:E,B=i.icons,x=i.onChange,D=i.itemRender,M=i.items,H=M===void 0?[]:M,z=Z(i,bi),S=u==="navigation",m=u==="inline",f=m||W,P=m?"horizontal":c,X=m?void 0:$,ii=f?"vertical":w,ei=L(n,"".concat(n,"-").concat(P),l,(e={},v(e,"".concat(n,"-").concat(X),X),v(e,"".concat(n,"-label-").concat(ii),P==="horizontal"),v(e,"".concat(n,"-dot"),!!f),v(e,"".concat(n,"-navigation"),S),v(e,"".concat(n,"-inline"),m),e)),ti=function(R){x&&g!==R&&x(R)},ni=function(R,V){var b=J({},R),j=y+V;return O==="error"&&V===g-1&&(b.className="".concat(n,"-next-error")),b.status||(j===g?b.status=O:j<g?b.status="finish":b.status="wait"),m&&(b.icon=void 0,b.subTitle=void 0),!b.render&&D&&(b.render=function(oi){return D(b,oi)}),U.createElement(k,G({},b,{active:j===g,stepNumber:j+1,stepIndex:j,key:j,prefixCls:n,iconPrefix:q,wrapperStyle:r,progressDot:f,stepIcon:_,icons:B,onStepClick:x&&ti}))};return U.createElement("div",G({className:ei,style:r},z),H.filter(function(F){return F}).map(ni))}K.Step=k;const vi=i=>{const{componentCls:e,customIconTop:t,customIconSize:n,customIconFontSize:o}=i;return{[`${e}-item-custom`]:{[`> ${e}-item-container > ${e}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${e}-icon`]:{top:t,width:n,height:n,fontSize:o,lineHeight:a(n)}}},[`&:not(${e}-vertical)`]:{[`${e}-item-custom`]:{[`${e}-item-icon`]:{width:"auto",background:"none"}}}}},Ci=i=>{const{componentCls:e}=i,t=`${e}-item`;return{[`${e}-horizontal`]:{[`${t}-tail`]:{transform:"translateY(-50%)"}}}},Ii=i=>{const{componentCls:e,inlineDotSize:t,inlineTitleColor:n,inlineTailColor:o}=i,r=i.calc(i.paddingXS).add(i.lineWidth).equal(),l={[`${e}-item-container ${e}-item-content ${e}-item-title`]:{color:n}};return{[`&${e}-inline`]:{width:"auto",display:"inline-flex",[`${e}-item`]:{flex:"none","&-container":{padding:`${a(r)} ${a(i.paddingXXS)} 0`,margin:`0 ${a(i.calc(i.marginXXS).div(2).equal())}`,borderRadius:i.borderRadiusSM,cursor:"pointer",transition:`background-color ${i.motionDurationMid}`,"&:hover":{background:i.controlItemBgHover},"&[role='button']:hover":{opacity:1}},"&-icon":{width:t,height:t,marginInlineStart:`calc(50% - ${a(i.calc(t).div(2).equal())})`,[`> ${e}-icon`]:{top:0},[`${e}-icon-dot`]:{borderRadius:i.calc(i.fontSizeSM).div(4).equal(),"&::after":{display:"none"}}},"&-content":{width:"auto",marginTop:i.calc(i.marginXS).sub(i.lineWidth).equal()},"&-title":{color:n,fontSize:i.fontSizeSM,lineHeight:i.lineHeightSM,fontWeight:"normal",marginBottom:i.calc(i.marginXXS).div(2).equal()},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:i.calc(t).div(2).add(r).equal(),transform:"translateY(-50%)","&:after":{width:"100%",height:i.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${e}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${e}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${e}-item-icon ${e}-icon ${e}-icon-dot`]:{backgroundColor:i.colorBorderBg,border:`${a(i.lineWidth)} ${i.lineType} ${o}`}},l),"&-finish":Object.assign({[`${e}-item-tail::after`]:{backgroundColor:o},[`${e}-item-icon ${e}-icon ${e}-icon-dot`]:{backgroundColor:o,border:`${a(i.lineWidth)} ${i.lineType} ${o}`}},l),"&-error":l,"&-active, &-process":Object.assign({[`${e}-item-icon`]:{width:t,height:t,marginInlineStart:`calc(50% - ${a(i.calc(t).div(2).equal())})`,top:0}},l),[`&:not(${e}-item-active) > ${e}-item-container[role='button']:hover`]:{[`${e}-item-title`]:{color:n}}}}}},yi=i=>{const{componentCls:e,iconSize:t,lineHeight:n,iconSizeSM:o}=i;return{[`&${e}-label-vertical`]:{[`${e}-item`]:{overflow:"visible","&-tail":{marginInlineStart:i.calc(t).div(2).add(i.controlHeightLG).equal(),padding:`0 ${a(i.paddingLG)}`},"&-content":{display:"block",width:i.calc(t).div(2).add(i.controlHeightLG).mul(2).equal(),marginTop:i.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:i.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:i.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${e}-small:not(${e}-dot)`]:{[`${e}-item`]:{"&-icon":{marginInlineStart:i.calc(t).sub(o).div(2).add(i.controlHeightLG).equal()}}}}}},xi=i=>{const{componentCls:e,navContentMaxWidth:t,navArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=i;return{[`&${e}-navigation`]:{paddingTop:i.paddingSM,[`&${e}-small`]:{[`${e}-item`]:{"&-container":{marginInlineStart:i.calc(i.marginSM).mul(-1).equal()}}},[`${e}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:i.calc(i.margin).mul(-1).equal(),paddingBottom:i.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${e}-item-content`]:{maxWidth:t},[`${e}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},ri),{"&::after":{display:"none"}})},[`&:not(${e}-item-active)`]:{[`${e}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${a(i.calc(i.paddingSM).div(2).equal())})`,insetInlineStart:"100%",display:"inline-block",width:i.fontSizeIcon,height:i.fontSizeIcon,borderTop:`${a(i.lineWidth)} ${i.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${a(i.lineWidth)} ${i.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:i.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${e}-item${e}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${e}-navigation${e}-vertical`]:{[`> ${e}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${e}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:i.calc(i.lineWidth).mul(3).equal(),height:`calc(100% - ${a(i.marginLG)})`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:i.calc(i.controlHeight).mul(.25).equal(),height:i.calc(i.controlHeight).mul(.25).equal(),marginBottom:i.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},"&:last-child":{"&::after":{display:"none"}},[`> ${e}-item-container > ${e}-item-tail`]:{visibility:"hidden"}}},[`&${e}-navigation${e}-horizontal`]:{[`> ${e}-item > ${e}-item-container > ${e}-item-tail`]:{visibility:"hidden"}}}},wi=i=>{const{antCls:e,componentCls:t,iconSize:n,iconSizeSM:o,processIconColor:r,marginXXS:l,lineWidthBold:p,lineWidth:c,paddingXXS:d}=i,u=i.calc(n).add(i.calc(p).mul(4).equal()).equal(),h=i.calc(o).add(i.calc(i.lineWidth).mul(4).equal()).equal();return{[`&${t}-with-progress`]:{[`${t}-item`]:{paddingTop:d,[`&-process ${t}-item-container ${t}-item-icon ${t}-icon`]:{color:r}},[`&${t}-vertical > ${t}-item `]:{paddingInlineStart:d,[`> ${t}-item-container > ${t}-item-tail`]:{top:l,insetInlineStart:i.calc(n).div(2).sub(c).add(d).equal()}},[`&, &${t}-small`]:{[`&${t}-horizontal ${t}-item:first-child`]:{paddingBottom:d,paddingInlineStart:d}},[`&${t}-small${t}-vertical > ${t}-item > ${t}-item-container > ${t}-item-tail`]:{insetInlineStart:i.calc(o).div(2).sub(c).add(d).equal()},[`&${t}-label-vertical ${t}-item ${t}-item-tail`]:{top:i.calc(n).div(2).add(d).equal()},[`${t}-item-icon`]:{position:"relative",[`${e}-progress`]:{position:"absolute",insetInlineStart:"50%",top:"50%",transform:"translate(-50%, -50%)","&-inner":{width:`${a(u)} !important`,height:`${a(u)} !important`}}},[`&${t}-small`]:{[`&${t}-label-vertical ${t}-item ${t}-item-tail`]:{top:i.calc(o).div(2).add(d).equal()},[`${t}-item-icon ${e}-progress-inner`]:{width:`${a(h)} !important`,height:`${a(h)} !important`}}}}},Ti=i=>{const{componentCls:e,descriptionMaxWidth:t,lineHeight:n,dotCurrentSize:o,dotSize:r,motionDurationSlow:l}=i;return{[`&${e}-dot, &${e}-dot${e}-small`]:{[`${e}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:i.calc(i.dotSize).sub(i.calc(i.lineWidth).mul(3).equal()).div(2).equal(),width:"100%",marginTop:0,marginBottom:0,marginInline:`${a(i.calc(t).div(2).equal())} 0`,padding:0,"&::after":{width:`calc(100% - ${a(i.calc(i.marginSM).mul(2).equal())})`,height:i.calc(i.lineWidth).mul(3).equal(),marginInlineStart:i.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:i.calc(i.descriptionMaxWidth).sub(r).div(2).equal(),paddingInlineEnd:0,lineHeight:a(r),background:"transparent",border:0,[`${e}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${l}`,"&::after":{position:"absolute",top:i.calc(i.marginSM).mul(-1).equal(),insetInlineStart:i.calc(r).sub(i.calc(i.controlHeightLG).mul(1.5).equal()).div(2).equal(),width:i.calc(i.controlHeightLG).mul(1.5).equal(),height:i.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:t},[`&-process ${e}-item-icon`]:{position:"relative",top:i.calc(r).sub(o).div(2).equal(),width:o,height:o,lineHeight:a(o),background:"none",marginInlineStart:i.calc(i.descriptionMaxWidth).sub(o).div(2).equal()},[`&-process ${e}-icon`]:{[`&:first-child ${e}-icon-dot`]:{insetInlineStart:0}}}},[`&${e}-vertical${e}-dot`]:{[`${e}-item-icon`]:{marginTop:i.calc(i.controlHeight).sub(r).div(2).equal(),marginInlineStart:0,background:"none"},[`${e}-item-process ${e}-item-icon`]:{marginTop:i.calc(i.controlHeight).sub(o).div(2).equal(),top:0,insetInlineStart:i.calc(r).sub(o).div(2).equal(),marginInlineStart:0},[`${e}-item > ${e}-item-container > ${e}-item-tail`]:{top:i.calc(i.controlHeight).sub(r).div(2).equal(),insetInlineStart:0,margin:0,padding:`${a(i.calc(r).add(i.paddingXS).equal())} 0 ${a(i.paddingXS)}`,"&::after":{marginInlineStart:i.calc(r).sub(i.lineWidth).div(2).equal()}},[`&${e}-small`]:{[`${e}-item-icon`]:{marginTop:i.calc(i.controlHeightSM).sub(r).div(2).equal()},[`${e}-item-process ${e}-item-icon`]:{marginTop:i.calc(i.controlHeightSM).sub(o).div(2).equal()},[`${e}-item > ${e}-item-container > ${e}-item-tail`]:{top:i.calc(i.controlHeightSM).sub(r).div(2).equal()}},[`${e}-item:first-child ${e}-icon-dot`]:{insetInlineStart:0},[`${e}-item-content`]:{width:"inherit"}}}},zi=i=>{const{componentCls:e}=i;return{[`&${e}-rtl`]:{direction:"rtl",[`${e}-item`]:{"&-subtitle":{float:"left"}},[`&${e}-navigation`]:{[`${e}-item::after`]:{transform:"rotate(-45deg)"}},[`&${e}-vertical`]:{[`> ${e}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${e}-item-icon`]:{float:"right"}}},[`&${e}-dot`]:{[`${e}-item-icon ${e}-icon-dot, &${e}-small ${e}-item-icon ${e}-icon-dot`]:{float:"right"}}}}},qi=i=>{const{componentCls:e,iconSizeSM:t,fontSizeSM:n,fontSize:o,colorTextDescription:r}=i;return{[`&${e}-small`]:{[`&${e}-horizontal:not(${e}-label-vertical) ${e}-item`]:{paddingInlineStart:i.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${e}-item-icon`]:{width:t,height:t,marginTop:0,marginBottom:0,marginInline:`0 ${a(i.marginXS)}`,fontSize:n,lineHeight:a(t),textAlign:"center",borderRadius:t},[`${e}-item-title`]:{paddingInlineEnd:i.paddingSM,fontSize:o,lineHeight:a(t),"&::after":{top:i.calc(t).div(2).equal()}},[`${e}-item-description`]:{color:r,fontSize:o},[`${e}-item-tail`]:{top:i.calc(t).div(2).sub(i.paddingXXS).equal()},[`${e}-item-custom ${e}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${e}-icon`]:{fontSize:t,lineHeight:a(t),transform:"none"}}}}},Ni=i=>{const{componentCls:e,iconSizeSM:t,iconSize:n}=i;return{[`&${e}-vertical`]:{display:"flex",flexDirection:"column",[`> ${e}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${e}-item-icon`]:{float:"left",marginInlineEnd:i.margin},[`${e}-item-content`]:{display:"block",minHeight:i.calc(i.controlHeight).mul(1.5).equal(),overflow:"hidden"},[`${e}-item-title`]:{lineHeight:a(n)},[`${e}-item-description`]:{paddingBottom:i.paddingSM}},[`> ${e}-item > ${e}-item-container > ${e}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.calc(n).div(2).sub(i.lineWidth).equal(),width:i.lineWidth,height:"100%",padding:`${a(i.calc(i.marginXXS).mul(1.5).add(n).equal())} 0 ${a(i.calc(i.marginXXS).mul(1.5).equal())}`,"&::after":{width:i.lineWidth,height:"100%"}},[`> ${e}-item:not(:last-child) > ${e}-item-container > ${e}-item-tail`]:{display:"block"},[` > ${e}-item > ${e}-item-container > ${e}-item-content > ${e}-item-title`]:{"&::after":{display:"none"}},[`&${e}-small ${e}-item-container`]:{[`${e}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.calc(t).div(2).sub(i.lineWidth).equal(),padding:`${a(i.calc(i.marginXXS).mul(1.5).add(t).equal())} 0 ${a(i.calc(i.marginXXS).mul(1.5).equal())}`},[`${e}-item-title`]:{lineHeight:a(t)}}}}},Ei="wait",Hi="process",Pi="finish",Oi="error",A=(i,e)=>{const t=`${e.componentCls}-item`,n=`${i}IconColor`,o=`${i}TitleColor`,r=`${i}DescriptionColor`,l=`${i}TailColor`,p=`${i}IconBgColor`,c=`${i}IconBorderColor`,d=`${i}DotColor`;return{[`${t}-${i} ${t}-icon`]:{backgroundColor:e[p],borderColor:e[c],[`> ${e.componentCls}-icon`]:{color:e[n],[`${e.componentCls}-icon-dot`]:{background:e[d]}}},[`${t}-${i}${t}-custom ${t}-icon`]:{[`> ${e.componentCls}-icon`]:{color:e[d]}},[`${t}-${i} > ${t}-container > ${t}-content > ${t}-title`]:{color:e[o],"&::after":{backgroundColor:e[l]}},[`${t}-${i} > ${t}-container > ${t}-content > ${t}-description`]:{color:e[r]},[`${t}-${i} > ${t}-container > ${t}-tail::after`]:{backgroundColor:e[l]}}},Wi=i=>{const{componentCls:e,motionDurationSlow:t}=i,n=`${e}-item`,o=`${n}-icon`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none","&:focus-visible":{[o]:Object.assign({},si(i))}},[`${o}, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[o]:{width:i.iconSize,height:i.iconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:i.marginXS,fontSize:i.iconFontSize,fontFamily:i.fontFamily,lineHeight:a(i.iconSize),textAlign:"center",borderRadius:i.iconSize,border:`${a(i.lineWidth)} ${i.lineType} transparent`,transition:`background-color ${t}, border-color ${t}`,[`${e}-icon`]:{position:"relative",top:i.iconTop,color:i.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:i.calc(i.iconSize).div(2).equal(),insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:i.lineWidth,background:i.colorSplit,borderRadius:i.lineWidth,transition:`background ${t}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:i.padding,color:i.colorText,fontSize:i.fontSizeLG,lineHeight:a(i.titleLineHeight),"&::after":{position:"absolute",top:i.calc(i.titleLineHeight).div(2).equal(),insetInlineStart:"100%",display:"block",width:9999,height:i.lineWidth,background:i.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:i.marginXS,color:i.colorTextDescription,fontWeight:"normal",fontSize:i.fontSize},[`${n}-description`]:{color:i.colorTextDescription,fontSize:i.fontSize}},A(Ei,i)),A(Hi,i)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:i.fontWeightStrong}}),A(Pi,i)),A(Oi,i)),{[`${n}${e}-next-error > ${e}-item-title::after`]:{background:i.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Di=i=>{const{componentCls:e,motionDurationSlow:t}=i;return{[`& ${e}-item`]:{[`&:not(${e}-item-active)`]:{[`& > ${e}-item-container[role='button']`]:{cursor:"pointer",[`${e}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${e}-icon`]:{transition:`color ${t}`}},"&:hover":{[`${e}-item`]:{"&-title, &-subtitle, &-description":{color:i.colorPrimary}}}},[`&:not(${e}-item-process)`]:{[`& > ${e}-item-container[role='button']:hover`]:{[`${e}-item`]:{"&-icon":{borderColor:i.colorPrimary,[`${e}-icon`]:{color:i.colorPrimary}}}}}}},[`&${e}-horizontal:not(${e}-label-vertical)`]:{[`${e}-item`]:{paddingInlineStart:i.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${e}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:i.descriptionMaxWidth,whiteSpace:"normal"}}}}},Mi=i=>{const{componentCls:e}=i;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ci(i)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Wi(i)),Di(i)),vi(i)),qi(i)),Ni(i)),Ci(i)),yi(i)),Ti(i)),xi(i)),zi(i)),wi(i)),Ii(i))}},ji=i=>({titleLineHeight:i.controlHeight,customIconSize:i.controlHeight,customIconTop:0,customIconFontSize:i.controlHeightSM,iconSize:i.controlHeight,iconTop:-.5,iconFontSize:i.fontSize,iconSizeSM:i.fontSizeHeading3,dotSize:i.controlHeight/4,dotCurrentSize:i.controlHeightLG/4,navArrowColor:i.colorTextDisabled,navContentMaxWidth:"auto",descriptionMaxWidth:140,waitIconColor:i.wireframe?i.colorTextDisabled:i.colorTextLabel,waitIconBgColor:i.wireframe?i.colorBgContainer:i.colorFillContent,waitIconBorderColor:i.wireframe?i.colorTextDisabled:"transparent",finishIconBgColor:i.wireframe?i.colorBgContainer:i.controlItemBgActive,finishIconBorderColor:i.wireframe?i.colorPrimary:i.controlItemBgActive}),_i=ai("Steps",i=>{const{colorTextDisabled:e,controlHeightLG:t,colorTextLightSolid:n,colorText:o,colorPrimary:r,colorTextDescription:l,colorTextQuaternary:p,colorError:c,colorBorderSecondary:d,colorSplit:u}=i,h=li(i,{processIconColor:n,processTitleColor:o,processDescriptionColor:o,processIconBgColor:r,processIconBorderColor:r,processDotColor:r,processTailColor:u,waitTitleColor:l,waitDescriptionColor:l,waitTailColor:u,waitDotColor:e,finishIconColor:r,finishTitleColor:o,finishDescriptionColor:l,finishTailColor:r,finishDotColor:r,errorIconColor:n,errorTitleColor:c,errorDescriptionColor:c,errorTailColor:u,errorIconBgColor:c,errorIconBorderColor:c,errorDotColor:c,stepsNavActiveColor:r,stepsProgressSize:t,inlineDotSize:6,inlineTitleColor:p,inlineTailColor:d});return[Mi(h)]},ji);function Bi(i){return i.filter(e=>e)}function Xi(i,e){if(i)return i;const t=di(e).map(n=>{if(s.isValidElement(n)){const{props:o}=n;return Object.assign({},o)}return null});return Bi(t)}var Ri=function(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(i);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(i,n[o])&&(t[n[o]]=i[n[o]]);return t};const Ai=i=>{const{percent:e,size:t,className:n,rootClassName:o,direction:r,items:l,responsive:p=!0,current:c=0,children:d,style:u}=i,h=Ri(i,["percent","size","className","rootClassName","direction","items","responsive","current","children","style"]),{xs:w}=mi(p),{getPrefixCls:C,direction:q,className:N,style:O}=gi("steps"),$=s.useMemo(()=>p&&w?"vertical":r,[w,r]),T=pi(t),g=C("steps",i.prefixCls),[I,W,_]=_i(g),E=i.type==="inline",y=C("",i.iconPrefix),B=Xi(l,d),x=E?void 0:e,D=Object.assign(Object.assign({},O),u),M=L(N,{[`${g}-rtl`]:q==="rtl",[`${g}-with-progress`]:x!==void 0},n,o,W,_),H={finish:s.createElement(ui,{className:`${g}-finish-icon`}),error:s.createElement($i,{className:`${g}-error-icon`})},z=m=>{let{node:f,status:P}=m;if(P==="process"&&x!==void 0){const X=T==="small"?32:40;return s.createElement("div",{className:`${g}-progress-icon`},s.createElement(hi,{type:"circle",percent:x,size:X,strokeWidth:4,format:()=>null}),f)}return f},S=(m,f)=>m.description?s.createElement(Si,{title:m.description},f):f;return I(s.createElement(K,Object.assign({icons:H},h,{style:D,current:c,size:T,items:B,itemRender:E?S:void 0,stepIcon:z,direction:$,prefixCls:g,iconPrefix:y,className:M})))};Ai.Step=K.Step;export{Ai as S};
