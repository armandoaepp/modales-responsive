// idFRM=id Formulario ,funcionCargar = funcion que cargar cuando se envie el formulario ,metodo = metodo que hace registra o Actuliza
function Enviar_Formulario(idFRM,funcionCargar,metodo){
        // verificar si la varable Metodo esta inicializada sino Ponerle en metodo Registrar
        metodo || ( metodo = 'Registrar' );       
        funcionCargar || (funcionCargar='');
     $(idFRM).submit( function(event) {    
        var metodoAccion="&accion="+metodo;
        var $form = $(this);
       
        $.ajax({
            url:  $form.attr('data-action'),// $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize()+metodoAccion,
            success: function(datos) {
               //alert(datos);
                if(datos=="ok"){
                    alert("La Accion se Realizo Correctamente");
                    // limpiar el formulario y Cerrar el Modal
                    CloseModal(idFRM);
                    // nombre de la funcion que va a cargar
                    funcionCargar;
                }else{
                    alert(datos);
                    // return false;// para que no recarge toda la pagina
                }
            }
        });
        return false;// para que no recarge toda la pagina
        // event.preventDefault();
    });
}
function CloseModal(frmModal){
    // limpiar el formulario Completo
    $(frmModal)[0].reset();
    // para cerrar el Modal despues de enviar 
    $("#jdialog").modal('hide') ; 
    
}
