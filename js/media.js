/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
  const note1 = parseFloat(document.getElementById("nota1").value);
  const note2 = parseFloat(document.getElementById("nota2").value);
  const note3 = parseFloat(document.getElementById("nota3").value);
  const note4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = ""

  // evite mexer no código acima!

  let somaNotas = (note1 + note2 + note3 + note4) /4

    if (note1 <0 || note2 <0 || note3 <0 || note4 <0) {

      alert("Digite notas válidas")
      mensagem = "Esperando tu digitar uma nota de verdade viss?!"
    }

    else if (somaNotas === 0) {

    mensagem = "Mermao, tu zerou boy :/";
  }

      else if ( somaNotas != 0 && somaNotas <=3) {
        
        mensagem = "Ei, vá estudar visse! Tá quase!";
      }

        else if (somaNotas >= 3.1 && somaNotas <= 5.9) {

          mensagem = `Tu tirasse ${somaNotas} e por pouco ficasse na recuperação boy`;
        }

          else if (somaNotas >= 6 && somaNotas <=7) {

            mensagem = `Tu tirasse ${somaNotas} e passasse raspando visse`;
          }

            else if (somaNotas >=  7.1 || somaNotas <= 9.9) {

            mensagem = `Tu tirasse ${somaNotas} e passou arrasando! Notão`;
              }

            else if (somaNotas >= 10) {

              mensagem =  `Tirasse ${somaNotas} e passou arrasando! Notão da mizera!`;
                }

              else {
                  alert("preencha os campos")
                mensagem = "Preencha os campos direito mó vei";
                    }

  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
