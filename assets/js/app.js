//Variable global del código generado luego de ingresar números al input
var code = "";
var otherCode = "";

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
  $('.signup-section span:first').click(backToLogin);
  function backToLogin() {
    $('.signup-section').hide();
    $('.login-section').show();
  }

   //Validar 10 números, sólo números y activar botón
  $('#inputNumbers').keyup(function() {
    var onlyNumbers = /^[0-9]+$/;
    var inputNumbers = $(this).val();
      if ( inputNumbers.length >= 10 && onlyNumbers.test(inputNumbers)) {
        $('.btn-next').removeClass('disabled');
      } else
        $('.btn-next').addClass('disabled'); {

        }
    });

  //Generar código
  $('.btn-next').click(generateCode);
  function generateCode() {
  var code = "";
  var str = $('#inputNumbers').val();
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert(code);
    $('.signup-section').hide();
    $('.verify-section').show();
  }

  //Volver a Sign Up
  $('.verify-section span:first').click(backToSignUp);
  function backToSignUp() {
    $('.verify-section').hide();
    $('.signup-section').show();
  }

  //Re-generar código
  $('.btn-resend').click(resendCode);
  function resendCode() {
  otherCode = "";
  var str = $('#inputNumbers').val();
  for (var i = 0; i < 3; i++) {
    otherCode += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert(otherCode);
  }

  //Validar Código
  $('#validateCode').keyup(function() {
    var validCode = $(this).val();
    if (validCode == code || validCode == otherCode ) {
      $('.btn-nextTo').removeClass('disabled');
    } else {
      $('.btn-nextTo').addClass('disabled');
    }
  });

  //Generar código
  $('.btn-nextTo').click(nextToForm);
  function nextToForm() {
    $('.verify-section').hide();
    $('.form-section').show();
  }


});