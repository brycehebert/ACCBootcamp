$(document).ready(function () {
    //alert(`The content of my h1 tag is: ${$("h1").html()}`);
    $("h1").html("This is some new content.");

    $("#canine").html("Lion");
    $(".feline").eq(1).html("Leopard");

    $("#imageSrc").html($("img").attr("src"));

    // $("img").attr("src", "https://i.imgur.com/YVmUMw7.gif");
    // $("#imageSrc").html($("img").attr("src"));

    //$("input").attr("type", "color")
    $("#colorPick").attr("type", "color");

    $("input[type='text']").on("keyup", function () {
        $("#inputSpan").html($(this).val());
    });

    $("#temp").change(function () {
        console.log($(this).val());
    });

    $("li").addClass("box");

    $("img").addClass("imageBox");

    $("li").first().addClass("imageBox");

    $("li").eq(2).removeClass("box");
});
