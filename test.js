
//    $(window).load(function() {
//    $(".preloader").delay(5000).fadeOut("slow");
//    $("#overlayer").delay(5000).fadeOut("slow");
//    })
onload = function() {
    this.alert('Page Loaded');
}
  
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(function () {
        $("#txtName").keypress(function (e) {
            var keyCode = e.keyCode || e.which;
 
            $("#lblError").html("");
 
            //Regex for Valid Characters i.e. Alphabets and Numbers.
            var regex = /^[A-Za-z0-9]+$/;
 
            //Validate TextBox value against the Regex.
            var isValid = regex.test(String.fromCharCode(keyCode));
			let inputBox = document.getElementById("txtName"); 
			
            if (!isValid) {
                $("#lblError").html("Only Alphabets and Numbers allowed.");
				inputBox.setAttribute("style", "border:5px solid red");
            }else{
				inputBox.setAttribute("style", "border-color: black");
			}
			
            return isValid;
        });
    });

    // var visitor;
	// visitor = prompt ("what is your name");
	// alert("welcome" + visitor);

    // Submit form 
document.getElementById('registerBtn').onclick = function() {
    // alert ('button clicked');
    this.style.color = "blue";
    this.style['background-color'] ="red";
    this.style['transform'] = "translateX(100px)";

    function Person (fname,lname,em,phone,uname,pass){
        this.firstName = fname;
        this.lastName = lname;
        this.email = em;
        this.phoneNumber=phone;
        this.userName = uname;
        this.password = pass;
        this.name = function(){
            return this.firstName + " " + this.lastName;
        }
    };

    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var phone_number = document.getElementById('phone_number').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('myInput').value;
    var error_msg = document.getElementById('error_msg');

    if (first_name == ''){
        error_msg.innerHTML = "First name cannot be empty";
    }else if (last_name == ''){
        error_msg.innerHTML = "Last name cannot be empty";
    }else if (email == ''){
        error_msg.innerHTML = "Email address cannot be empty";
    }else if (phone_number == ''){
        error_msg.innerHTML = "Phone number cannot be empty";
    }else if (username == ''){
        error_msg.innerHTML = "Username cannot be empty";
    }else if (password == ''){
        error_msg.innerHTML = "Password cannot be empty";
    }else{
        error_msg.innerHTML = "";
        var student = new Person (first_name, last_name, email, phone_number, username, password);
        var welcome = document.getElementById('welcome');
        welcome.innerHTML = "<h1> Welcome </h1> " + student.name() + "<br>" + "<strong> Congratulation!</strong> your application has been successfully submitted with the following details: "+ "<br>"+
        "Email Address : "+ student.email + "<br>" +
        "First Name :"+ student.firstName + "<br>" +
        "Last Name :"+ student.lastName + "<br>" +
        "Phone Number :"+ student.phoneNumber + "<br>" +
        "Username:"+ student.userName + "<br>" +
        "Password :"+ student.password + "<br>";
    }
};

var fruit = ["Apple", "orange", "lemon", "suger-cane", "pawpaw"];

var Person = {
    "firstName": "Jamiu",
    "lastName" : "Sanni",
    "dob" : "10/12/2020",
    "eyeColor" : "black"
};

for(var a=0; a<=10; a++){
    console.log(a   );
}

s = 0;
while(s <= 4){
    console.log(s);
    s++;
}

for (x=0; x<=fruit.length; x++){
    console.log( fruit[x] );
}

for(var y in Person){
    console.log( y + " :" + Person[y] );
}

$row = 
$row->firstName;
$row->lastName;
$row->email;
$row->phoneNumber;
$rowToJson = json_encode($row);


