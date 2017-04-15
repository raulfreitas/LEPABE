// Drop On
$('.dropdown-toggle').dropdown()

// WOW js
new WOW().init();


// Acessa Chat

$(document).ready(function () {

    $("#chat").hide();
    $("#chat-open").show();
    $("#chat-open-menu").show();

    $('#chat-open').click(function () {
        $("#chat").slideToggle("slide");
    });

	$('#chat-open-menu').click(function () {
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

// Mensagem enviada

$("#enviando-mensagem").click(function(){
	$(".alert-success").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});
});

$("#atualiza").click(function(){
	$(".alert-success").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});
});

$("#denunciar-perfil").click(function(){
	$(".alert-success").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});
});
$("#comenta-foto").click(function(){
	$(".alert-success").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});
});

// Block notifica

$(function(){
    $('#notifica-bloqueado').on('show.bs.modal', function(){
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function(){
            myModal.modal('hide');
        }, 2000));
    });
});
$(function(){
    $('#curti-foto').on('show.bs.modal', function(){
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function(){
            myModal.modal('hide');
        }, 2000));
    });
});

// Notifica Block Configuração

$('#block-button').on('click', function() {
  var checked = $('#form-block').find('option:selected').length;
  if (!checked)
    $(".alerta").html("<div class='alert alert-danger' style='margin-top: 20px; display: block;' role='alert'>Nenhum Membro na lista</div>").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});

  else
    $(".alerta").html("<div class='alert alert-success' style='margin-top: 20px; display: block;' role='alert'>Membro desbloqueado com sucesso!</div>").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});
});

$('button').on('click', function() {
  var checked = $('#form-block-chat').find('option:selected').length;
  if (!checked)
    $(".alerta-chat").html("<div class='alert alert-danger' style='margin-top: 20px; display: block;' role='alert'>Nenhum Membro na lista</div>").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});

  else
    $(".alerta-chat").html("<div class='alert alert-success' style='margin-top: 20px; display: block;' role='alert'>Membro desbloqueado com sucesso!</div>").fadeIn("slow").slideUp(1000, function(){
    	$(".alert-success").slideUp(4000);
	});
});


//$('#notifica-button').on('click', function() {
  //var checked = $('#form-notifica').find(':checked').length;
  //if (!checked)
   // $(".alerta-notifica").html("<div class='alert alert-success' style='margin-top: 20px; display: block;' role='alert'>Alterações Realizadas</div>").fadeIn("slow").slideUp(1000, function(){
   // 	$(".alert-success").slideUp(4000);
	//});
  //else
   // $(".alerta-notifica").html("<div class='alert alert-success' style='margin-top: 20px; display: block;' role='alert'>Alterações Realizadas</div>").fadeIn("slow").slideUp(1000, function(){
   // 	$(".alert-success").slideUp(4000);
//	});
//});
$('#notificacoes-1').on('click', function() {
	$( "#alerta-1" ).html( $( "input[name='notificacoes']:checked" ).val() + " <b>Alterações Realizadas</b>" ).fadeIn("slow").slideUp(1000);
});
$('#notificacoes-2').on('click', function() {
	$( "#alerta-2" ).html( $( "input[name='dicas-eventos']:checked" ).val() + " <b>Alterações Realizadas</b>" ).fadeIn("slow").slideUp(1000);
});

$('#botao-chat').on('click', function() {
	$( "#alerta" ).html( $( "input[name='ativa-chat']:checked" ).val() + " Chat" ).fadeIn("slow").slideUp(1000);
});


$("#curtiu-perfil").click(function(){
	$(this).css("color","#07de07");
	$("#nao-curtiu-perfil").css("color","#383838");
});
$("#nao-curtiu-perfil").click(function(){
	$(this).css("color","red");
	$("#curtiu-perfil").css("color","#383838");
});




