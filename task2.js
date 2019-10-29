// Write a program that asks user to enter his favorite color.
// If the color is red, suggest him (using alert() function) to buy a Ferrari
// If the color is yellow, suggest him to buy a Lamborghini
// If the color is blue, suggest him to buy a Subaru
// else - display the following message 'We cannot find a car for you'

let color = prompt("What's your favourite color?");

if (color == "red") {
  alert("You need a Ferrari!")
} else if (color == "yellow") {
  alert("You need a Lamborghini!")
} else if (color == "blue") {
  alert("You need a Subaru!")
} else {
  alert("We cannot find a car for you")
};
