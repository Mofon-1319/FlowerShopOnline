function IsValidCardNumber() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var number = document.getElementById("cardNumber").value;
    var res = regex.test(number);
    if (!res) {
        document.getElementById("errorNumber").style.display = "inline";
    }
    else {
        document.getElementById("errorNumber").style.display = "none";
    }
}

function IsValidCCV() {
    var ccv = document.getElementById("ccv").value;
    var regex = /^[0-9]{3}/;
    if (!regex.test(ccv)) {
        document.getElementById("errorCCV").style.display = "inline";
    }
    else {
        document.getElementById("errorCCV").style.display = "none";
    }
}

function IsValidDate(){
    var Month = document.getElementById("month").selectedIndex;
    var Year = document.getElementById("year").selectedIndex;
    if(Month==0||Year==0)
    {
        document.getElementById("errorDate").style.display = "inline";
    }
    else{
        document.getElementById("errorDate").style.display="none";
    }
}

function IsValidName() {
    var regex = /^[a-zA-Z ]+$/;
    var name = document.getElementById("customerName").value;
    if (!regex.test(name)) {
        document.getElementById("errorName").style.display = "inline";
    }
    else {
        document.getElementById("errorName").style.display = "none";
    }
}

function IsValidAddress() {

    var address = document.getElementById("address").value;
    var regex = /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/;
    var houseAddress = regex.test(address);
    if (!houseAddress) {
        document.getElementById("errorAddress").style.display = "inline";
    }
    else {
        document.getElementById("errorAddress").style.display = "none";
    }
}

function IsValidFirstAddress() {

    var address = document.getElementById("firstAddress").value;
    var regex = /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/;
    var houseAddress = regex.test(address);
    if (!houseAddress) {
        document.getElementById("errorFirstAddress").style.display = "inline";
    }
    else {
        document.getElementById("errorFirstAddress").style.display = "none";
    }
}

function IsValidSecondAddress() {

    var address = document.getElementById("secondAddress").value;
    var regex = /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/;
    var houseAddress = regex.test(address);
    if (!houseAddress) {
        document.getElementById("errorSecondAddress").style.display = "inline";
    }
    else {
        document.getElementById("errorSecondAddress").style.display = "none";
    }
}

function IsValidTown() {
    var townName = document.getElementById("town").value;
    var regex = /^[A-Za-z]+$/;
    if (!townName.match(regex)) {
        document.getElementById("errorTown").style.display = "inline";
    }
    else {
        document.getElementById("errorTown").style.display = "none";
    }
}

function IsValidRegion() {
    var regionName = document.getElementById("region").value;
    var regex = /^[a-zA-Z]+$/;
    if (!regionName.match(regex)) {
        document.getElementById("errorRegion").style.display = "inline";
    }
    else {
        document.getElementById("errorRegion").style.display = "none";
    }
}

function IsValidCountry() {
    var countryName = document.getElementById("country").selectedIndex;
    if (countryName == 0) {
        document.getElementById("errorCountry").style.display = "inline";
    }
    else{
        document.getElementById("errorCountry").style.display = "none";
    }
}

function IsValidPhone() {
    var phoneNo = document.getElementById("phone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phoneNo.tests(regex)) {
        document.getElementById("errorPhone").style.display = "inline";
    }
    else {
        document.getElementById("errorPhone").style.display = "none";
    }
}

function IsValidFax() {
    var faxNo = document.getElementById("fax").value;
    var regex = /^\+?[0-9]{6,}$/;
    if (!faxNo.test(regex)) {
        document.getElementById("errorFax").style.display = "inline";
    }
    else {
        document.getElementById("errorFax").style.display = "none";
    }
}

function IsValidZip() {
    var zipcode = document.getElementById("zip").value;
    var regex = /^[0-9]{6}/;
    if (!zipcode.match(regex)) {
        document.getElementById("errorZip").style.display = "inline";
    }
    else {
        document.getElementById("errorZip").style.display = "none";
    }
}

