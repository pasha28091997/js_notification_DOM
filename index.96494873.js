var e=function(e,t,n,i,a){var o=document.createElement("div");o.classList.add("notification",a),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px");var s=document.createElement("h2");s.classList.add("title"),s.innerText=n,o.appendChild(s);var c=document.createElement("p");c.innerText=i,o.appendChild(c),document.body.appendChild(o),setTimeout(function(){o.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.96494873.js.map
