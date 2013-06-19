jQuery(function($) {
   // para open modal 
    $(".jmodal").on('click',function(e){
        e.preventDefault();
       
        var $link   = $(this);
        var $target = $link.attr('href');
        var $titulo = $link.attr('data-titulo');
        var $cancel = $link.attr('btn-cancel'); // true or false
        var $submit = $link.attr('btn-submit'); // true or false

         // headerof modal 
        var $header  = '<div class="modal-header"> <button type="button" class="close" data-dismiss="modal">x</button>';
             $header += '<h3>'+ $titulo +'</h3>';
             $header += '</div>';

        // footer of modal
        var $btn_cancel='',$btn_submit='';
        if($cancel) { $btn_cancel = ' <button data-dismiss="modal" aria-hidden="true">Cancelar</button> ';} ; 
        if($submit) { $btn_submit = ' <button type="submit">Registrar</button> ';} ;

        var $footer = '<div class="modal-footer">'+ $btn_cancel + $btn_submit +' </div>'; 

        $("#jdialog").html('');
        //$(".modal-body").addClass('loader');
        $("#jdialog").modal('show');

        $.ajax({
            url:$target,
            type: "GET",
            success: function(data){
                var $body= '<div class="modal-body">';
                $body+= data ;
                $body+= '</div>';  
                var frmModal = $header +  $body + $footer
                $("#jdialog").html(frmModal);
                    // console.log(data); 
            }
      });
    });
  
 });
