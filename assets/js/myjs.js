///////////////////////////Pie de pagina//////////////////
	const d = new Date();
	var piepagina = "<p class='derechosReservados'>Made with <i class='fa fa-heart'></i> by <a href='http://bootstrapthemes.co'>Bootstrap Themes</a>" + d.getFullYear()+" All Rights Reserved</p>"
	document.getElementById("piepagina").innerHTML = piepagina ;
 ///////////////////////////Pie de pagina//////////////////
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