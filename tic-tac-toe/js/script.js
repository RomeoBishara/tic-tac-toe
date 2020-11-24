	/*  Web Programming 
	          Author: Romeo Al Bishara
	        
	*/


	var player1Score = 0;
	var player2Score = 0;

	var countClick = 0;
	var j = 0; //player1 click
	var l = 0; //player2 click
	var gotWinner = false; // get the turn
	var turn = []; //get player turn based on the size of the array

	// looser cases array
	var winner = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
	 			   [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
	
		
		var firstPlayer  = []; // save choices in array 
		var secondPlayer = [];

		  var player1; // initials
	      var player2;
	      // player turn selector
		var playerSelector = document.getElementsByClassName("players");

/* Start the game */
function stratGame() {

		 player1Score = 0; // reset scores
	     player2Score = 0;

	reset(); //reset the game anytime if play button clicked 

			// Get players initials
		 player1 = prompt("Enter the initials of the first player");
		 player2 = prompt("Enter the initials of the second player");

		 	// Display the players initials
		var playersName = document.getElementsByClassName("players");
		playersName[0].innerHTML = player1;
		playersName[1].innerHTML = player2;

     //player one selected to start the game 
	playerSelector[0].style.background = "#169253"; 

}

/* play function passes the button clicked*/
function play(boxNum) {
		// change the button after click
	var changButton = document.getElementsByTagName("button")[boxNum];

		if (turn.length % 2 == 0){ //if turn size is even then player1 turn

	        changButton.style.color = "#4C56BB";
	    	changButton.innerHTML = player1;
			changButton.className = "afterClicking";
		
		// save the button number for player 1
		firstPlayer[j] = boxNum;
		j++;
		
		// Check if player 1 looser 
		 if(firstPlayer.length >= 3) {
		 	if(isWinner(firstPlayer)) { // call winner function, return true
		 		player2Score++;         // if winner the count player 2 as loser
		 		setTimeout(function(){ // alert and stop the game after 0.5s
					 	alert(player1 + " WON! ", reset());
					 }, 500);
		 		
		 		
		 	}

		 }
         // change turns selector 
		  playerSelector[0].style.background = "none";
	      playerSelector[1].style.background = "#169253";
		
		} else { // turn size is odd then player2 turn
			
			// change the button after click
		changButton.style.color = "#85C515";
		changButton.innerHTML = player2;
		changButton.className = "afterClicking";

		// save the button number for player 1
		secondPlayer[l] = boxNum;
		l++;
		
		// Check if player 2 is winner 
		 if(secondPlayer.length >= 3) {
		 	if(isWinner(secondPlayer)) { // call looser function, return true
		 		player1Score++;     	 // if looser the count player 1 as winner

		 		setTimeout(function(){  // alert and stop the game after 0.5s
					 	alert(player2 + " WON! ", reset());
					 }, 500);
		 		
		 	}

		 }

		 // change turns selector 
	   playerSelector[1].style.background = "none";
	   playerSelector[0].style.background = "#169253";
		 

	} 

		// Display the scores
		document.getElementsByClassName("scores")[0].innerHTML = player1Score+" : "+player2Score;

	turn[countClick] = 1; // Count number of clicks from both players
    countClick++; 
	if (turn.length == 9 && !gotWinner) { // Indicate if draw and got looser  
	    setTimeout(function(){
		alert(" Draw! ", reset());      // reset the display
		 }, 500);
	}
	

}

/* check for looser returns true and update */
function isWinner(player) { 
	 	
	 				 // loop through the winner array 
		for (n = 0; n < winner.length; n++) {
			
			var count = 0;
			var arr = winner[n]; //get each winner case

	        for (m = 0; m < player.length; m++) { // compare the array of player with winner case
	        	if (arr[0] == player[m] || arr[1] == player[m] ||arr[2] == player[m]) {
	                count++;
	        	
	            if (count == 3) { // match ==> player is winner 

	            	//change the color of the background for looser boxes
	            	document.getElementsByTagName("button")[arr[0]].className = "winner";
	            	document.getElementsByTagName("button")[arr[1]].className = "winner";
	            	document.getElementsByTagName("button")[arr[2]].className = "winner";

	            	gotWinner = true;

	        	return gotWinner; // return true if player won

	           }
	         }

		   }
		
	    }
}

/* reset the display but keep the scores  */
function reset() {

	for(k = 0; k < 9; k++) { // loop to return the buttons to images 
		var resetButton = document.getElementsByTagName("button")[k];
		
		resetButton.className = "button"; //get the buttons back to the class button
		resetButton.innerHTML = "";       //delete the players names
	 
		 // reset all arrays and clicks
		 countClick = 0;                  
		 j = 0;
	 	l = 0;
	 
	  firstPlayer = [];
	  secondPlayer = [];
	  turn = [];
	  gotWinner = false;
       // Display scores 
	  document.getElementsByClassName("scores")[0].innerHTML = player1Score+" : "+player2Score;
	  // reset selector to start with player 1
	   playerSelector[0].style.background = "#169253";
	   playerSelector[1].style.background = "none";

	}

}