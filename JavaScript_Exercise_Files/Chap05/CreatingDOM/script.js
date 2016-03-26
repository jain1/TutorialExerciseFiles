//create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// to add content, either use innerHTML
//newHeading.innerHTML = "Did You Know?";
//newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

// OR create child nodes manually
//This is the more exact way, and probably better to get used to
var h1Text = document.createTextNode("Did You Know?");
var paraText = document.createTextNode("California also produces over 17 million gallons of wine each year!");
// and add them as child nodes to the new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// and we still need to attach them to the document!
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);

//Now we are going to use the insertBefore Method to insert a second paragraph
//to the trivia object
var secondParagraph = document.createElement("p");
var secondParaText = document.createTextNode("California produces 80% of plum tomatoes!");
secondParagraph.appendChild(secondParaText);

document.getElementById("trivia").insertBefore(secondParagraph, newParagraph);
