// Drop On
$('.dropdown-toggle').dropdown()

// WOW js
new WOW().init();

// Acessa Chat

$(document).ready(function () {

    $("#chat").hide();
    $("#chat-open").show();

    $('#chat-open').click(function () {
        $("#chat").slideToggle("slide");
    });

    // perfil chat 


    $("#perfil-chat-content").hide();
    $("#perfil-chat").show();


    $('#perfil-chat').click(function () {
        $("#perfil-chat-content").slideToggle("slide");
    });


});

//Options Chat

$("[data-toggle=popover]").popover();

$(function () {
    $("#options-chat").popover({
        html: true,
        content: function () {
            return $("#options-chat-content").html();
        },
        title: function () {
            return $("#options-chat-title").html();
        }
    });

});


//ToolTip 

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})