(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(10),o=n.n(u),c=n(1),l=n(3);var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];switch((arguments.length>1?arguments[1]:void 0).type){case"GENERATE_NUMBERS":for(var t=[];t.length<4;){var n=Math.floor(10*Math.random());t.includes(n)||t.push(n)}return[].concat(t);default:return e}};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TYPING":return t.value;case"CLEAR":return"";default:return e}},m=n(15);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT":for(var n=t.payload.generatedNumbers,a=t.payload.inputString.split("").map(function(e){return Number(e)}),r=0,u=0,o=0;o<4;o++)a[o]===n[o]?r++:n.includes(a[o])&&u++;return[{userGuess:a,countBulls:r,countCows:u}].concat(Object(m.a)(e));default:return e}},p=Object(l.b)({generatedNumbers:i,input:s,history:f}),E=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),b=Object(l.c)(p,E),d=n(12),h=n(13),v=n(16),N=n(14),g=n(17),y=function(e){return{type:"TYPING",value:e.target.value}},w=function(){return{type:"CLEAR"}},O=function(e,t){return{type:"SUBMIT",payload:{inputString:e,generatedNumbers:t}}};n(27);var _=Object(c.b)(function(e){return{input:e.input,generatedNumbers:e.generatedNumbers}},function(e){return{change:function(t){e(y(t))},onSubmit:function(t,n,a){t.preventDefault(),e(O(n,a))},clear:function(){e(w())}}})(function(e){var t=e.input,n=e.change,a=e.clear,u=e.onSubmit,o=e.generatedNumbers;return r.a.createElement("form",{className:"form",onSubmit:function(e){u(e,t,o),a()}},r.a.createElement("input",{type:"text",className:"input",onChange:n,value:t,maxLength:"4"}),r.a.createElement("button",{className:"button",type:"submit"},"Go"))});n(28);var j=Object(c.b)(function(e){return{history:e.history}},null)(function(e){var t=e.history;return t.length&&4===t[0].countBulls?r.a.createElement("div",{className:"result-container"},"Mooooooo! ",r.a.createElement("span",{role:"img","aria-label":"bulls-and-cows"},"\ud83d\udc02\ud83d\udc02\ud83d\udc02\ud83d\udc02\ud83d\udc04\ud83d\udc04\ud83d\udc04\ud83d\udc04")):null});n(29);var S=Object(c.b)(function(e){return{history:e.history}},null)(function(e){var t=e.history;if(t)return r.a.createElement("ul",{className:"history-container"},t.map(function(e){return r.a.createElement("li",{className:"history-entry"},e.userGuess.join(","),"  -  ",e.countBulls," bulls, ",e.countCows," cows")}))}),T=function(){return{type:"GENERATE_NUMBERS"}},B=(n(30),function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.generateNumbers()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"header"},r.a.createElement("p",null,"Bulls and Cows Game")),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title"},"Enter 4 digits from 0 to 9"),r.a.createElement(_,null),r.a.createElement(j,null),r.a.createElement(S,null))),r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"sunglasses"},"\ud83d\udd76\ufe0f"))))}}]),t}(a.Component));var G=Object(c.b)(null,function(e){return{generateNumbers:function(){e(T())}}})(B);n(31);o.a.render(r.a.createElement(c.a,{store:b},r.a.createElement(G,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.31442efd.chunk.js.map