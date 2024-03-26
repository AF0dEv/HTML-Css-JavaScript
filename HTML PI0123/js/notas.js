function calcularMedia(){
    var nome = window.prompt("Digite o nome do aluno");
    var nota1 = Number(window.prompt("Digite a primeira nota"));
    var nota2 = Number(window.prompt("Digite a segunda nota"));
    med = (nota1 + nota2) / 2;
    var msg = (med >= 10) ? "Os meus Parabéns, Aprovado" : "Reprovado";


    var media = document.getElementById("situacao");
    media.innerHTML = `<p> A Calcular a Media Final do Aluno <mark>${nome}</mark>.</p>`
    media.innerHTML += `<p> A primeira nota foi <mark>${nota1}</mark> e a segunda nota foi <mark>${nota2}</mark>.</p>`
    media.innerHTML += `<p> A média final do aluno <mark>${nome}</mark> é <mark>${med}</mark>.</p>`
    media.innerHTML += `<p> Olá <mark>${nome}</mark>, ${msg}</p>`
}