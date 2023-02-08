//desplazamiento de la pagina con los diferentes id
//barra menu de todas las paginas

//INICIO pie de pagina con 
	//fecha del año y pie de pagina
	//FIN pie de pagina con el logo y nombre

//formulario de cita rehabilitacion y orientación
	function validacionDeCampos(){
		document.getElementById("errorCampo").innerHTML="";
		
		
		var idAcomprobar = "Nombre";
		if(!esVacio(idAcomprobar) || !campoNoCaracteresEspeciales(idAcomprobar) || !campoNumero(idAcomprobar)) {
			document.getElementById("errorCampo").innerHTML="No puedes dejar el campo "+idAcomprobar+" vacio ";
			console.log(idAcomprobar);
			return false;
		}
		idAcomprobar = "Tel";
		if(!esVacio(idAcomprobar) || !campoNoCaracteresEspeciales(idAcomprobar) || !campoNumero(idAcomprobar)) {
			document.getElementById("errorCampo").innerHTML="No puedes dejar el campo "+idAcomprobar+" vacio ";
			return false;
		}
		 idAcomprobar = "Email";
					if(!validarMAIL(idAcomprobar)){
					document.getElementById("errorCampo").innerHTML="No puedes dejar el campo "+idAcomprobar+" vacio ";
						return false;
					}
		idAcomprobar = "Comentario";
			if(!esVacio(idAcomprobar) || !campoNoCaracteresEspeciales(idAcomprobar) || !campoNumero(idAcomprobar)) {
			document.getElementById("errorCampo").innerHTML="No puedes dejar el campo "+idAcomprobar+" vacio ";
			console.log(idAcomprobar);
			return false;
		}
		
	}
	
	
function validarTelefono(idTelefono){
	valor = document.getElementById(idTelefono).value;
	if( !(/^\d{9}$/.test(valor)) ) {
		return false;
	}
	return true;
}

	function esVacio(id){
		var valor= document.getElementById(id).value;
			/*Si el valor obtenido es Null, su longitud es igual a 0 o posee caracteres
				extraÃ±os, dara error*/
			if(valor==null || valor.lenght == 0 || /^\s+$/.test(valor)){
				console.log(id)
				document.getElementById(id).style.bordercolor ="red";
				return false;
			}
				return true;
			}
			function campoNumero(id){
				valor = document.getElementById(id).value;
				/*isNaN devolvera un true si el contendio de valor son letras.
				Si accede a el if quiere decir que no es un numero*/
				if( !isNaN(valor)) {
					marcarYreiniciar(id);
					return false;
				}
				return true;
			}
			function campoNoCaracteresEspeciales(id){
				valor = document.getElementById(id).value;
				const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
				if(  formato.test(valor)) {
					alert("no puedes introducir estos caracteres en  " + id );
					return false;
				}
				return true;
			}	
			function validarMAIL(idEmail){
				valor = document.getElementById(idEmail).value;
				if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))){
					//alert("correo mal introducido");
					marcarYreiniciar(idMail);	
					return false;
				}
				return true;
			}
										
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
					/*si fuera necesario redirigir despues de enviar el formulariowindow.location.assign(webOficial);*/
				  });
				}
			  });
			  return false;
		 
		  
		});
	});

