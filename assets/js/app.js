var code = "";

$(document).ready(function(){
  //Cargador Inicial
  setTimeout(function() {
    $('.load-section').fadeOut();
    $('.login-section').show();
  }, 2000);

  //Regresar al Loading
  $('.login-section span:first').click(backToLoading);
    function backToLoading() {
    $('.login-section').fadeOut();
    $('.load-section').show();
  }

  //Avanzar con el botón Sign Up
  $('.login-section button:last-child').click(nextToSignUp);
  function nextToSignUp() {
    $('.login-section').hide();
    $('.signup-section').show();
  }

  //Volver a login
  $('.signup-section span:first').click(backToSignUp);
  function backToSignUp() {
    $('.signup-section').hide();
    $('.login-section').show();
  }

   //Validar 10 números, sólo números y activar botón
  $("#inputNumbers").keyup(function() {
    var onlyNumbers = /^[0-9]+$/;
    var inputNumbers = $(this).val();
      if ( inputNumbers.length >= 10 && onlyNumbers.test(inputNumbers)) {
        $('.btn-next').removeClass('disabled');
      } else
        $('.btn-next').addClass('disabled'); {

        }
    })

  //Generar código
  $('.btn-next').click(generateCode);
  function generateCode() {
  var str = $("#inputNumbers").val();
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
    }
     alert(code);
  }



});