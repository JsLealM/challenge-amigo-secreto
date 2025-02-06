let amigos = [];

function agregarAmigo (){
 let amigo = document.getElementById('amigo').value;
 if (amigo === ''){
  alert('Por favor, inserte un nombre');
  mostrarListaAmigos ();
 }else if (amigos.includes(amigo)){
  alert('Este nombre ya esta.');
  return;
 }else{
  amigos.push(amigo);
  document.getElementById('amigo').value = ''
  mostrarListaAmigos ();
  return;
 }
}

function mostrarListaAmigos (){
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("LI");
    item.innerHTML = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo(){
  if (amigos.length == 0){
    alert('No se puede sortear aun, tienes que añadir algun amigo.');
    return;
  }else{
    let indice = Math.floor(Math.random()*(amigos.length));
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'El amigo secreto sorteado es: ' + amigos[indice];
    return;
  }
}
console.log(amigos);
