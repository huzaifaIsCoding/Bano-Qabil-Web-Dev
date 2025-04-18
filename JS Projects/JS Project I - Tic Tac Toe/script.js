let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  
    [0, 4, 8],
    [2, 4, 6]
]
let turn0 = true 
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("The Box is Clicked!")
        if (turn0){
            box.innerText = "O"
            box.style.color = "red"
            turn0 = false

        }else {
            box.style.color = "purple"
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true

        checkWinner()
    })
}
)
let checkWinner = () => {
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText
        let val2 = boxes[pattern[1]].innerText
        let val3 = boxes[pattern[2]].innerText

    if (val1!="" && val2!="" && val3!=""){
       
        if(val1 == val2 && val2 == val3){
            console.log("The winner is:", val1)
            winningMsg(val1)
            
            disableBox()
            
        }
    }
    }
}

const winningMsg = (winner) => {
    msg.innerText = `The winner is ${winner}`
    enableMsg()
}

let enableMsg = () =>{
    msgContainer.classList.remove("hide")
}

let reset = () =>{
    msgContainer.classList.add("hide")
    for(box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}
let disableBox = () =>{
    for(box of boxes){
        box.disabled = true
    }
}
resetBtn.addEventListener("click", reset)