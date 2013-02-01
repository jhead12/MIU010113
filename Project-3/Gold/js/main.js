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
            if (errors) {
                var message = errors == 1 ? "You missed 1 Field." : 'You missed' + errors + 'errors.'
                $('div.errors span').html(message);
                $('div.error').popup();
            } else {
                $('div.errors').hide();

            }

        },
    

        submitHandler: function (data) {        	var myForm = $('form');        	var data = myForm.serializeArray();
            myForm.submit(           		storeData(data); 				console.log('test');            );            
        }
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

var adTypeGroup = ["--Choose A Group--", "Computers & Electronics", "Educational", "Music", "Lifestyle", "Parenting", "Animals & Pets", "Auto & Cycles", "Business & Finance", "Cooking, Food & Beverage", "Entertainment & TV", "Fashion & Style", "Home & Gardening"];var storeData = function(key){	if(!key){		var id = Math.floor(Math.random()*10001);		}else{			id= key;		}				//Gather up all our form field values and store in an object.		//object properties contain array with the form label and input		getSelectedRadio();		userTypeRadio();				var item 				= {};			item.uname			= ["User Name:", $('#uname').val()];			item.fname			= ["First Name:", $('#fname').val()];			item.lname			= ["Last Name:", $('#lname').val()];			item.pword			= ["Password:", $('#pword-chk').val()];			item.sex			= ["sex:", sexValue];			item.userType		= ["sex:", userType];			item.email			= ["Email:", $('#email').val()];			item.adType			= ["Ad Type:", $('#adType').val()];			item.process		= ["Process:",$('#process').val()];			item.url			= ["Url:", $('#url').val()];		//Save data into Local Storage: Use Stringify to convert our object to a string.		localStorage.setItem(id, JSON.stringify(item));		alert("You Wish has been Sent!");							};		//Find a value of selected radio button.	var getSelectedRadio = function(){		var radios = document.forms[0].sex;		for (var i = 0; i < radios.length; i++) {					if(radios[i].checked){				sexValue =	radios[i].value;							}
		}	};	var userTypeRadio = function(){		var radios02 = document.forms[0].userType;		for (var i = 0; i < radios02.length; i++) {					if(radios02[i].checked){				userType =	radios02[i].value;							}
		}	};