/**** Set Time ***************************************************************/

function addZero(i) {
if (i < 10) { //add zero in front of date number < 10
i = "0" + i;
}
return i;
}

function time() {
    document.getElementById("date").innerHTML= "Please show of !!";
/*n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
h = addZero(n.getHours());
min = addZero(n.getMinutes());
s = addZero(n.getSeconds());
date = h + ":" + min + ":" + s + " | " + m + "/" + d + "/" + y;
document.getElementById("date").innerHTML= "huhhh";
setTimeout("time()", 1000);*/

}