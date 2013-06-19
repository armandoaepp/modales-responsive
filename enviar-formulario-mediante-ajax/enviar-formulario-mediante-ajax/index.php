<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />

<meta content="jquery, forumlario dinamico, timersys, tutorial, ajax" name="keywords"/>

<title>Timersys </title>
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" src="jquery.form.js"></script>
 <script type="text/javascript"> 
        // esperamos que el DOM cargue
        $(document).ready(function() { 
            // definimos las opciones del plugin AJAX FORM
            var opciones= {
                               beforeSubmit: mostrarLoader, //funcion que se ejecuta antes de enviar el form
                               success: mostrarRespuesta, //funcion que se ejecuta una vez enviado el formulario
							   
            };
             //asignamos el plugin ajaxForm al formulario myForm y le pasamos las opciones
            $('#myForm').ajaxForm(opciones) ; 
            
             //lugar donde defino las funciones que utilizo dentro de "opciones"
             function mostrarLoader(){
                      $("#loader_gif").fadeIn("slow");
             };
             function mostrarRespuesta (responseText){
				           alert("Mensaje enviado: "+responseText);
                          $("#loader_gif").fadeOut("slow");
                          $("#ajax_loader").append("<br>Mensaje: "+responseText);
             };
   
        }); 
    </script> 
</head>
<body>

<div id="stylized" class="myform" style="margin:20px auto;width:200px;">
<form id="myForm" action="contacto.php" method="post" style="height:200px;"> 
    <label>Nombre:</label> <input type="text" name="name" /> 
    <label>Mensaje:</label> <textarea name="mensaje"></textarea> 
    <input type="submit" value="Enviar" /> <div id="ajax_loader"><img id="loader_gif" src="loader.gif" style=" display:none;"/></div>
</form>
</div>
</body>
</html>