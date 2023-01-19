// geração do valor aleatório
var y = Math.floor(Math.random()  *  10 + 1);
   var guess = 1
// função para o número enviado pelo usuário
var  playername = localStorage.getItem("player_name");
  

function submit()
{
    var x = document.getElementById("playername").value;
    if(x == y)
  {
alert(" para bens " +playername+",vc acertou em " 
+guess+  " tentativas(s)")
  guess = 1;

    }
else if (x > y) {

guess++
    alert("opa tente ae um numero menor")
}
else{

    guess++
    alert("opa tente ae um numero maior")
}
}

function playAgain()
{
y = Math.floor(Math.random() * 10 + 1);
guess = 0

}