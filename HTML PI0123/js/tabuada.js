function tabuada(){
    var saida = document.getElementById("saida");
    var num = Number(document.getElementById("numero").value);
    
    saida.innerHTML = "<h2>Tabuada do " + num + "</h2>";
    var c = 1;
    while(c <= 10){
        saida.innerHTML += num + " x " + c + " = " + (num * c) + "<br>";
        c++;
    }    
}