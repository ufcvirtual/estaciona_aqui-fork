function ver(){
var code = document.getElementById('senha').value;
var aviso=document.getElementById('alerta');
var valor = code.length;
var embora =document.getElementById('buttao')
if(code=="senha"){
  alert("Você entrou")
  aviso.style.display="none"
window.location.href="/Seleção de vagas/index.html";
}else if(valor==0){
    aviso.style.display="flex"
    aviso.innerHTML="* Digite uma senha"

} else if(!(code=="senha")){
    aviso.style.display="flex"
    aviso.innerHTML="*  A Senha está errada contate o suporte."
    

}
  
}

function voltar(){

  window.location="/porteiro_morotirsta/escrita.html"
}
