
let player = {
    name: "Noni",
    chips:200
}
let cards =[]
let sum = 0;
let hasBlackJack = false 
let isAlive = false 
let message = "";
let messagEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el");

let layersEL = document.getElementById("player-el")
layersEL.textContent = player.name + ": $"+ player.chips
//console.log(layersEL)
function getRandomCard(){
   let randomNumber = Math.floor( Math.random() * 13) + 1 
    if (randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true;
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;


    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 

for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "sum: " + sum ;
    if (sum <= 20){
        message = "Do you want to draw a new card "
    }
    else if(sum === 21){
        message = "you have gotten blackjack"
        hasBlackJack = true ;
    }
    else{
        message = "You're out of the game"
        isAlive = false;
    }
messagEl.textContent = message ;


} 

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let tCard = getRandomCard() ; 
    sum += tCard;
    cards.push(tCard)
    renderGame()
   // console.log(cards)
 
    }
    if(sum === 21){
        layersEL = player.chips += 10;
        
    }


}
