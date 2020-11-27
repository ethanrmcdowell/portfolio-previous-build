$("#portfolio-link").on("mouseenter", function(){
    $("#portfolio-text").text("PORTFOLIO");
    $("#portfolio-text").css("margin-left", "13%");
    $("#portfolio-text").css("opacity", "50%");
});

$("#portfolio-link").on("mouseleave", function(){
    $("#portfolio-text").text("ETHAN");
    $("#portfolio-text").css("margin-left", "0");
    $("#portfolio-text").css("opacity", "100%");
});

$("#contact-link").on("mouseenter", function(){
    $("#contact-text").text("CONTACT");
    $("#contact-text").css("margin-left", "13%");
    $("#contact-text").css("opacity", "50%");
});

$("#contact-link").on("mouseleave", function(){
    $("#contact-text").text("R.");
    $("#contact-text").css("margin-left", "0");
    $("#contact-text").css("opacity", "100%");
});

$("#resume-link").on("mouseenter", function(){
    $("#resume-text").text("RESUME");
    $("#resume-text").css("margin-left", "13%");
    $("#resume-text").css("opacity", "50%");
});

$("#resume-link").on("mouseleave", function(){
    $("#resume-text").text("MCDOWELL");
    $("#resume-text").css("margin-left", "0");
    $("#resume-text").css("opacity", "100%");
});

$("#click-copy").click(function(){
    alert("HELLO!");
});