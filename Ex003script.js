function Celular(nome, marca, tela, bateria){
    nome = document.getElementById("nome")
    marca = document.getElementById("tela")
    tela = document.getElementById("bateria")
    bateria = document.getElementById("bateria")   
    resultado.innerHTML = `Esse celular (${marca.value} ${nome.value}) possui uma tela de ${tela.value} polegadas e bateria de ${bateria.value} portanto ele é foda!`
    }
