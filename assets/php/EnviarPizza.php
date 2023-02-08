 <?php	

$destinatario = "ibanvallespont@gmail.com";//"pepito@desarrolloweb.com"; 
$asunto = $_POST['Nombre'].": Formulario Contacto Web"; 
$imagen = 'https://ibanvallespont.esotracaja.com/pizzapala/assets/images/logoAmarillo.png'
$cuerpo = '<!doctype html>

<head>
    <meta charset="utf-8">
    <title>Contacto</title>       
</head>

<body style="background-color: #00a885; text-align:center;">
		<div style="background-color: #00a885; margin:7px;padding: 5px;">
        <img src="'.$imagen.'" style="width:100px;float:top;">
			<section id="action" style="margin:0px auto; width:50%;border:1px solid white;border-radius:20px;">
                    <div class="">
                            <div class="text-uppercase">
                                <div class="action_item text-center">
                                    <h2 style="color:white ;">Formulario de Contacto</h2>
                                </div>
                                
                                    <div class="container">
                                        <div class="row">
                                            <p style="color:white ;" class="col-md-4">Nombre<br>
                                               <span style=" background-color: white;                 
                                               margin:7px ;
                                               padding: 5px;
                                               color: #00a885;
                                               border-radius:10px;">'.$_POST['Nombre'].'</span>
                                            </p>
                                        </div>
                                        <div class="row">
                                            <p style="color:white ;" class="col-md-4">Telefono<br>
                                                <span style=" background-color: white;                 
                                               margin:7px ;
                                               padding: 5px;
                                               color: #00a885;
                                               border-radius:10px;">'.$_POST['Tel'].'</span>
                                            </p>
                                            <p style="color:white ;" class="col-md-8">Correo<br>
                                                <span style=" background-color: white;                 
                                               margin:7px ;
                                               padding: 5px;
                                               color: #00a885;
                                               border-radius:10px;">'.$_POST['Email'].'</span>
                                            </p>
                                        </div>
                                        <p style="color:white ;">Mensaje</p>
                                        <div style=" background-color: white; width:90%;margin:0 auto; border-radius:10px;">
                                            <p>
                                                <span style="                 
                                                margin:7px ;
                                                padding: 5px;
                                                color: #00a885;
                                              ">'.$_POST['Comentario'].'</span>
                                            </p>	
                                        <div>
                                    </div>									
                            </div>
                    </div>
        </section>
    </div>

    
  </body>
</html>'; 

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

//dirección del remitente 
//$headers .= "From: Miguel Angel Alvarez <p style="color:white ;"epito@desarrolloweb.com>\r\n"; 

//dirección de respuesta, si queremos que sea distinta que la del remitente 
$headers .= "Reply-To: ".$_POST['Email']."\r\n"; 

//ruta del mensaje desde origen a destino 
//$headers .= "Return-path: holahola@desarrolloweb.com\r\n"; 

//direcciones que recibián copia 
//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

//direcciones que recibirán copia oculta 
//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

mail($destinatario,$asunto,$cuerpo,$headers) 
?>
