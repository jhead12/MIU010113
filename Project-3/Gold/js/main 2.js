//Activity 3
//MIU 0113
//Joshua Head
//DOM Ready
window.addEventListener("DOMContentLoaded", function () {
    //getElementById Function
    function ge(x) {
        var aElement = document.getElementById(x);
        return aElement;
    }
    //create select Field Element
    function makeList() {
        var formTag = document.getElementsByTagName('form'),
            selectLi = ge("select");
        makeSelect = document.createElement('select'),
        makeSelect.setAttribute("id", "group");
        for (var i = 0, j = adTypeGroup.length; i < j; i++) {
            var makeOption = document.createElement('option');
            var optText = adTypeGroup[i];
            makeOption.setAttribute('value', optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    //Ad Process Type
    function processList() {
        var formTag = document.getElementsByTagName('form'),
            selectLi02 = ge("select_02");
        makeSelect02 = document.createElement('select'),
        makeSelect02.setAttribute("id", "process");
        for (var i = 0, j = processType.length; i < j; i++) {
            var makeOption02 = document.createElement('option');
            var optText02 = processType[i];
            makeOption02.setAttribute('value', optText02);
            makeOption02.innerHTML = optText02;
            makeSelect02.appendChild(makeOption02);
        }
        selectLi02.appendChild(makeSelect02);
    }
    //Find a value of selected radio button.
    function getSelectedRadio() {
        var radios = document.forms[0].sex;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                sexValue = radios[i].value;
            }
        }
    }

    function userTypeRadio() {
        var radios02 = document.forms[0].userType;
        for (var i = 0; i < radios02.length; i++) {
            if (radios02[i].checked) {
                userType = radios02[i].value;
            }
        }
    }

    function toggleControls(n) {
        switch (n) {
            case "on":
                ge('contactForm').style.display = "none";
                ge('clear').style.display = "inline";
                ge("displayLink").style.display = "none";
                ge('addNew').style.display = "inline";
                break;
            case "off":
                ge('contactForm').style.display = "block";
                ge('clear').style.display = "inline";
                ge("displayLink").style.display = "inline";
                ge('addNew').style.display = "none";
                ge('items').style.display = "none";
                break;
            default:
                return false;
        }
    }

    function storeData(key) {
        if (!key) {
            var id = Math.floor(Math.random() * 10001);
        } else {
            id = key;
        }
        //Gather up all our form field values and store in an object.
        //object properties contain array with the form label and input
        getSelectedRadio();
        userTypeRadio();
        var item = {};
        item.uname = ["User Name:", ge('uname').value];
        item.fname = ["First Name:", ge('fname').value];
        item.lname = ["Last Name:", ge('lname').value];
        item.pword = ["Password:", ge('pword-chk').value];
        item.sex = ["sex:", sexValue];
        item.userType = ["sex:", userType];
        item.email = ["Email:", ge('email').value];
        item.adType = ["Ad Type:", ge('adType').value];
        item.process = ["Process:", ge('process').value];
        item.url = ["Url:", ge('url').value];
        //Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("You Wish has been Sent!");
    }

    function getData() {
        toggleControls("on");
        if (localStorage.length === 0) {
            alert("There is no data in Local Storage so using default");
            //console.log("getData");
            autoFillData();
        }
        //Write Data from Local Storage to the browser
        var makeDiv = document.createElement('div');
        //console.log("test-MakeDiv");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        var processList = document.createElement('ul');
        makeDiv.appendChild(processList);
        document.body.appendChild(makeDiv);
        ge('items').style.display = "display";
        for (var i = 0, len = localStorage.length; i < len; i++) {
            var makeli = document.createElement('li');
            var linksLi = document.createElement('li')
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert the string from local storage value back to an object using JSON
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            getImage(obj.adType[1], makeSubList);
            for (var n in obj) {
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); //create our edit and Delete buttons for each item in local storage
        }
    }
    //Get images
    function getImage(imgName, makeSubList) {
        var imageLi = document.createElement('li');
        makeSubList.appendChild(imageLi);
        var newImage = document.createElement('img');
        var setSrc = newImage.setAttribute("src", "images/" + imgName + ".png");
        imageLi.appendChild(newImage);
    }
    //AutoFill
    function autoFillData() {
        //The Json object Data is coming from the json.js to from the html
        //Then it is put the data in Local Data
        for (var n in json) {
            var id = Math.floor(Math.random() * 10001);
            localStorage.setItem(id, JSON.stringify(json[n]));
            //console.log("this is the local Storage Test");
        }
    }

    function makeItemLinks(key, linksLi) {
        var editLink = document.createElement('a');
        editLink.href = '#';
        editLink.key = key;
        editText = "Edit User";
        editLink.addEventListener('click', editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        //Line Break
        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);
        //add Delete Linke
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        deleteText = "Delete User";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
    }

    function editItem() {
        //Grab the data from our item from Local Storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        toggleControls("off");
        //console.log("This is the Console Log " + value);
        //Populate the form field with current local storage values
        ge("fname").value = item.fname[1];
        ge('lname').value = item.lname[1];
        ge('pword-chk').value = item.pword[1];
        ge('email').value = item.email[1];
        ge('adType').value = item.adType[1];
        ge('uname').value = item.uname[1];
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
        ge('url').value = item.url[1];
        //Remove the initial listener from the input "save wisher" button
        save.removeEventListener("click", storeData);
        //Change Submit button Value to Edit button
        ge('submit').value = "Edit User";
        var editSubmit = ge('submit');
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
        //Save the key value established in this function is the property event, that could be used when savin the data.
    }

    function deleteItem() {
        var ask = confirm("are you sure you want to delete this Record?");
        if (ask) {
            localStorage.removeItem(this.key);
            window.location.reload();
        } else {
            alert('The records were not deleted')
        }
    }

    function clearLocal() {
        if (localStorage.length === 0) {
            alert("Theres is no data to clear");
        } else {
            localStorage.clear();
            alert("All record were deleted");
            window.location.reload();
            return false;
        }
    }

    function validate(e) {
        //Define the elements to be checked
        var getFname = ge('fname');
        var getLname = ge('lname');
        var getEmail = ge('email');
        var getAdType = ge('adType');
        var getUname = ge('uname');
        var getPword = ge('pword-chk');
        errMsg.innerHTML = "";
        getGroup.style.border = "1px solid black";
        getFname.style.border = "1px solid red";
        getLname.style.border = "1px solid red";
        getEmail.style.border = "1px solid red";
        // get Error messages
        var messageAry = [];
        //First Name Validation
        if (getFname.value === "") {
            var fnameError = "Please enter a First name.";
            getFname.style.border = "1px solid red";
            messageAry.push(fnameError);
        }
        //last Name Validation
        if (getLname.value === "") {
            var lnameError = "Please enter a Last name.";
            getFname.style.border = "1px solid red";
            messageAry.push(lnameError);
        }
        //Email Validation
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+ge/;