document.addEventListener("DOMContentLoaded", function() { 
var color= prompt("Pick a color Blue or Pink or Purple");
color=color.toLowerCase();
if (color=="blue"){
	alert("You will get Alex a $2000 PC");
}if (color=="pink"){
	alert("You will get Alex a $1500 PC");
}if (color=="purple"){
	alert("This color is under maintence pick another color and try agian")
}
});