$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#signUp').on('pageinit', function(){
		 var resetButton = $("#reset").validate();
    			resetButton.resetForm();    			    			
		var myForm = $('form');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);			console.log(data);
		}
	});
	
	//any other code needed for adPage page goes here		$('#select_02').append(function () {
        var makeOptions = document.createElement("option");
        for (var i = 0; i < processType.length; i++) {
            var processTest = processType[i];
            $('#select_02').append('<option value =' + processType[i] + '>' + processType[i] + '</option>');


        }


    });            $('#select').append(function () {
        var makeOptions = document.createElement("option");
        for (var i = 0; i < adTypeGroup.length; i++) {

            $('#select').append('<option value =' + adTypeGroup[i] + '>' + adTypeGroup[i] + '</option>');


        }


    })
	
});
          

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){				if(localStorage.length === 0){			alert("There is no data in Local Storage so using default");			//console.log("getData");			autoFillData();		}				//Write Data from Local Storage to the browser		var getPage = $('#data-1');		var makeDiv = document.createElement('div');		//console.log("test-MakeDiv");		makeDiv.setAttribute("id", "items");		var makeList = document.createElement('ul');		makeDiv.appendChild(makeList);		var processList = document.createElement('ul');		makeDiv.appendChild(processList);		getPage.appendChild(makeDiv);						$('items').style.display= "display";		for (var i = 0, len = localStorage.length; i <len; i++)		 {			var makeli = document.createElement('li');			var linksLi = document.createElement('li')			makeList.appendChild(makeli);			var key = localStorage.key(i);			var value = localStorage.getItem(key);			//Convert the string from local storage value back to an object using JSON			var obj = JSON.parse(value);			var makeSubList = document.createElement('ul');			makeli.appendChild(makeSubList);			getImage(obj.adType[1], makeSubList);			for( var n in obj){				var makeSubli = document.createElement('li');				makeSubList.appendChild(makeSubli);				var optSubText = obj[n][0]+" "+obj[n][1];				makeSubli.innerHTML = optSubText;				makeSubList.appendChild(linksLi);						}								makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage		}		};

var storeData = function(data){	if(!key){		var id = Math.floor(Math.random()*10001);		}else{			id = key;		}		//		Gather up all our form field values and store in an object.//		object properties contain array with the form label and input		getSelectedRadio();		userTypeRadio();				var item 				= {};			item.uname			= ["User Name:", $('#uname').val()];			item.fname			= ["First Name:", $('#fname').val()];			item.lname			= ["Last Name:", $('#lname').val()];			item.pword			= ["Password:", $('#pword-chk').val()];			item.sex			= ["sex:", sexValue];			item.userType		= ["sex:", userType];			item.email			= ["Email:", $('#email').val()];			item.adType			= ["Ad Type:", $('#adType').val()];			item.process		= ["Process:",$('#process').val()];			item.url			= ["Url:", $('#url').val()];//		Save data into Local Storage: Use Stringify to convert our object to a string.		localStorage.setItem(id, JSON.stringify(item));		alert("Your Data is Stored!");	
}; 

var	deleteItem = function () {
        var ask = confirm("are you sure you want to delete this Record?");
        if (ask) {
            localStorage.removeItem(this.key);
            window.location.reload();
        } else {
            alert('The records were not deleted')
        }
    };
					
var clearLocal = function () {
        if (localStorage.length === 0) {
            alert("Theres is no data to clear");
        } else {
            localStorage.clear();
            alert("All record were deleted");
            window.location.reload();
            return false;
        }
    };    var getSelectedRadio = function(){		var radios = document.forms[0].sex;		for (var i = 0; i < radios.length; i++) {					if(radios[i].checked){				sexValue =	radios[i].value;							}
		}	};	var userTypeRadio = function(){		var radios02 = document.forms[0].userType;		for (var i = 0; i < radios02.length; i++) {					if(radios02[i].checked){				userType =	radios02[i].value;							}
		}	}	    

var processType = ["--Choose Process of Advertising--", "Telephone Ads", "Internet  Impressions", "Video Ads"];

var adTypeGroup = ["--Choose A Group--", "Computers & Electronics", "Educational", "Music", "Lifestyle", "Parenting", "Animals & Pets", "Auto & Cycles", "Business & Finance", "Cooking, Food & Beverage", "Entertainment & TV", "Fashion & Style", "Home & Gardening"];
