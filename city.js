const jsonData = require("./data.json");
$("#btn").css("font-weight", "700");

function boldButton(num) {
    $("#btn" + num)[0].style.fontWeight = "700";
}
$('button').on('click', function () {
    $('button').removeClass('active');
    $(this).addClass('active');
})
