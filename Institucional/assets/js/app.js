// Mostrar Campos
$(document).ready(function(){
	$('#cadastrar').click(function(){
		$('#hide').show('slow');
		$("#hide label" ).css("color","red");
		$("#cadastrar").hide("fast");
		$("#continuar").show("fast");
	});
});


// POPULA BRASIL

$(document).ready(function(){
    $("#pais").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="Brasil"){
                $("#cidade_brasil").removeClass("hide");
                $("#estado_brasil").removeClass("hide");
                $("#pais_modifica").addClass("col-lg-5");
                $("#cidade_mundo").addClass("hide");
            }
            else if($(this).attr("value")!="Brasil"){
	           $("#cidade_brasil").addClass("hide");
	           $("#estado_brasil").addClass("hide");
	           $("#pais_modifica").removeClass("col-lg-5");
	           $("#pais_modifica").addClass("col-lg-12");
	           $("#cidade_mundo").removeClass("hide");

            }
        });
    })
});
 $(document).ready(function () {

			$.getJSON('estados_cidades.json', function (data) {
				var items = [];
				var options = '<option value="">escolha um estado</option>';
				$.each(data, function (key, val) {
					options += '<option value="' + val.nome + '">' + val.nome + '</option>';
				});
				$("#estados_brasil").html(options);

				$("#estados_brasil").change(function () {

					var options_cidades = '';
					var str = "";

					$("#estados_brasil option:selected").each(function () {
						str += $(this).text();
					});

					$.each(data, function (key, val) {
						if(val.nome == str) {
							$.each(val.cidades, function (key_city, val_city) {
								options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
							});
						}
					});
					$("#cidades_brasil").html(options_cidades);

				}).change();

			});

		});






