!function(){"use strict";var e=window.React,t=window.lodash,s=window.wp.i18n,o=window.wp.blocks,n=window.wp.blockEditor,c=window.wp.components,r=window.wp.compose,l=window.wp.element,i=window.wp.hooks;let a=null;window.otterCSSLintIgnored=[];var u=(0,l.memo)((({attributes:t,setAttributes:o,clientId:n})=>{const r=(0,l.useRef)(null),[i,u]=(0,l.useState)([]),[m,d]=(0,l.useState)(null),p=(e,t=!1)=>{let s=e?.state?.lint?.marked?.filter((({__annotation:e})=>"error"===e?.severity))?.map((({__annotation:e})=>e?.message));t&&0<s?.length&&(window.otterCSSLintIgnored=s),s=s?.filter((e=>!window.otterCSSLintIgnored.includes(e))),u(s),!t&&0<s?.length||d(e?.getValue())};return(0,l.useEffect)((()=>{const e=t.customCSS&&t.className?.includes("ticss-")?t.className.split(" ").find((e=>e.includes("ticss"))):null;let s="selector {\n}\n";if(t.customCSS){const o=new RegExp("."+e,"g");s=t.customCSS.replace(o,"selector")}r.current=wp.CodeMirror(document.getElementById("o-css-editor"),{value:s,autoCloseBrackets:!0,continueComments:!0,lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,lint:!0,gutters:["CodeMirror-lint-markers"],styleActiveLine:!0,styleActiveSelected:!0,mode:"css",extraKeys:{"Ctrl-Space":"autocomplete","Alt-F":"findPersistent","Cmd-F":"findPersistent"}});const o=()=>{window?.oTrk?.add({feature:"custom-css",featureComponent:"used"}),clearTimeout(a),a=setTimeout((()=>{p(r.current)}),500)};return r.current.on("change",o),()=>{r.current.off("change",o)}}),[]),(0,l.useEffect)((()=>{const e=new RegExp("selector","g"),s=(()=>{const e=n.substring(0,8);if(m?.replace(/\s+/g,"")==="selector {\n}\n".replace(/\s+/g,""))return t.className?t.className.split(" ").filter((e=>!e.includes("ticss-"))).join(" "):t.className;const{className:s}=t;return s?s.includes("ticss-")?s:[...s.trim().split(" "),`ticss-${e}`].join(" "):`ticss-${e}`})(),c=s?.split(" ").find((e=>e.includes("ticss"))),r=c?m?.replace(e,`.${c}`):m;"selector {\n}\n".replace(/\s+/g,"")===r?.replace(/\s+/g,"")?o({customCSS:void 0,className:s}):r&&o({customCSS:r,hasCustomCSS:!0,className:s})}),[m]),(0,e.createElement)(l.Fragment,null,(0,e.createElement)("p",null,(0,s.__)("Add your custom CSS.","blocks-css")),(0,e.createElement)("div",{id:"o-css-editor",className:"o-css-editor"}),0<i?.length&&(0,e.createElement)("div",{className:"o-css-errors"},(0,e.createElement)(c.Notice,{status:"error",isDismissible:!1},(0,s.__)("Attention needed! We found following errors with your code:","blocks-css")),(0,e.createElement)("pre",null,(0,e.createElement)("ul",null,i.map(((t,s)=>(0,e.createElement)("li",{key:s},t))))),(0,e.createElement)(c.Button,{variant:"secondary",onClick:()=>p(r.current,!0),style:{width:"max-content",marginBottom:"20px"}},(0,s.__)("Override","blocks-css"))),(0,e.createElement)("p",null,(0,s.__)("Use","blocks-css")," ",(0,e.createElement)("code",null,"selector")," ",(0,s.__)("to target block wrapper.","blocks-css")),(0,e.createElement)("br",null),(0,e.createElement)("p",null,(0,s.__)("Example:","blocks-css")),(0,e.createElement)("pre",{className:"o-css-editor-help"},"selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}"),(0,e.createElement)("p",null,(0,s.__)("You can also use other CSS syntax here, such as media queries.","blocks-css")))})),m=window.wp.data;let d=!0;const p=e=>{const t=window.parent.document.querySelector('iframe[name="editor-canvas"]')?.contentWindow;let s=t?.document.head||document.head,o=s.querySelector("#o-css-editor-styles");return d&&t?(t.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{p(e)}),500)})),void(d=!1)):(null===o&&(o=document.createElement("style"),o.setAttribute("type","text/css"),o.setAttribute("id","o-css-editor-styles"),s?.appendChild(o)),o.textContent===e?null:o.textContent=e)},w=(e,s)=>{if(!e)return"";const n=e=>{const t=[];if("core/block"===e.name&&null!==s){const c=s.find((t=>e.attributes.ref===t.id));if(c&&c.content){const e=c.content.hasOwnProperty("raw")?c.content.raw:c.content;t.push((0,o.parse)(e).map((e=>[e,n(e)])))}}return void 0!==e.innerBlocks&&0<e.innerBlocks.length&&t.push(e.innerBlocks.map((e=>[e,n(e)]))),t},c=e.map((e=>[e,n(e)]));return(0,t.flattenDeep)(c).map((e=>e.attributes&&e.attributes.hasCustomCSS&&e.attributes.customCSS&&null!==e.attributes.customCSS?e.attributes.customCSS+"\n":"")).reduce(((e,t)=>e+t),"")};let S=[],b=!1;const C=(0,t.debounce)((()=>{const{getBlocks:e,isTyping:s}=(0,m.select)("core/block-editor"),o=!!(0,m.select)("core/edit-post")&&(0,m.select)("core/edit-post").__experimentalGetPreviewDeviceType(),n=e(),c=(0,m.select)("core").getEntityRecords("postType","wp_block",{context:"view"});if(!(s()||(0,t.isEqual)(S,n)&&b===o)){const e=w(n,c);e&&(b!==o&&"Desktop"===b?setTimeout((()=>{p(e)}),500):p(e)),S=n,b=o}}),300);(0,m.subscribe)(C);const k=({clientId:t,setAttributes:o,attributes:n})=>(0,e.createElement)(c.PanelBody,{title:(0,s.__)("Custom CSS","blocks-css"),initialOpen:!1},(0,e.createElement)(u,{clientId:t,setAttributes:o,attributes:n}),(0,e.createElement)("div",{className:"o-fp-wrap"},(0,i.applyFilters)("otter.feedback","","custom-css"),(0,i.applyFilters)("otter.poweredBy",""))),g=(0,r.createHigherOrderComponent)((t=>s=>(0,o.hasBlockSupport)(s.name,"customClassName",!0)&&s.isSelected?(0,e.createElement)(l.Fragment,null,(0,e.createElement)(t,{...s}),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(k,{...s}))):(0,e.createElement)(t,{...s})),"withInspectorControl");(0,i.addFilter)("blocks.registerBlockType","themeisle-custom-css/attribute",(e=>((0,o.hasBlockSupport)(e,"customClassName",!0)&&(e.attributes=(0,t.assign)(e.attributes,{hasCustomCSS:{type:"boolean",default:!1},customCSS:{type:"string"}})),e))),Boolean(window?.blocksCSS?.hasOtter)?(0,i.addFilter)("otter.blockTools","themeisle-custom-css/with-inspector-controls",((t,n)=>{if((0,o.hasBlockSupport)(n.name,"customClassName",!0)){const o=Boolean((0,m.select)("core/preferences")?.get("themeisle/otter-blocks","show-custom-css"));return(0,e.createElement)(l.Fragment,null,t,(0,e.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>Boolean(n.attributes?.hasCustomCSS),label:(0,s.__)("Custom CSS","blocks-css"),onDeselect:()=>{n.setAttributes({hasCustomCSS:!1,customCSS:void 0}),(()=>{const{getBlocks:e}=(0,m.select)("core/block-editor"),t=e(),s=(0,m.select)("core").getEntityRecords("postType","wp_block",{context:"view"}),o=w(t,s);p(o)})()},isShownByDefault:o},(0,e.createElement)(k,{...n})))}return t}),2):(0,i.addFilter)("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",g)}();