//desplazamiento de la pagina con los diferentes id
//barra menu de todas las paginas

//INICIO pie de pagina con 
	//fecha del año y pie de pagina
	//FIN pie de pagina con el logo y nombre

//formulario de cita rehabilitacion y orientación

/************************Expresiones Regulares*************/
	function expresionRegDNI(dni){
		var expresiondni = /^\d{8}[a-zA-Z]$/;
		var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S','Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		if((expresiondni.test(dni))&& (dni.charAt(8)==letras[(dni.substring(0, 8))%23])){
			return true;
		}
		return false;		
	}
	function expresionRegTel(tel){
		var expresiontelefono = /^\d{9}$/;
		if(expresiontelefono.test(tel)){
			return true;
		}
		return false;		
	}
	function expresionRegEmail(email){
		var expresionmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		if(expresionmail.test(email)){
			return true;
		}
		return false;		
	}
/************************HTML Contacto.html*************/	
	$(function() {
		
		$("#botonEnviar").click(function() {
			  // validate and process form here
			  
			  $('.error').hide();
			  var name = $("input#Nombre").val();
				if (name == "") {
				$("input#Nombre").focus();
				return false;
			  }
			  /*
			  var apellido = $("input#apellido").val();
				if (apellido == "") {
				$("label#apellido_error").show();
				$("input#apellido").focus();
				return false;
			  }*/
			  //Expresiones regulares 
			  
			  var phone = $("input#Tel").val();
				if (!(expresionRegTel(phone))) {
				$("input#Tel").focus();
				return false;
			  }
				var email = $("input#Email").val();
				if (!(expresionRegEmail(email))){
				$("input#Email").focus();
				return false;
			  }
			  var comentarios = document.getElementById('Comentario').value;
			  //Fin expresiones regulares
		  
		   var dataString = 'Nombre='+name+ '&Email=' +email+ '&Tel=' +phone+ '&Comentario='+comentarios;
			  //alert (dataString);return false;
			  $.ajax({
				type: "POST",
				url: "assets/php/EnviarPizza.php",
				data: dataString,
				success: function() {
				  $('#formid').html("<div id='message'></div>");
				  $('#message').html("<h3 class='text-center'>Formulario enviado</h3>")
				  .append("<p class='text-center'>Nos pondremos en contacto con usted lo antes posible</p>")
				  .hide()
				  .fadeIn(3000, function() {
					window.location.assign(webOficial);
				  });
				}
			  });
			  return false;
		 
		  
		});
	});

/*************************HTML Cita.html*******************************
	
	$(function() {
		
		$("#botoncita").click(function() {
			  // validate and process form here
			  
			  $('.error').hide();
			  var name = $("input#name").val();
				if (name == "") {
				$("label#name_error").show();
				$("input#name").focus();
				return false;
			  }
			  //Expresiones regulares 
			  
			  var dni = $("input#dni").val();
			  if (!expresionRegDNI(dni)){
				$("label#dni").show();
				$("input#dni").focus();
				return false;
			  }
			  
			  var phone = $("input#phone").val();
			  var expresiontelefono = /^\d{9}$/;
				if (!(expresiontelefono.test(phone))) {
				$("label#phone_error").show();
				$("input#phone").focus();
				return false;
			  }
				var email = $("input#email").val();
				var expresionmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
				if (!(expresionmail.test(email))){
				$("label#email_error").show();
				$("input#email").focus();
				return false;
			  }
			  //Fin expresiones regulares
			  var cita = $("select#tipocita").children("option:selected").val();//recoge el valor del hijo de option que es select
			  console.log(cita);
				if (cita == "Otra") {
					$("label#cita_error").show();
					$("input#tipocita").focus();
					return false;
				  }
		   var comentarios = document.getElementById('Comentarios').value;
		   var dataString = 'Nombre='+name+ '&Email=' +email+ '&Telefono=' +phone+ '&dni=' +dni+ '&tipodecita=' +cita+ '&Comentarios='+comentarios;
			  //alert (dataString);return false;
			  $.ajax({
				type: "POST",
				url: "assets/php/enviarCita.php",
				data: dataString,
				success: function() {
				  $('#formcita').html("<div id='message'></div>");
				  $('#message').html("<h3 class='text-center'>Formulario enviado</h3>")
				  .append("<p class='text-center'>Nos pondremos en contacto con usted para acordar la fecha y la hora de su cita</p>")
				  .hide()
				  .fadeIn(3000, function() {
					window.location.assign(webOficial);
				  });
				}
			  });
			  return false;
		 
		  
		});
	});
	

///////////////////////////////////*/