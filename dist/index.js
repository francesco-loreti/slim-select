!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SlimSelect=t():e.SlimSelect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(e,t,i){"use strict";function n(e,t){function i(e,t){return t&&e&&e.classList&&e.classList.contains(t)?e:null}function n(e,t){return e&&e!==document?i(e,t)?e:n(e.parentNode,t):null}return i(e,t)||n(e,t)}function s(e,t){var i=e.scrollTop+e.offsetTop,n=i+e.clientHeight,s=t.offsetTop,a=s+t.clientHeight;s<i?e.scrollTop-=i-s:a>n&&(e.scrollTop+=a-n)}function a(e,t,i){var n=e.offsetHeight,s=e.getBoundingClientRect(),a=i?s.top:s.top-n,o=i?s.bottom:s.bottom+n;return a<=0?"below":o>=window.innerHeight?"above":i?t:"below"}function o(e,t,i){void 0===t&&(t=100),void 0===i&&(i=!1);var n;return function(){var s=this,a=arguments,o=function(){n=null,i||e.apply(s,a)},l=i&&!n;clearTimeout(n),n=setTimeout(o,t),l&&e.apply(s,a)}}function l(e,t,i){if(!Array.isArray(e))return e[t]===i;for(var n=0;n<e.length;n++)if(e[n]&&e[n][t]&&e[n][t]===i)return!0;return!1}t.__esModule=!0,t.hasClassInTree=n,t.ensureElementInView=s,t.putContent=a,t.debounce=o,t.isValueInArrayOfObjects=l},function(e,t){},function(e,t,i){"use strict";t.__esModule=!0;var n=function(){function e(e){this.id="",this.isMultiple=!1,this.showSearch=!0,this.searchText="No Results",this.placeholderText="Select Value",this.isEnabled=!0,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.openAbove="ss-open-above",this.openBelow="ss-open-below",this.search="ss-search",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.option="ss-option",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.hide="ss-hide",this.id="ss-"+Math.floor(1e5*Math.random()),this.style=e.select.style.cssText,this.class=e.select.classList,this.isMultiple=e.select.multiple,this.showSearch=!1!==e.showSearch,this.isEnabled=!1!==e.isEnabled,e.searchText&&(this.searchText=e.searchText),e.placeholderText&&(this.placeholderText=e.placeholderText)}return e}();t.default=n},function(e,t,i){"use strict";t.__esModule=!0;var n=i(0),s=function(){function e(e){this.main=e.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.container.appendChild(this.multiSelected.container),this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container),this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list))}return e.prototype.containerDiv=function(){var e=document.createElement("div");e.classList.add(this.main.config.id),e.classList.add(this.main.config.main),e.style.cssText=this.main.config.style;for(var t=0;t<this.main.config.class.length;t++)e.classList.add(this.main.config.class[t]);return e},e.prototype.singleSelectedDiv=function(){var e=this,t=document.createElement("div");t.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder"),t.appendChild(i);var n=document.createElement("span");n.classList.add(this.main.config.arrow);var s=document.createElement("span");return s.classList.add("arrow-down"),n.appendChild(s),t.appendChild(n),t.onclick=function(){e.main.config.isEnabled&&(e.main.data.contentOpen?e.main.close():e.main.open())},{container:t,placeholder:i,arrowIcon:{container:n,arrow:s}}},e.prototype.placeholder=function(){var e=this.main.data.getSelected();if(e&&e.placeholder){var t=document.createElement("span");t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.placeholderText,this.singleSelected.placeholder.innerHTML=t.outerHTML}else this.singleSelected.placeholder.innerHTML=e?e.innerHTML||e.text:""},e.prototype.multiSelectedDiv=function(){var e=this,t=document.createElement("div");t.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),t.appendChild(i);var n=document.createElement("div");n.classList.add(this.main.config.add);var s=document.createElement("span");return s.classList.add(this.main.config.plus),s.onclick=function(t){e.main.data.contentOpen&&(e.main.close(),t.stopPropagation())},n.appendChild(s),t.appendChild(n),t.onclick=function(t){if(e.main.config.isEnabled){t.target.classList.contains(e.main.config.valueDelete)||e.main.open()}},{container:t,values:i,add:n,plus:s}},e.prototype.values=function(){if(this.main.config.isMultiple){for(var e=this.multiSelected.values.childNodes,t=this.main.data.getSelected(),i=void 0,n=0;n<e.length;n++){i=!0;for(var s=e[n],a=0;a<t.length;a++)String(t[a].id)===String(s.dataset.id)&&(i=!1);if(i){var o=e[n];o.classList.add("ss-out"),this.multiSelected.values.removeChild(o)}}for(var a=0;a<t.length;a++){i=!1;for(var n=0;n<e.length;n++){var s=e[n];t[a].id===s.dataset.id&&(i=!0)}i||(0===e.length?this.multiSelected.values.appendChild(this.valueDiv(t[a])):0===a?this.multiSelected.values.insertBefore(this.valueDiv(t[a]),e[a]):e[a-1].after(this.valueDiv(t[a])))}if(0===t.length){var l=document.createElement("span");l.classList.add(this.main.config.disabled),l.innerHTML=this.main.config.placeholderText,this.multiSelected.values.innerHTML=l.outerHTML}}},e.prototype.valueDiv=function(e){var t=this,i=document.createElement("div");i.classList.add(this.main.config.value),i.dataset.id=e.id;var n=document.createElement("span");n.classList.add(this.main.config.valueText),n.innerHTML=e.text,i.appendChild(n);var s=document.createElement("span");return s.classList.add(this.main.config.valueDelete),s.innerHTML="x",s.onclick=function(i){if(t.main.config.isEnabled){if(t.main.beforeOnChange){for(var n=t.main.data.getSelected(),s=JSON.parse(JSON.stringify(n)),a=0;a<s.length;a++)s[a].id===e.id&&s.splice(a,1);!1!==t.main.beforeOnChange(s)&&(t.main.data.removeFromSelected(e.id,"id"),t.main.render(),t.main.select.setValue())}else t.main.data.removeFromSelected(e.id,"id"),t.main.render(),t.main.select.setValue();i.preventDefault()}},i.appendChild(s),i},e.prototype.contentDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.content),e},e.prototype.searchDiv=function(){var e=this,t=document.createElement("div");t.classList.add(this.main.config.search),this.main.config.showSearch||(t.style.display="none");var i=document.createElement("input");return i.type="search",i.placeholder="Search",i.tabIndex=0,i.onclick=function(t){setTimeout(function(){""===t.target.value&&e.main.search("")},10)},i.onkeydown=function(t){"ArrowUp"===t.key?(e.highlightUp(),t.preventDefault()):"ArrowDown"===t.key?(e.highlightDown(),t.preventDefault()):"Tab"===t.key?e.main.close():"Enter"===t.key&&t.preventDefault()},i.onkeyup=function(t){var i=t.target;if("Enter"===t.key){var n=e.list.querySelector("."+e.main.config.highlighted);n&&n.click(),t.preventDefault()}else"ArrowUp"===t.key||"ArrowDown"===t.key||("Escape"===t.key?e.main.close():e.main.search(i.value));t.preventDefault()},i.onfocus=function(){e.main.open()},t.appendChild(i),{container:t,input:i}},e.prototype.highlightUp=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)t=e.previousSibling;else{var i=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");t=i[i.length-1]}if(t&&t.classList.contains(this.main.config.optgroupLabel)&&(t=null),null===t){var s=e.parentNode;s.classList.contains(this.main.config.optgroup)&&s.previousSibling&&(t=s.previousSibling.childNodes[s.previousSibling.childNodes.length-1])}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),n.ensureElementInView(this.list,t))},e.prototype.highlightDown=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=e?e.nextSibling:this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");if(null===t){var i=e.parentNode;if(i.classList.contains(this.main.config.optgroup)&&i.nextSibling){t=i.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")")}}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),n.ensureElementInView(this.list,t))},e.prototype.listDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.list),e.onmousewheel=function(t){var i=e.scrollTop,n=e.scrollHeight,s=e.offsetHeight,a="DOMMouseScroll"==t.type?-40*t.detail:t.wheelDelta,o=a>0,l=function(){return t.stopPropagation(),t.preventDefault(),t.returnValue=!1,!1};return!o&&-a>n-s-i?(e.scrollTop=n,l()):o&&a>i?(e.scrollTop=0,l()):void 0},e},e.prototype.options=function(){var e=this.main.data.filtered||this.main.data.data;if(this.list.innerHTML="",0===e.length){var t=document.createElement("div");return t.classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.searchText,void this.list.appendChild(t)}for(var i=0;i<e.length;i++)if(e[i].hasOwnProperty("label")){var n=e[i],s=document.createElement("div");s.classList.add(this.main.config.optgroup);var a=document.createElement("div");a.classList.add(this.main.config.optgroupLabel),a.innerHTML=n.label,s.appendChild(a);for(var o=n.options,l=0;l<o.length;l++)s.appendChild(this.option(o[l]));this.list.appendChild(s)}else this.list.appendChild(this.option(e[i]))},e.prototype.option=function(e){var t=this;if(e.placeholder){var i=document.createElement("div");return i.classList.add(this.main.config.option),i.classList.add(this.main.config.hide),i}var s=document.createElement("div");s.classList.add(this.main.config.option);var a=this.main.data.getSelected();return s.dataset.id=e.id,s.innerHTML=e.innerHTML,s.onclick=function(e){if(t.main.beforeOnChange){var i=void 0,n=JSON.parse(JSON.stringify(t.main.data.getObjectFromData(e.target.dataset.id)));n.selected=!0,t.main.config.isMultiple?(i=JSON.parse(JSON.stringify(a)),i.push(n)):i=JSON.parse(JSON.stringify(n));!1!==t.main.beforeOnChange(i)&&t.main.set(e.target.dataset.id,"id")}else t.main.set(e.target.dataset.id,"id")},(e.disabled||a&&n.isValueInArrayOfObjects(a,"id",e.id))&&(s.onclick=null,s.classList.add(this.main.config.disabled)),s},e}();t.default=s},function(e,t,i){"use strict";function n(e){if(!e)throw new Error("Data must be an array of objects");for(var t=0;t<e.length;t++)if(e[t].hasOwnProperty("label")){if(e[t].hasOwnProperty("options"))for(var i=e[t],n=i.options,t=0;t<n.length;t++)s(n[t])}else{var a=e[t];s(a)}}function s(e){if(void 0===e.text)throw new Error("Data object option must have at least have a text value. Check object: "+JSON.stringify(e))}t.__esModule=!0;var a=function(){function e(e){this.contentOpen=!1,this.contentPosition="below",this.main=e.main,this.searchValue="",this.data=[],this.filtered=null,this.parseSelectData(),this.setSelectedFromSelect()}return e.prototype.parseSelectData=function(){this.data=[];for(var e=this.main.select.element,t=e.childNodes,i=0;i<t.length;i++)if("OPTGROUP"===t[i].nodeName){for(var n=t[i],s={label:n.label,options:[]},a=t[i].childNodes,o=0;o<a.length;o++)"OPTION"===a[o].nodeName&&s.options.push(this.pullOptionData(a[o]));this.data.push(s)}else"OPTION"===t[i].nodeName&&this.data.push(this.pullOptionData(t[i]))},e.prototype.pullOptionData=function(e){return{id:!!e.dataset&&e.dataset.id||String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:e.innerHTML,selected:e.selected,disabled:e.disabled,placeholder:e.dataset.placeholder||null,data:e.dataset}},e.prototype.setSelectedFromSelect=function(){var e=this.main.select.element.options;if(this.main.config.isMultiple){for(var t=[],i=0;i<e.length;i++){var n=e[i];n.selected&&t.push(this.getObjectFromData(n.value,"value").id)}this.setSelected(t,"id")}else if(-1!==e.selectedIndex){var n=e[e.selectedIndex],s=n.value;this.setSelected(s,"value")}},e.prototype.setSelected=function(e,t){void 0===t&&(t="id");for(var i=0;i<this.data.length;i++)if(this.data[i].hasOwnProperty("label")){if(this.data[i].hasOwnProperty("options"))for(var n=this.data[i].options,s=0;s<n.length;s++)n[s].selected=this.shouldBeSelected(n[s],e,t)}else this.data[i].selected=this.shouldBeSelected(this.data[i],e,t);this.onDataChange()},e.prototype.shouldBeSelected=function(e,t,i){if(void 0===i&&(i="id"),Array.isArray(t)){for(var n=0;n<t.length;n++)if(String(e[i])===String(t[n]))return!0}else if(String(e[i])===String(t))return!0;return!1},e.prototype.getSelected=function(){for(var e=null,t=[],i=0;i<this.data.length;i++)if(this.data[i].hasOwnProperty("label")){if(this.data[i].hasOwnProperty("options"))for(var n=this.data[i].options,s=0;s<n.length;s++)n[s].selected&&(this.main.config.isMultiple?t.push(n[s]):e=n[s])}else this.data[i].selected&&(this.main.config.isMultiple?t.push(this.data[i]):e=this.data[i]);return this.main.config.isMultiple?t:e},e.prototype.addToSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],n=this.getSelected(),s=0;s<n.length;s++)i.push(n[s][t]);i.push(e),this.setSelected(i,t)}},e.prototype.removeFromSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],n=this.getSelected(),s=0;s<n.length;s++)String(n[s][t])!==String(e)&&i.push(n[s][t]);this.setSelected(i,t)}},e.prototype.onDataChange=function(){this.main.onChange&&this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))},e.prototype.getObjectFromData=function(e,t){void 0===t&&(t="id");for(var i=0;i<this.data.length;i++){if(t in this.data[i]&&String(this.data[i][t])===String(e))return this.data[i];if(this.data[i].hasOwnProperty("options"))for(var n=this.data[i],s=0;s<n.options.length;s++)if(String(n.options[s][t])===String(e))return n.options[s]}return null},e.prototype.search=function(e){if(this.searchValue=e,""===e.trim())return void(this.filtered=null);var t=this.data.slice(0);e=e.trim().toLowerCase();var i=t.map(function(t){if(t.hasOwnProperty("options")){var i=t,n=i.options.filter(function(t){return-1!==t.text.toLowerCase().indexOf(e)});if(0!==n.length){var s=Object.assign({},i);return s.options=n,s}}if(t.hasOwnProperty("text")){if(-1!==t.text.toLowerCase().indexOf(e))return t}return null});this.filtered=i.filter(function(e){return e})},e}();t.default=a,t.validateData=n,t.validateOption=s},function(e,t,i){"use strict";t.__esModule=!0;var n=function(){function e(e){this.element=e.select,this.main=e.main,this.element.disabled&&(this.main.config.isEnabled=!1),this.addAttributes(),this.addEventListeners(),this.addMutationObserver()}return e.prototype.setValue=function(){if(this.main.data.getSelected())if(this.main.config.isMultiple)for(var e=this.main.data.getSelected(),t=this.element.options,i=0;i<t.length;i++){var n=t[i];n.selected=!1;for(var s=0;s<e.length;s++)e[s].value===n.value&&(n.selected=!0)}else{var e=this.main.data.getSelected();this.element.value=e?e.value:""}},e.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none"},e.prototype.addEventListeners=function(){var e=this;this.element.addEventListener("change",function(t){e.main.data.setSelectedFromSelect(),e.main.render()})},e.prototype.addMutationObserver=function(){var e=this;this.mutationObserver=new MutationObserver(function(t){e.main.data.parseSelectData(),e.main.data.setSelectedFromSelect(),e.main.render()}),this.observeMutationObserver()},e.prototype.observeMutationObserver=function(){this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,characterData:!0})},e.prototype.disconnectMutationObserver=function(){this.mutationObserver.disconnect()},e.prototype.create=function(e){this.element.innerHTML="";for(var t=0;t<e.length;t++)if(e[t].hasOwnProperty("options")){var i=e[t],n=document.createElement("optgroup");n.label=i.label;for(var s=0;s<i.options.length;s++)n.appendChild(this.createOption(i.options[s]));this.element.appendChild(n)}else this.element.appendChild(this.createOption(e[t]))},e.prototype.createOption=function(e){var t=document.createElement("option");return t.value=e.value||e.text,t.innerHTML=e.innerHTML||e.text,e.selected&&(t.selected=e.selected),e.disabled&&(t.disabled=!0),e.placeholder&&t.setAttribute("data-placeholder","true"),e.data&&"object"==typeof e.data&&Object.keys(e.data).forEach(function(i){t.setAttribute("data-"+i,e.data[i])}),t},e}();t.default=n},function(e,t,i){"use strict";t.__esModule=!0,i(1);var n=i(2),s=i(0),a=i(5),o=i(4),l=i(3),r=function(){function e(e){var t=this;this.beforeOnChange=null,this.onChange=null,this.validate(e);var i="string"==typeof e.select?document.querySelector(e.select):e.select;this.config=new n.default({select:i,showSearch:e.showSearch,searchText:e.searchText,placeholderText:e.placeholder,isEnabled:e.isEnabled}),this.select=new a.default({select:i,main:this}),this.data=new o.default({main:this}),this.slim=new l.default({main:this}),this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),this.render(),document.addEventListener("click",function(e){s.hasClassInTree(e.target,t.config.id)||t.close()}),window.addEventListener("scroll",s.debounce(function(e){t.data.contentOpen&&("above"===s.putContent(t.slim.content,t.data.contentPosition,t.data.contentOpen)?t.moveContentAbove():t.moveContentBelow())}),!1),e.beforeOnChange&&(this.beforeOnChange=e.beforeOnChange),e.onChange&&(this.onChange=e.onChange)}return e.prototype.validate=function(e){var t="string"==typeof e.select?document.querySelector(e.select):e.select;if(!t)throw new Error("Could not find select element");if("SELECT"!==t.tagName)throw new Error("Element isnt of type select")},e.prototype.set=function(e,t,i){void 0===t&&(t="value"),void 0===i&&(i=!0),this.config.isMultiple&&!Array.isArray(e)?this.data.addToSelected(e,t):this.data.setSelected(e,t),this.render(),this.select.setValue(),i&&this.close()},e.prototype.setData=function(e){o.validateData(e);var t=JSON.parse(JSON.stringify(e));this.select.create(t),this.data.parseSelectData(),this.data.setSelectedFromSelect(),this.render()},e.prototype.open=function(){this.config.isEnabled&&(this.slim.search.input.focus(),this.data.contentOpen||(this.config.isMultiple?this.slim.multiSelected.plus.classList.add("ss-cross"):(this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add("above"===this.data.contentPosition?this.config.openAbove:this.config.openBelow),this.slim.content.classList.add(this.config.open),"above"===s.putContent(this.slim.content,this.data.contentPosition,this.data.contentOpen)?this.moveContentAbove():this.moveContentBelow(),this.data.contentOpen=!0))},e.prototype.close=function(){this.data.contentOpen&&(this.config.isMultiple?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.plus.classList.remove("ss-cross")):(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")),this.slim.content.classList.remove(this.config.open),this.data.contentOpen=!1,this.search(""))},e.prototype.moveContentAbove=function(){var e=this.config.isMultiple?this.slim.multiSelected.container.offsetHeight:this.slim.singleSelected.container.offsetHeight,t=this.slim.content.offsetHeight,i=e+t-1;this.slim.content.style.margin="-"+i+"px 0 0 0",this.slim.content.style["transform-origin"]="center bottom",this.data.contentPosition="above",this.data.contentOpen&&(this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.remove(this.config.openBelow),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add(this.config.openAbove))},e.prototype.moveContentBelow=function(){this.slim.content.removeAttribute("style"),this.data.contentPosition="below",this.data.contentOpen&&(this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.remove(this.config.openAbove),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add(this.config.openBelow))},e.prototype.enable=function(){this.config.isEnabled=!0,this.config.isMultiple?this.slim.multiSelected.container.classList.remove(this.config.disabled):this.slim.singleSelected.container.classList.remove(this.config.disabled),this.select.disconnectMutationObserver(),this.select.element.disabled=!1,this.slim.search.input.disabled=!1,this.select.observeMutationObserver()},e.prototype.disable=function(){this.config.isEnabled=!1,this.config.isMultiple?this.slim.multiSelected.container.classList.add(this.config.disabled):this.slim.singleSelected.container.classList.add(this.config.disabled),this.select.disconnectMutationObserver(),this.select.element.disabled=!0,this.slim.search.input.disabled=!0,this.select.observeMutationObserver()},e.prototype.search=function(e){this.data.searchValue!==e&&(this.slim.search.input.value=e,this.data.search(e),this.render())},e.prototype.render=function(){this.config.isMultiple?this.slim.values():this.slim.placeholder(),this.slim.options()},e.prototype.destroy=function(){this.select.element.style.display="inline-block",this.slim.container.parentElement.removeChild(this.slim.container)},e}();t.default=r,e.exports=r}])});