//ações de mudança de tela
$(document).on("click","#listar",function(){
  $(location).attr("href","listar.html");
});

//ações de mudaça de banco
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

function listar(){
  $.ajax({
    type:"post",
    url:"https://wordpress-online-2.000webhostapp.com/webservice/listar.php",
    dataType:"json",
    success:function(data){
      var itemLista = "";

      $.each(data.pessoas, function(i,dados){
        itemLista +="<option value="+dados.codigo+">"+dados.nome+"</option>";
      });
      $("#listarPessoas").html(itemLista);
    },

    error:function(data){
      navigator.notification.alet("Erro ao buscar registro!!!");
    }
  });
}