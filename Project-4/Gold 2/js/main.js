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
//    $('#adType_01').append("<div id=grDiv></div");
//    $('#grDiv').append(("<select id=group></select"))
    $('#select_02').append(function () {
        var makeOptions = document.createElement("option");
        for (var i = 0; i < processType.length; i++) {
            var processTest = processType[i];
            $('#select_02').append('<option value =' + processType[i] + '>' + processType[i] + '</option>');



        }


    }),


    //AdType Group        

    $('#select').append(function () {
        var makeOptions = document.createElement("option");
        for (var i = 0; i < adTypeGroup.length; i++) {

            $('#select').append('<option value =' + adTypeGroup[i] + '>' + adTypeGroup[i] + '</option>');


        }


    })

});

var processType = ["--Choose Process of Advertising--", "Telephone Ads", "Internet  Impressions", "Video Ads"];

var adTypeGroup = ["--Choose A Group--", "Computers & Electronics", "Educational", "Music", "Lifestyle", "Parenting", "Animals & Pets", "Auto & Cycles", "Business & Finance", "Cooking, Food & Beverage", "Entertainment & TV", "Fashion & Style", "Home & Gardening"];
		}
		}
        //The Json object Data is coming from the json.js to from the html
        //Then it is put the data in Local Data
        for (var n in json) {
            var id = Math.floor(Math.random() * 10001);
            localStorage.setItem(id, JSON.stringify(json[n]));
            //console.log("this is the local Storage Test");
        }
    };
else{
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
    };
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