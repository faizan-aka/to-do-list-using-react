(this["webpackJsonpto-do-list-using-react"]=this["webpackJsonpto-do-list-using-react"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),s=n.n(r),a=n(7),j=n(4),d=n(0);var o=function(){return Object(d.jsxs)("footer",{class:"footer",children:["Made with ",Object(d.jsx)("span",{children:"\u2764\ufe0f"})," by Faizan."]})};var u=function(e){var t=i.a.useState(""),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("input",{onChange:function(e){var t=e.target.value;r(t)},type:"text",value:c}),Object(d.jsx)("button",{onClick:function(){e.addItem(c),r("")},children:Object(d.jsx)("span",{children:"Add"})})]})};var l=function(e){return Object(d.jsx)("div",{onClick:function(){e.onBeingClicked(e.id)},children:Object(d.jsx)("li",{children:e.text})})};var b=function(){var e=i.a.useState([]),t=Object(j.a)(e,2),n=t[0],c=t[1];function r(e){c(n.filter((function(t,n){return n!==e})))}return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"heading",children:Object(d.jsx)("h1",{children:"To-Do List"})}),Object(d.jsx)("div",{children:Object(d.jsx)(u,{addItem:function(e){c([].concat(Object(a.a)(n),[e]))}})}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:n.map((function(e,t){return Object(d.jsx)(l,{id:t,text:e,onBeingClicked:r},t)}))})}),Object(d.jsx)(o,{})]})};s.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.45c2f645.chunk.js.map