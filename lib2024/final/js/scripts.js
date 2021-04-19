function submitForm(){
	
	let profile = document.getElementById("profile");
	let name = document.getElementById("nameInput").value;
	let email = document.getElementById("emailInput").value;
	let address = document.getElementById("addressInput").value;
	let city = document.getElementById("cityInput").value;
	let province = document.getElementById("provinceInput").value;
	let pc = document.getElementById("pcInput").value;
	if(name=="" || email=="" || address=="" || province=="none" || pc=="" ){
		alert("Please fill in all fields");
		return;
	}
	let loading = document.createElement("IMG");
	loading.setAttribute("src", "img/load.png");
	loading.setAttribute("class", "loader");
	profile.appendChild(loading);

	setTimeout(myFunction, 3000);

	function myFunction(){	
		document.getElementById("profilename1").innerHTML =name;
		document.getElementById("profileemail").innerHTML = email;
		document.getElementById("profileaddr").innerHTML = address + "," + city + "," + province + "," + pc;
		profile.removeChild(loading);
	}
	
}