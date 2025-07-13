let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let newGamebtn = document.querySelector("#new-game");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector("#msg")

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText ="O";
            turnO =false; 
            letterColor()
        }
        else{
            box.innerText="X";
            turnO =true;
            letterColor()
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes =()=>{
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const ShowWinner =(winner)=>{
msg.innerText=`Congratulation, winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
   const checkWinner = ()=>{
  for (let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            ShowWinner(pos1Val);
        }
    }
  }
};
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGamebtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);

const letterColor = () =>{
    boxes.forEach((box)=>{
        if(box.innerHTML === "O"){
            box.classList.add("colorOfo")
        }
        else if(box.innerHTML ==="X"){
            box.classList.add("colorOfx")
            box.classList.remove("colorOfo");
          
        }
    })

}
