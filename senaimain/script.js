//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    )
}
//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'adimin' && senha == '123456'){
        window.location ="index.html"
        logado = 1;
    }

    if(logado == 0){
        alert(" Login incorreto")

    }

    }

    
//Ativar alert no botão cadastrar
function form-cadastrar{
   
  .advanced-btn{
      border: 0;
      outline: none;
  }
  @media (max-width: $screen-xs-min) {
      .myDIV{
          display: none;
      }
  }

function cadastro(){
    alert("cadastrado com sucesso!");
    window.location.href = "index.html";
}