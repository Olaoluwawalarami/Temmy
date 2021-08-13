document.addEventListener('DOMContentLoaded', () => {
    
    
    //Cards declaration
    
    var cardArray = [
        {
            name: "burger",
            img: "images/burger.jpg"
        },
        {
            name: "burger",
            img: "images/burger.jpg"
        },
        {
            name: "fries",
            img: "images/fries.jpg"
        },
        {
            name: "fries",
            img: "images/fries.jpg"
        },
        {
            name: "hotdog",
            img: "images/hotdog.jpg"
        },
        {
            name: "hotdog",
            img: "images/hotdog.jpg"
        },
        {
            name: "ice_cream",
            img: "images/ice_cream.png"
        },
        {
            name: "ice_cream",
            img: "images/ice_cream.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.jpg"
        },
        {
            name: "milkshake",
            img: "images/milkshake.jpg"
        },
        {
            name: "pizza",
            img: "images/pizza.jpg"
        },
        {
            name: "pizza",
            img: "images/pizza.jpg"
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random());
    
    var grid = document.querySelector(".grid");
    var resultDisplay = document.querySelector("#result");
    var cardsChosen = []; 
    var cardsChosenId = [];
    var cardsWon = [];
    
    
    // Game Board
    
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement("img")
            card.setAttribute("src", "images/blank.jpg")
            card.addEventListener("click", flipCard)
            card.setAttribute("data-id", i)
            grid.appendChild(card)
        }
    }
    
    //Matches Check

    function checkForMatch() {
        var cards = document.querySelectorAll("img")
        var optionOneId = cardsChosenId[0];
        var optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You Found a match");
            cards[optionOneId].setAttribute("src", "images/white.jpg")
            cards[optionTwoId].setAttribute("src", "images/white.jpg")
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute("src", "images/blank.jpg")
            cards[optionTwoId].setAttribute("src", "images/blank.jpg")
            alert("Sorry, doesn't match. Try Again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textCotent = "Good Job! You found them all."
        }
    }
    
    // Card Flip
    
    function flipCard() {
        var cardId = this.getAttribute("data-Id");
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    
    
    
    createBoard();
    checkForMatch();
    flipCard();
    
    
    
    
    
    
    
    
    

})