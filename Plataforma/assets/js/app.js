// Drop On
$('.dropdown-toggle').dropdown()

// WOW js
new WOW().init();

// Validator
$('#atualiza-cartao-form').validator();
$('#atualiza-login-form').validator();



$('#atualiza-login-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
     $("#alerta-login").show().html("Preencha todos os dados");
  } else {
  	 alert("Dados Modificados");
  }
});


$('#atualiza-cartao-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
     $("#alerta-cartao").show().html("Preencha todos os dados");
  } else {
  	 alert("Dados Modificados");
  }
});

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

$("#atualiza-cartao").click(function(){
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






 	//this function can remove a array element.
			Array.remove = function(array, from, to) {
  				var rest = array.slice((to || from) + 1 || array.length);
  				array.length = from < 0 ? array.length + from : from;
  				return array.push.apply(array, rest);
			};

			//this variable represents the total number of popups can be displayed according to the viewport width
			var total_popups = 0;

			//arrays of popups ids
			var popups = [];

			//this is used to close a popup
			function close_popup(id)
			{
				for(var iii = 0; iii < popups.length; iii++)
				{
					if(id == popups[iii])
					{
						Array.remove(popups, iii);
						document.getElementById(id).style.display = "none";
						calculate_popups();
						return;
					}
				}
			}

			//displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
			function display_popups()
			{
				var right = 220;

				var iii = 0;
				for(iii; iii < total_popups; iii++)
				{
					if(popups[iii] != undefined)
					{
						var element = document.getElementById(popups[iii]);
						element.style.right = right + "px";
						right = right + 320;
						element.style.display = "block";
					}
				}

				for(var jjj = iii; jjj < popups.length; jjj++)
				{
					var element = document.getElementById(popups[jjj]);
					element.style.display = "none";
				}
			}

			//creates markup for a new popup. Adds the id to popups array.
			function register_popup(id, name)
			{

				for(var iii = 0; iii < popups.length; iii++)
				{
					//already registered. Bring it to front.
					if(id == popups[iii])
					{
						Array.remove(popups, iii);

						popups.unshift(id);

						calculate_popups();


						return;
					}
				}

				var element = '<div class="popup-box" id="'+ id +'">';
				element = element + '<div class="popup-head">';
				element = element + '<div class="popup-head-left">'+ name +'</div>';
				element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
				element = element + '<div style="clear: both"></div></div><div class="panel-body"><div class="messageMe"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" alt=""/><span>Lorem ipsum dolor sit amet, consectetur adipiscing</span><div class="clearFix"></div></div><div class="messageHer"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" alt=""/><span>Lorem ipsum dolor sit amet, consectetur adipiscing</span><div class="clearFix"></div></div><div class="panel-footer"><textarea name="textMessage" cols="0" rows="0"></textarea><button type="button" class="btn btn-envia-box">Enviar</button></div></div></div>';

				$("body").append(element);
				popups.unshift(id);

				calculate_popups();

			}

			//calculate the total number of popups suitable and then populate the toatal_popups variable.
			function calculate_popups()
			{
				var width = window.innerWidth;
				if(width < 540)
				{
					total_popups = 0;
				}
				else
				{
					width = width - 200;
					//320 is width of a single popup box
					total_popups = parseInt(width/320);
				}

				display_popups();

			}

			//recalculate when window is loaded and also when window is resized.
			window.addEventListener("resize", calculate_popups);
			window.addEventListener("load", calculate_popups);