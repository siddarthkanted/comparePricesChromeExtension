document.addEventListener('DOMContentLoaded', function() {
		movieAutoCompleteSetUp();
		document.getElementById("movieSearchButton").onclick = function() {openMovieTabs()};
});

function openMovieTabs(){
	var movieCityNameText = document.getElementById("movieCityNameText").value;
	
	var urlArray = movieUrls(movieCityNameText);
	urlOpener(urlArray);
}

function movieUrls(movieCityNameText){
  var checkValues = $('input[name=movieCheckboxList]:checked').map(function()
            {
                return $(this).val();
            }).get();
					
	for (var count in checkValues) {
		checkValues[count] = String.format(checkValues[count], movieCityNameText);
	}		
		
	return checkValues;
	
}



function movieAutoCompleteSetUp(){

var movieCityNames = ["Adilabad", "Adipur", "Ahmedabad", "Ahmednagar", "Ajmer", "Aligarh", "Allahabad", "Alleppey", "Alwar", "Amalapuram", "Ambala", "Amritsar", "Anand", "Andul", "Ankleshwar", "Armoor", "Asansol", "Athagarh", "Attili", "Aurangabad", "Avinashi", "Balaghat", "Balasore", "Bareilly", "Belagavi", "Bengaluru", "Betul", "Bharuch", "Bhatinda", "Bheemgal", "Bhilai", "Bhilwara", "Bhiwadi", "Bhopal", "Bhubaneswar", "Bhupalapalli", "Bhuvanagiri", "Bidar", "Bijapur", "Bilaspur", "Bodhan", "Bokaro", "Burdwan", "Chandigarh", "Chandrapur", "Chennai", "Coimbatore", "Darjeeling", "Dausa", "Dehradun", "Delhi-NCR", "Dhamtari", "Dhanbad", "Dharapuram", "Dubbak", "Durgapur", "Edlapadu", "Eluru", "Erode", "Faridabad", "Gadag", "Gajapathinagaram", "Gandhidham", "Gandhinagar", "Ghaziabad", "Goa", "Godavarikhani", "Gondia", "Gorakhpur", "Greater Noida", "Gujvail", "Gulbarga", "Guna", "Guntakal", "Guntur", "Gurazala", "Gurgaon", "Guwahati", "Gwalior", "Halol", "Haridwar", "Himmatnagar", "Hosur", "Howrah", "Hubli", "Husnabad", "Hyderabad", "Indapur", "Indore", "Jadcherla", "Jagdalpur", "Jagtial", "Jaipur", "Jalandhar", "Jalgaon", "Jammu", "Jamshedpur", "Jetpur", "Jhansi", "Jodhpur", "Jorhat", "Junagadh", "Kadiyam", "Kakinada", "Kalaburagi", "Kalpetta", "Kalwakurthy", "Kalyan", "Kamanaickenpalayam", "Kanchipuram", "Kanhangad", "Kanpur", "Karamchedu", "Karimangalam", "Karnal", "Karunagappalli", "Kasganj", "Katpadi", "Kattappana", "Kawardha", "Kesamudram", "Kochi", "Kolhapur", "Kolkata", "Komarapalayam", "Kondagaon", "Kosgi", "Kota", "Kothapeta", "Kotkapura", "Kozhikode", "Krishnagiri", "Kurnool", "Latur", "Liluah", "Loni", "Lucknow", "Ludhiana", "Macherla", "Machilipatnam", "Madhira", "Madurai", "Malappuram", "Malegaon", "Malout", "Mananthavady", "Mancherial", "Mandapeta", "Mangalore", "Manipal", "Manjeri", "Maripeda", "Mathura", "Medarametla", "Meerut", "Metpally", "Miryalaguda", "Mirzapur", "Moga", "Mohali", "Moradabad", "Mudigere", "Mukkam", "Mulug", "Mumbai", "Musiri", "Muzaffarnagar", "Mylavaram", "Mysuru", "Nadiad", "Nagda", "Nagpur", "Nalgonda", "Nanded", "Nandyal", "Narasannapeta", "Narasaraopet", "Narayankhed", "Narsampet", "Narsapur", "Narsipatnam", "Nashik", "Navi Mumbai", "Neemuch", "Nellore", "New Delhi", "Nizamabad", "Noida", "Nuziveedu", "Ongole", "Palasa", "Palluruthy", "Panchkula", "Panipat", "Parigi", "Pathankot", "Patna", "Pattukkottai", "Payyanur", "Peddapalli", "Peddapuram", "Perinthalmanna", "Piduguralla", "Pollachi", "Ponnani", "Puducherry", "Punalur", "Pune", "Pusapatirega", "Puthoor", "Rahuri", "Raigad", "Raipur", "Rajahmundry", "Rajapalayam", "Rajkot", "Rajnandgaon", "Ramachandrapuram", "Ramayampet", "Ravulapalem", "Rewa", "Rewari", "Rishikesh", "Rohtak", "Roorkee", "Ropar", "Rudrapur", "Sadasivpet", "Saharanpur", "Salem", "Samalkota", "Sangareddi", "Sarni", "Satna", "Sattenapalle", "Secunderabad", "Seoni", "Shadnagar", "Shankarpalli", "Shri Ganganagar", "Siddipet", "Sikar", "Siliguri", "Sivakasi", "Srikakulam", "Surat", "Suryapet", "Tadepalligudem", "Tandur", "Tanuku", "Tanur", "Tekkali", "Tenali", "Thane", "Thanjavur", "Theni", "Thirubuvanai", "Thrissur", "Tirunelveli", "Tirupati", "Tirur", "Tiruvuru", "Trichy", "Trimulgherry", "Udaipur", "Ujjain", "Umbraj", "Vadodara", "Valsad", "Vapi", "Varkala", "Vemulawada", "Venkatapuram", "Vijayawada", "Vinukonda", "Vissannapeta", "Vizag", "Vizianagaram", "Vuyyuru", "Warangal", "Zaheerabad", "anakapalle", "bhimavaram", "chandragiri", "chilakaluripet", "chinnamandem", "chintalapudi", "chipurupalle", "chirala", "chodavaram", "dowlaiswaram", "draksharamam", "kamareddy", "karimnagar", "kasibugga", "kavali", "khammam", "kinathukadavu", "kodad", "koduru", "kottarakara", "lakkavaram", "palakol", "parvatipuram", "payakaraopeta", "pennagaram", "sathupally", "tirupur"];

$( "#movieCityNameText" ).autocomplete({
    source: movieCityNames
});
}