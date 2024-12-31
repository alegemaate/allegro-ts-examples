(()=>{"use strict";var e,t={874:(e,t,r)=>{var n=r(951);(0,n.enable_debug)("debug");var a=0,o=0,l=0;function i(){a++}function s(){o++}function c(){l++}(0,n.END_OF_FUNCTION)(i),(0,n.END_OF_FUNCTION)(s),(0,n.END_OF_FUNCTION)(c),(0,n.END_OF_MAIN)(),(0,n.init_allegro_ts)("canvas_id",(function(){return e=this,t=void 0,u=function(){var e;return function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,(function(t){switch(t.label){case 0:if(0!=(0,n.allegro_init)())return[2,1];if((0,n.install_keyboard)(),(0,n.install_timer)(),0!=(0,n.set_gfx_mode)(n.GFX_AUTODETECT,320,200,0,0)&&0!=(0,n.set_gfx_mode)(n.GFX_SAFE,320,200,0,0))return(0,n.set_gfx_mode)(n.GFX_TEXT,0,0,0,0),(0,n.allegro_message)("Unable to set any graphic mode\n%s\n",n.allegro_error),[2,1];(0,n.set_palette)(n.desktop_palette),(0,n.clear_to_color)(n.screen,(0,n.makecol)(255,255,255)),(0,n.textprintf_centre_ex)(n.screen,n.font,n.SCREEN_W/2,8,(0,n.makecol)(0,0,0),(0,n.makecol)(255,255,255),"Driver: %s",n.timer_driver.name),(0,n.textprintf_centre_ex)(n.screen,n.font,n.SCREEN_W/2,48,(0,n.makecol)(0,0,0),(0,n.makecol)(255,255,255),"Timing five seconds:"),e=1,t.label=1;case 1:return e<=5?((0,n.textprintf_centre_ex)(n.screen,n.font,n.SCREEN_W/2,62+10*e,(0,n.makecol)(0,0,0),(0,n.makecol)(255,255,255),"%d",e),[4,(0,n.rest)(1e3)]):[3,4];case 2:t.sent(),t.label=3;case 3:return e++,[3,1];case 4:return(0,n.textprintf_centre_ex)(n.screen,n.font,n.SCREEN_W/2,142,(0,n.makecol)(0,0,0),(0,n.makecol)(255,255,255),"Press a key to set up interrupts"),[4,(0,n.readkey)()];case 5:t.sent(),(0,n.LOCK_VARIABLE)(a),(0,n.LOCK_VARIABLE)(o),(0,n.LOCK_VARIABLE)(l),(0,n.LOCK_FUNCTION)(i),(0,n.LOCK_FUNCTION)(s),(0,n.LOCK_FUNCTION)(c),(0,n.install_int)(i,1e3),(0,n.install_int_ex)(s,(0,n.BPS_TO_TIMER)(10)),(0,n.install_int_ex)(c,(0,n.SECS_TO_TIMER)(10)),t.label=6;case 6:return(0,n.keypressed)()?[3,8]:((0,n.textprintf_centre_ex)(n.screen,n.font,n.SCREEN_W/2,176,(0,n.makecol)(0,0,0),(0,n.makecol)(255,255,255),"x=%d, y=%d, z=%d",a,o,l),[4,(0,n.rest)(10)]);case 7:return t.sent(),[3,6];case 8:return[2,0]}}))},new((r=void 0)||(r=Promise))((function(n,a){function o(e){try{i(u.next(e))}catch(e){a(e)}}function l(e){try{i(u.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}i((u=u.apply(e,t||[])).next())}));var e,t,r,u}))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],i=!0,s=0;s<r.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={315:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,i,s]=r,c=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var u=s(n)}for(t&&t(r);c<l.length;c++)o=l[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkallegro_ts_examples=self.webpackChunkallegro_ts_examples||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[512],(()=>n(874)));a=n.O(a)})();
//# sourceMappingURL=al_extimer.js.map