!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.DragInteraction=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2);t.DragInteraction=function(e){function t(){o(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e._isMouseDown=!1,e._prevMouseX=null,e._prevMouseY=null,e}return r(t,e),u(t,[{key:"addHandle",value:function(){this._earth.on("mousedown",this._onmousedown,this),this._earth.on("mouseup",this._onmouseup,this),this._earth.on("mousemove",this._onmousemove,this),this._earth.on("mouseout",this._onmouseout,this)}},{key:"removeHandle",value:function(){this._earth.un("mousedown",this._onmousedown,this),this._earth.un("mouseup",this._onmouseup,this),this._earth.un("mousemove",this._onmousemove,this),this._earth.un("mouseout",this._onmouseout,this)}},{key:"_onmousedown",value:function(e){var t=e.originalEvent;this._isMouseDown=!0,this._prevMouseX=t.clientX,this._prevMouseY=t.clientY}},{key:"_onmouseup",value:function(e){this._isMouseDown=!1}},{key:"_onmousemove",value:function(e){var t=e.originalEvent;if(this._isMouseDown){var n=t.clientX-this._prevMouseX,o=t.clientY-this._prevMouseY,i=-n/10%360,r=-o/10%360;this._earth.rotate(r*Math.PI/180,i*Math.PI/180),this._prevMouseX=t.clientX,this._prevMouseY=t.clientY}}},{key:"_onmouseout",value:function(e){this._isMouseDown=!1}}]),t}(s.Interaction)},,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.Interaction=function(){function e(){n(this,e),this._earth=null,this._enabled=!1}return o(e,[{key:"setEarth",value:function(e){this._earth=e}},{key:"getEarth",value:function(){return this._earth}},{key:"enable",value:function(){return this._enabled?this:(this._enabled=!0,this.addHandle(),this)}},{key:"disable",value:function(){return this._enabled?(this._enabled=!1,this.removeHandle(),this):this}},{key:"enabled",value:function(){return!!this._enabled}}]),e}()}])});