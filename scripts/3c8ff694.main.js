"use strict";var sendForm=function(){var a="zyp",b="896694c70a83d138014d65c6eb85c2a6-us12";$.ajax({url:"https://us12.api.mailchimp.com/3.0/lists/97177/members",type:"POST",dataType:"JSON",beforeSend:function(c){c.setRequestHeader("Authorization","Basic "+btoa(a+":"+b))},data:{email_address:$("#emailinput").val(),status:"subscribed",merge_fields:{FNAME:"Katy",LNAME:"Feng"}}}).done(function(){console.log("success")}).fail(function(){console.log("error")})};$(document).ready(function(){$("#unavailable").hide(),$("#available").hide(),$("#enter-zip").on("submit",function(a){a.preventDefault();var b=$("#zipcode-input").val();$("input#hiddenzip").val(b),$("#enter-zip").hide(),"02116"===b||"02452"===b||"02453"===b?$("#available").fadeIn():$("#unavailable").fadeIn()}),$("#unavailable").on("submit",function(a){a.preventDefault(),sendForm()}),$(".extradirty").tooltip(),$(".navbar-collapse a").click(function(a){$(".navbar-collapse").collapse("toggle")}),$('a[href^="#"]').on("click",function(a){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset().top},800,"swing",function(){window.location.hash=b})}),$(window).on("scroll",function(){var a=$(window).scrollTop(),b=$("#where_are_we").offset().top-50,c=$("#download").offset().top-50;a>=b&&c>=a?($("nav").addClass("nav-white"),$("#nav-logo").hide(),$("#nav-logo-blue").show()):($("nav").removeClass("nav-white"),$("#nav-logo-blue").hide(),$("#nav-logo").show())});var a;a=$(window).width()>767?3:1;new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:a,coverflow:{rotate:-30,stretch:0,depth:100,modifier:1,slideShadows:!1}})});