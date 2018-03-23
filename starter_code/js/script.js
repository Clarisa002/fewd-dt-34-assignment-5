//user types in city name in input #city-type
//user clicks #submit-btn


$(document).ready(function(){
$("#submit-btn").click(changeCity);
	function changeCity(){
  	event.preventDefault(); 
  	//stores input into value
  	var city = $("#city-type").val();

  	console.log("city");

  	//WHAT THE USER SUBMIT AND THE IMG WILL BE OUTPUTED
  	if (city == "New York" || city =="NYC" || city == "New York City"){
  	$("body").attr("class", "nyc")
  	} else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
       $('body').attr('class','sf');
    } else if (city == "LA" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
       $('body').attr('class','la');
    } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
       $('body').attr('class','austin');
    } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
       $('body').attr('class','sydney');
    }
  };
});
