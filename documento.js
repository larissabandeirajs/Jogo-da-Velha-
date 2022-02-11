var jogadasVencedoras = [
    ["q1","q2","q3"],
    ["q4","q5","q6"],
    ["q7","q8","q9"],
    ["q1","q4","q7"],
    ["q2","q5","q8"],
    ["q3","q6","q9"],
    ["q1","q5","q9"],
    ["q3","q5","q7"],
  ]
  var jogadas = []
  var jogadorAtual = "X"
  
  function alterarJogadorAtual() {
   if (jogadorAtual == "X"){
     jogadorAtual = "O"
   } else {
     jogadorAtual = "X"
   }
    console.log(alterarJogadorAtual)
  }
  
  function adicionarMarcador(quadrado) {
    quadrado.append(`<div class="marcador">${jogadorAtual}</div>`) 
  }
  
  function marcarQuadrado(quadrado) {
    quadrado.addClass("selecionado")
  }
  
  function quadradoEstaSelecionado(quadrado) {
    return quadrado.hasClass("selecionado")
  }
  
  function adicionarJogada(quadrado) {
    var posicaoDoQuadrado = quadrado.data("q")
    jogadas.push({
      jogador: jogadorAtual,
      quadrado: "q" + posicaoDoQuadrado
    })
  }
  
  function jogadorVenceu() {
    var jogadasDoJogadorAtual = jogadas.filter(jogada => jogada.jogador == jogadorAtual)
    var quadrados =  jogadasDoJogadorAtual.map(jogada => jogada.quadrado)
    
   return jogadasVencedoras.some(jogadaVencedora => {
      return jogadaVencedora.every(quadrado => {
        return quadrados.indexOf(quadrado) != -1
      })
    })
  }
  
  function resetar() {
    jogadas = []
    $(".quadrado").html("")
    $(".quadrado").removeClass("selecionado")
  }
  
  function empate() {
    return jogadas.length == 9
  }
  
  $(".quadrado").on("click", function() {
    var quadradoClicado = $(this)
    if (!quadradoEstaSelecionado(quadradoClicado)) {
      adicionarMarcador(quadradoClicado)
      marcarQuadrado(quadradoClicado)
      adicionarJogada(quadradoClicado)
      
      if (jogadorVenceu()) {
        alert("Jogador " + jogadorAtual + " ganhou!")
        resetar()
      } else if (empate()) {
        alert("Empate")
        resetar()
      }
      alterarJogadorAtual()
      console.log(quadradoClicado)
    }
  
  })
  