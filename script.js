// image container array

const arr = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

function changeImg(){
    let randomNumber1 = Math.floor(Math.random()*6);
    let randomNumber2 = Math.floor(Math.random()*6);
    let imgOne = document.getElementsByClassName('img1')[0]; 
    let imgTwo = document.getElementsByClassName('img2')[0]; 
    imgOne.src = arr[randomNumber1];
    imgTwo.src = arr[randomNumber2];

    if(randomNumber1>randomNumber2)
        {
        let textChange = document.getElementsByClassName('winner')[0];
        textChange.innerHTML = "Player 1 Win 🚩"
    }
    else if(randomNumber1<randomNumber2)
    {
        let textChange = document.getElementsByClassName('winner')[0];
        textChange.innerHTML = "Player 2 Win 🚩"
    }
    else{
        let textChange = document.getElementsByClassName('winner')[0];
        textChange.innerHTML = "Draw !"
    }
}
