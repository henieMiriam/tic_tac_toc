var play=function(event){
  console.log("hola");
  console.log(event.target);
  var target=event.target;
    //modificar contenido
  if (game.turn===0) {
    target.textContent = game.insing1;
    game.turn =1;
    game.actualPlayer= game.player1;
    checkBoard();
}else{
    target.textContent= game.insing2;
    game.turn = 0;
    game.actualPlayer= game.player2;
    checkBoard();
  }
  target.removeEventListener("click",play);
  game.moves += 1;
document.getElementById("playing").textContent=game.actualPlayer;//linea chola
};
var checkBoard=function(){};
var getPlayer=function(event){
  console.log (event)
  event.preventDefault();
  game.player1= document.getElementById("player_one").value
  game.player2= document.getElementById("player_two").value
};

var game= {
  player1:"jugador_one",
  player2:"jugador_two",
  turn:0,
  insing1:"X",
  insing2:"O",
  moves:0,
  actualPlayer:""
};
var buttonInput = document.getElementById("button");
console.log("button",buttonInput);
buttonInput.addEventListener("click", getPlayer);
var celdas = document.getElementsByTagName("td");
console.log(celdas);
Array.from(celdas).map(function(cell){
  console.log(cell);
  cell.addEventListener("click",play);
});
