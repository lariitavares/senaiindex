//efeito de esconder formulário de cadastro

$( document ).ready(function(){

    $("#botao-cadastrar").click(function(){
        $("#form-cadastar").slideToggle("show");
        $("#section-login").slideToggle("show");
        $("#botao-cadastrar").show();

    });
});