function Validate() {

    var isCard = true;
    var card = document.getElementById("cardNumber").value;
   
    if (card == "") {
        document.getElementById("cardNumber").style.borderColor="red";
        isCard=false;
    }
     else 
     {
        var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        var res = regex.test(card);
        if (!res) 
        {
            document.getElementById("errorNumber").style.display = "inline";
            isCard=false;
        }
        else 
        {
            document.getElementById("errorNumber").style.display = "none";
            isCard=true;
        }
        document.getElementById("cardNumber").style.borderColor = "aqua";
    }


    var isCCV=true;
    var code = document.getElementById("ccv").value;
    if(code == ""){
        document.getElementById("ccv").style.borderColor = "red";
        isCCV=false;
    }
    else{
        var regex = /^[0-9]{3}/;
        if (!regex.test(code)) {
            document.getElementById("errorCCV").style.display = "inline";
            isCCV=false;
        }
        else {
            isCCV=true;
            document.getElementById("errorCCV").style.display = "none";
        }
        document.getElementById("ccv").style.borderColor = "aqua";
    }

    var isDate=true;
    var Month = document.getElementById("month").selectedIndex;
    var Year = document.getElementById("year").selectedIndex;
    if(Month==0 && Year==0)
    {
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("year").style.borderColor = "red";
        isDate=false;
    }
    else
    {
        isDate=true;
        document.getElementById("month").style.borderColor = "aqua";
        document.getElementById("year").style.borderColor = "aqua";
    }

    var isName=true;
    var name = document.getElementById("customerName").value;
    if(name=="")
    {
        document.getElementById("customerName").style.borderColor = "red";
        isName=false;
    }
    else{
        var regex = /^[a-zA-Z ]+$/;
        if (!regex.test(name)) {
            document.getElementById("errorName").style.display = "inline";
            isName=false;
        }
        else {
            isName=true;
            document.getElementById("errorName").style.display = "none";
        }
        document.getElementById("customerName").style.borderColor = "aqua";
    }

    var isAddress=true;
    var address=document.getElementById("address").value;
    if(address=="")
    {
        document.getElementById("address").style.borderColor = "red";
        isAddress=false;
    }
    else{
        var regex = /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/;
        var houseAddress = regex.test(address);
        if (!houseAddress) {
            document.getElementById("errorAddress").style.display = "inline";
            isAddress=false;
        }
        else {
            isAddress=true;
            document.getElementById("errorAddress").style.display = "none";
        }
        document.getElementById("address").style.borderColor = "aqua";
    }

    var isTown=true;
    var city = document.getElementById("town").value;
    if(city=="")
    {
        document.getElementById("town").style.borderColor = "red";
        isTown=false;
    }
    else{
        var regex = /^[a-zA-Z]+$/;
        if (!city.match(regex)) {
            document.getElementById("errorTown").style.display = "inline";
            isTown=false;
        }
        else {
            isTown=true;
            document.getElementById("errorTown").style.display = "none";
        }
        document.getElementById("town").style.borderColor = "aqua";
    }

    var isZip = true;
    var zipcode = document.getElementById("zip").value;
    if(zipcode=="")
    {
        document.getElementById("zip").style.borderColor="red";
        isZip=false;
    }
    else{
        var regex = /^\d{6}$/;
        if (!zipcode.match(regex)) {
            document.getElementById("errorZip").style.display = "inline";
            isZip=false;
        }
        else {
            isZip=true;
            document.getElementById("errorZip").style.display = "none";
        }
        document.getElementById("zip").style.borderColor="aqua";
    }

    var isCountry=true;
    var country = document.getElementById("country").selectedIndex;
    if(country==0)
    {
        document.getElementById("country").style.borderColor = "red";
        isCountry=false;
    }
    else
    {
        isCountry=true;
        document.getElementById("country").style.borderColor = "aqua";
    }

    var isEmail=true;
    var emailId = document.getElementById("email").value;
    if(emailId=="")
    {
        document.getElementById("email").style.borderColor="red";
        isEmail=false;
    }
    else{
        isEmail=true;
        document.getElementById("email").style.borderColor="aqua";
    }


    if(isCard && isCCV && isName && isDate && isCountry && isEmail && isZip && isTown && isAddress)
    {
        alert("Payment Successful");
    }
    else
    {
        alert("Enter all required fields");
    }
}