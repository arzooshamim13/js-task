console.log('Hello World');

// Chapter 1 Alerts
function one() {
    console.log('hello')
    //question no 1
    alert('My Name Is Arzoo Shamim');
    //question no 1
    //question no 2
    alert('My Name Is Arzoo' + '\n' + 'My Father Name Is Shamim')
    //question no 2

    // question no 3
    alert('I Am here.....')
    // question no 3
}
// Chapter 1 Is Completed


// Chapter 2 Variable And String
function two() {

    var username;

    var myName = 'Arzoo Shamim';


    var message;


    message = 'Hello World';


    alert(message);


    var studentName = 'Arzoo Shamim';
    var studentAge = 14;
    var studentClass = 'Web Development';
    var studentEmail = 'nabeelqadri021@gmail.com';


    alert('Student Name: ' + studentName);
    alert('Student Age: ' + studentAge);
    alert('Student Class: ' + studentClass);
    alert('Student Email: ' + studentEmail);

}
// Chapter 2 Is Completed


// Chapter 3 Variable And Numbers
function three(){
    var age = 14;
alert("Your age is " + age);

var visitCount = 1;
if (localStorage.getItem("visitCount")) {
    visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
}
localStorage.setItem("visitCount", visitCount);
alert("You have visited this site " + visitCount + " time(s)");

var birthYear = 2010;
alert("My birth year is " + birthYear);

var visitorName = "Imtiaz";
var productTitle = "Clothes"; 
var quantity = 5;

alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

}

// Chapter 3 Is Completed