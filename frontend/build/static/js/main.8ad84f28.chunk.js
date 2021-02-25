(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(20),o=n.n(i),r=(n(31),n(24)),l=n(2),u=n(21),p=n(22),d=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},j=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(u.a)(this,e),this.baseUrl=n,this.headers=a}return Object(p.a)(e,[{key:"setToken",value:function(e){this.headers.authorization="Bearer ".concat(e)}},{key:"getUserData",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(d).then((function(e){return e}))}},{key:"patchUserData",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(d).then((function(e){return e}))}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(d).then((function(e){return e}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(d).then((function(e){return e}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(d).then((function(e){return e}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(d).then((function(e){return e}))}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(d).then((function(e){return e}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(d).then((function(e){return e}))}}]),e}())({baseUrl:"http://api.volorel-mesto.students.nomoreparties.space",headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),m=n.p+"static/media/edit-button.8667ac4a.svg",h=n.p+"static/media/bin1.7b8dd559.svg",b=n.p+"static/media/bin2.596a2577.svg",_=s.a.createContext();var O=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,o=s.a.useContext(_),r=t.owner===o._id,l="elements__delete-button ".concat(r?"elements__delete-button":"elements__delete-button_hidden"),u=t.likes.some((function(e){return e._id===o._id})),p="elements__like ".concat(u?"elements__like_active":"elements__like");return Object(a.jsxs)("article",{className:"elements__card",children:[Object(a.jsx)("img",{src:t.link,alt:t.name,className:"elements__image",onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"elements__group",children:[Object(a.jsx)("p",{className:"elements__title",children:t.name}),Object(a.jsxs)("div",{className:"elements__likes-container",children:[Object(a.jsx)("button",{type:"button",className:p,onClick:function(){c(t)}}),Object(a.jsx)("p",{className:"elements__likes-count",children:t.likes.length})]}),Object(a.jsxs)("button",{type:"button","aria-label":"delete",className:l,onClick:function(){i(t)},children:[Object(a.jsx)("img",{src:h,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"elements__delete-top"}),Object(a.jsx)("img",{src:b,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"elements__delete-bottom"})]})]})]})},f=n.p+"static/media/logo-white.a307e1c4.svg",x=n(8);var g=function(e){var t=e.subtitle,n=e.link,c=void 0===n?"#":n,s=e.textBtn,i=e.handleSignOut,o=e.userData;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("a",{href:c,className:"header__logo-link",children:Object(a.jsx)("img",{src:f,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(a.jsxs)("div",{className:"header__container",children:[Object(a.jsx)("p",{className:"header__login",children:o}),Object(a.jsx)("p",{children:Object(a.jsx)(x.b,{to:c,className:"header__login header__login-link",children:t})}),Object(a.jsx)("button",{onClick:i,className:"header__login header__button ",children:s})]})]})};var v=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,i=e.onCardClick,o=e.cards,r=e.onCardLike,l=e.onCardDelete,u=e.handleSignOut,p=e.userData,d=s.a.useContext(_);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{textBtn:"\u0412\u044b\u0439\u0442\u0438",userData:p,handleSignOut:u}),Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("img",{src:d.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430",className:"profile__avatar"}),Object(a.jsx)("div",{className:"profile__edit-avatar",children:Object(a.jsx)("img",{src:m,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edit-avatar-image",onClick:t})})]}),Object(a.jsxs)("div",{className:"profile__personal-info",children:[Object(a.jsxs)("div",{className:"profile__personal-adaptiv",children:[Object(a.jsx)("h1",{className:"profile__name",children:d.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:n,children:Object(a.jsx)("img",{src:m,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edit-button-image"})})]}),Object(a.jsx)("p",{className:"profile__about",children:d.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:c})]}),Object(a.jsx)("section",{className:"elements",children:o.map((function(e){return Object(a.jsx)(O,{card:e,onCardClick:i,onCardLike:r,onCardDelete:l},e._id)}))})]})]})};var N=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var k=function(e){var t=e.isOpen,n=e.card,c=e.onClose;return t?Object(a.jsx)("section",{className:"".concat(n?"popup popup_opened":"popup"," popup_zoom"),children:Object(a.jsxs)("div",{className:"popup__container popup__container_zoom",children:[Object(a.jsx)("button",{type:"button","aria-label":"close",className:"popup__close popup__close_zoom",onClick:c}),Object(a.jsx)("img",{src:n.link,alt:n.name,className:"popup__image"}),Object(a.jsx)("p",{className:"popup__title_zoom",children:n.name})]})}):null};var C=function(e){var t=e.isOpen,n=e.name,c=e.title,s=e.onClose,i=e.children,o=e.textBtn,r=e.onSubmit;return Object(a.jsx)("section",{className:"".concat(t?"popup popup_opened":"popup"," popup_").concat(n),children:Object(a.jsx)("div",{className:"popup__container",children:Object(a.jsxs)("form",{action:"#",name:"".concat(n,"-form"),className:"popup__form popup__container popup__container_".concat(n),noValidate:!0,onSubmit:r,children:[Object(a.jsx)("button",{type:"button","aria-label":"close",onClick:s,className:"popup__close popup__close_".concat(n)}),Object(a.jsx)("h2",{className:"popup__title popup__title_".concat(n),children:c}),i,Object(a.jsx)("button",{type:"submit",className:"popup__save popup__save_".concat(n),children:o})]})})})};var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,i=s.a.useContext(_),o=s.a.useState(""),r=Object(l.a)(o,2),u=r[0],p=r[1],d=s.a.useState(""),j=Object(l.a)(d,2),m=j[0],h=j[1];return s.a.useEffect((function(){p(i.name||""),h(i.about||"")}),[i]),Object(a.jsxs)(C,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",textBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:u,about:m})},children:[Object(a.jsx)("input",{type:"text",name:"name",minLength:"2",maxLength:"40",required:!0,placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_edit_name",id:"edit-name",value:u,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"edit-name-error"}),Object(a.jsx)("input",{type:"text",name:"about",minLength:"2",maxLength:"200",required:!0,placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",className:"popup__input popup__input_edit_about",id:"edit-about",value:m,onChange:function(e){h(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"edit-about-error"})]})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,i=s.a.useRef();return Object(a.jsxs)(C,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"editAvatar",textBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:i.current.value})},children:[Object(a.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,className:"popup__input popup__input_editAvatar-link",id:"editAvatar-link",ref:i}),Object(a.jsx)("span",{className:"popup__input-error",id:"editAvatar-link-error"})]})};var w=function(e){var t=e.isOpen,n=e.onClose,c=e.name,s=e.InfoTool;return Object(a.jsx)("section",{className:"".concat(t?"popup popup_opened":"popup"," popup_").concat(c),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button","aria-label":"close",onClick:n,className:"popup__close popup__close_".concat(c)}),Object(a.jsx)("img",{src:s.image,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"popup__logo"}),Object(a.jsx)("h2",{className:"popup__title popup__title_register",children:s.message})]})})};var U=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,i=s.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1],p=s.a.useState(""),d=Object(l.a)(p,2),j=d[0],m=d[1];return Object(a.jsxs)(C,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",textBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,link:j}),u(""),m("")},children:[Object(a.jsx)("input",{type:"text",name:"name",minLength:"2",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_add-title",id:"add-title",value:r,onChange:function(e){u(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"add-title-error"}),Object(a.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,className:"popup__input popup__input_add-link",id:"add-link",value:j,onChange:function(e){m(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input-error",id:"add-link-error"})]})},T=n(11),D=n(9);var L=function(e){var t=e.title,n=e.textBtn,c=e.childrenInput,s=e.childrenSubtitle,i=e.onSubmit;return Object(a.jsx)("section",{className:"welcome",children:Object(a.jsxs)("div",{className:"welcome__container",children:[Object(a.jsxs)("form",{className:"welcome__form",onSubmit:i,children:[Object(a.jsx)("h2",{className:"welcome__title",children:t}),c,Object(a.jsx)("button",{className:"welcome__button",children:n})]}),s]})})},A=n(3);var E=Object(A.h)((function(e){var t=e.onRegister,n=s.a.useState({email:"",password:""}),c=Object(l.a)(n,2),i=c[0],o=c[1],r=Object(A.g)();function u(e){var t=e.target,n=t.name,a=t.value;o(Object(D.a)(Object(D.a)({},i),{},Object(T.a)({},n,a)))}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{subtitle:"\u0412\u043e\u0439\u0442\u0438",link:"/sign-in"}),Object(a.jsx)(L,{onSubmit:function(e){e.preventDefault(),t(i).then((function(){return r.push("/sign-in")})).catch((function(e){alert(e)}))},name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",textBtn:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",childrenInput:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{className:"welcome__input",type:"email",name:"email",required:!0,placeholder:"Email",id:"email",value:i.email,onChange:u}),Object(a.jsx)("input",{className:"welcome__input",type:"password",name:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",value:i.password,onChange:u})]}),childrenSubtitle:Object(a.jsxs)("span",{className:"welcome__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(a.jsx)(x.b,{to:"/sign-in",className:"welcome__subtitle-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})}));var P=Object(A.h)((function(e){var t=e.handleLogin,n=Object(A.g)(),c=s.a.useState({email:"",password:""}),i=Object(l.a)(c,2),o=i[0],r=i[1];function u(e){var t=e.target,n=t.name,a=t.value;r(Object(D.a)(Object(D.a)({},o),{},Object(T.a)({},n,a)))}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{subtitle:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",link:"/sign-up"}),Object(a.jsx)(L,{onSubmit:function(e){e.preventDefault(),t(o).then((function(){return n.push("/")})).catch((function(e){alert(e)}))},name:"login",title:"\u0412\u043e\u0439\u0442\u0438",textBtn:"\u0412\u0445\u043e\u0434",childrenInput:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{className:"welcome__input",type:"email",name:"email",required:!0,placeholder:"Email",value:o.email,onChange:u}),Object(a.jsx)("input",{className:"welcome__input",type:"password",name:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:o.password,onChange:u})]})})]})})),I="http://api.volorel-mesto.students.nomoreparties.space",B=n(25),q=function(e){var t=e.component,n=Object(B.a)(e,["component"]);return Object(a.jsx)(A.b,{children:!0===n.loggedIn?Object(a.jsx)(t,Object(D.a)({},n)):Object(a.jsx)(A.a,{to:"/sign-in"})})},F=n.p+"static/media/login-yes.1b6082f8.svg",z=n.p+"static/media/login-no.df8eddf6.svg";var J=Object(A.h)((function(){var e=Object(A.g)(),t=s.a.useState(""),n=Object(l.a)(t,2),c=n[0],i=n[1],o=s.a.useState([]),u=Object(l.a)(o,2),p=u[0],m=u[1],h=s.a.useState(!1),b=Object(l.a)(h,2),O=b[0],f=b[1],x=s.a.useState(!1),g=Object(l.a)(x,2),C=g[0],T=g[1],D=s.a.useState(!1),L=Object(l.a)(D,2),B=L[0],J=L[1],R=s.a.useState(!1),H=Object(l.a)(R,2),M=H[0],G=H[1],V=s.a.useState(!1),K=Object(l.a)(V,2),Q=K[0],W=K[1],X=s.a.useState({name:"",link:""}),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=s.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=s.a.useState({email:""}),se=Object(l.a)(ce,2),ie=se[0],oe=se[1],re=s.a.useState({message:"",image:""}),le=Object(l.a)(re,2),ue=le[0],pe=le[1];function de(){J(!0)}function je(){f(!1),T(!1),G(!1),W(!1),J(!1),$({name:"",link:""})}return s.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&(j.setToken(e),ae(!0))}),[]),s.a.useEffect((function(){ne&&(j.setToken(localStorage.getItem("jwt")),e.push("/"),Promise.all([j.getUserData(),j.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];i(n),m(a)})).catch((function(e){alert(e)})))}),[ne,e]),Object(a.jsx)(_.Provider,{value:c,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsxs)(A.d,{children:[Object(a.jsx)(q,{exact:!0,path:"/",loggedIn:ne,handleSignOut:function(){localStorage.removeItem("jwt"),ae(!1),e.push("/sign-in")},onEditProfile:function(){f(!0)},onAddPlace:function(){T(!0)},onEditAvatar:function(){G(!0)},onCardClick:function(e){W(!0),$(e)},cards:p,onCardLike:function(e){e.likes.some((function(e){return e._id===c._id}))?j.deleteLike(e._id).then((function(t){var n=p.map((function(n){return n._id===e._id?t:n}));m(n)})).catch((function(e){alert(e)})):j.putLike(e._id).then((function(t){var n=p.map((function(n){return n._id===e._id?t:n}));m(n)})).catch((function(e){alert(e)}))},onCardDelete:function(e){j.deleteCard(e._id).then((function(){var t=p.filter((function(t){return t._id!==e._id}));m(t)})).catch((function(e){alert(e)}))},component:v,userData:ie.email}),Object(a.jsx)(A.b,{path:"/sign-up",children:Object(a.jsx)(E,{onRegister:function(e){return function(e,t){return fetch("".concat(I,"/sign-up"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(d)}(e.email,e.password).then((function(e){return e&&(de(),pe({message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",image:F})),e})).catch((function(){de(),pe({message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",image:z})}))}})}),Object(a.jsx)(A.b,{path:"/sign-in",children:Object(a.jsx)(P,{handleLogin:function(e){var t=e.email,n=e.password;return function(e,t){return fetch("".concat(I,"/sign-in"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(d)}(t,n).then((function(e){e.token&&(ae(!0),localStorage.setItem("jwt",e.token),oe({email:t}),j.setToken(e.token))})).catch((function(e){alert(e)}))},tokenCheck:function(t){var n;(n=t,fetch("".concat(I,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(n)}}).then(d)).then((function(t){if(t){var n={email:t.data.email};ae(!0),oe(n),e.push("/")}})).catch((function(e){alert(e)}))}})}),Object(a.jsx)(A.b,{children:ne?Object(a.jsx)(A.a,{to:"/"}):Object(a.jsx)(A.a,{to:"/sign-in"})})]}),Object(a.jsx)(S,{isOpen:O,onClose:je,onUpdateUser:function(e){j.patchUserData(e).then((function(e){i(e),je()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(U,{isOpen:C,onClose:je,onAddPlace:function(e){j.postNewCard(e).then((function(e){m([e.data].concat(Object(r.a)(p))),je()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(y,{isOpen:M,onClose:je,onUpdateAvatar:function(e){j.patchUserAvatar(e).then((function(e){i(e),je()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(k,{isOpen:Q,card:Z,onClose:je}),Object(a.jsx)(w,{isOpen:B,onClose:je,InfoTool:ue,name:"register"}),Object(a.jsx)(N,{})]})})})),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(J,{})})}),document.getElementById("root")),R()}},[[37,1,2]]]);
//# sourceMappingURL=main.8ad84f28.chunk.js.map