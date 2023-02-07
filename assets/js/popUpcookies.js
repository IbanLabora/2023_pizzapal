//Insertar Banner Cookies en la Web
//Se recomienda llamar a las librerias de Boostrap
//crear un div con el id "cookiesWeb" en HTML
//Para darle estilo, crear una clase "estiloCSSCookies" en el .css
var idcookiesWeb = "cookiesWeb"
var webConfiguraciónCookies ="Cookies.html"
var nombreCookie="'pizzapala.es'"

var cookiesAnalytics = "cookiesAnalytics_"+nombreCookie;
var cookiesOtras = "cookiesOtras_"+nombreCookie;

//con el estilo  pondremos el banner de las cookies donde queremos
var estiloCSS = "'z-index:20; text-align:center;position:fixed; bottom:0; left:0; background-color:#F9E53C;'"
//con el estilo fondoAvisoCookies pondremos un fondo oscuro transparente que impide que se pueda seleccionar por debajo del z-index, si por encima
var fondoAvisoCookies = "'display:block; background:rgba(0,0,0,.20); position:fixed; z-index:19; width:100vw; height:100vh; top:0; left:0'"


//Meter los estilos para los botones
var divBotonEstilos = " font-family: ChinUpButtercupCuteCaps; font-size: 1.9em; padding: 5px"

var divBotonConf = "  "+divBotonEstilos;
var divBotonAceptar = ""+divBotonEstilos;


function insertarBannerCookie() { 
  var textoCookie = "<div style=" + estiloCSS + " class='estiloCSSCookies' >"
                          +"<h4 style='"+divBotonEstilos+"'>Estamos usando cookies</h4>"
                          + "<p >Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. Obtener más información.<p>"
                              + "<button id='botonCookies' style='"+divBotonEstilos+"'class='btn-primary mt-3 accept-cookies'>"
                                + "<a href='"+webConfiguraciónCookies+"'>Editar Configuración</a>"
                              + "</button>"
                              + "<button id='botonCookies' style='"+divBotonEstilos+"' class='btn-primary mt-3'>"
                                + "<a onclick='hide()'>Aceptar</a>"
                              + "</button>"
                      + "</div>"
                      +"<div style="+fondoAvisoCookies+"></div>";
                      
  document.getElementById("cookiesWeb").innerHTML = textoCookie;
}
//insertarBannerCookie();

function readCookie(nombreDeLaCookie) { 
  let cadena = document.cookie;
  var index = cadena.indexOf(nombreDeLaCookie);
  if (index >= 0) {
    console.log("la palabra existe dentro de la cadena y se encuentra en la posición " + index);
  } else {
    console.log("la palabra no existe dentro de la cadena - "+cadena.length);
  }
  return index;
}

function setCookie(cname, cvalue, exdays) { 
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function hide() {
  setCookie("username", nombreCookie, 30) ;
  setCookie("username", cookiesAnalytics, 30) ;
  setCookie("username", cookiesOtras, 30) ;
  document.getElementById(idcookiesWeb).style.visibility = "hidden";
  document.getElementById(idcookiesWeb).innerHTML = "";
}

function ocultarAutomaticamente() {
  var cookie = readCookie(nombreCookie);
  if (cookie >= 0) {
    document.getElementById(idcookiesWeb).style.visibility = "hidden";
    document.getElementById(idcookiesWeb).innerHTML = "";
  }
}
//ocultarAutomaticamente();
////


function formularioCookies(){
  //borrar cookies 
  
  
  var funcionales = document.getElementById("Funcionales");
   var analitica = document.getElementById("Analítica");
   var cookiesNofuncionales = document.getElementById("CookiesNofuncionales")


  
   if(funcionales.checked){
    setCookie("username", nombreCookie, 30); 
    console.log(nombreCookie);
  }
  if(analitica.checked){
    setCookie("username", cookiesAnalytics, 30) ;
    console.log(cookiesAnalytics);
  }
  if(cookiesNofuncionales.checked){
    setCookie("username", cookiesOtras, 30) ;
    console.log(cookiesOtras);
  }
  document.getElementById("mensajeCookies").innerHTML = "La configuración se ha guardado correctamente"

}

function formularioCargarCookies(){
  
  var funcionales =  readCookie(nombreCookie)
  var analitica  = readCookie(cookiesAnalytics)
  var cookiesNofuncionales=  readCookie(cookiesOtras)
   
  if(funcionales>=0){
      document.getElementById("Funcionales").checked = true;
      console.log(nombreCookie);
  }

  if(analitica.checked>=0){
    document.getElementById("Analítica").checked = true;
    console.log(cookiesAnalytics);
  }

  if(cookiesNofuncionales.checked>=0){
    document.getElementById("CookiesNofuncionales").checked = true;
    console.log(cookiesOtras);
  }

  document.getElementById("mensajeCookies").innerHTML = "La configuración se ha guardado correctamente";

}