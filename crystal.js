$(document).ready(function() {

    var count = 0;
    var wins = 0;
    var losses = 0;
    var values;
    var random;
    

function newValues () {
        values = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);
        console.log(values);		
    }

function startGame() {
      count = 0;
      $(".total-score").text(count);  
      
      random = Math.floor(Math.random() * 102) + 18;
      $(".random").text("Take this # : " + random);

      $('#gem1').on('click', function(){
        count = count + values[0];      
      $('.total-score').text("Total Score: " + count);
      checkWinLose();
      });
     
      $('#gem2').on('click', function(){
        count = count + values[1];      
      $('.total-score').text("Total Score: " + count);
      checkWinLose();
      });

      $('#gem3').on('click', function(){
        count = count + values[2];      
      $('.total-score').text("Total Score: " + count);
      checkWinLose();
      });

      $('#gem4').on('click', function(){
        count = count + values[3]; 
      $('.total-score').text("Total Score: " + count);
      checkWinLose();
      });
}
 
function checkWinLose() {
    // console.log(count, random);
    if (count === random) {
        wins++;
        $('#win').text(wins);
        $('#status').text("You Won!!!");
        newValues();
        startGame();
    }
    if (count > random) {
        losses++;
        $('#loss').text(losses);
        $('#status').text("You lost!!!");
        newValues();
        startGame();
    }
}
newValues();
startGame();
});

    
