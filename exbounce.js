(()=>{"use strict";var e,r={963:(e,r,t)=>{var n,a,o,l=t(951),s=100,c=100,i=5,u=5;(0,l.END_OF_MAIN)(),(0,l.init_allegro_ts)("canvas_id",(function(){return e=this,r=void 0,_=function(){return function(e,r){var t,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=r.call(e,l)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(e){switch(e.label){case 0:return(0,l.enable_debug)("debug"),(0,l.allegro_init)(),(0,l.set_gfx_mode)(l.GFX_AUTODETECT_WINDOWED,640,480,0,0),(0,l.set_display_switch_mode)(l.SWITCH_PAUSE),(0,l.install_sound)(l.DIGI_AUTODETECT,l.DIGI_AUTODETECT,null),(0,l.install_keyboard)(),(0,l.install_timer)(),a=(0,l.load_bmp)("assets/planet.png"),n=(0,l.load_bmp)("assets/clouds.png"),[4,(0,l.load_sample)("assets/bounce.mp3")];case 1:return o=e.sent(),[4,(0,l.allegro_ready)()];case 2:e.sent(),e.label=3;case 3:return l.key[l.KEY_ESC]?[3,5]:((0,l.clear_to_color)(l.screen,(0,l.makecol)(255,255,255)),r=!1,s+i>l.SCREEN_W&&(i=-5,r=!0),c+u>l.SCREEN_H&&(u=-15,r=!0),s+i<0&&(i=5,r=!0),c+u<0&&(u=5,r=!0),s+=i,c+=u,r&&(0,l.play_sample)(o),u+=.3,(0,l.stretch_blit)(n,l.screen,0,0,n.w,n.h,0,0,l.SCREEN_W,l.SCREEN_H),l.key[l.KEY_Q]?(0,l.rotate_sprite)(l.screen,a,s,c,l.retrace_count%360):l.key[l.KEY_W]?(0,l.rotate_scaled_sprite)(l.screen,a,s,c,l.retrace_count%360,10):l.key[l.KEY_E]?(0,l.rotate_sprite_v_flip)(l.screen,a,s,c,l.retrace_count%360):l.key[l.KEY_R]?(0,l.draw_sprite_v_flip)(l.screen,a,s,c):l.key[l.KEY_T]?(0,l.rotate_scaled_sprite)(l.screen,a,s,c,0,10):(0,l.draw_sprite)(l.screen,a,s,c),[4,(0,l.rest)(16)]);case 4:return e.sent(),[3,3];case 5:return[2,0]}var r}))},new((t=void 0)||(t=Promise))((function(n,a){function o(e){try{s(_.next(e))}catch(e){a(e)}}function l(e){try{s(_.throw(e))}catch(e){a(e)}}function s(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,l)}s((_=_.apply(e,r||[])).next())}));var e,r,t,_}))}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,e=[],n.O=(r,t,a,o)=>{if(!t){var l=1/0;for(u=0;u<e.length;u++){for(var[t,a,o]=e[u],s=!0,c=0;c<t.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={760:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[l,s,c]=t,i=0;if(l.some((r=>0!==e[r]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(r&&r(t);i<l.length;i++)o=l[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},t=self.webpackChunkallegro_ts_examples=self.webpackChunkallegro_ts_examples||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=n.O(void 0,[512],(()=>n(963)));a=n.O(a)})();
//# sourceMappingURL=exbounce.js.map