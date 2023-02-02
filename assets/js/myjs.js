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
 /////////////////////////////informacion y localizacion///////////////////////////////
 var parteAbajo =""
 /////////////////////////////informacion y localizacion///////////////////////////////
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

  