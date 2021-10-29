$(document).ready(function () {
    $("#twd").accordion({ collapsible: true, active: 2, animate: 50, event: "click", heightStyle: "content" });

    $("#cast").sortable({ axis: "y", cursor: "grab", placeholder: "sortable-placeholder" }); //items: "li:nth-child(2n)"

    $("#innerDiv1").draggable({ containment: "parent", revert: true });

    // $("#innerDiv1").draggable("disable");

    $("article").resizable({
        animate: true,
        aspectRatio: 1.0,
        helper: "resizable-helper",
        maxHeight: 400,
        maxWidth: 400
    });

    let datepickerOptions = {
        beforeShowDay: $.datepicker.noWeekends,
        changeMonth: true,
        changeYear: true,
        firstDay: 1
    };

    $("#cal").datepicker(datepickerOptions);

    $("#circleDiv").click(function () { 
        $("#bounceCircle").toggle("bounce", {times: 10, distance: 100}, "slow");
    });

    $("#explodeDiv").click(function () {
        $("#explodeCircle").toggle("explode", {pieces: 100, easing: "easeOutBounce", duration: 5000});
    });

    $("#foldDiv").click(function () {
        $("#foldCircle").toggle("fold", {horizFirst: true, duration: 2000, size: "50%"});
    });
});
