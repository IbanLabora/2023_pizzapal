///////////////////////////Pie de pagina//////////////////
	var url = location.href;
	const d = new Date();

	var piepagina = "Politicas y cookies<p class='derechosReservados'>Made with <i class='fa fa-heart'></i> by <a href='http://bootstrapthemes.co'>Bootstrap Themes</a>" + d.getFullYear()+" All Rights Reserved</p>"
		
	var webPoliticas= url.indexOf("politicas.html");
	if(webPoliticas<0){
		piepagina ="<a href='politicas.html' style='color:yellow;'>Politicas y cookies</a><p class='derechosReservados'>Made with <i class='fa fa-heart'></i> by <a href='http://bootstrapthemes.co'>Bootstrap Themes</a>" + d.getFullYear()+" All Rights Reserved</p>";
	}
	
	
	document.getElementById("piepagina").innerHTML = piepagina ;
///////////////////////////Pie de pagina//////////////////
/////////////////////////////informacion, localizacion y formulario///////////////////////////////
var parteAbajo ="<div class='col-md-4'><div class='single_widget wow fadeIn' data-wow-duration='2s'><h3 class='letrafooter'>Informacion</h3><div class='single_widget_info'><p><div class='date_day'>JUEVES A DOMINGO</div><div>Desde 19:30 Hasta 00:00</div><div class='phone_email'>Tel: 00 000 000</div><div class='footer_socail_icon Insta'><a href='https://www.instagram.com/pizza.pala/' target='_blank'><i class='fa fa-instagram' aria-hidden='true' style='color:#F9E53C'></i></a></div></p></div></div></div><div class='col-md-4'><div class='single_widget wow fadeIn' data-wow-duration='4s'><h3 class='letrafooter'>Pizzapala se encuentra</h3><div class='single_widget_info'><div>Plaça Carbó N1 - Algemesí - Valencia</div><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d546.6621582067178!2d-0.43684885696660664!3d39.188628118888246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61b1cab763a113%3A0x7a23963939793a68!2sPIZZA%20PALA!5e0!3m2!1ses!2ses!4v1675338867927!5m2!1ses!2ses' width='325' height='270' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div></div></div><div class='col-md-4'><div class='single_widget wow fadeIn' data-wow-duration='5s'><h3 class='letrafooter'>Contáctanos</h3><div class='single_widget_form text-left'><form action='' id='formid' method='post'><div class='form-group'><input id='Nombre' type='text' class='form-control' name='nombre' placeholder='Nombre'></div><div class='form-group'><input id='Tel' type='text' class='form-control' name='tel' placeholder='Telefono'></div><div class='form-group'><input id='Email' type='email' class='form-control' name='email' placeholder='Email'></div><div class='form-group' id='mensaje'><textarea id='Comentario' class='form-control' name='comentario' rows='3' placeholder='Mensaje'></textarea></div><input id='botonEnviar' type='submit' value='Enviar' class='btn btn-primary fuenteChin_boton'></form></div></div></div>"

document.getElementById("parteAbajo").innerHTML = parteAbajo ;
 /////////////////////////////informacion, localizacion y formulario///////////////////////////////
///////////////////////////funcionamiento del menu//////////////////
	function openMenu(evt, nombreMenu) {
		var i, x, tablinks;
		x = document.getElementsByClassName("menu");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			console.log(x)
		}

		document.getElementById(nombreMenu).style.display = "block";

	}
  ///////////////////////////funcionamiento del menu//////////////////

 ////////////////////menu///////////
 var Menu="<div class='container-fluid'><div class='navbar-header volverInicioLogo'><button type='button' class='navbar-toggle collapsed' data-toggle='collapse'data-target='#bs-example-navbar-collapse-1' aria-expanded='false'><span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button><a class='navbar-brand our_logo ' href='#inicio'><img class='logopala' src='assets/images/logoAzul.png' alt='pizza pala'></a></div><div class='collapse navbar-collapse ' id='bs-example-navbar-collapse-1'><ul class='nav navbar-nav navbar-right fuenteChin'><li><a href='#abouts'>Conócenos</a></li><li><a href='#features'>Destacados</a></li><li><a href='#portfolio'>Menu</a></li><li><a href='#ourPakeg'>Entrantes y Postres</a></li></ul></div><!-- /.navbar-collapse --></div>"
console.log(webPoliticas)
 if(webPoliticas>0){
	Menu ="<div class='container-fluid'><div class='navbar-header volverInicioLogo'><button type='button' class='navbar-toggle collapsed' data-toggle='collapse'data-target='#bs-example-navbar-collapse-1' aria-expanded='false'><span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button><a class='navbar-brand our_logo ' href='#inicio'><img class='logopala' src='assets/images/logoAzul.png' alt='pizza pala'></a></div><div class='collapse navbar-collapse ' id='bs-example-navbar-collapse-1'><ul class='nav navbar-nav navbar-right fuenteChin'><li><a href='index.html#abouts'>Conócenos</a></li><li><a href='index.html#features'>Destacados</a></li><li><a href='index.html#portfolio'>Menu</a></li><li><a href='index.html#ourPakeg'>Entrantes y Postres</a></li></ul></div><!-- /.navbar-collapse --></div>"
 }
 
 document.getElementById("MenuArriba").innerHTML = Menu ;




