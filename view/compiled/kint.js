(function(){if("undefined"===typeof kintInitialized){kintInitialized=1;var e=[],f=-1,g=function(a){var b=window.getSelection(),c=document.createRange();c.selectNodeContents(a);b.removeAllRanges();b.addRange(c)},h=function(a){Array.prototype.slice.call(document.querySelectorAll(".kint nav, .kint-tabs>li:not(.kint-active-tab)"),0).forEach(a)},k=function(a,b){if(!a.classList)return!1;"undefined"===typeof b&&(b="kint-show");return a.classList.contains(b)},l=function(a,b){"undefined"===typeof b&&(b="kint-show");a.classList.add(b)},
m=function(a,b){"undefined"===typeof b&&(b="kint-show");a.classList.remove(b)},n=function(a){if("footer"!==a.nodeName.toLowerCase())do{a=a.nextElementSibling;}while("dd"!==a.nodeName.toLowerCase());return a},q=function(a,b){var c=n(a);"undefined"===typeof b&&(b=k(a));b?m(a):l(a);1===c.childNodes.length&&(c=c.childNodes[0].childNodes[0])&&k(c,"kint-parent")&&q(c,b)},r=function(a,b){var c=n(a).getElementsByClassName("kint-parent"),d=c.length;for("undefined"===typeof b&&(b=k(a));d--;)q(c[d],b);q(a,b)},t=function(a){var b=a,c=0;a.parentNode.getElementsByClassName("kint-active-tab")[0].className=
"";for(a.className="kint-active-tab";b=b.previousSibling;)1===b.nodeType&&c++;a=a.parentNode.nextSibling.childNodes;for(var d=0;d<a.length;d++)d===c?(a[d].style.display="block",1===a[d].childNodes.length&&(b=a[d].childNodes[0].childNodes[0],k(b,"kint-parent")&&q(b,!1))):a[d].style.display="none"},u=function(a){for(;a=a.parentNode,a&&!k(a,"kint"););return!!a},v=function(){e=[];h(function(a){0===a.offsetWidth&&0===a.offsetHeight||e.push(a)})},w=function(a){var b;if(b=window.open())b.document.open(),
b.document.write("<html><head><title>Kint ("+(new Date).toISOString()+')</title><meta charset="utf-8">'+document.getElementsByClassName("-kint-js")[0].outerHTML+document.getElementsByClassName("-kint-css")[0].outerHTML+'</head><body><input style="width: 100%" placeholder="Take some notes!"><div class="kint">'+a.parentNode.outerHTML+"</div></body>"),b.document.close()},x=function(a,b){function c(a){var c=1===b?a.replace(/^#/,""):a;if(isNaN(c))return a.trim().toLocaleLowerCase();c=parseFloat(c);return isNaN(c)?
a.trim():c}var d=a.tBodies[0];[].slice.call(a.tBodies[0].rows).sort(function(a,d){a=c(a.cells[b].textContent);d=c(d.cells[b].textContent);return a<d?-1:a>d?1:0}).forEach(function(a){d.appendChild(a)})},y=function(a){var b=document.querySelector(".kint-focused");b&&m(b,"kint-focused");if(-1!==a){b=e[a];l(b,"kint-focused");var c=function(a){return a.offsetTop+(a.offsetParent?c(a.offsetParent):0)};window.scrollTo(0,c(b)-window.innerHeight/2)}f=a},z=function(a,b){a?0>--b&&(b=e.length-1):++b>=e.length&&
(b=0);y(b);return!1};window.addEventListener("click",function(a){var b=a.target,c=b.nodeName.toLowerCase();if(u(b)){if("dfn"===c)g(b),b=b.parentNode;else if("var"===c)b=b.parentNode,c=b.nodeName.toLowerCase();else if("th"===c)return a.ctrlKey||x(b.parentNode.parentNode.parentNode,b.cellIndex),!1;if("li"===c&&"kint-tabs"===b.parentNode.className)return"kint-active-tab"!==b.className&&(t(b),-1!==f&&v()),!1;if("nav"===c)return"footer"===b.parentNode.nodeName.toLowerCase()?(b=b.parentNode,k(b)?m(b):l(b)):
setTimeout(function(){0<parseInt(b.a,10)?b.a--:(r(b.parentNode),-1!==f&&v())},300),a.stopPropagation(),!1;if(k(b,"kint-parent"))return q(b),-1!==f&&v(),!1;if(k(b,"kint-ide-link"))return a.preventDefault(),a=new XMLHttpRequest,a.open("GET",b.href),a.send(null),!1;if(k(b,"kint-popup-trigger")){a=b.parentNode;if("footer"===a.nodeName.toLowerCase())a=a.previousSibling;else for(;a&&!k(a,"kint-parent");)a=a.parentNode;w(a)}else"pre"===c&&3===a.detail&&g(b)}},!1);window.addEventListener("dblclick",function(a){var b=
a.target;if(u(b)&&"nav"===b.nodeName.toLowerCase()){b.a=2;for(var c=document.getElementsByClassName("kint-parent"),d=c.length,b=k(b.parentNode);d--;)q(c[d],b);-1!==f&&v();a.stopPropagation()}},!1);var p=1;window.onkeydown=function(a){if(a.target===document.body&&!a.altKey&&!a.ctrlKey){var b=a.keyCode,c=a.shiftKey;a=f;if(68===b||(74===b&&p)){p=!p;if(-1===a)return v(),z(!1,a);y(-1);return!1}if(-1!==a){if(9===b)return z(c,a);if(38===b||75===b)return z(!0,a);if(40===b||74===b)return z(!1,a);c=e[a];if("li"===c.nodeName.toLowerCase()){if(32===
b||13===b)return t(c),v(),z(!0,a);if(39===b||76===b)return z(!1,a);if(37===b||72===b)return z(!0,a)}c=c.parentNode;if(32===b||13===b)return q(c),v(),!1;if(39===b||37===b||76===b||72===b){var d=k(c),b=(37===b||72===b);if(d)r(c,b);else{if(b){do c=c.parentNode;while(c&&"dd"!==c.nodeName.toLowerCase());if(c){c=c.previousElementSibling;a=-1;for(d=c.querySelector("nav");d!==e[++a];);y(a)}else c=e[a].parentNode}q(c,b)}v();return!1}}}};window.addEventListener("load",function(){var a=Array.prototype.slice.call(document.querySelectorAll(".kint-microtime"),
0);a.forEach(function(b){var c=parseFloat(b.innerHTML),d=Infinity,p=-Infinity;a.forEach(function(a){a=parseFloat(a.innerHTML);d>a&&(d=a);p<a&&(p=a)});b.style.background="hsl("+Math.round(120*(1-(c-d)/(p-d)))+",60%,70%)"})})};})()
