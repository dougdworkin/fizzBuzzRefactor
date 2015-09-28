$(document).ready(function () {
	"use strict"; // not sure why I need this? Brackets is advising me to add it in.

	var $numberList = $('p.fizzBuzzer');

	// adds Number if enter is pressed
	function enterNumber(event) {
		event.preventDefault();

		$numberList.empty();
		addNumber();
	}

	//checks if the input is a usable number
	function addNumber() {
		var $inputRounded,
			$input = $('input#numberInput').val();
		$input = +$input;
		console.log("number entered " + $input + " " + typeof $input);

		// Ok it's all good, round it and run fizzbuzz
		$numberList.append('<b>Great Choice!</b>' + '<br><br>');
		runFizzBuzz($input);
	}

	// Fiz Buzz the numbers up to user's # input
	function runFizzBuzz(number){

		for(var i=1; i <= number; i++) {
			 if ((i%15) === 0) {
				 $numberList.append('Fizz Buzz' + '<br>');
			 } else if
				 ((i%3) === 0) {
				 $numberList.append('Fizz' + '<br>');
			 } else if
				 ((i%5) === 0) {
				 $numberList.append('Buzz'+ '<br>');
			 } else
				 $numberList.append(i + '<br>');
		 }

		}


	// onsubmit (click/enter)
	$('form').on('submit', enterNumber);

});