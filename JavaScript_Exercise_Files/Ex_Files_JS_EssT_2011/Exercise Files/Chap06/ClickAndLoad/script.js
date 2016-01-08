//not the most useful event handler since it activates whenever you click
//anywhere on the page

// document.onclick = function(){
// 		alert("You clicked somewhere in the document");
// };

function prepareEventHandlers() {
		var myImage = document.getElementById("mainImage");
		myImage.onclick = function(){
				alert("You clicked the image");
		};
}

//This function will insure that the event hanlders are loaded after everything
//in the browser window is done loading, so event if our JavaScript is being
//called before everything loads, it will still properly load the event hanlders

//remember to write this only ONCE for each page.
window.onload = function(){
		//prep anything we need to
		prepareEventHandlers();
}
