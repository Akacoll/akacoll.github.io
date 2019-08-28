(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,n){e.exports=n(51)},41:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),c=n.n(l),i=(n(41),n(9)),o=n(10),u=function(e){return r.a.createElement("span",{role:"img","aria-label":e.label},e.children)},s=n(13),m=n(14),p=n(16),E=n(15),h=n(17),f=n(31),d=n.n(f),v=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{variant:this.props.variant,onClick:this.props.onClick,size:this.props.size,active:this.props.isActive},this.props.text)}}]),t}(a.Component),k=n(55),b=[{id:1,title:"First",content:"Hello world!"},{id:2,title:"Second",content:"Hello again!"}],y=function(e){var t=e.match;console.log(t.params.id);var n=b.find(function(e){return e.id==t.params.id});return console.log("Post #"+n.id),r.a.createElement(k.a,{bg:"dark",text:"white",style:{width:"18rem"},className:"col-md-6 col-md-offset-3"},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,n.title),r.a.createElement(k.a.Text,null,n.content)))},x=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Home page! ",r.a.createElement(u,{label:"Japanese Gate"},"\u26e9")),b.map(function(e){return r.a.createElement(i.b,{to:t.path+"/post/"+e.id,key:e.id},r.a.createElement(v,{variant:"outline-dark",text:e.title}))}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:t.path+"/post/:id",component:y})))},C=n(20),N=n(52),j=n(53),O=n(54),g=function(e){var t=e.increment,n=e.onClickFunction;return r.a.createElement(v,{variant:"outline-primary",onClick:function(){n(t)},text:"+"+t})},q=function(e){var t=e.multiply,n=e.onClickFunction;return r.a.createElement(v,{variant:"outline-primary",onClick:function(){n(t)},text:"*"+t})},w=function(e){var t=e.text,n=e.onClickFunction;return r.a.createElement(v,{size:"lg",variant:"success",onClick:function(){n()},text:t})},T=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],l=t[1],c=function(e){l(n+e)},i=function(e){l(n*e)};return r.a.createElement("div",{className:"Counter"},r.a.createElement(N.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("h3",null,"Counter (simple Hook)"))),r.a.createElement(j.a,null,[1,10,100,1e3,5e3].map(function(e,t){return r.a.createElement(O.a,{key:t},r.a.createElement(g,{increment:e,onClickFunction:c,key:t}))}),[2,5,7].map(function(e,t){return r.a.createElement(O.a,{key:t},r.a.createElement(q,{multiply:e,onClickFunction:i,key:t}))})),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(w,{onClickFunction:function(){return l(0)},text:n})))))};n(50);function S(e){return r.a.createElement("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.color}},e.value)}var F=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(S,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},color:this.props.coloredSquares.includes(e)?"green":""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,[0,1,2].map(function(t){return r.a.createElement("div",{className:"board-row",key:t},[0,1,2].map(function(n){return e.renderSquare(3*t+n)}))}))}}]),t}(a.Component);function I(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(C.a)(t[n],3),r=a[0],l=a[1],c=a[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return{who:e[r],positions:t[n]}}return null}var H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();I(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({history:this.state.history.slice(0,e+1),stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],l=I(a.squares),c=n.map(function(e,n){var a=n?"Go to move #"+n:"Go to game start",l=n===t.state.stepNumber?"info":"outline-info";return r.a.createElement("li",{key:n},r.a.createElement(v,{onClick:function(){return t.jumpTo(n)},text:a,variant:l,size:"sm"}))});return l?(e="Winner: "+l.who,console.log(l.positions)):e="Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement(N.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("h3",null,"Tic Tac Toe"))),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"game d-flex justify-content-center"},r.a.createElement("div",{className:"game-board"},r.a.createElement(F,{coloredSquares:l?l.positions:[],squares:a.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,c))))))}}]),t}(a.Component),z=function(){return r.a.createElement("main",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/home",component:x}),r.a.createElement(o.a,{path:"/counter",component:T}),r.a.createElement(o.a,{path:"/tictactoe",component:H})))},A=n(35),G=n.n(A),J=function(e){return r.a.createElement("header",{className:"Header"},r.a.createElement(G.a,null,r.a.createElement(N.a,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement("h1",null,"My App :)"))),r.a.createElement(j.a,null,e.children.map(function(e,t){return r.a.createElement(O.a,{key:t},e)})))))},B=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null,r.a.createElement(i.b,{to:"/home"},r.a.createElement(v,{variant:"outline-dark",text:"Home"})),r.a.createElement(i.b,{to:"/counter"},r.a.createElement(v,{variant:"outline-dark",text:"Counter"})),r.a.createElement(i.b,{to:"/tictactoe"},r.a.createElement(v,{variant:"outline-dark",text:"Tic Tac Toe"}))),r.a.createElement(z,null)))};c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e9144dbb.chunk.js.map