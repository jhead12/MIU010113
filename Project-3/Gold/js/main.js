$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#signUp').on('pageinit', function(){
		var resetButton = $("#reset").validate();		resetButton.resetForm();
		var myForm = $('#contactForm').click();
		    myForm.validate(),									
			myForm.submit(function(){				var data = myForm.serializeArray();
					storeData(data); 				});			//Clear Local Storage 			$('#clear').click('clearLocal');									 			
		
		
	
	//any other code needed for addItem page goes here
	var processType = ["--Choose Process of Advertising", "Telephone Ads","Internet Impressions","Video Ads"];	var adTypeGroup = ["--Choose A Group--" , "Computers & Electronics", "Educational", "Music","Lifestyle","Parenting", "Animals & Pets","Auto & Cycles","Business & Finance", "Cooking, Food & Beverage", "Entertainment & TV", "Fashion & Style", "Home & Gardening"]
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){		//The Json object Data is coming from the json.js to from the html		//Then it is put the data in Local Data		for(var n in json){			var id = Math.floor(Math.random()*10001);			localStorage.setItem(id, JSON.stringify(json[n]));			console.log("this is the local Storage Test");		}
	 
};

var getData = function(){		toggleControls("on");		if(localStorage.length === 0){			alert("There is no data in Local Storage so using default");			//console.log("getData");			autoFillData();		}				//Write Data from Local Storage to the browser		var getPage = $('data-1');		var makeDiv = document.createElement('div');		console.log("test-MakeDiv");		makeDiv.setAttribute("id", "items");		var makeList = document.createElement('ul');		makeDiv.appendChild(makeList);		var processList = document.createElement('ul');		makeDiv.appendChild(processList);		getPage.appendChild(makeDiv);						$('items').style.display= "display";		for (var i = 0, len = localStorage.length; i <len; i++)		 {			var makeli = document.createElement('li');			var linksLi = document.createElement('li')			makeList.appendChild(makeli);			var key = localStorage.key(i);			var value = localStorage.getItem(key);			//Convert the string from local storage value back to an object using JSON			var obj = JSON.parse(value);			var makeSubList = document.createElement('ul');			makeli.appendChild(makeSubList);			getImage(obj.adType[1], makeSubList);			for( var n in obj){				var makeSubli = document.createElement('li');				makeSubList.appendChild(makeSubli);				var optSubText = obj[n][0]+" "+obj[n][1];				makeSubli.innerHTML = optSubText;				makeSubList.appendChild(linksLi);						}								makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage		}		

};//Get imagesvar getImages =	function getImage(imgName, makeSubList){		var imageLi = document.createElement('li');		makeSubList.appendChild(imageLi);		var newImage = document.createElement('img');		var setSrc = newImage.setAttribute("src", "images/"+ imgName +".png");		imageLi.appendChild(newImage);				}

var storeData = function(key){	if(!key){		var id = Math.floor(Math.random()*10001);		}else{			id= key;		}				//Gather up all our form field values and store in an object.		//object properties contain array with the form label and input		getSelectedRadio();		userTypeRadio();				var item 				= {};			item.uname			= ["User Name:", $('uname').value];			item.fname			= ["First Name:", $('fname').value];			item.lname			= ["Last Name:", $('lname').value];			item.pword			= ["Password:", $('pword-chk').value];			item.sex			= ["sex:", sexValue];			item.userType		= ["sex:", userType];			item.email			= ["Email:", $('email').value];			item.adType			= ["Ad Type:", $('adType').value];			item.process		= ["Process:",$('process').value];			item.url			= ["Url:", $('url').value];		//Save data into Local Storage: Use Stringify to convert our object to a string.		localStorage.setItem(id, JSON.stringify(item));		alert("You Wish has been Sent!");			
	
}; 

var	deleteItem = function (){	var deleteLink = document.createElement('a');		deleteLink.href = "#";		deleteLink.key = key;		deleteText = "Delete User";		deleteLink.addEventListener("click", deleteItem);		deleteLink.innerHTML = deleteText;		linksLi.appendChild(deleteLink);	};	

					
var clearLocal = function(){	if(localStorage.length == 0){		alert("There is no Data in the Local Storage");	}	else{		localStorage.clear();		alert("All Data has been Cleared.");		window.location.reload();		return false;		}	

},

	//Variable defaults					sexValue;						//errMsg = ge('errors');					//create select Field Element		var makeList = function(){		var formTag= $('form'),			selectLi = $("select");			makeSelect= document.createElement('select'),			makeSelect.setAttribute("id", "group");		for (var i = 0, j=adTypeGroup.length; i < j; i++) {
			var makeOption = document.createElement('option');			var optText = adTypeGroup[i];			makeOption.setAttribute('value', optText);			makeOption.innerHTML = optText;			makeSelect.appendChild(makeOption);
}			selectLi.appendChild(makeSelect);//	},			//Ad Process Type		var processList = function(){		var formTag= $('form'),			selectLi02 = $("select_02");			makeSelect02 = document.createElement('select'),			makeSelect02.setAttribute("id", "process");		for (var i = 0, j=processType.length; i < j; i++) {
			var makeOption02 = document.createElement('option');			var optText02 = processType[i];			makeOption02.setAttribute('value', optText02);			makeOption02.innerHTML = optText02;			makeSelect02.appendChild(makeOption02);
}			selectLi02.appendChild(makeSelect02);	},			//Find a value of selected radio button.	var getSelectedRadio = function (){		var radios = document.forms[0].sex;		for (var i = 0; i < radios.length; i++) {					if(radios[i].checked){				sexValue =	radios[i].value;							}
		}	},	var userTypeRadio = function(){		var radios02 = document.forms[0].userType;		for (var i = 0; i < radios02.length; i++) {					if(radios02[i].checked){				userType =	radios02[i].value;							}
		}	};		
