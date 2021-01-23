const div = document.querySelector('.container');
console.log(div.classList.contains('box'));



let min = 1,
    max = 10,
    winningNum = getRandomNumber(min,max),
    guessLeft = 3;

const minNum = document.querySelector('.min'),
      maxNum = document.querySelector('.max'),
      guessInput = document.querySelector('#guessInput'),
      submitBtn = document.querySelector('#submitBtn'),
      message = document.querySelector('.message'),
      game = document.querySelector('.game');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
    if (e.target.className=='playAgain') {
        window.location.reload();   
    }
})
submitBtn.addEventListener('click',function(){
    
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess>max || guess<min) {
        setMessage(`Please enter number between ${min} and ${max}...`,'red')
    }
    
    if(guess===winningNum){
        // game over -- win
        gameOver(true,`${winningNum} is correct you win!`);
        
        submitBtn.value = 'Play Again';

        
    }else{
        if(guessLeft!=1){
            guessInput.value='';
            setMessage(`${guess} is incorrect ${--guessLeft} guess left`, 'red');
        }
        else{
            // game over -- lost
            gameOver(false ,`Game over you lost  ${winningNum} was correct number` );
            
            
        }
    }
});
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function gameOver(won,msg){
    let color;
    won==false?color='red':color='green';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg,color);
    submitBtn.value = 'Play Again';
    submitBtn.className+='playAgain';
}
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}