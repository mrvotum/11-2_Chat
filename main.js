!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=70)}([function(t,e,n){(function(e){var n="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==n&&globalThis)||r(typeof window==n&&window)||r(typeof self==n&&self)||r(typeof e==n&&e)||Function("return this")()}).call(this,n(36))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(14)("wks"),o=n(25),i=n(0).Symbol,a=n(39);t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(13),i=n(20);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(27).f,i=n(7),a=n(10),c=n(21),u=n(45),s=n(52);t.exports=function(t,e){var n,l,f,p,v,d=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[d]||c(d,{}):(r[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(n,l))&&v.value:n[l],!s(h?l:d+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(n,l,p,t)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0),o=n(14),i=n(7),a=n(9),c=n(21),u=n(28),s=n(42),l=s.get,f=s.enforce,p=String(u).split("toString");o("inspectSource",function(t){return u.call(t)}),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||i(n,"name",e),f(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!l&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:c(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&l(this).source||u.call(this)})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(6),o=n(24),i=n(4),a=n(19),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(21),i=n(38),a=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.2",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(41),o=n(11);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";var r,o,i=n(32),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(u=function(t){var e,n,r,o,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(e=u.lastIndex),r=a.call(u,t),s&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),l&&r&&r.length>1&&c.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),t.exports=u},function(t,e,n){var r=n(5);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){"use strict";var r=n(17),o=n(3),i=n(34),a=n(12),c=n(23),u=n(37),s=n(2)("isConcatSpreadable"),l=!n(1)(function(){var t=[];return t[s]=!1,t.concat()[0]!==t}),f=n(26)("concat"),p=function(t){if(!o(t))return!1;var e=t[s];return void 0!==e?!!e:r(t)},v=!l||!f;n(8)({target:"Array",proto:!0,forced:v},{concat:function(t){var e,n,r,o,s,l=i(this),f=u(l,0),v=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?l:arguments[e],p(s)){if(v+(o=a(s.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,v++)n in s&&c(f,v,s[n])}else{if(v>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(f,v++,s)}return f.length=v,f}})},function(t,e,n){"use strict";var r=n(19),o=n(13),i=n(20);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var r=n(6),o=n(1),i=n(35);t.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(1),o=n(2)("species");t.exports=function(t){return!r(function(){var e=[];return(e.constructor={})[o]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},function(t,e,n){var r=n(6),o=n(40),i=n(20),a=n(15),c=n(19),u=n(9),s=n(24),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=a(t),e=c(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){t.exports=n(14)("native-function-to-string",Function.toString)},function(t,e){t.exports={}},function(t,e,n){var r=n(18),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(6);n(8)({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperty:n(13).f})},function(t,e,n){"use strict";var r=n(4);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(3),o=n(17),i=n(2)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e){t.exports=!1},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(5),i="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r,o,i,a=n(43),c=n(3),u=n(7),s=n(9),l=n(44),f=n(29),p=n(0).WeakMap;if(a){var v=new p,d=v.get,h=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return d.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var y=l("state");f[y]=!0,r=function(t,e){return u(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(28),o=n(0).WeakMap;t.exports="function"==typeof o&&/native code/.test(r.call(o))},function(t,e,n){var r=n(14)("keys"),o=n(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(9),o=n(46),i=n(27),a=n(13);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||c(t,l,u(e,l))}}},function(t,e,n){var r=n(47),o=n(51),i=n(4),a=n(0).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(48),o=n(50).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(9),o=n(15),i=n(49)(!1),a=n(29);t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(15),o=n(12),i=n(30);t.exports=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),l=i(a,s);if(t&&n!=n){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(10)(r,"toString",function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"})},function(t,e,n){var r=n(55),o=Object.prototype;r!==o.toString&&n(10)(o,"toString",r,{unsafe:!0})},function(t,e,n){"use strict";var r=n(56),o={};o[n(2)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){var r=n(5),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var r=n(16);n(8)({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},function(t,e,n){"use strict";var r=n(4),o=n(1),i=n(32),a=/./.toString,c=RegExp.prototype,u=o(function(){return"/a/b"!=a.call({source:"a",flags:"b"})}),s="toString"!=a.name;(u||s)&&n(10)(RegExp.prototype,"toString",function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?i.call(t):n)},{unsafe:!0})},function(t,e,n){"use strict";var r=n(60),o=n(4),i=n(11),a=n(61),c=n(63),u=n(12),s=n(65),l=n(16),f=n(1),p=[].push,v=Math.min,d=!f(function(){return!RegExp(4294967295,"y")});n(66)("split",2,function(t,e,n){var f;return f="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(i(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[o];if(!r(t))return e.call(o,t,a);for(var c,u,s,f=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=new RegExp(t.source,v+"g");(c=l.call(h,o))&&!((u=h.lastIndex)>d&&(f.push(o.slice(d,c.index)),c.length>1&&c.index<o.length&&p.apply(f,c.slice(1)),s=c[0].length,d=u,f.length>=a));)h.lastIndex===c.index&&h.lastIndex++;return d===o.length?!s&&h.test("")||f.push(""):f.push(o.slice(d)),f.length>a?f.slice(0,a):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=i(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):f.call(String(r),e,n)},function(t,r){var i=n(f,t,this,r,f!==e);if(i.done)return i.value;var l=o(t),p=String(this),h=a(l,RegExp),g=l.unicode,y=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(d?"y":"g"),m=new h(d?l:"^(?:"+l.source+")",y),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===p.length)return null===s(m,p)?[p]:[];for(var b=0,S=0,w=[];S<p.length;){m.lastIndex=d?S:0;var E,k=s(m,d?p:p.slice(S));if(null===k||(E=v(u(m.lastIndex+(d?0:S)),p.length))===b)S=c(p,S,g);else{if(w.push(p.slice(b,S)),w.length===x)return w;for(var A=1;A<=k.length-1;A++)if(w.push(k[A]),w.length===x)return w;S=b=E}}return w.push(p.slice(b)),w}]},!d)},function(t,e,n){var r=n(3),o=n(5),i=n(2)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(4),o=n(62),i=n(2)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[i])?e:o(n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(64);t.exports=function(t,e,n){return e+(n?r(t,e,!0).length:1)}},function(t,e,n){var r=n(18),o=n(11);t.exports=function(t,e,n){var i,a,c=String(o(t)),u=r(e),s=c.length;return u<0||u>=s?n?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?n?c.charAt(u):i:n?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}},function(t,e,n){var r=n(5),o=n(16);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";var r=n(7),o=n(10),i=n(1),a=n(2),c=n(16),u=a("species"),s=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=!i(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});t.exports=function(t,e,n,f){var p=a(t),v=!i(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=v&&!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e});if(!v||!d||"replace"===t&&!s||"split"===t&&!l){var h=/./[p],g=n(p,""[t],function(t,e,n,r,o){return e.exec===c?v&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),y=g[0],m=g[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)}),f&&r(RegExp.prototype[p],"sham",!0)}}},function(t,e,n){var r=n(0),o=n(68),i=[].slice,a=/MSIE .\./.test(o),c=function(t){return function(e,n){var r=arguments.length>2,o=!!r&&i.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};n(8)({global:!0,bind:!0,forced:a},{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){"use strict";var r=n(3),o=n(17),i=n(30),a=n(12),c=n(15),u=n(23),s=n(2)("species"),l=[].slice,f=Math.max,p=n(26)("slice");n(8)({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var n,p,v,d=c(this),h=a(d.length),g=i(t,h),y=i(void 0===e?h:e,h);if(o(d)&&("function"!=typeof(n=d.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[s])&&(n=void 0):n=void 0,n===Array||void 0===n))return l.call(d,g,y);for(p=new(void 0===n?Array:n)(f(y-g,0)),v=0;g<y;g++,v++)g in d&&u(p,v,d[g]);return p.length=v,p}})},function(t,e,n){"use strict";n.r(e);n(33),n(22),n(53),n(31),n(54),n(57),n(58),n(59),n(67),n(69);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.month=e.getMonth()+1,this.day=e.getDate(),this.year=String(e.getFullYear()).slice(2),this.hours=e.getHours(),this.min=e.getMinutes(),this.sec=e.getSeconds()}var e,n,o;return e=t,(n=[{key:"create",value:function(){var t="".concat(this.check(this.day),".").concat(this.check(this.month),".").concat(this.year),e="".concat(this.check(this.hours),":").concat(this.check(this.min),":").concat(this.check(this.sec));return this.final(t,e)}},{key:"check",value:function(t){return t<10?"0".concat(t):t}},{key:"final",value:function(t,e){return"".concat(t,"  ").concat(e)}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parent=e,this.ws=new WebSocket("ws://eleven-two.herokuapp.com//ws"),this.ws.binaryType="blob",this.messagesArr=[]}var e,n,r;return e=t,(n=[{key:"create",value:function(){this.createNickName(),this.createMessagesDesk(),this.createUsersList(),this.addEventListeners()}},{key:"createNickName",value:function(){var t=document.createElement("form");t.className="createNickName",t.setAttribute("data-id","createNickName"),t.innerHTML='\n      <h3>Выберите псевдоним</h3>\n      <input data-id="nickName" type="text">\n      <input data-id="submit" type="submit">',this.parent.appendChild(t);var e=t.querySelector("[data-id=submit]");this.addEventListenerSubmit(e,t)}},{key:"createMessagesDesk",value:function(){var t=document.createElement("div");t.className="messagesDesk",t.setAttribute("data-id","messagesDesk"),t.innerHTML='<textarea data-id="textarea" class="textarea"></textarea>',this.parent.appendChild(t),this.textareaEl=this.parent.querySelector("[data-id=textarea]"),this.addEventListenerTextArea()}},{key:"addMessages",value:function(t,e){if(this.parent.childElementCount-3<e)for(var n=0;n<e;n+=1){var r=document.createElement("div");r.className="messageBlock",r.innerHTML='\n          <span class="nameAndDate">'.concat(t[n][1],", ").concat(t[n][0],'</span>\n          <span class="message">').concat(t[n][2],"</span>"),this.parent.insertBefore(r,this.parent.lastChild)}else{var o=document.createElement("div");o.className="messageBlock",o.innerHTML='\n        <span class="nameAndDate">'.concat(t[e-1][1],", ").concat(t[e-1][0],'</span>\n        <span class="message">').concat(t[e-1][2],"</span>"),this.parent.insertBefore(o,this.parent.lastChild)}}},{key:"createUsersList",value:function(){var t=document.createElement("div");t.className="usersList",t.setAttribute("data-id","usersList"),t.innerHTML='\n    <ul data-id="usersListUl">\n      <li class="userLi red">You</li>\n    </ul>';var e=document.querySelector("[data-id=messagesDesk]");this.parent.insertBefore(t,e)}},{key:"addOnlineUsers",value:function(t,e){try{if(this.usersArr.length===e)return}catch(t){console.log(t)}for(var n=1;n<e;n+=1){var r=document.createElement("li");r.className="userLi",r.innerHTML="".concat(t[n]);var o=this.parent.querySelector("[data-id=usersListUl]");o.insertBefore(r,o.firstChild)}}},{key:"addEventListeners",value:function(){var t=this;this.ws.addEventListener("open",function(){console.log("connected"),t.ws.send(["getUsers"])}),this.ws.addEventListener("close",function(t){console.log("connection closed",t)}),this.ws.addEventListener("error",function(t){console.log("error"),console.log(t)}),this.ws.addEventListener("message",function(e){t.messagesArr=t.splitString(e.data),console.info(t.messagesArr),console.log(t.messagesArr[0]),"usersArr"===t.messagesArr[0].toString()?(console.log("пришли пользователи"),t.addOnlineUsers(t.messagesArr,t.messagesArr.length),t.usersArr=t.messagesArr):t.addMessages(t.messagesArr,t.messagesArr.length)})}},{key:"addEventListenerTextArea",value:function(){var t=this;this.textareaEl.addEventListener("keypress",function(e){13===e.charCode&&(t.createMyMessage(t.textareaEl.value),t.textareaEl.value="")})}},{key:"createMyMessage",value:function(t){var e=document.createElement("div");e.classList="messageBlock You";var n=new o(new Date).create();e.innerHTML='\n      <span class="nameAndDate">You, '.concat(n,'</span>\n      <span class="message">').concat(t,"</span>");var r=this.nickName.value;console.log(r),this.ws.send("".concat(n,"|+|").concat(r,"|+|").concat(t)),this.parent.insertBefore(e,this.parent.lastChild)}},{key:"splitString",value:function(t){for(var e=t.split(","),n=[],r=0;r<e.length;r+=1)n.push(e[r].split("|+|"));return n}},{key:"addEventListenerSubmit",value:function(t,e){var n=this;t.addEventListener("click",function(t){if(t.preventDefault(),n.nickName=n.parent.querySelector("[data-id=nickName]"),n.findTheSame(n.usersArr,n.nickName.value)){console.log("уже такой есть");var r=document.createElement("p");r.innerHTML="Ник уже занят, попробуйте другой",e.appendChild(r),setInterval(function(){r.remove()},1500)}else{e.remove();var o=n.nickName.value;n.ws.send(["nick",o.toString()])}})}},{key:"findTheSame",value:function(t,e){for(var n=0;n<t.length;n+=1)if(t[n][0]===e)return!0;return!1}}])&&i(e.prototype,n),r&&i(e,r),t}())(document.querySelector("[data-id=chat]")).create()}]);