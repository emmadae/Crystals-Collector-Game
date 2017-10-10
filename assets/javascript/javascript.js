// A $( document ).ready() block.
$( document ).ready(function() {
 
	// Make our variables global to the runtime of our application
	var randomNumber = Math.floor((Math.random() * 100) + 20);
	var userTotal = 0;
	var wins = 0;
	var loses = 0;
	var runGame = true;


	// Assign each of the values to a button
 	$("#blue-jem").val(1);
 	$("#gold-jem").val(2);
 	$("#green-jem").val(5);
	$("#white-jem").val(10);



	// On click game starter
	$(".get-number").click (function (){
		$(".get-number").fadeOut(500);
		$(".reset-game").fadeIn(1000);
		$("#random").html(randomNumber );

		// Jem on click addition function and loging totalx
			$('.jem').click(function() {
				if (runGame){
		    		userTotal += parseInt($(this).val());
		    		$("#total").html(userTotal);

		    	// Checking Score
		    		if(userTotal > randomNumber){
		    		$ ("#loses").html( loses++ + 1 );
		    		runGame = false;
	            	
	            	} else if (userTotal === randomNumber){
	            	$ ("#wins").html( wins++ + 1 );
	            	runGame = false;
	          
	        		}  
        		}
	
			});

    });

// Reset Game Function and Score Reset
	$(".reset-game").on("click", function (){
		$("#random").html('');
		randomNumber = Math.floor((Math.random() * 100) + 20);;
		$("#random").html(randomNumber);
		userTotal = 0;
		$("#total").html('');
		runGame = true;
	});


	








});