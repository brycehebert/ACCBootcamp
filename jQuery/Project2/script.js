$(document).ready(function () {
    // $("img").click(function () {
    //     alert("You have clicked the image.");
    // });

    // $("li").click(function () {
    //     alert("You have clicked a list item.")
    // });

    // $("li").click(function () {
    //     $(this).fadeOut();
    //  });

    $("li").click(function () {
        alert($(this).html());
    });

    $("span").click(function (e) {
        e.stopPropagation();
        $(this).remove();
    });

    $("div").click(function () {
        $(this).remove();
    });

    $("#keyDemo").keypress(function (e) {
        // alert("You have pressed a key in the input box.");
        // console.log(e);
        if (e.which === 13) {
            alert($(this).val());
        }
    });

    $("ul").append("<li>Green</li>");

    $("ul").prepend("<li>Grey</li>");

    $("img").click(function () {
        $(this).fadeOut(5000, function () {
            alert("The image is now gone.");
        });
    });
});
