(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{22:function(e,s,c){},30:function(e,s,c){"use strict";c.r(s);var a=c(1),i=c.n(a),t=c(15),r=c.n(t),n=(c(22),c(17)),l=c(8),d=c(0),j=function(){var e=Object(a.useState)(""),s=Object(n.a)(e,2),c=s[0],i=s[1];return Object(a.useEffect)((function(){var e=window.location.href;console.log(e),e.endsWith("/")?i("About"):e.endsWith("/projects")?i("Projects"):e.endsWith("/resume")&&i("Resume")}),[c]),Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{className:"navbar__active",children:c}),Object(d.jsxs)("div",{className:"navbar__items",children:["About"!==c&&Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("div",{className:"navbar__item",onClick:function(){return i("About")},children:"About"})}),"Resume"!==c?Object(d.jsx)(l.b,{to:"/resume",children:Object(d.jsx)("div",{className:"navbar__item",onClick:function(){return i("Resume")},children:"Resume"})}):null,"Projects"!==c&&Object(d.jsx)(l.b,{to:"/projects",children:Object(d.jsx)("div",{className:"navbar__item",onClick:function(){return i("Projects")},children:"Projects"})})]})]})},b=c.p+"static/media/linkedin.7defd339.svg",o=c.p+"static/media/instagram.c59b798d.svg",m=c.p+"static/media/github.0ade81e0.svg",u=c.p+"static/media/pin.ecfd58de.svg",h=c.p+"static/media/tie.9889c907.svg",_=c.p+"static/media/Myphoto.8b0fcc41.png",O=c.p+"static/media/Resume.d1e259db.pdf",x=function(){return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("img",{src:_,alt:"avatar",className:"sidebar__avatar"}),Object(d.jsxs)("div",{className:"sidebar__name",children:["Gurung ",Object(d.jsx)("span",{children:"Purna"})]}),Object(d.jsx)("div",{className:"sidebar__item sidebar__title",children:"Fullstack Web Developer"}),Object(d.jsx)("a",{href:O,download:"Resume.pdf",children:Object(d.jsxs)("div",{className:"sidebar__item sidebar__resume",children:[Object(d.jsx)("img",{src:h,alt:"resume",className:"sidebar__icon"}),"Download Resume"]})}),Object(d.jsxs)("figure",{className:"sidebar__social-icons my-2",children:[Object(d.jsx)("a",{href:" ",children:Object(d.jsx)("img",{src:b,alt:"linkedin",className:"sidebar__icon mr-3"})}),Object(d.jsx)("a",{href:" ",children:Object(d.jsx)("img",{src:o,alt:"instagram",className:"sidebar__icon"})})]}),Object(d.jsxs)("div",{className:"sidebar__contact",children:[Object(d.jsx)("div",{className:"sidebar__item sidebar__github",children:Object(d.jsxs)("a",{href:" ",children:[Object(d.jsx)("img",{src:m,alt:"github",className:"sidebar__icon mr-3"}),"github"]})}),Object(d.jsxs)("div",{className:"sidebar__location",children:[Object(d.jsx)("img",{src:u,alt:"location",className:"sidebar__icon mr-3"}),"New York, Queens"]}),Object(d.jsx)("div",{className:"sidebar__item",children:"purnagurung903@gmial.com"}),Object(d.jsx)("div",{className:"sidebar__item",children:"917-744-3403"})]}),Object(d.jsx)("div",{className:"sidebar__item sidebar__email",onClick:function(){window.open("mailto:purnagurung903@gmail.com")},children:"email me"})]})},v=c(2),p=c.p+"static/media/algo.2f18a3f1.svg",g=c.p+"static/media/computer.1ad27275.svg",N=c.p+"static/media/repair.2c4f4278.svg",f=function(e){var s=e.skill,c=s.icon,a=s.title,i=s.about;return Object(d.jsx)("div",{className:"col-lg-6",children:Object(d.jsxs)("div",{className:"skill-card",children:[Object(d.jsx)("img",{src:c,alt:"icon",className:"skill-card__icon"}),Object(d.jsxs)("div",{className:"skill-card-body",children:[Object(d.jsx)("h6",{className:"skill-card__title",children:a}),Object(d.jsx)("p",{className:"skill_card__content",children:i})]})]})})},k=[{icon:g,title:"Frontend Development ",about:"I can build a beautiful and scalable web page using HTML, CSS, React.js"},{icon:N,title:"Backend Development ",about:"Handle database, server, api using MYSQL, MongoDB, Express.js, node.js"},{icon:p,title:"Competitive Coder",about:"I am a problem solver"}],w=function(){return Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h6",{className:"about__intro",children:"I describe myself as a quick learner and loves problem solving who's really persistent."}),Object(d.jsxs)("div",{className:"container about__container",children:[Object(d.jsx)("h6",{className:"about__heading",children:"What I offer"}),Object(d.jsx)("div",{className:"row",children:k.map((function(e){return Object(d.jsx)(f,{skill:e})}))})]})]})},R=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"this is Resume"})})},C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"this is Projects"})})};var y=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)("div",{className:"app",children:Object(d.jsx)("div",{className:"container app__container",children:Object(d.jsxs)("div",{className:"row app__row",children:[Object(d.jsx)("div",{className:"col-lg-3",children:Object(d.jsx)(x,{})}),Object(d.jsxs)("div",{className:"col-lg-9 app__main-content",children:[Object(d.jsx)(j,{}),Object(d.jsxs)(v.d,{children:[Object(d.jsx)(v.b,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(v.b,{path:"/resume",children:Object(d.jsx)(R,{})}),Object(d.jsx)(v.b,{path:"/projects",component:C}),Object(d.jsx)(v.b,{children:Object(d.jsx)(v.a,{to:"/"})})]})]})]})})})})};c(29);r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.50518b14.chunk.js.map