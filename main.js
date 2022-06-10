function tocaSom (selectorAudio){
   const elemento = document.querySelector(selectorAudio);

    if (elemento != null && elemento.localName === 'audio' ){
        elemento.play();
        
    }
    else{
        alert('tecla não encontrada')
    }
}

const listasDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listasDeTeclas.length; contador++) {

    const tecla = listasDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}