(this["webpackJsonpbook-market"]=this["webpackJsonpbook-market"]||[]).push([[0],{19:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t),n.d(t,"itemsInCart",(function(){return k}));var i=n(14),a=n(1),c=n(5),o=n.n(c),s=(n(19),n(2)),r=n(6),l=n(0);function u(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),i=n[0],c=n[1];return Object(l.jsxs)("header",{children:[Object(l.jsxs)("form",{onSubmit:function(t){i&&e.doSearch(i),t.preventDefault()},className:"search",children:[Object(l.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Search for books"}),Object(l.jsx)("button",{className:"search-btn",type:"submit",children:Object(l.jsx)("img",{src:"search.svg",alt:"Search"})})]}),Object(l.jsxs)("button",{className:"shopping-cart",onClick:e.openModal,children:[Object(l.jsx)("img",{src:"cart.svg",alt:"Cart"}),Object(l.jsx)("div",{className:"items-counter",children:d(e.items)})]})]})}function d(e){var t,n=0,i=Object(r.a)(e);try{for(i.s();!(t=i.n()).done;){n+=t.value.quantity}}catch(a){i.e(a)}finally{i.f()}return n}function m(e){return Object(l.jsxs)("div",{className:"rating-container",children:[Object(l.jsx)("div",{style:{width:20*e.rating+"%",height:"28px",backgroundColor:"#FFC107",position:"absolute"}}),Object(l.jsx)("img",{src:"stars.svg",alt:"rating",style:{position:"absolute",top:-1,left:-1}})]})}function j(e){var t;return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("a",{href:e.googleBooksLink,className:"img-container",target:"_blank",children:e.imgUrl?Object(l.jsx)("img",{src:e.imgUrl,className:"book-img",alt:"Book cover"}):"(No cover image)"}),Object(l.jsx)("a",{href:e.googleBooksLink,className:"book-name",target:"_blank",children:e.bookName}),Object(l.jsx)("p",{className:"book-author",children:b(e.bookAuthors)}),Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{rating:e.rating}),Object(l.jsx)("span",{className:"rating-caption",children:(null===(t=e.rating)||void 0===t?void 0:t.toFixed(1))||"No rating"})]}),Object(l.jsxs)("p",{className:"price-container",children:[Object(l.jsx)("span",{className:"price",children:(+e.price).toFixed(2)}),Object(l.jsx)("span",{className:"currency",children:" "+e.currency})]}),Object(l.jsx)("button",{onClick:e.addToCart,className:"add-to-cart",children:Object(l.jsx)("img",{src:"cart.svg",alt:"Cart",style:{pointerEvents:"none"}})})]})}function b(e){return e?e.length<3?e.join(" & "):e[0]+" and others":"No author"}function h(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)(!1),r=Object(s.a)(o,2),u=r[0],d=r[1],m=Object(a.useState)([]),b=Object(s.a)(m,2),h=b[0],g=b[1];return Object(a.useEffect)((function(){d(!1),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e.query,"&maxResults=40&filter=paid-ebooks")).then((function(e){return e.json()})).then((function(e){d(!0),g(e.items)}),(function(e){d(!0),c(e)}))}),[e.query]),i?Object(l.jsxs)("div",{className:"info-message",children:["Error: ",i.message,". Please, change your query."]}):u?h?h.map((function(t){var n,i,a,c,o;return Object(l.jsx)(j,{bookName:t.volumeInfo.title,bookAuthors:t.volumeInfo.authors,imgUrl:null===(n=t.volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail,rating:t.volumeInfo.averageRating,price:(null===(i=t.saleInfo.retailPrice)||void 0===i?void 0:i.amount)||(null===(a=t.saleInfo.listPrice)||void 0===a?void 0:a.amount)||0,currency:(null===(c=t.saleInfo.retailPrice)||void 0===c?void 0:c.currencyCode)||(null===(o=t.saleInfo.listPrice)||void 0===o?void 0:o.currencyCode)||"Unavailable",googleBooksLink:t.volumeInfo.canonicalVolumeLink,addToCart:function(){var n,i,a,c,o;return e.addToCart({id:t.id,bookName:t.volumeInfo.title,bookAuthors:t.volumeInfo.authors,imgUrl:null===(n=t.volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail,price:(null===(i=t.saleInfo.retailPrice)||void 0===i?void 0:i.amount)||(null===(a=t.saleInfo.listPrice)||void 0===a?void 0:a.amount)||0,currency:(null===(c=t.saleInfo.retailPrice)||void 0===c?void 0:c.currencyCode)||(null===(o=t.saleInfo.listPrice)||void 0===o?void 0:o.currencyCode)||"Unavailable",googleBooksLink:t.volumeInfo.canonicalVolumeLink,quantity:1})}},t.id)})):Object(l.jsx)("div",{className:"info-message",children:"No results found. Please, change your query"}):Object(l.jsx)("div",{className:"info-message",children:"Loading..."})}function g(e){return e.items.length?e.items.map((function(t){return Object(l.jsxs)("div",{className:"item-in-cart",children:[Object(l.jsx)("a",{href:t.googleBooksLink,className:"img-container",target:"_blank",children:t.imgUrl?Object(l.jsx)("img",{src:t.imgUrl,className:"book-img",alt:"Book cover"}):"(No cover image)"}),Object(l.jsxs)("div",{className:"cart-item-info",children:[Object(l.jsx)("a",{href:t.googleBooksLink,className:"book-name",target:"_blank",children:t.bookName}),Object(l.jsx)("p",{className:"book-author",children:b(t.bookAuthors)}),Object(l.jsx)("div",{}),Object(l.jsxs)("p",{className:"price-container",children:[Object(l.jsx)("span",{className:"price",children:(+t.price).toFixed(2)}),Object(l.jsx)("span",{className:"currency",children:" "+t.currency})]}),Object(l.jsxs)("div",{className:"quantity-counter",children:[Object(l.jsx)("input",{onChange:function(n){return e.changeQuantity(t.id,+n.target.value)},value:t.quantity,type:"number",min:"1",max:50,className:"quantity-field"}),Object(l.jsx)("button",{style:1===t.quantity?{backgroundColor:"#BEBEBE",cursor:"default"}:{},onClick:function(){t.quantity>1&&e.changeQuantity(t.id,t.quantity-1)},className:"quantity-button minus",children:"-"}),Object(l.jsx)("button",{style:t.quantity>=50?{backgroundColor:"#BEBEBE",cursor:"default"}:{},onClick:function(){return e.changeQuantity(t.id,t.quantity+1)},className:"quantity-button plus",children:"+"}),Object(l.jsx)("button",{className:"remove-button",onClick:function(){return e.removeItem(t.id)},children:Object(l.jsx)("img",{src:"remove.svg",alt:"Delete"})})]})]})]},t.id)})):Object(l.jsx)("div",{className:"info-message",style:{top:"25vh"},children:"Your cart is empty"})}function v(e){return e.isOpened?Object(l.jsxs)("div",{className:"cart-window",children:[Object(l.jsx)("div",{className:"cart-outside",onClick:e.closeModal}),Object(l.jsxs)("div",{className:"cart-modal",style:e.items.length>2?{marginBottom:"300px"}:{top:"50%",transform:"translate(-50%, -50%)"},children:[Object(l.jsx)("button",{onClick:e.closeModal,className:"close-modal",children:Object(l.jsx)("img",{src:"close.svg",alt:"close",width:"20",height:"20",style:{pointerEvents:"none"}})}),Object(l.jsx)("h2",{children:"Your cart"}),Object(l.jsx)("div",{className:"items-in-cart-list",children:Object(l.jsx)(g,{items:e.items,changeQuantity:function(t,n){return e.changeQuantity(t,n)},removeItem:function(t){return e.removeItem(t)}})}),Object(l.jsx)(f,{items:e.items})]})]}):null}function f(e){var t;return e.items.length?Object(l.jsxs)("div",{className:"total-price",children:[Object(l.jsxs)("b",{children:["Total: ",O(e.items)]})," ",null===(t=e.items[0])||void 0===t?void 0:t.currency]}):null}function O(e){var t,n=0,i=Object(r.a)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;n+=a.price*a.quantity}}catch(c){i.e(c)}finally{i.f()}return n.toFixed(2)}function y(e){var t=Object(a.useState)("programming"),n=Object(s.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)([]),r=Object(s.a)(o,2)[1],d=Object(a.useState)(!1),m=Object(s.a)(d,2),j=m[0],b=m[1];return k.dispatch({type:"LOAD_FROM_STORAGE"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{doSearch:function(e){return c(e)},items:k.getState(),openModal:function(){document.body.style.overflowY="hidden",b(!0)}}),Object(l.jsx)("div",{className:"books-list",children:Object(l.jsx)(h,{query:i,addToCart:function(e){k.dispatch({type:"ADD_ITEM",newItem:e}),r(k.getState())}})}),Object(l.jsx)(v,{isOpened:j,closeModal:function(){document.body.style.overflowY="auto",b(!1)},items:k.getState(),changeQuantity:function(e,t){k.dispatch({type:"ADD_QUANTITY",id:e,newQuantity:t}),r(k.getState())},removeItem:function(e){k.dispatch({type:"REMOVE_ITEM",id:e}),r(k.getState())}})]})}var x=n(7),p=n(13),k=Object(x.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":for(var n=0;n<e.length;n++)if(e[n].id===t.newItem.id){if(e[n].quantity>=50)return;var a=e.slice();return a[n].quantity++,window.localStorage.setItem("items",JSON.stringify(a)),a}var c=[].concat(Object(i.a)(e),[t.newItem]);return window.localStorage.setItem("items",JSON.stringify(c)),c;case"ADD_QUANTITY":for(var o=0;o<e.length;o++)if(0===t.newQuantity&&(t.newQuantity=1),t.newQuantity>50&&(t.newQuantity=50),e[o].id===t.id){var s=e.slice();return s[o].quantity=t.newQuantity,window.localStorage.setItem("items",JSON.stringify(s)),s}return;case"REMOVE_ITEM":if(window.confirm("Do you want to remove this item from cart?"))for(var r=0;r<e.length;r++)if(e[r].id===t.id){var l=e.slice();return l.splice(r,1),window.localStorage.setItem("items",JSON.stringify(l)),l}return;case"LOAD_FROM_STORAGE":return JSON.parse(window.localStorage.getItem("items"))||e;default:return e}}));o.a.render(Object(l.jsx)(p.a,{store:k,children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.68b7a926.chunk.js.map