// // ------------- CLICK FUNCTION --------------------//
// const cards = document.querySelectorAll('.card');

// const turnCard = () => {
//     console.log("clicked");
// }

// // for each card attach an event listener which listens for the 'click'
// // whenever that event is triggered execute the function turnCard
// cards.forEach(card => card.addEventListener('click', turnCard)); 

// ---------- TURN CARD ----------------//
const cards = document.querySelectorAll(".card");

const turnMemoryCard = (element) => {
  element.classList.toggle('turn');
  // console.log(element);

};
cards.forEach(memoryCard => memoryCard.addEventListener("click", () => {
    turnMemoryCard(memoryCard); 
})); 

// ----------- MATCH CARD -----------------//

// const matchCard = () => {
//     if (front.dataset.framework === back.dataset.framework){
        
//     }

// }

