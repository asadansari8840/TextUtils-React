(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=a(1),s=function(e){return e.alert&&l.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)},m=function(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{onClick:function(){document.title="TextUtils - Home"},className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{onClick:function(){document.title="TextUtils - About"},className:"nav-link",href:"#"},e.aboutText))),l.a.createElement("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"fle xSwitchCheckDefault"},e.textMode," DarkMode")))))},i=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],s=function(e){o(e.target.value)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{color:"dark"===e.mode?"white":"black"},className:"container my-4"},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{style:{backgroundColor:"dark"===e.mode?"#252525":"white",color:"dark"===e.mode?"white":"black"},value:r,className:"form-control",id:"forText",onChange:s,rows:"8"})),l.a.createElement("button",{onClick:function(){var t=r.toUpperCase();o(t,s),e.showAlert("Converted to UpperCase ! ","success")},className:"btn mx-2 btn-primary"},"Convert your text to UpperCase"),l.a.createElement("button",{onClick:function(){var t=r.toLowerCase();o(t,s),e.showAlert("Converted to lowerCase ! ","success")},className:"btn mx-2 btn-secondary"},"Convert your text to lowerCase"),l.a.createElement("button",{onClick:function(){o(""),e.showAlert("Text cleared successfully !","danger")},className:"btn btn-danger"},"Clear Text")),l.a.createElement("div",{style:{color:"dark"===e.mode?"white":"black"},className:"container my-3"},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,r.split(" ").length-1," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," minutes is the average time to read this paragraph."),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",{style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#252525":"white",border:"2px groove #252525",borderRadius:"20px",minHeight:"50px",overflow:"wrap",textOverflow:"revert-layer",marginTop:"10px",boxShadow:"0 0 15px yellow",padding:"10px"}},r.length>0?r:"Write something in the textbox to show preview here !")))};var d=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("light"),d=Object(c.a)(o,2),u=d[0],b=d[1],h=Object(n.useState)("Enable"),p=Object(c.a)(h,2),g=p[0],v=p[1],E=function(e,t){r({msg:e,type:t}),setTimeout(function(){r(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",aboutText:"About TextUtils",mode:u,textMode:g,toggleMode:function(){"light"===u?(v("Disable"),b("dark"),document.body.style.backgroundColor="#042743",document.body.style.transition="0.5s",E("Dark mode has been enabled","success")):(v("Enable"),b("light"),document.body.style.transition="0.5s",document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))}}),l.a.createElement(s,{alert:a}),l.a.createElement("div",{className:"container my-3"}),l.a.createElement(i,{showAlert:E,heading:"Enter the text to analyse below",mode:u}))};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)))},4:function(e,t,a){e.exports=a(13)}},[[4,2,1]]]);
//# sourceMappingURL=main.7996d9be.chunk.js.map