let Uscore=0;
let Bscore=0;
const UserScore=document.getElementById("user");
const BotScore=document.getElementById("bot");
const Score = document.querySelector("table");
let Result=document.getElementById("answer");
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissors=document.getElementById("s");

function game(UserChoice){
    const Comp=ComputerChoice();
    const User=UserChoice;
    switch(Comp+User){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(User,Comp);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(User,Comp);
            break;
        case "ScissorsScissors":
        case "RockRock":
        case "PaperPaper":
            draw(User,Comp);
            break;
    }

}
function ComputerChoice(){
    const choices=["Rock","Paper","Scissors"];
    const comp=choices[Math.round(Math.random()*2)];
    return comp;
}
function lose(a,b){
    Uscore++;
    UserScore.innerHTML=Uscore;
    Result.innerHTML=a+" beats "+b+". You WIN!";
    document.getElementById(UserChoice).classList.add('green');
}
function win(a,b){
    Bscore++;
    BotScore.innerHTML=Bscore;
    Result.innerHTML=b+" beats "+a+". You LOSE!";
}
function draw(a,b){
    console.log("draw");
    Result.innerHTML="Both choose "+a+". It's a DRAW!";
}
console.log(Uscore);

function main(){

    rock.addEventListener("click",function(){
        game("Rock");
    })
    paper.addEventListener("click",function(){
        game("Paper");
    })
    scissors.addEventListener("click",function(){
        game("Scissors");
    })
}
console.log(main());