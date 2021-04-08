$(document).ready(function() {
    //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
        function() {
            //i used the parent ul to show submenu
            $(this).children('ul').slideDown('fast');
        },
        //when the cursor away 
        function() {
            $('ul', this).slideUp('fast');
        });
    //this feature only show on 600px device width
    $(".hamburger-menu").click(function() {
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("fast");
    });
});
/** credit:@rafonzoo 
http://rafonzo.blogspot.co.id/ **/


// 
$(document).ready(function() {
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("main-menu");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});