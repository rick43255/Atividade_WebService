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


$(document).on("change","#listarPessoas", function(){
  var parametro = {
    "codigo": $("option:selected",("#listarPessoas")).val()
  }

  $.ajax({
    type:"post",
    url:"https://wordpress-online-2.000webhostapp.com/webservice/listar-um-registro.php",
    data:parametro,
    dataType:"json",
    success:function(data){
      $("#codigo").val(data.pessoa.codigo);
      $("#nome").val(data.pessoa.nome);
      $("#email").val(data.pessoa.email);
      $("#senha").val(data.pessoa.senha);
    },

    error:function(data){
      navigator.notification.alet("Erro ao buscar registro!!!");
    }
  });
});

function habilitarCampos(){
  
      $("#nome").prop("readonly",false);
      $("#email").prop("readonly",false);
      $("#senha").prop("readonly",false);
}

function desabilitarCampos(){
  
      $("#nome").prop("readonly",true);
      $("#email").prop("readonly",true);
      $("#senha").prop("readonly",true);
}

$(document).on("click","#editar",function(){
  habilitarCampos();
});

$(document).on("click","#cancelar",function(){
  desabilitarCampos();

});

$(document).on("click","#salvarEdit",function(){
  var parametros= {
    "codigo":$("#codigo").val(),
    "nome":$("#nome").val(),
    "email":$("#email").val(),
    "senha":$("#senha").val()
  }
  $.ajax({
    type:"post",//como enviar os dados
    url:"https://wordpress-online-2.000webhostapp.com/webservice/atualizar.php",//para onde eviar
    data:parametros, //o que vou eviar
    //se der certo
    success:function(data){
      navigator.notification.alet(data);
      location.reload();
      desabilitarCampos();
    },

    //se der errado
    error:function(data){
      navigator.notification.alet("Erro no cadstro!!!");
    }
  });
});

$(document).on("click","#excluir",function(){
  var parametros= {
    "codigo":$("#codigo").val()
    
  }
  $.ajax({
    type:"post",//como enviar os dados
    url:"https://wordpress-online-2.000webhostapp.com/webservice/delete.php",//para onde eviar
    data:parametros, //o que vou eviar
    //se der certo
    success:function(data){
      navigator.notification.alet(data);
      location.reload();
      desabilitarCampos();
    },

    //se der errado
    error:function(data){
      navigator.notification.alet("Erro ao excluir!!!");
    }
  });
});