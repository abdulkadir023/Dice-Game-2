
// img1

let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let img1 = document.getElementById('img1');
img1.setAttribute('src', `./images/dice${randomNumber1}.png`);

// img2

let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let img2 = document.getElementById('img2');
img2.setAttribute('src', `./images/dice${randomNumber2}.png`);


//Logic

let h1 = document.getElementById('h1');
if(randomNumber1 > randomNumber2) {
    //player1 has WON   
    h1.textContent = "🚩 Player 1 Wins! ";
}
else if(randomNumber2 > randomNumber1){

    h1.textContent = "Player 2 Wins! 🚩 ";
}
else {
    h1.textContent = "Draw!";
}