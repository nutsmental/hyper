!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t,n,i,r,o,a){try{var s=e[o](a),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(i,r)}function n(e){return function(){var n=this,i=arguments;return new Promise(function(r,o){var a=e.apply(n,i);function s(e){t(a,r,o,s,l,"next",e)}function l(e){t(a,r,o,s,l,"throw",e)}s(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(self.webpackChunkhypergames=self.webpackChunkhypergames||[]).push([[592],{592:function(t,r,a){"use strict";a.r(r),a.d(r,{ion_select:function(){return h},ion_select_option:function(){return w},ion_select_popover:function(){return O}});var s=a(3150),l=a(7585),c=a(2377),u=a(7053),d=a(1269),p=function(e,t){if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(function(t){return t.value===e.value})},h=function(){function t(e){var n=this;i(this,t),(0,s.r)(this,e),this.ionChange=(0,s.e)(this,"ionChange",7),this.ionCancel=(0,s.e)(this,"ionCancel",7),this.ionFocus=(0,s.e)(this,"ionFocus",7),this.ionBlur=(0,s.e)(this,"ionBlur",7),this.ionStyle=(0,s.e)(this,"ionStyle",7),this.inputId="ion-sel-"+x++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=function(e){n.setFocus(),n.open(e)},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()}}var r,a,h,b,y;return o(t,[{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}},{key:"connectedCallback",value:(y=n(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.updateOverlayOptions(),this.emitStyle(),this.mutationO=function(e,t,n){if("undefined"!=typeof MutationObserver){var i=new MutationObserver(function(e){n(function(e,t){var n;e.forEach(function(e){for(var t=0;t<e.addedNodes.length;t++)n=p(e.addedNodes[t],"ion-select-option")||n})}(e))});return i.observe(e,{childList:!0,subtree:!0}),i}}(this.el,0,n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.updateOverlayOptions();case 1:case"end":return e.stop()}},e)})));case 1:case"end":return e.stop()}},e,this)})),function(){return y.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}},{key:"componentDidLoad",value:function(){this.didInit=!0}},{key:"open",value:(b=n(regeneratorRuntime.mark(function e(t){var n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.disabled&&!this.isExpanded){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.createOverlay(t);case 4:return n=this.overlay=e.sent,this.isExpanded=!0,n.onDidDismiss().then(function(){i.overlay=void 0,i.isExpanded=!1,i.setFocus()}),e.next=9,n.present();case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this)})),function(e){return b.apply(this,arguments)})},{key:"createOverlay",value:function(e){var t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn('Select interface cannot be "'.concat(t,'" with a multi-value select. Using the "alert" interface instead.')),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}},{key:"updateOverlayOptions",value:function(){var e=this.overlay;if(e){var t=this.childOpts,n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":var i=e.querySelector("ion-select-popover");i&&(i.options=this.createPopoverOptions(t,n));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",n)}}}},{key:"createActionSheetButtons",value:function(e,t){var n=this,i=e.map(function(e){var i=v(e),r=Array.from(e.classList).filter(function(e){return"hydrated"!==e}).join(" "),o="".concat(k," ").concat(r);return{role:f(i,t,n.compareWith)?"selected":"",text:e.textContent,cssClass:o,handler:function(){n.value=i}}});return i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}}),i}},{key:"createAlertInputs",value:function(e,t,n){var i=this;return e.map(function(e){var r=v(e),o=Array.from(e.classList).filter(function(e){return"hydrated"!==e}).join(" ");return{type:t,cssClass:"".concat(k," ").concat(o),label:e.textContent||"",value:r,checked:f(r,n,i.compareWith),disabled:e.disabled}})}},{key:"createPopoverOptions",value:function(e,t){var n=this;return e.map(function(e){var i=v(e),r=Array.from(e.classList).filter(function(e){return"hydrated"!==e}).join(" ");return{text:e.textContent||"",cssClass:"".concat(k," ").concat(r),value:i,checked:f(i,t,n.compareWith),disabled:e.disabled,handler:function(){n.value=i,n.close()}}})}},{key:"openPopover",value:(h=n(regeneratorRuntime.mark(function e(t){var n,i,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.interfaceOptions,i=(0,l.b)(this),r=this.value,o=Object.assign(Object.assign({mode:i},n),{component:"ion-select-popover",cssClass:["select-popover",n.cssClass],event:t,componentProps:{header:n.header,subHeader:n.subHeader,message:n.message,value:r,options:this.createPopoverOptions(this.childOpts,r)}}),e.abrupt("return",u.c.create(o));case 2:case"end":return e.stop()}},e,this)})),function(e){return h.apply(this,arguments)})},{key:"openActionSheet",value:(a=n(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.b)(this),n=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},n),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",n.cssClass]}),e.abrupt("return",u.b.create(i));case 2:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"openAlert",value:(r=n(regeneratorRuntime.mark(function e(){var t,n,i,r,o,a,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getLabel(),n=t?t.textContent:null,i=this.interfaceOptions,r=this.multiple?"checkbox":"radio",o=(0,l.b)(this),a=Object.assign(Object.assign({mode:o},i),{header:i.header?i.header:n,inputs:this.createAlertInputs(this.childOpts,r,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){s.ionCancel.emit()}},{text:this.okText,handler:function(e){s.value=e}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),e.abrupt("return",u.a.create(a));case 2:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"close",value:function(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}},{key:"getLabel",value:function(){return(0,c.h)(this.el)}},{key:"hasValue",value:function(){return""!==this.getText()}},{key:"childOpts",get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))}},{key:"getText",value:function(){var e=this.selectedText;return null!=e&&""!==e?e:m(this.childOpts,this.value,this.compareWith)}},{key:"setFocus",value:function(){this.focusEl&&this.focusEl.focus()}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}},{key:"render",value:function(){var t,n=this,i=this.disabled,r=this.el,o=this.inputId,a=this.isExpanded,u=this.name,p=this.placeholder,h=this.value,f=(0,l.b)(this),v=(0,c.d)(r,o),b=v.labelText,m=v.labelId;(0,c.e)(!0,r,u,g(h),i);var y=!1,x=this.getText();""===x&&null!=p&&(x=p,y=!0);var k={"select-text":!0,"select-placeholder":y},w=y?"placeholder":"text",C=void 0!==b?""!==x?"".concat(x,", ").concat(b):b:x;return(0,s.h)(s.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":i?"true":null,"aria-label":C,class:(t={},e(t,f,!0),e(t,"in-item",(0,d.h)("ion-item",r)),e(t,"select-disabled",i),e(t,"select-expanded",a),t)},(0,s.h)("div",{"aria-hidden":"true",class:k,part:w},x),(0,s.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,s.h)("div",{class:"select-icon-inner"})),(0,s.h)("label",{id:m},C),(0,s.h)("button",{type:"button",disabled:i,id:o,"aria-labelledby":m,"aria-haspopup":"listbox","aria-expanded":"".concat(a),onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return n.focusEl=e}}))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}}]),t}(),f=function(e,t,n){return void 0!==e&&(Array.isArray(e)?e.some(function(e){return b(e,t,n)}):b(e,t,n))},v=function(e){var t=e.value;return void 0===t?e.textContent||"":t},g=function(e){if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},b=function(e,t,n){return"function"==typeof n?n(e,t):"string"==typeof n?e[n]===t[n]:Array.isArray(t)?t.includes(e):e===t},m=function(e,t,n){return void 0===t?"":Array.isArray(t)?t.map(function(t){return y(e,t,n)}).filter(function(e){return null!==e}).join(", "):y(e,t,n)||""},y=function(e,t,n){var i=e.find(function(e){return b(v(e),t,n)});return i?i.textContent:null},x=0,k="select-interface-option";h.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};var w=function(){function e(t){i(this,e),(0,s.r)(this,t),this.inputId="ion-selopt-"+C++,this.disabled=!1}return o(e,[{key:"render",value:function(){return(0,s.h)(s.H,{role:"option",id:this.inputId,class:(0,l.b)(this)})}},{key:"el",get:function(){return(0,s.i)(this)}}]),e}(),C=0;w.style=":host{display:none}";var O=function(){function e(t){i(this,e),(0,s.r)(this,t),this.options=[]}return o(e,[{key:"onSelect",value:function(e){var t=this.options.find(function(t){return t.value===e.target.value});t&&(0,u.s)(t.handler)}},{key:"render",value:function(){var e=this.options.find(function(e){return e.checked}),t=e?e.value:void 0;return(0,s.h)(s.H,{class:(0,l.b)(this)},(0,s.h)("ion-list",null,void 0!==this.header&&(0,s.h)("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&(0,s.h)("ion-item",null,(0,s.h)("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&(0,s.h)("h3",null,this.subHeader),void 0!==this.message&&(0,s.h)("p",null,this.message))),(0,s.h)("ion-radio-group",{value:t},this.options.map(function(e){return(0,s.h)("ion-item",{class:(0,d.g)(e.cssClass)},(0,s.h)("ion-label",null,e.text),(0,s.h)("ion-radio",{value:e.value,disabled:e.disabled}))}))))}}]),e}();O.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}])}();