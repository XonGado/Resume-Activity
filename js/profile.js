window.onload = function(){
	var languages = document.querySelectorAll("#programs > ul > li");

	for (var i = 0; i < languages.length; i++) {
		console.log("adding listener for " + i);
		addLanguageRatingListener(i);
	}

	console.log("script finished loading");
}

function addLanguageRatingListener(index){
	var languages = document.querySelectorAll("#programs > ul > li");
	languages[index].addEventListener("click", function(){changeRating(index);});
	console.log("finshed adding listener for " + index);
}

function changeRating(index){
	console.log("clicked " + index + "!");
	var languages = document.querySelectorAll("#programs > ul > li");
	var lang_name = document.getElementById("language");
	var rating = document.getElementById("rating");
	var bar = document.getElementById("inner-bar");
	var rate = 0;

	var name = languages[index].children[0].innerHTML;
	var proficiency = languages[index].getAttribute("data-rating");
	console.log("proficiency: " + proficiency);

	if (proficiency) {
		bar.style.width = proficiency + "%";
		rating.innerHTML = proficiency;
		lang_name.innerHTML = name;

		// if (rating.innerHTML > proficiency) {
			// rate = rating.innerHTML;
			// while(rate > proficiency){
			// 	setTimeout(function(){
			// 		rate = rating.innerHTML;
			// 		console.log("rating: " + rate);
			// 		rating.innerHTML = rate--;}
			// 	, 1000);
			// 	console.log("looping down");
			// }
		// } else if(rating.innerHTML < proficiency){
			// rate = rating.innerHTML;
			// while(rate < proficiency){
			// 	setTimeout(function(){
			// 		rate = rating.innerHTML;
			// 		console.log("rating: " + rate);
			// 		rating.innerHTML = rate++;}
			// 	, 1000);
			// 	console.log("looping up");
			// }
		// }
	} else{
		console.log("proficiency: " + proficiency);
	}
	
}