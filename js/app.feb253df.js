(function(){"use strict";var o={3242:function(o,e,t){var d=t(9242),n=t(3396);const s={class:"app"};function a(o,e,t,d,a,r){const i=(0,n.up)("ProgressBar"),c=(0,n.up)("AddTodo"),l=(0,n.up)("TodoList");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(i),(0,n.Wm)(c),(0,n.Wm)(l)])}var r=t(7139);const i={class:"aloc-progress-bar"},c={class:"progress-bar"};function l(o,e,t,d,s,a){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",c,[(0,n._)("div",{class:"progress-bar__progress",style:(0,r.j5)({width:s.progress+"%"})},null,4)])])}var u=t(1373);const p=(0,u.Z)(),h=o=>{p.emit("addTodo",o),x()},T=o=>{p.on("addTodo",o)},g=o=>{p.emit("changeTodo",o),x()},f=o=>{p.on("changeTodo",o)},m=o=>{p.emit("removeTodo",o),x()},v=o=>{p.on("removeTodo",o)},x=()=>{p.emit("refreshProgress")},y=o=>{p.on("refreshProgress",o)};var w={data(){return{progress:"0"}},methods:{getListTodo(){return localStorage.getItem("dataLinesTodo")?JSON.parse(localStorage.getItem("dataLinesTodo")):[]},getNewPercent(){let o=this.getListTodo(),e=o.reduce(((o,e)=>(console.log(o),console.log(e),e.isCompleted&&o++,o)),0);return(e/o.length*100).toFixed(2)},updateProgress(){this.progress=this.getNewPercent()}},created(){y((()=>{this.updateProgress()}))},mounted(){this.updateProgress()}},_=t(89);const b=(0,_.Z)(w,[["render",l],["__scopeId","data-v-0777fd76"]]);var L=b;const C={class:"aloc-add-todo"};function I(o,e,t,s,a,r){return(0,n.wg)(),(0,n.iD)("div",C,[(0,n.wy)((0,n._)("input",{type:"text",class:"add-todo__input",placeholder:"To-do...",maxlength:"25","onUpdate:modelValue":e[0]||(e[0]=o=>a.newTextTodo=o),onKeydown:e[1]||(e[1]=(0,d.D2)(((...o)=>r.addNewTodoData&&r.addNewTodoData(...o)),["enter"]))},null,544),[[d.nr,a.newTextTodo]]),(0,n._)("button",{class:"add-todo__button",onClick:e[2]||(e[2]=(...o)=>r.addNewTodoData&&r.addNewTodoData(...o))},"Add new to-do")])}var O={data(){return{newTextTodo:""}},methods:{addNewTodoData(){if(!this.newTextTodo)return!1;h({id:Math.random().toString(36).substring(2,7),text:this.newTextTodo,isCompleted:!1}),this.newTextTodo=""}}};const S=(0,_.Z)(O,[["render",I],["__scopeId","data-v-026a6758"]]);var D=S;const k={class:"aloc-cards-todo"},N={key:0,class:"has-no-results"};function P(o,e,t,d,s,a){const r=(0,n.up)("TodoCard");return(0,n.wg)(),(0,n.iD)("div",k,[s.dataLinesTodo.length<1?((0,n.wg)(),(0,n.iD)("h1",N,"There are no to-do's yet")):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(s.dataLinesTodo,(o=>((0,n.wg)(),(0,n.j4)(r,{key:o.id,id:o.id,text:o.text,isCompleted:o.isCompleted},null,8,["id","text","isCompleted"])))),128))])}t(7658);const j={class:"card-todo"},Z=["id"],J=["for"];function W(o,e,t,s,a,r){const i=(0,n.up)("fa");return(0,n.wg)(),(0,n.iD)("div",j,[(0,n.wy)((0,n._)("input",{id:"cbx"+t.id,class:"card-todo__cbx-is-completed",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=o=>a.copyIsCompleted=o),onChange:e[1]||(e[1]=(...o)=>r.changeThisTodo&&r.changeThisTodo(...o))},null,40,Z),[[d.e8,a.copyIsCompleted]]),(0,n._)("label",{for:"cbx"+t.id,class:"card-todo__lbl-is-completed"},[(0,n.Wm)(i,{icon:"check"})],8,J),(0,n.wy)((0,n._)("input",{type:"text",class:"card-todo__text",maxlength:"25","onUpdate:modelValue":e[2]||(e[2]=o=>a.copyText=o),onChange:e[3]||(e[3]=(...o)=>r.changeThisTodo&&r.changeThisTodo(...o))},null,544),[[d.nr,a.copyText]]),(0,n._)("label",{class:"card-todo__delete",onClick:e[4]||(e[4]=(...o)=>r.deleteThisTodo&&r.deleteThisTodo(...o))},[(0,n.Wm)(i,{icon:"xmark"})])])}var A={props:{id:{type:String,required:!0},text:{type:String,required:!0,default:""},isCompleted:{type:Boolean,default:!1}},data(){return{copyText:this.text,copyIsCompleted:this.isCompleted}},methods:{changeThisTodo(){g({id:this.id,text:this.copyText,isCompleted:this.copyIsCompleted}),this.$toast.success("Successful change!",{type:"success",position:"top-right",duration:500})},deleteThisTodo(){m(this.id),this.$toast.success("Deleted successfully!",{position:"top-right"})}}};const B=(0,_.Z)(A,[["render",W],["__scopeId","data-v-0bcdeb94"]]);var U=B,V={data(){return{dataLinesTodo:localStorage.getItem("dataLinesTodo")?JSON.parse(localStorage.getItem("dataLinesTodo")):[]}},components:{TodoCard:U},created(){T((o=>{this.dataLinesTodo.push(o),localStorage.setItem("dataLinesTodo",JSON.stringify(this.dataLinesTodo))})),f((o=>{const e=this.dataLinesTodo.findIndex((e=>e.id===o.id));this.dataLinesTodo[e]={id:o.id||this.dataLinesTodo[e].id,text:o.text||this.dataLinesTodo[e].text,isCompleted:"undefined"!==typeof o.isCompleted?o.isCompleted:this.dataLinesTodo[e].isCompleted||!1},localStorage.setItem("dataLinesTodo",JSON.stringify(this.dataLinesTodo))})),v((o=>{const e=this.dataLinesTodo.findIndex((e=>e.id===o));this.dataLinesTodo.splice(e,1),localStorage.setItem("dataLinesTodo",JSON.stringify(this.dataLinesTodo))}))}};const q=(0,_.Z)(V,[["render",P],["__scopeId","data-v-7b0aa4ad"]]);var E=q,F={components:{ProgressBar:L,AddTodo:D,TodoList:E}};const K=(0,_.Z)(F,[["render",a]]);var M=K,$=t(5860),G=t(3494),H=t(8539),Y=t(7749);G.vI.add(H.g82,H.LEp),(0,d.ri)(M).component("fa",Y.GN).use($.ZP).mount("#app")}},e={};function t(d){var n=e[d];if(void 0!==n)return n.exports;var s=e[d]={exports:{}};return o[d].call(s.exports,s,s.exports,t),s.exports}t.m=o,function(){var o=[];t.O=function(e,d,n,s){if(!d){var a=1/0;for(l=0;l<o.length;l++){d=o[l][0],n=o[l][1],s=o[l][2];for(var r=!0,i=0;i<d.length;i++)(!1&s||a>=s)&&Object.keys(t.O).every((function(o){return t.O[o](d[i])}))?d.splice(i--,1):(r=!1,s<a&&(a=s));if(r){o.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=o.length;l>0&&o[l-1][2]>s;l--)o[l]=o[l-1];o[l]=[d,n,s]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var d in e)t.o(e,d)&&!t.o(o,d)&&Object.defineProperty(o,d,{enumerable:!0,get:e[d]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,d){var n,s,a=d[0],r=d[1],i=d[2],c=0;if(a.some((function(e){return 0!==o[e]}))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(i)var l=i(t)}for(e&&e(d);c<a.length;c++)s=a[c],t.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return t.O(l)},d=self["webpackChunkprojetotodo"]=self["webpackChunkprojetotodo"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=t.O(void 0,[998],(function(){return t(3242)}));d=t.O(d)})();
//# sourceMappingURL=app.feb253df.js.map