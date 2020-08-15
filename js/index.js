function handleSearch() {
	var input = document.getElementById('textField').value;
	if (input.length > 0){
		var siteid = document.getElementById('siteid').value;
		if (siteid.length > 0 && siteid !=""){
			input= "site:\""+siteid+"\" "+input;
		}
		var URL ="https://www.google.com/search?q="+input;
		console.log(URL);
		URL=encodeURI(URL);
		
		window.open(URL, "_blank");
		
	}else{
		alert("Provide some input.");
	}
}

function handleDropdown(){
	var option = document.getElementById('selectSiteOption').value;
	if (option == "empty"){
		console.log("inside if");
		document.getElementById('siteid').disabled='false';
	}else if(option != "empty"){
		console.log("inside else");
		document.getElementById('siteid').value=document.getElementById('selectSiteOption').options[document.getElementById('selectSiteOption').selectedIndex].value;
		document.getElementById('siteid').disabled='true';		
	}
}