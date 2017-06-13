var active = 0;

window.onload = function(){
	var greggBtn = document.getElementById("gregg-btn");
	var clydeBtn = document.getElementById("clyde-btn");
	var greggCon = document.getElementById("gregg-content");
	var clydeCon = document.getElementById("clyde-content");
	var greggClo = document.getElementById("close-gregg");
	var clydeClo = document.getElementById("close-clyde");

	greggBtn.addEventListener("click", function(){
		showContent(greggCon, clydeCon);
	});
	clydeBtn.addEventListener("click", function(){
		showContent(clydeCon, greggCon);
	});
	greggClo.addEventListener("click", function(){
		hideContent(greggCon);
		active = 0;
	});
	clydeClo.addEventListener("click", function(){
		hideContent(clydeCon);
		active = 0;
	});
}

function showContent(clicked_content, other_content){
	if (active){
		hideContent(other_content);
		setTimeout( function(){clicked_content.style.top = 0;} ,750);
	} else{
		clicked_content.style.top = 0;
	}
	
	active = 1;
}

function hideContent(content){
	content.style.top = 100 + "vh";
}