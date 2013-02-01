$('#home').on('pageinit', function () {
    //code needed for home page goes here
});

$('#signUp').on('pageinit', function () {



    var resetButton = $("#reset").validate();
    resetButton.resetForm();
    var validator = $('form').validate();


    $("form").validate({

        invalidHandler: function (e, validator) {
            var errors = validator.numberOfInvalids();
           console.log(invalidHandler);
        },
    
		//Store Data 
    });




    //Marketing Type Group        
    $('#adType_01').append("<div id=grDiv></div");
    $('#grDiv').append(("<select id=group></select"))
    $('#group').append(function () {
        var makeOptions = document.createElement("option");
        for (var i = 0; i < processType.length; i++) {
            var processTest = processType[i];
            $('#group').append('<option value =' + processType[i] + '>' + processType[i] + '</option>');



        }


    }),


    //AdType Group        
    $('#adType').append("<div id=grDiv1></div");
    $('#grDiv1').append(("<select id=group01></select"))
    $('#group01').append(function () {
        var makeOptions = document.createElement("option");
        for (var i = 0; i < adTypeGroup.length; i++) {

            $('#group01').append('<option value =' + adTypeGroup[i] + '>' + adTypeGroup[i] + '</option>');


        }


    })

});

var processType = ["--Choose Process of Advertising--", "Telephone Ads", "Internet  Impressions", "Video Ads"];

var adTypeGroup = ["--Choose A Group--", "Computers & Electronics", "Educational", "Music", "Lifestyle", "Parenting", "Animals & Pets", "Auto & Cycles", "Business & Finance", "Cooking, Food & Beverage", "Entertainment & TV", "Fashion & Style", "Home & Gardening"];var storeData = function(key){	if(!key){		var id = Math.floor(Math.random()*10001);		}else{			id= key;		}				//Gather up all our form field values and store in an object.		//object properties contain array with the form label and input		getSelectedRadio();		userTypeRadio();				var item 				= {};			item.uname			= ["User Name:", $('#uname').val()];			item.fname			= ["First Name:", $('#fname').val()];			item.lname			= ["Last Name:", $('#lname').val()];			item.pword			= ["Password:", $('#pword-chk').val()];			item.sex			= ["sex:", sexValue];			item.userType		= ["sex:", userType];			item.email			= ["Email:", $('#email').val()];			item.adType			= ["Ad Type:", $('#adType').val()];			item.process		= ["Process:",$('#process').val()];			item.url			= ["Url:", $('#url').val()];		//Save data into Local Storage: Use Stringify to convert our object to a string.		localStorage.setItem(id, JSON.stringify(item));		alert("Your Data is Stored!");							};		//Find a value of selected radio button.	var getSelectedRadio = function(){		var radios = document.forms[0].sex;		for (var i = 0; i < radios.length; i++) {					if(radios[i].checked){				sexValue =	radios[i].value;							}
		}	};	var userTypeRadio = function(){		var radios02 = document.forms[0].userType;		for (var i = 0; i < radios02.length; i++) {					if(radios02[i].checked){				userType =	radios02[i].value;							}
		}	};	var autoFillData =function() {
        //The Json object Data is coming from the json.js to from the html
        //Then it is put the data in Local Data
        for (var n in json) {
            var id = Math.floor(Math.random() * 10001);
            localStorage.setItem(id, JSON.stringify(json[n]));
            //console.log("this is the local Storage Test");
        }
    };       var clearLocal= function(){		if (localStorage.length === 0) {			alert("Theres is no data to clear");				}		
else{		localStorage.clear();		alert("All record were deleted");		window.location.reload();		return false;	}};var getData = function(){				if(localStorage.length === 0){			alert("There is no data in Local Storage so using default");			//console.log("getData");			autoFillData();		}				//Write Data from Local Storage to the browser		var getPage = $('#data-1');		var makeDiv = document.createElement('div');		//console.log("test-MakeDiv");		makeDiv.setAttribute("id", "items");		var makeList = document.createElement('ul');		makeDiv.appendChild(makeList);		var processList = document.createElement('ul');		makeDiv.appendChild(processList);		getPage.appendChild(makeDiv);						$('items').style.display= "display";		for (var i = 0, len = localStorage.length; i <len; i++)		 {			var makeli = document.createElement('li');			var linksLi = document.createElement('li')			makeList.appendChild(makeli);			var key = localStorage.key(i);			var value = localStorage.getItem(key);			//Convert the string from local storage value back to an object using JSON			var obj = JSON.parse(value);			var makeSubList = document.createElement('ul');			makeli.appendChild(makeSubList);			getImage(obj.adType[1], makeSubList);			for( var n in obj){				var makeSubli = document.createElement('li');				makeSubList.appendChild(makeSubli);				var optSubText = obj[n][0]+" "+obj[n][1];				makeSubli.innerHTML = optSubText;				makeSubList.appendChild(linksLi);						}								makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage		}		};	  var deleteItem = function() {
        var ask = confirm("are you sure you want to delete this Record?");
        if (ask) {
            localStorage.removeItem(this.key);
            window.location.reload();
        } else {
            alert('The records were not deleted')
        }
    };

   var clearLocal= function() {
        if (localStorage.length === 0) {
            alert("Theres is no data to clear");
        } else {
            localStorage.clear();
            alert("All record were deleted");
            window.location.reload();
            return false;
        }
    };          var editItem =function() {
        //Grab the data from our item from Local Storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        toggleControls("off");
        //console.log("This is the Console Log " + value);
        //Populate the form field with current local storage values
        $("#fname").value = item.fname[1];
        $('#lname').value = item.lname[1];
        $('#pword-chk').value = item.pword[1];
        $('#email').value = item.email[1];
        $('#adType').value = item.adType[1];
        $('#uname').value = item.uname[1];
        var radios = document.forms[0].sex;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].value == "Male" && item.sex[1] == "Male") {
                radios[i].setAttribute("checked", "checked");
            } else if (radios[i].value == "Female" && item.sex[1] == "Female") {
                radios[i].setAttribute("checked", "checked");
            }
        }
        var radios02 = document.forms[0].userType;
        for (var i = 0; i < radios02.length; i++) {
            if (radios02[i].value == "Publisher" && item.userType[1] == "Publisher") {
                radios02[i].setAttribute("checked", "checked");
            } else if (radios02[i].value == "Advertiser" && item.userType[1] == "Advertiser") {
                radios02[i].setAttribute("checked", "checked");
            }
        }
        $('url').value = item.url[1];
        //Remove the initial listener from the input "save wisher" button
        save.removeEventListener("click", storeData);
        //Change Submit button Value to Edit button
        ge('submit').value = "Edit User";
        var editSubmit = ge('submit');
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
        //Save the key value established in this function is the property event, that could be used when savin the data.
    };	