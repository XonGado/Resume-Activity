var active = 0;

window.onload = function(){
	var greggBtn = document.getElementById("gregg-btn");
	var clydeBtn = document.getElementById("clyde-btn");
	var greggCon = document.getElementById("gregg-content");
	var clydeCon = document.getElementById("clyde-content");
	var greggClo = document.getElementById("close-gregg");
	var clydeClo = document.getElementById("close-clyde");

	var clydeDet = document.getElementById("more-details-c");
	var clydeBod = document.getElementById("clyde-body");
	var clydeHed = document.getElementById("clyde-header");

	var greggNavG = document.getElementById("gregg-nav-g");
	var greggNavC = document.getElementById("gregg-nav-c");
	var clydeNavG = document.getElementById("clyde-nav-g");
	var clydeNavC = document.getElementById("clyde-nav-c");

	greggBtn.addEventListener("click", function(){
		showContent(greggCon, clydeCon);
	});

	clydeNavG.addEventListener("click", function(){
		showContent(greggCon, clydeCon);
	});

	clydeBtn.addEventListener("click", function(){
		showContent(clydeCon, greggCon);
	});

	greggNavC.addEventListener("click", function(){
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

	clydeDet.addEventListener("click", function(){
		clydeDet.style.opacity = 0;
		clydeDet.style.height = 0;
		clydeDet.style.padding = 0;
		clydeDet.style.margin = 0;
		setTimeout(function(){
			clydeDet.style.display = "none";
		},1000);  
		clydeHed.style.width = 50 + "%";
		showDetails(clydeBod);
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
	content.style.top = 110 + "vh";
}

function showDetails(details){
	var divisions = details.children;
	console.log(divisions);

	details.style.left = 40 + "vw";
	// setTimeout(function(){
		for (var i = 0; i < divisions.length; i++) {
			// setTimeout(function(){
				divisions[i].style = "transform: rotateY(0);";
			// }, 250);
		}
	// }, 1000);
}