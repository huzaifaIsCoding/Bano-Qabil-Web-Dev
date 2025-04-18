let userScore = 0
let compScore = 0

let userResultScore = document.querySelector("#score-user")
let compResultScore = document.querySelector("#score-comp")

let displayMsg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

const choices = document.querySelectorAll(".choice")

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

const compChoiceGen = () =>{
    options = ["rock", "paper", "scissors"]
    randomChoice = Math.floor(Math.random() * 3)
    return options[randomChoice]
}

const playGame = (userChoice) =>{
    console.log("User Choice is:", userChoice )
    const compChoice = compChoiceGen()   
    console.log("computer choice is: ", compChoice)
    let userWin = true
    
    const draw = () =>{
            displayMsg.innerText = "It's a Draw!"
            msgContainer.style.backgroundColor = "rgb(229 182 21)"
            msgContainer.style.color = "white"
            msgContainer.removeAttribute("id")
    }
    
    
    const showScore = (userWin) =>{
        if(userWin){
            displayMsg.innerText = `You Won, Your ${userChoice} beats ${compChoice}`
            msgContainer.style.backgroundColor = "green"
            msgContainer.style.color = "white"
            msgContainer.removeAttribute("id")
            
        }else{
            displayMsg.innerText = `You Lose, ${compChoice} beats your ${userChoice}`
            msgContainer.style.backgroundColor = "red"
            msgContainer.style.color = "white"
            msgContainer.removeAttribute("id")
    
        }  
    }

    if (userChoice === compChoice){
       draw()

    }else{
        if (userChoice == "rock"){
            // paper, scissors
            userWin = compChoice == "scissors" ? true : false 

        }else if (userChoice == "paper") {
            // rock, scissors
            userWin = compChoice == "rock" ? true : false
            
        }else if (userChoice == "scissors") {
            // rock, scissors
            userWin = compChoice == "paper" ? true : false   
        }


        if (userWin == true){
            userScore += 1
            userResultScore.innerText = userScore
            console.log("User Score:", userScore)
            
        }else{
            compScore += 1
            compResultScore.innerText = compScore
            console.log("Computer Score:", compScore)
        }   
    showScore(userWin, userChoice, compChoice)
    }


}
