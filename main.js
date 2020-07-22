$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect
     console.log("Hello!");
     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('nav').addClass('black');
           }

           else {
                 $('nav').removeClass('black');
           }

     })

                function calculateTip(){
         var serviceQuality = document.getElementById("serviceQuality").value;
         var billAmount = document.getElementById("billAmount").value;



         if(billAmount === "" || serviceQuality == 0){
             window.alert("Please add some values!");
             return;//this would exit the function
         }

         //if(numPeople === "" || numPeople<=1){
           //  numPeople = 1;
             //document.getElementById("each").style.display = "none";
         //}else{
           //  document.getElementById("each").style.display = "block";
         //}
         var tipAmount = billAmount * serviceQuality;
         tipAmount = tipAmount.toFixed(2);

         document.getElementById("tip").innerHTML = tipAmount;

         document.getElementById("totalTip").style.display = "block";
     }

     document.getElementById("totalTip").style.display = "none";

     document.getElementById("btnCalculate").onclick = function(){
         //code which has to be performedwhen the button is pressed
         calculateTip();
     }
$(function(){
     $(".team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        /*responsive: {
            0:{
                items:1,
                autoplayHoverPause: false
            },
            480:{
                items:2,
            },
            768:{
                items:3,
            },
            
        }*/
    });
});
     
