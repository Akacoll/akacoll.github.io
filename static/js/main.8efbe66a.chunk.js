(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(63)},50:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),i=(a(50),a(15)),o=a(14),u=function(e){return r.a.createElement("span",{role:"img","aria-label":e.label},e.children)},s=a(16),m=a(17),p=a(19),E=a(18),h=a(20),f=a(39),d=a.n(f),b=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{variant:this.props.variant,onClick:this.props.onClick,size:this.props.size,active:this.props.isActive},this.props.text)}}]),t}(n.Component),v=a(68),y=[{id:1,title:"First",content:"Hello world!"},{id:2,title:"Second",content:"Hello again!"}],k=function(e){var t=e.match;console.log(t.params.id);var a=y.find(function(e){return e.id==t.params.id});return console.log("Post #"+a.id),r.a.createElement(v.a,{bg:"dark",text:"white",style:{width:"18rem"},className:"col-md-6 col-md-offset-3"},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,a.title),r.a.createElement(v.a.Text,null,a.content)))},O=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Home page! ",r.a.createElement(u,{label:"Japanese Gate"},"\u26e9")),y.map(function(e){return r.a.createElement(o.a,{to:t.path+"/post/"+e.id,key:e.id},r.a.createElement(b,{variant:"outline-dark",text:e.title}))}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:t.path+"/post/:id",component:k})))},j=a(27),x=a(13),C=function(e){return{type:"CLICK_UPDATE_VALUE",newValue:e}},g=a(64),w=a(65),N=a(66),S=a(67),T=a(69),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:""},a.inputChange=function(e){a.setState({inputValue:e.target.value})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.clickButton,a=e.newValue,n=this.state.inputValue;return r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("h3",null,"Redux Test"))),r.a.createElement(w.a,null,r.a.createElement(N.a,{md:9},r.a.createElement(S.a,{className:"mb-3",onChange:this.inputChange,value:n},r.a.createElement(T.a,{placeholder:"Text","aria-label":"Text","aria-describedby":"basic-input"}))),r.a.createElement(N.a,{md:3},r.a.createElement(b,{variant:"primary",text:"Send!",onClick:function(){return t(n)}}))),r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("h3",null,a))))}}]),t}(n.Component),q=Object(j.b)(function(e){return{newValue:e.clickState.newValue}},function(e){return Object(x.a)({clickButton:C},e)})(P),V=a(28),A=function(e){var t=e.increment,a=e.onClickFunction;return r.a.createElement(b,{variant:"outline-primary",onClick:function(){a(t)},text:"+"+t})},I=function(e){var t=e.multiply,a=e.onClickFunction;return r.a.createElement(b,{variant:"outline-primary",onClick:function(){a(t)},text:"*"+t})},F=function(e){var t=e.text,a=e.onClickFunction;return r.a.createElement(b,{size:"lg",variant:"success",onClick:function(){a()},text:t})},D=function(){var e=Object(n.useState)(0),t=Object(V.a)(e,2),a=t[0],l=t[1],c=function(e){l(a+e)},i=function(e){l(a*e)};return r.a.createElement("div",{className:"Counter"},r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("h3",null,"Counter (simple Hook)"))),r.a.createElement(w.a,null,[1,10,100,1e3,5e3].map(function(e,t){return r.a.createElement(N.a,{key:t},r.a.createElement(A,{increment:e,onClickFunction:c,key:t}))}),[2,5,7].map(function(e,t){return r.a.createElement(N.a,{key:t},r.a.createElement(I,{multiply:e,onClickFunction:i,key:t}))})),r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(F,{onClickFunction:function(){return l(0)},text:a})))))};a(62);function H(e){return r.a.createElement("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.color}},e.value)}var z=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(H,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},color:this.props.coloredSquares.includes(e)?"green":""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,[0,1,2].map(function(t){return r.a.createElement("div",{className:"board-row",key:t},[0,1,2].map(function(a){return e.renderSquare(3*t+a)}))}))}}]),t}(n.Component);function B(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(V.a)(t[a],3),r=n[0],l=n[1],c=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return{who:e[r],positions:t[a]}}return null}var L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();B(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({history:this.state.history.slice(0,e+1),stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],l=B(n.squares),c=a.map(function(e,a){var n=a?"Go to move #"+a:"Go to game start",l=a===t.state.stepNumber?"info":"outline-info";return r.a.createElement("li",{key:a},r.a.createElement(b,{onClick:function(){return t.jumpTo(a)},text:n,variant:l,size:"sm"}))});return l?(e="Winner: "+l.who,console.log(l.positions)):e="Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("h3",null,"Tic Tac Toe"))),r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"game d-flex justify-content-center"},r.a.createElement("div",{className:"game-board"},r.a.createElement(z,{coloredSquares:l?l.positions:[],squares:n.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,c))))))}}]),t}(n.Component),U=function(){return r.a.createElement("h4",null,"Page not found! ",r.a.createElement(u,{label:"Sad face"},"\ud83d\ude14"))},_=function(){return r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:O}),r.a.createElement(i.a,{path:"/redux",component:q}),r.a.createElement(i.a,{path:"/counter",component:D}),r.a.createElement(i.a,{path:"/tictactoe",component:L}),r.a.createElement(i.a,{component:U})))},G=a(6),J=Object(G.a)(),K=a(43),R=a.n(K),X=function(e){return r.a.createElement("header",{className:"Header"},r.a.createElement(R.a,null,r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("h1",null,"My App ",r.a.createElement(u,{label:"Party Face"},"\ud83e\udd73")))),r.a.createElement(w.a,null,e.children.map(function(e,t){return r.a.createElement(N.a,{key:t},e)})))))},M=function(){return r.a.createElement(i.b,{basename:"",history:J},r.a.createElement("div",{className:"App"},r.a.createElement(X,null,r.a.createElement(o.a,{to:"/"},r.a.createElement(b,{variant:"outline-dark",text:"Home"})),r.a.createElement(o.a,{to:"/redux"},r.a.createElement(b,{variant:"outline-dark",text:"Redux"})),r.a.createElement(o.a,{to:"/counter"},r.a.createElement(b,{variant:"outline-dark",text:"Counter"})),r.a.createElement(o.a,{to:"/tictactoe"},r.a.createElement(b,{variant:"outline-dark",text:"Tic Tac Toe"}))),r.a.createElement(_,null)))},W=a(44);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(W.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Z={newValue:"Change the input and click the button!"},$=Object(x.b)({clickState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_UPDATE_VALUE":return Y({},e,{newValue:t.newValue});default:return e}}}),ee=Object(x.c)($);c.a.render(r.a.createElement(j.a,{store:ee},r.a.createElement(M,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8efbe66a.chunk.js.map