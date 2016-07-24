$(document).ready(function(){
	var computerChoice;
	
	var botScore = 0 , userScore = 0;
	var botChoice, userChoice;
	
	$('#start').click(function(){
		var seconds = $('#seconds').val();
		var minutes = $('#minutes').val();
		startGame(seconds,minutes);
		
	});
	
	function startGame(seconds,minutes){
		if(seconds == "" || minutes == ""){
			  alert("Enter game time");
			}
			else{
			
				if(validateUserInput(seconds,minutes)){
		           compareChoices();
		           countdown(minutes,seconds);
				}
				else{
					alert("Enter valid minutes and seconds");
				}
			}
	}
	
	$('#restart').click(function(){
		botScore = 0;
		userScore = 0;
		$('#botScore').html(0);
		$('#userScore').html(0);
		$('#userChoice').html("");
		$('#botChoice').html("");
		$('#seconds').val("");
		$('#minutes').val("");
		startGame($('#seconds').val(), $('#minutes').val());
	});
	
	function validateUserInput(seconds,minutes){
	  	if((seconds >= 0 && seconds <= 60) && (minutes >= 0 && minutes <= 60))
	  		return true;
	}
	
	function determineWinner(){
		if(userScore == botScore){
			$('#winner').html("Game Over! It's a tie");
		}
		else{
		if(userScore > botScore){
			$('#winner').html("Game Over! You won the game");
		}
		else{
			$('#winner').html("Game Over! Computer wins");
		}
		}
	}
	
	function computerSelection() {
		computerChoice = Math.round(Math.random() * 2) + 1;
		
		switch (computerChoice) {
			case 1: 
				computerChoice = "rock";
				break;
			case 2:
				computerChoice = "paper";
				break;
			case 3:
				computerChoice = "scissor";
				break;
		}
		return computerChoice;
	}
	
	function compareChoices(){
		
        		
		$('.play_tool').click(function(){
			botChoice = computerSelection();
			userChoice = $(this).val();
			$('#userChoice').html(userChoice);
			$('#botChoice').html(botChoice);
		    alert('clicked!' + userChoice);
		    if(botChoice == userChoice){
				$('#winner').html("Its a tie");
			    userScore++;
			    botScore++;
		}
			else if(userChoice == "rock"){
				if(botChoice == "paper"){
					$('#winner').html("Bot wins");
					botScore++;
				}
				else{
					$('#winner').html("You win");
					userScore++;
				}
			}
			else if(userChoice == "paper"){
				if(botChoice == "scissor"){
					$('#winner').html("Bot wins");
					botScore++;
				}
				else{
					$('#winner').html("You win");
					userScore++;
				}
			}
			else if(userChoice == "scissor"){
				if(botChoice == "rock"){
					$('#winner').html("Bot wins");
					botScore++;
				}
				else{
					$('#winner').html("You win");
					userScore++;
				}
			}
		    $('#userScore').html(userScore);
			$('#botScore').html(botScore);
		});
		
		
		
	}
	
 
	
	function countdown(minutes,sec) {
	    var seconds = sec;
	    var mins = minutes;
	    function tick() {
	        var counter = document.getElementById("timer");
	        var current_minutes = mins;
	        
	        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
	        if( seconds > 0 ) {
	        	if(seconds == 10)
	        		$('#warning').show();
	        	seconds --;
	            setTimeout(tick, 1000);
	        } else {
	            if(mins > 0){
	                countdown(mins-1,60);           
	            }
	            else{
	            	  determineWinner();
	            }
	        }
	    }
	    tick();
	}
	
	
	
});

