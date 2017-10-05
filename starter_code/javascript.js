console.log('file loading');

$(document).ready(function() {
	console.log ("load page")

	var cities = ["NYC" , "San Francisco" , "Los Angeles" , "Austin" , "Sydney"]

	cities.forEach(function(city){

		$("#city-type").append('<option value='+city+'>' + city + '</option>'); 

	});



	$("#city-type").change(updateImage);
});

function updateImage(e) {
	e.preventDefault();
	var city = $("#city-type").val();





	// somehow i need an array or whatever ... the array would be like ( this, this, this,) and then later on we'll give numbers -- and loop ... the event listener is different but limiting the user to choose it doesn't matter what they choose...
	// so we need a drop down menu so how do we do that -- the drop down menu should be something like...  
	// option elements  and select elements -- <select> <option selected value = 1> Los Angeles </option> </select>  
	// object element? // 



// where does the array go? "NYC", "SF", "LA", "ATX", "SYD? here?

	if (city == "NYC")  {
		$("body").attr("class", "nyc");
	}	
	else if (city == "San Francisco") {
		$("body").attr("class", "sf");
	}	

	else if (city == "Los Angeles") {
		$("body").attr("class", "la");
	}

	else if (city == "Austin") {
		$("body").attr("class", "austin");
	}

	else if (city == "Sydney") {
		$("body").attr("class", "sydney");
	}

	else {
$("body").attr("class","")  
	}
}	