console.log("Welcome to Tic Tac Toe")

// music variables

let chanceAudio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let gif = document.querySelector(".image img")
let turn = "X"

let isgameover = false;
//function to change turn

const changeTurn = () =>{
    return turn === "X" ? "O" : "X"
}

//function to check win

const checkWin = ()=>{
    let boxtext = document.querySelectorAll(".boxText");
    let check=0;
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.chance').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            gameover.play()
            gif.style.width = "110px" 
        }
        else {
            boxtext.forEach((e)=>{
                if(e.innerText === ""){
                    check=1;
                }
            })
            if(check === 0){
                isgameover=true;
                document.querySelector(".chance").innerText = "Tie";
                gameover.play();
            }
        }
    })
 }

// game logic
// <div class="playbox bl bt"><span class="boxText"></span></div>
let boxes = document.getElementsByClassName("playbox");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            if(!isgameover)
            {
                chanceAudio.play();
                boxtext.innerText = turn;
                turn = changeTurn();
                checkWin();
                if(!isgameover){
                    document.querySelector(".chance").innerText = "Turn for " + turn;
                }
            }
            
        }
    })
})
    
// reset button

let button = document.querySelector("#reset")
button.addEventListener('click', () =>{
    let boxtext = document.querySelectorAll('.boxText');
    boxtext.forEach((e)=>{
        e.innerText=""
    })
    turn = "X";
    document.querySelector(".chance").innerText = "Turn for " + turn;
    isgameover = false;
    gif.style.width = "0px";
} )