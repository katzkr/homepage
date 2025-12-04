$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $("body").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        // $(".apple").addClass("reveal");
        // $(".apple").css("display", "block");
        $(".apple").show();
        $(".reveal-btn").hide();
    }
);

$( ".draggable" ).draggable({
     snap: true,
     containment: ".container",
     scroll: false,
     stack: ".draggable"
    }
);