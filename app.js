let amigos = [];
console.log(amigos);

function agregarAmigo (){
 let amigo = document.getElementById('amigo').value;
 if (amigo === ''){
  alert('Por favor, inserte un nombre');
  mostrarListaAmigos ();
 }else{
  amigos.push(amigo);
  document.getElementById('amigo').value = ''
  mostrarListaAmigos ();
  console.log(amigos);
 }
}

function mostrarListaAmigos (){
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML = amigos[i];
  }
}
console.log(amigos);