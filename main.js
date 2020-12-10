const cards = document.querySelectorAll(".card");
let cardOne = null; // these are empty objects which will input values later and compare
let cardTwo = null;

function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

const button = document.querySelector(".btn");
button.addEventListener("click", shuffle);
console.log(button);

const turnMemoryCard = (element) => {
  element.classList.toggle("turn");
};
cards.forEach((memoryCard) =>
  memoryCard.addEventListener("click", () => {
    // anonymous function
    turnMemoryCard(memoryCard);
    if (!cardOne) {
      cardOne = memoryCard; // if cardOne is not equal to null - input memoryCard into object do same for card two
      // then once both inputs from CLICKS have stored data inside each object - compare classes inside
    } else if (!cardTwo) {
      cardTwo = memoryCard;
      if (
        cardOne.childNodes[3].classList[1] ===
        cardTwo.childNodes[3].classList[1]
      ) {
        console.log(
          "WOW you picked two cards next to each other, congrats, are you proud?"
        ); // if cardOne class === cardTwo class log yay and move to next
      } else {
        let tempCardOne = cardOne; // so by replicating cardOne and cardTwo i can flip the cards BEFORE
        let tempCardTwo = cardTwo; // javascript returns cardOne and cardTwo to null
        window.setTimeout(() => {
          turnMemoryCard(tempCardOne);
          turnMemoryCard(tempCardTwo); //if cardOne === cardTwo run turn function on the temporary copies of cardOne and cardTwo
        }, 1000);

        // turnMemoryCard(cardOne);   // when these are called after setting the window timeout
        // turnMemoryCard(cardTwo);   // javascript returns the cards to object NULL before the turnMemoryCardFunction because animation is too slow and javascript works ultra fast basically
      }
      cardOne = null;
      cardTwo = null;
    }
  })
);
