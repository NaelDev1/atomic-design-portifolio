var btnContact = document.querySelector(".jl-btn-contact");

window.addEventListener("load", function () {
  var pagePreloader = this.document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");
});

btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
