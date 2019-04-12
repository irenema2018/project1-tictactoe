Tic Tac Toe

Introduction 
Traditional Tic Tac Toe is a game for two players, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. 

In this project, it features minecraft theme by using pixel fonts and pixel background. Each click will mark a diamond sword or bow and arrow. It will flash twice when you win the game.

HTML
1.Use a basic container layout.

2.Use data attribute. 

Data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, extra properties on DOM.

In the game, date-token is made to store the value 'x' or 'o' when checkWinner function is running to check if anyone wins.

Note: The name of a custom data attribute in HTML begins with data-. It must contain only letters, numbers and the following characters: dash (-), dot (.), colon (:), underscore (_) -- but NOT any ASCII capital letters (A to Z).


CSS
1. Use flex to arrange the square boxes.

2. Use animation and keyframe rule to determine the looking when someone wins.

Example: 

.flash {
  animation: flash linear 0.5s 2;
}

@keyframes flash {
	0% { opacity: 1; } 
	50% { opacity: .1; } 
	100% { opacity: 1; }

JavaScript
1. Use event handler to handle click.

2. Use checkWinner function to determine the winning condition.

3. Use data attribute to check for winner.

This access is available both in HTML and within the DOM. The dataset property on the HTML Element interface provides read/write access to all the custom data attributes (data-*) set on the element.  The dataset property itself can be read, but not directly written.  Instead, all writes must be to the individual properties within the dataset, which in turn represent the data attributes.   Note also that an HTML data-attribute and its corresponding DOM dataset.property do not share the same name, but they are always similar.

Example:
event.target.dataset.token = "x";
event.target.dataset.token = "o";

In this game, you will not see "x" and "o" directly. They are the value behind the scence. It can be used like variable to store data and it is easy to check if the winning condition is true.

Note: The name of a custom data attribute in JavaScript is the name of the same HTML attribute but in camelCase and with no dashes, dots, etc.

Tip:
1. Transfer an image to an URL by website: imgur.com

2. Download image with transparent background so that it can be displayed perfectly without ruin the previous background. See diamond swoard and bow and arrow.

Reference: 
https://fontmeme.com/minecraft-font/
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
