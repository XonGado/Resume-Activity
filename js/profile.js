window.onload = function(){
	var languages = document.querySelectorAll("#programs ul > li");

	for (var i = 0; i < languages.length; i++) {
		// console.log("adding listener for " + i);
		addLanguageRatingListener(i);
	}

	console.log("script finished loading");
}

function addLanguageRatingListener(index){
	var languages = document.querySelectorAll("#programs ul > li");
	languages[index].addEventListener("click", function(){changeRating(index);});
	// console.log("finshed adding listener for " + index);
}

function changeRating(index){
	console.log("clicked " + index + "!");
	var languages = document.querySelectorAll("#programs ul > li");
	var lang_name = document.getElementById("language");
	var rating = document.getElementById("rating");
	var bar = document.getElementById("inner-bar");
	var rate = 0;

	var name = languages[index].children[0].innerHTML;
	var proficiency = languages[index].getAttribute("data-rating");
	// console.log("proficiency: " + proficiency);

	if (proficiency) {
		bar.style.width = proficiency + "%";
		if (proficiency >= 90 && proficiency <= 100) {
			bar.style.backgroundColor = "#AEEA00";
		} else if (proficiency >= 80 && proficiency < 90) {
			bar.style.backgroundColor = "#03A9F4";
		} else if (proficiency >= 70 && proficiency < 80) {
			bar.style.backgroundColor = "#FDD835";
		} else if (proficiency >= 60 && proficiency < 70) {
			bar.style.backgroundColor = "#FB8C00";
		} else{
			bar.style.backgroundColor = "#e53935";
		}
		// rating.innerHTML = proficiency;
		lang_name.innerHTML = name;

		if (rating.innerHTML > proficiency) {
			rate = rating.innerHTML;
			interval = setInterval(function(){
				rate = rating.innerHTML;
				// console.log("rating: " + rate);
				rate--;
				rating.innerHTML = rate;
				if (rate <= proficiency) {
					clearInterval(interval);
				}
				// console.log("looping down");
			}, 5);
		} else if(rating.innerHTML < proficiency){
			rate = rating.innerHTML;
			interval = setInterval(function(){
				rate = rating.innerHTML;
				// console.log("rating: " + rate);
				rate++;
				rating.innerHTML = rate;
				if (rate >= proficiency) {
					clearInterval(interval);
				}
				// console.log("looping up");
			}, 5);
		}
	} else{
		// console.log("proficiency: " + proficiency);
	}
	
}