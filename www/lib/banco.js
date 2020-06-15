$(document).on("click","#salvar",function(){
  var parametros= {
    "nome":$("#nome").val(),
    "email":$("#email").val(),
    "senha":$("#senha").val()
  }
  $.ajax({
    type:"post",//como enviar os dados
    url:"https://wordpress-online-2.000webhostapp.com/webservice/cadastra.php",//para onde eviar
    data:parametros, //o que vou eviar
    //se der certo
    success:function(data){
      navigator.notification.alet(data);
      $("#nome").val(""),
      $("#email").val(""),
      $("#senha").val("")
    },

    //se der errado
    error:function(data){
      navigator.notification.alet("Erro no cadstro!!!");
    }
  });
});