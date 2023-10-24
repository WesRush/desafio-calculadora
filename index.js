function partidas(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
  }
  
  function rank() {
    let resultadoRanked = partidas(80, 10)
    let nivel = ""
    if (resultadoRanked <= 10) {
      nivel = "Ferro"
    } else if (resultadoRanked <= 20) {
      nivel = "Bronze"
    } else if (resultadoRanked <= 50) {
      nivel = "Prata"
    } else if (resultadoRanked <= 80) {
      nivel = "Ouro"
    } else if (resultadoRanked <= 90) {
      nivel = "Diamante"
    } else if (resultadoRanked <= 100) {
      nivel = "Lendário"
    } else if (resultadoRanked >= 100) {
      nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultadoRanked} e está no nível de ${nivel}`
  }
  
  console.log(rank())