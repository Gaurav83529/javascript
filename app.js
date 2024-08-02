let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let newgame=document.querySelector("#new-button");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0= true;//playerX , player0
let count = 0; //To Track Draw
    
const winpattern=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
];

const resetGame=()=>{
    turn0=true;
    enabeBoxes();
    msgcontainer.classList.add("hide");
    reset.classList.remove("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turn0){
    //playerO
    box.innerText="O";
    box.style.color="green";
    turn0 = false;
}    
else{
    //playerX
    box.innerText="X";
    box.style.color="yellow";
    turn0 = true; 
}
count++
box.disabled=true;
checkWinner();
    });
    console.log(count);
});
const enabeBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}; 

const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
       
        if(pos1Val!="" && pos2Val!=""&& pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){ 
                showWinner(pos1Val); 
                return true;
            }
        }
    }
};
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);