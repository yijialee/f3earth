!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MouseWheelZoomInteraction=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2);t.MouseWheelZoomInteraction=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"addHandle",value:function(){this._earth.on("mousewheel",this._onmousewheel,this)}},{key:"removeHandle",value:function(){this._earth.un("mousewheel",this._onmousewheel,this)}},{key:"_onmousewheel",value:function(e){var t=e.originalEvent,n=-t.deltaY/100,o=this._earth.zoom+n;this._earth.setZoom(o)}}]),t}(a.Interaction)},,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.Interaction=function(){function e(){n(this,e),this._earth=null,this._enabled=!1}return o(e,[{key:"setEarth",value:function(e){this._earth=e}},{key:"getEarth",value:function(){return this._earth}},{key:"enable",value:function(){return this._enabled?this:(this._enabled=!0,this.addHandle(),this)}},{key:"disable",value:function(){return this._enabled?(this._enabled=!1,this.removeHandle(),this):this}},{key:"enabled",value:function(){return!!this._enabled}}]),e}()}])});