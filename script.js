// const dealItems = document.getElementsByClassName("deal-item").textContent;
const dealItemOne = document.querySelector("#deal-1").textContent;
const dealItemTwo = document.querySelector("#deal-2").textContent;
const dealItemThree = document.querySelector("#deal-3").textContent;
const dealDisplay = document.querySelector("#deal-2");

console.log(dealItemOne);
console.log(dealItemTwo);
console.log(dealItemThree);

//This is an example of a javascript closure
function dealTicker() {
    let dealNumber = 0;

    function displayDeal() {
        // dealDisplay.classList.add('fade-out');

        if (dealNumber === 0) {
            dealDisplay.classList.remove('fade-in');
            dealDisplay.textContent = dealItemOne;
            dealDisplay.classList.remove('fade-out');
            dealNumber = 1;
        }
        else if (dealNumber === 1) {
            dealDisplay.classList.remove('fade-in');
            dealDisplay.textContent = dealItemTwo;
            dealDisplay.classList.remove('fade-out');
            dealNumber = 2;
        }
        else {
            dealDisplay.classList.remove('fade-in');
            dealDisplay.textContent = dealItemThree;
            dealDisplay.classList.remove('fade-out');
            dealNumber = 0;
        }
    }
    setInterval(displayDeal, 2000);
}

dealTicker();