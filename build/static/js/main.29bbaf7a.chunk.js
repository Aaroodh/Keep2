(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{35:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),u=n(32),o=n(17),i=n(28),m=n.n(i);var p=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null)," Keeper App "))};var E=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"copyright \xa9",e))},f=n(30),v=n.n(f),s=n(63);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement(s.a,{onClick:function(){e.onDelete(e.id)}},l.a.createElement(v.a,null)))},b=n(22),h=n(26),j=n(31),O=n.n(j);var k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],p=i[1];function E(e){var t=e.target,n=t.value,a=t.name;p((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(b.a)({},a,n))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{onChange:E,name:"title",placeholder:"Title",value:m.title}),l.a.createElement("textarea",{onClick:function(){c(!0)},value:m.content,onChange:E,name:"content",placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(s.a,{onClick:function(t){t.preventDefault(),e.onAdd(m),p({title:"",content:""})}}," ",l.a.createElement(O.a,null)," ")))};var g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(E,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.29bbaf7a.chunk.js.map