"use strict";var prev=document.getElementById("prev"),next=document.getElementById("next"),images=document.querySelectorAll(".about__img"),texts=document.querySelectorAll(".about__text"),cont=0,setClass=(prev&&prev.addEventListener("click",function(){return setClass("prev")}),next&&next.addEventListener("click",function(){return setClass("next")}),function(e){images.forEach(function(e){return e.classList.remove("show")}),texts.forEach(function(e){return e.classList.remove("show")}),setCont(e),images[cont].classList.add("show"),texts[cont].classList.add("show")}),setCont=function(e){"next"==e?cont==images.length-1?cont=0:cont++:0==cont?cont=images.length-1:cont--},topbar=(document.getElementById("gallery")&&new Macy({container:"#gallery",truOrder:!1,waitForImages:!1,useOwnImageLoader:!1,debug:!0,mobileFirst:!0,columns:1,margin:{y:15,x:15},breakAt:{1200:5,940:4,520:1}}),document.getElementById("topbar")),loginModal=document.getElementById("login-modal"),registerModal=document.getElementById("register-modal"),loginForm=document.getElementById("login-form"),registerForm=document.getElementById("register-form"),toggleMenu=(topbar&&topbar.addEventListener("click",function(e){null!=e.target.parentElement.dataset.type&&("login"==e.target.parentElement.dataset.type?loginModal.classList.add("lightbox--show"):"register"==e.target.parentElement.dataset.type&&registerModal.classList.add("lightbox--show"))}),loginModal&&loginModal.addEventListener("click",function(e){e.target.classList.contains("lightbox")&&loginModal.classList.remove("lightbox--show")}),loginForm&&loginForm.addEventListener("submit",function(e){e.preventDefault(),setTimeout(function(){e.target.button.blur()},200)}),registerModal&&registerModal.addEventListener("click",function(e){e.target.classList.contains("lightbox")&&registerModal.classList.remove("lightbox--show")}),registerForm&&registerForm.addEventListener("submit",function(e){e.preventDefault(),setTimeout(function(){e.target.button.blur()},200)}),document.getElementById("toggle-menu")),sidebar=document.getElementById("sidebar");toggleMenu&&toggleMenu.addEventListener("click",function(e){"toggle-menu"!=e.target.id&&"toggle-menu"!=e.target.parentElement.id||(sidebar.classList.toggle("show"),toggleMenu.classList.toggle("show"))});