function check() {
var c= 0
var q1= document.quiz.question1.value;
var q2= document.quiz.question2.value;
var q3= document.quiz.question3.value;
var q4= document.quiz.question4.value;
var q5= document.quiz.question5.value;
var q6= document.quiz.question6.value;
var q7= document.quiz.question7.value;
var q8= document.quiz.question8.value;
var q9= document.quiz.question9.value;
var q10= document.quiz.question10.value;
var q11= document.quiz.question11.value;
if(q1=="Operating system") {c++}
if(q2=="Animation/movie file") {c++}
if(q3=="Animation/movie file") {c++}
if(q4=="Field") {c++}
if(q5=="David filo & jerry yang") {c++}
if(q6=="Database") {c++}
if(q7=="System file") {c++}
if(q8=="Fluorescent Multilayer Disc") {c++}
if(q9=="44.1 KHZ") {c++}
if(q10=="Mcdonalds screensaver") {c++}
if(q11=="Secure Socket Layer") {c++}
document.getElementById("result").innerHTML="you get score"+ " "+c+" "+ "out of 11"
}