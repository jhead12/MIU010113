<<<<<<< HEAD
//Joshua Head//1301$('#home').on('pageinit', function(){
	//code needed for home page goes here					
});	$('#adPage').on('pageinit', function(){
	//code needed for home page goes here		$('#clear').click(function(){clearLocal()});	$("#displayLink").click(function(){getData()});		
});	//$("#error").bind( "mobileinit", function(){
//   $.mobile.dialog.prototype.options.initSelector = "div.error";
//});
		
$('#signUp').on('pageinit', function(){
		 var resetButton = $("#reset").validate();
    			resetButton.resetForm();    	    			    			
		var myForm = $('#contactForm');
		    myForm.validate({
									invalidhandler: function(myForm, validator){					var errors = myForm.numberOfInvalids();					if (errors){						var message = errors == 1						? 'You missed 1 filed. It has been highlighted'						: 'you miss' + errors + ' fields. They have been highlighted';						$('div.error span').html(message);						$('div.error').show();											}else{						$('div.error').hide();						}													},					rules:{				firstname: 'required',				lastname: 'required',				username:	'required',				password:	'required',				price: 'required',				process:	'required',				group:		'required',					startdate:	'required',				email:	'required'															},			messages:{				firstname: "Please enter your first Name",				lastname:	'Please enter your Last Name',				username:	'Please enter a Username',				password: 'Please enter a password',				price: 'Please enter a price range',				process: 'Please Enter a Marketing Type',				group:	'Please Enter a AdType',				startdate: 'Please enter a start date',				email:	'Please Enter an Email Address'																},																		
			submitHandler: function(myForm) {
		var data = $('form').serializeArray();
			storeData(data);			//console.log(data);							
		}				
	});
	
	//any other code needed for adPage page goes here		$('#select_02').append(function () {
=======
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
>>>>>>> refs/heads/gh-pages
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
<<<<<<< HEAD
	
});
          

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autoFillData = function (){		//The Json object Data is coming from the json.js to from the html		//Then it is put the data in Local Data		for(var n in json){			var id = Math.floor(Math.random()*10001);			localStorage.setItem(id, JSON.stringify(json[n]));			//console.log("this is the local Storage Test");		}	};

var getData = function(){				if(localStorage.length === 0){			alert("There is no data in Local Storage so using default");			//console.log("getData");			autoFillData();		}				//Write Data from Local Storage to the browser				var makeList = $('#data').append("<div id="+"items"+">"+"</div>");					$('#items').css("style", "display");		for (var i = 0, len = localStorage.length; i <len; i++)		 {			var makeli = document.createElement('li');			var linksLi = document.createElement('li')			makeList.append(makeli);			var key = localStorage.key(i);			var value = localStorage.getItem(key);			//Convert the string from local storage value back to an object using JSON			var obj = JSON.parse(value);			var makeSubList = document.createElement('ul');						makeli.appendChild(makeSubList);			getImage(obj.adType[1], makeSubList);			for( var n in obj){				var makeSubli = document.createElement('li');				makeSubList.appendChild(makeSubli);				var optSubText = obj[n][0]+" "+obj[n][1];				makeSubli.innerHTML = optSubText;				makeSubList.appendChild(linksLi);						}								makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage		}		};

var storeData = function(data){			var id = Math.floor(Math.random()*10001);				localStorage.setItem(id, JSON.stringify(data));		alert("Your Data is Stored!");			
}; 
=======

});

var processType = ["--Choose Process of Advertising--", "Telephone Ads", "Internet  Impressions", "Video Ads"];
>>>>>>> refs/heads/gh-pages

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
<<<<<<< HEAD
    };    var getSelectedRadio = function(){		var radios = document.forms[0].sex;		for (var i = 0; i < radios.length; i++) {					if(radios[i].checked){				sexValue =	radios[i].value;							}
		}	};	var userTypeRadio = function(){		var radios02 = document.forms[0].userType;		for (var i = 0; i < radios02.length; i++) {					if(radios02[i].checked){				userType =	radios02[i].value;							}
		}	}	    

var processType = ["--Choose Process of Advertising--", "Telephone Ads", "Internet  Impressions", "Video Ads"];

var adTypeGroup = ["--Choose A Group--", "Computers & Electronics", "Educational", "Music", "Lifestyle", "Parenting", "Animals & Pets", "Auto & Cycles", "Business & Finance", "Cooking, Food & Beverage", "Entertainment & TV", "Fashion & Style", "Home & Gardening"];var getImage = function(imgName, makeSubList){		var imageLi = document.createElement('li');		makeSubList.appendChild(imageLi);		var newImage = document.createElement('img');		var setSrc = newImage.setAttribute("src", "images/"+ imgName +".png");		imageLi.appendChild(newImage);				};	var makeItemLinks = function (key, linksLi){//	var editLink = document.createElement('a');//		editLink.href = '#signUp';//		editLink.key = key;//		//		editText = "Edit User";//		editLink.addEventListener('click', editItem);//		editLink.innerHTML = editText;//		linksLi.appendChild(editLink);//				//Line Break				var breakTag = document.createElement('br');		linksLi.appendChild(breakTag);				//add Delete Linke	var deleteLink = document.createElement('a');		deleteLink.href = "#";		deleteLink.key = key;		deleteText = "Delete User";		deleteLink.addEventListener("click", deleteItem);		deleteLink.innerHTML = deleteText;		linksLi.appendChild(deleteLink);	};var editItem =	function (){		//Grab the data from our item from Local Storage		var value = localStorage.getItem(this.key);		var item = JSON.parse(value);						//console.log("This is the Console Log " + value);		//Populate the form field with current local storage values		$("#fname").value = item.fname[1];		$('#lname').value = item.lname[1];		$('#pword-chk').value = item.pword[1];		$('#email').value = item.email[1];		$('#adType').value = item.adType[1];			$('#uname').value = item.uname[1];		$('#url').value = item.url[1];				var radios = document.forms[0].sex;		for(var i = 0; i < radios.length; i++){					if (radios[i].value == "Male" && item.sex[1] == "Male"){				radios[i].setAttribute("checked", "checked");							}else if(radios[i].value == "Female" && item.sex[1] == "Female"){				radios[i].setAttribute("checked", "checked");							}		}				var radios02 = document.forms[0].userType;		for(var i = 0; i < radios02.length; i++){					if (radios02[i].value == "Publisher" && item.userType[1] == "Publisher"){				radios02[i].setAttribute("checked", "checked");							}else if(radios02[i].value == "Advertiser" && item.userType[1] == "Advertiser"){				radios02[i].setAttribute("checked", "checked");							}		}													//Remove the initial listener from the input "save data" button		$('submit').off("click", storeData);		//Change Submit button Value to Edit button		$('submit').value = "Edit User";		var editSubmit = $('submit');		editSubmit.on("click", validate);		editSubmit.key= this.key;		//Save the key value established in this function is the property event, that could be used when savin the data.				};
=======
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
>>>>>>> refs/heads/gh-pages
