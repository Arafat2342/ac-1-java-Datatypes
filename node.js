function Datatype(){
var a = 4;
var b = 8;
var c;
var d = null
;
{
    let c = 8;
    const d = 2;
    document.getElementById("data").innerHTML = "The value of c inside the scope is: " + c;
    document.getElementById("data1").innerHTML = "The value of d inside the scope is: " + d + 1;

}
document.getElementById("data2").innerHTML = "The value of c is: " + c;
document.getElementById("data3").innerHTML = "The value of a is: " + a;
document.getElementById("data4").innerHTML = "The value of b is: " + b;
document.getElementById("data5").innerHTML = "The value of d is: " + d;

}