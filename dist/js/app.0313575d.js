(function(t){function n(n){for(var l,c,o=n[0],s=n[1],a=n[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(t[l]=s[l]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,a||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],l=!0,o=1;o<e.length;o++){var s=e[o];0!==r[s]&&(l=!1)}l&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var l={},r={app:0},i=[];function c(n){if(l[n])return l[n].exports;var e=l[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=l,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var l in t)c.d(e,l,function(n){return t[n]}.bind(null,l));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/web-game-XO-vue/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var a=0;a<o.length;a++)n(o[a]);var u=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var l=e("85ec"),r=e.n(l);r.a},"041d":function(t,n,e){"use strict";var l=e("cfcd"),r=e.n(l);r.a},"3a2e":function(t,n,e){"use strict";var l=e("a14b"),r=e.n(l);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper",attrs:{id:"app"}},[e("div",{staticClass:"chess"},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(0,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(1,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(2,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(3,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(4,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(5,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(6,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(7,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.onClickCell(8,n)}}})],1),e("div",[t._v(t._s(t.map))]),e("div",[t._v(" "+t._s(null==t.result?"no winner yet...":"winner is :"+t.result+" !"))])],1)])},i=[],c=(e("99af"),e("d81d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])}),o=[],s={name:"HelloWorld",props:{msg:String}},a=s,u=(e("a028"),e("2877")),p=Object(u["a"])(a,c,o,!1,null,"32546140",null),f=p.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:" cell",on:{click:function(n){t.a=!0}}},[t.a?[t._v("X")]:void 0],2)])},d=[],m={name:"Test",data:function(){return{a:!1}}},v=m,C=(e("041d"),Object(u["a"])(v,h,d,!1,null,"20e8c0bb",null)),b=C.exports,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:" cell",on:{click:t.onClickSelf}},[t.a?[t._v(t._s(t.text))]:void 0],2)])},_=[],g={name:"Cell",props:["n"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""==this.text&&(this.a=!0,this.text=this.n%2==0?"X":"O",this.$emit("click",this.text))}}},w=g,y=(e("3a2e"),Object(u["a"])(w,k,_,!1,null,"5421c494",null)),O=y.exports,x={name:"App",components:{HelloWorld:f,Test:b,Cell:O},data:function(){return{n:0,result:null,map:[[null,null,null],[null,null,null],[null,null,null]]}},methods:{onClickCell:function(t,n){console.log("click ".concat(t,", the value is ").concat(n)),this.map[Math.floor(t/3)][t%3]=n,this.n++,this.tell()},tell:function(){for(var t=0;t<2;t++)null!=this.map[t][0]&&this.map[t][0]==this.map[t][1]&&this.map[t][2]==this.map[t][1]&&(this.result=this.map[t][0]);for(var n=0;n<2;n++)null!=this.map[0][n]&&this.map[0][n]==this.map[1][n]&&this.map[2][n]==this.map[1][n]&&(this.result=!0);null!=this.map[0][0]&&this.map[0][0]&&this.map[1][1]&&this.map[2][2]&&this.map[1][1]&&(this.result=!0),null!=this.map[0][2]&&this.map[0][0]==this.map[1][1]&&this.map[2][2]==this.map[1][1]&&(this.result=!0)}}},j=x,S=(e("034f"),Object(u["a"])(j,r,i,!1,null,null,null)),P=S.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,n,e){},a028:function(t,n,e){"use strict";var l=e("d311"),r=e.n(l);r.a},a14b:function(t,n,e){},cfcd:function(t,n,e){},d311:function(t,n,e){}});
//# sourceMappingURL=app.0313575d.js.map