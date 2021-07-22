void 0===window.kintRich&&(window.kintRich=function(){"use strict";var n={selectText:function(e){var t=window.getSelection(),a=document.createRange();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)},each:function(e,t){Array.prototype.slice.call(document.querySelectorAll(e),0).forEach(t)},hasClass:function(e,t){return!!e.classList&&(void 0===t&&(t="kint-show"),e.classList.contains(t))},addClass:function(e,t){void 0===t&&(t="kint-show"),e.classList.add(t)},removeClass:function(e,t){return void 0===t&&(t="kint-show"),e.classList.remove(t),e},toggle:function(e,t){var a=n.getChildren(e);a&&(void 0===t&&(t=n.hasClass(e)),t?n.removeClass(e):n.addClass(e),1===a.childNodes.length&&(a=a.childNodes[0].childNodes[0])&&n.hasClass(a,"kint-parent")&&n.toggle(a,t))},toggleChildren:function(e,t){var a=n.getChildren(e);if(a){var r=a.getElementsByClassName("kint-parent"),o=r.length;for(void 0===t&&(t=!n.hasClass(e));o--;)n.toggle(r[o],t)}},toggleAll:function(e){for(var t=document.getElementsByClassName("kint-parent"),a=t.length,r=!n.hasClass(e.parentNode);a--;)n.toggle(t[a],r)},switchTab:function(e){var t,a=e.previousSibling,r=0;for(n.removeClass(e.parentNode.getElementsByClassName("kint-active-tab")[0],"kint-active-tab"),n.addClass(e,"kint-active-tab");a;)1===a.nodeType&&r++,a=a.previousSibling;t=e.parentNode.nextSibling.childNodes;for(var o=0;o<t.length;o++)o===r?(n.addClass(t[o]),1===t[o].childNodes.length&&(a=t[o].childNodes[0].childNodes[0])&&n.hasClass(a,"kint-parent")&&n.toggle(a,!1)):n.removeClass(t[o])},mktag:function(e){return"<"+e+">"},openInNewWindow:function(e){var t=window.open();t&&(t.document.open(),t.document.write(n.mktag("html")+n.mktag("head")+n.mktag("title")+"Kint ("+(new Date).toISOString()+")"+n.mktag("/title")+n.mktag('meta charset="utf-8"')+document.getElementsByClassName("kint-rich-script")[0].outerHTML+document.getElementsByClassName("kint-rich-style")[0].outerHTML+n.mktag("/head")+n.mktag("body")+'<input style="width: 100%" placeholder="Take some notes!"><div class="kint-rich">'+e.parentNode.outerHTML+"</div>"+n.mktag("/body")),t.document.close())},sortTable:function(e,a){var t=e.tBodies[0];[].slice.call(e.tBodies[0].rows).sort(function(e,t){if(e=e.cells[a].textContent.trim().toLocaleLowerCase(),t=t.cells[a].textContent.trim().toLocaleLowerCase(),isNaN(e)||isNaN(t)){if(isNaN(e)&&!isNaN(t))return 1;if(isNaN(t)&&!isNaN(e))return-1}else e=parseFloat(e),t=parseFloat(t);return e<t?-1:t<e?1:0}).forEach(function(e){t.appendChild(e)})},showAccessPath:function(e){for(var t=e.childNodes,a=0;a<t.length;a++)if(n.hasClass(t[a],"access-path"))return void(n.hasClass(t[a],"kint-show")?n.removeClass(t[a]):(n.addClass(t[a]),n.selectText(t[a])))},showSearchBox:function(e){var t=e.querySelector(".kint-search");t&&(n.hasClass(t)?(n.removeClass(t),n.removeClass(e.parentNode,"kint-search-root")):(n.addClass(e),n.addClass(t),t.focus(),t.select(),n.search(t)))},search:function(e){var t=e.parentNode.parentNode;e.value.length?(e=n.findMatches(t,e.value),n.highlightMatches(t,e)):n.removeClass(t,"kint-search-root")},findMatches:function(e,t){for(var a=null,r=0;r<e.children.length;r++)if("DD"===e.children[r].tagName){a=e.children[r];break}if(!a)return[];var o=a.querySelectorAll("dfn"),s=[];return t=t.toLowerCase(),[].forEach.call(o,function(e){-1!=e.innerText.toLowerCase().indexOf(t)&&s.push(e)}),s},highlightMatches:function(e,t){var a=e.querySelectorAll(".kint-search-match");[].forEach.call(a,function(e){n.removeClass(e,"kint-search-match")}),n.addClass(e,"kint-search-root");for(var r=0;r<t.length;r++){for(var o,s=t[r];s!=e;)"DL"===s.tagName?n.addClass(s,"kint-search-match"):"LI"===s.tagName&&(s.parentNode.previousElementSibling.classList.contains("kint-tabs")&&(o=[].slice.call(s.parentNode.children).indexOf(s),n.addClass([].slice.call(s.parentNode.previousElementSibling.children)[o],"kint-search-match")),s=s.parentNode),s=s.parentNode;n.addClass(t[r],"kint-search-match")}},getParentByClass:function(e,t){for(void 0===t&&(t="kint-rich");(e=e.parentNode)&&!n.hasClass(e,t););return e},getParentHeader:function(e,t){for(var a=e.nodeName.toLowerCase();"dd"!==a&&"dt"!==a&&n.getParentByClass(e);)a=(e=e.parentNode).nodeName.toLowerCase();return n.getParentByClass(e)?("dd"===a&&t&&(e=e.previousElementSibling),e&&"dt"===e.nodeName.toLowerCase()&&n.hasClass(e,"kint-parent")?e:void 0):null},getChildren:function(e){for(;e=e.nextElementSibling,e&&"dd"!==e.nodeName.toLowerCase(););return e},isFolderOpen:function(){if(n.folder&&n.folder.querySelector("dd.kint-foldout"))return n.hasClass(n.folder.querySelector("dd.kint-foldout").previousSibling)},initLoad:function(){n.style=window.kintShared.dedupe("style.kint-rich-style",n.style),n.script=window.kintShared.dedupe("script.kint-rich-script",n.script),n.folder=window.kintShared.dedupe(".kint-rich.kint-folder",n.folder);var t,e=document.querySelectorAll("input.kint-search");[].forEach.call(e,function(t){function e(e){window.clearTimeout(a),void 0!==t.value&&(t.value,a=window.setTimeout(function(){n.search(t)},500))}var a=null;t.removeEventListener("keyup",e),t.addEventListener("keyup",e)}),n.folder&&(t=n.folder.querySelector("dd"),[].forEach.call(document.querySelectorAll(".kint-rich.kint-file"),function(e){e.parentNode!==n.folder&&t.appendChild(e)}),document.body.appendChild(n.folder),n.addClass(n.folder))},keyboardNav:{targets:[],target:0,active:!1,fetchTargets:function(){var e=n.keyboardNav.targets[n.keyboardNav.target];n.keyboardNav.targets=[],n.each(".kint-rich nav, .kint-tabs>li:not(.kint-active-tab)",function(e){n.isFolderOpen()&&!n.folder.contains(e)||0===e.offsetWidth&&0===e.offsetHeight||n.keyboardNav.targets.push(e)}),e&&-1!==n.keyboardNav.targets.indexOf(e)&&(n.keyboardNav.target=n.keyboardNav.targets.indexOf(e))},sync:function(e){var t=document.querySelector(".kint-focused");t&&n.removeClass(t,"kint-focused"),n.keyboardNav.active&&(t=n.keyboardNav.targets[n.keyboardNav.target],n.addClass(t,"kint-focused"),e||n.keyboardNav.scroll(t))},scroll:function(e){var t,a;e!==n.folder.querySelector("dt > nav")&&(a=(t=function(e){return e.offsetTop+(e.offsetParent?t(e.offsetParent):0)})(e),n.isFolderOpen()?(e=n.folder.querySelector("dd.kint-foldout")).scrollTo(0,a-e.clientHeight/2):window.scrollTo(0,a-window.innerHeight/2))},moveCursor:function(e){for(n.keyboardNav.target+=e;n.keyboardNav.target<0;)n.keyboardNav.target+=n.keyboardNav.targets.length;for(;n.keyboardNav.target>=n.keyboardNav.targets.length;)n.keyboardNav.target-=n.keyboardNav.targets.length;n.keyboardNav.sync()},setCursor:function(e){if(n.isFolderOpen()&&!n.folder.contains(e))return!1;n.keyboardNav.fetchTargets();for(var t=0;t<n.keyboardNav.targets.length;t++)if(e===n.keyboardNav.targets[t])return n.keyboardNav.target=t,!0;return!1}},mouseNav:{lastClickTarget:null,lastClickTimer:null,lastClickCount:0,renewLastClick:function(){window.clearTimeout(n.mouseNav.lastClickTimer),n.mouseNav.lastClickTimer=window.setTimeout(function(){n.mouseNav.lastClickTarget=null,n.mouseNav.lastClickTimer=null,n.mouseNav.lastClickCount=0},250)}},style:null,script:null,folder:null};return window.addEventListener("click",function(e){var t=e.target,a=t.nodeName.toLowerCase();if(n.mouseNav.lastClickTarget&&n.mouseNav.lastClickTimer&&n.mouseNav.lastClickCount)return t=n.mouseNav.lastClickTarget,void(1===n.mouseNav.lastClickCount?(n.toggleChildren(t.parentNode),n.keyboardNav.setCursor(t),n.keyboardNav.sync(!0),n.mouseNav.lastClickCount++,n.mouseNav.renewLastClick()):(n.toggleAll(t),n.keyboardNav.setCursor(t),n.keyboardNav.sync(!0),n.keyboardNav.scroll(t),window.clearTimeout(n.mouseNav.lastClickTimer),n.mouseNav.lastClickTarget=null,n.mouseNav.lastClickTarget=null,n.mouseNav.lastClickCount=0));if(n.getParentByClass(t)){if("dfn"===a)n.selectText(t);else if("th"===a)return void(e.ctrlKey||n.sortTable(t.parentNode.parentNode.parentNode,t.cellIndex));if((t=n.getParentHeader(t))&&(n.keyboardNav.setCursor(t.querySelector("nav")),n.keyboardNav.sync(!0)),t=e.target,"li"===a&&"kint-tabs"===t.parentNode.className)"kint-active-tab"!==t.className&&n.switchTab(t),(t=n.getParentHeader(t,!0))&&(n.keyboardNav.setCursor(t.querySelector("nav")),n.keyboardNav.sync(!0));else if("nav"===a)"footer"===t.parentNode.nodeName.toLowerCase()?(n.keyboardNav.setCursor(t),n.keyboardNav.sync(!0),t=t.parentNode,n.hasClass(t)?n.removeClass(t):n.addClass(t)):(n.toggle(t.parentNode),n.keyboardNav.fetchTargets(),n.mouseNav.lastClickCount=1,n.mouseNav.lastClickTarget=t,n.mouseNav.renewLastClick());else if(n.hasClass(t,"kint-popup-trigger")){var r=t.parentNode;if("footer"===r.nodeName.toLowerCase())r=r.previousSibling;else for(;r&&!n.hasClass(r,"kint-parent");)r=r.parentNode;n.openInNewWindow(r)}else n.hasClass(t,"kint-access-path-trigger")?n.showAccessPath(t.parentNode):n.hasClass(t,"kint-search-trigger")?n.showSearchBox(t.parentNode):n.hasClass(t,"kint-search")||("pre"===a&&3===e.detail?n.selectText(t):n.getParentByClass(t,"kint-source")&&3===e.detail?n.selectText(n.getParentByClass(t,"kint-source")):n.hasClass(t,"access-path")?n.selectText(t):"a"!==a&&(t=n.getParentHeader(t))&&(n.toggle(t),n.keyboardNav.fetchTargets()))}},!0),window.addEventListener("keydown",function(e){if(e.target===document.body&&!e.altKey&&!e.ctrlKey){if(68===e.keyCode){if(n.keyboardNav.active)n.keyboardNav.active=!1;else if(n.keyboardNav.active=!0,n.keyboardNav.fetchTargets(),0===n.keyboardNav.targets.length)return void(n.keyboardNav.active=!1);return n.keyboardNav.sync(),void e.preventDefault()}if(n.keyboardNav.active){if(9===e.keyCode)return n.keyboardNav.moveCursor(e.shiftKey?-1:1),void e.preventDefault();if(38===e.keyCode||75===e.keyCode)return n.keyboardNav.moveCursor(-1),void e.preventDefault();if(40===e.keyCode||74===e.keyCode)return n.keyboardNav.moveCursor(1),void e.preventDefault();var t,a,r=n.keyboardNav.targets[n.keyboardNav.target];if("li"===r.nodeName.toLowerCase()){if(32===e.keyCode||13===e.keyCode)return n.switchTab(r),n.keyboardNav.fetchTargets(),n.keyboardNav.sync(),void e.preventDefault();if(39===e.keyCode||76===e.keyCode)return n.keyboardNav.moveCursor(1),void e.preventDefault();if(37===e.keyCode||72===e.keyCode)return n.keyboardNav.moveCursor(-1),void e.preventDefault()}r=r.parentNode,65===e.keyCode?(n.showAccessPath(r),e.preventDefault()):"footer"===r.nodeName.toLowerCase()&&n.hasClass(r.parentNode,"kint-rich")?32===e.keyCode||13===e.keyCode?(n.hasClass(r)?n.removeClass(r):n.addClass(r),e.preventDefault()):37===e.keyCode||72===e.keyCode?(n.removeClass(r),e.preventDefault()):39!==e.keyCode&&76!==e.keyCode||(n.addClass(r),e.preventDefault()):32===e.keyCode||13===e.keyCode?(n.toggle(r),n.keyboardNav.fetchTargets(),e.preventDefault()):39!==e.keyCode&&76!==e.keyCode&&37!==e.keyCode&&72!==e.keyCode||(t=37===e.keyCode||72===e.keyCode,n.hasClass(r)?n.toggleChildren(r,t):!t||(a=n.getParentHeader(r.parentNode.parentNode,!0))&&(r=a,n.keyboardNav.setCursor(r.querySelector("nav")),n.keyboardNav.sync()),n.toggle(r,t),n.keyboardNav.fetchTargets(),e.preventDefault())}}},!0),n}()),window.kintShared.runOnce(window.kintRich.initLoad);
