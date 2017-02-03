// Mostrar Campos
$(document).ready(function(){
	$('#cadastrar').click(function(){
		$('#hide').show('slow');
		$("#hide label" ).css("color","red");
		$("#cadastrar").hide("fast");
		$("#continuar").show("fast");
	});
});