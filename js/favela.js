var message = new Array();
message[0] =  "avela";
message[1] =  "av6la";
message[2] =  "avela";
message[3] =  "av6la";
message[4] =  "avela";
message[5] =  "av6la";
message[6] =  "avela";
message[7] =  "av6la";
message[8] =  "avela";
message[9] =  "av6la";
message[10] = "avela";
message[11] = "av6la";
message[12] = "avela";
message[13] = "av6la";
message[14] = "avela";
message[15] = "21000";
var reps = 2;
var speed = 50; var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;
function doTheThing() {
T = message[mC];
A();
}
function A() {
s++;
if (s > 15) { s = 1;}
if (s == 1)  { document.title = '[F]'+T+' '; }
if (s == 2)  { document.title = '[x]'+T+' '; }
if (s == 3)  { document.title = '[F]'+T+' '; }
if (s == 4)  { document.title = '[x]'+T+' '; }
if (s == 5)  { document.title = '[F]'+T+' '; }
if (s == 6)  { document.title = '[x]'+T+' '; }
if (s == 7)  { document.title = '[F]'+T+' '; }
if (s == 8)  { document.title = '[x]'+T+' '; }
if (s == 9)  { document.title = '[F]'+T+' '; }
if (s == 10) { document.title = '[x]'+T+' '; }
if (s == 11) { document.title = '[F]'+T+' '; }
if (s == 12) { document.title = '[x]'+T+' '; }
if (s == 13) { document.title = '[F]'+T+' '; }
if (s == 14) { document.title = '[x]'+T+' '; }
if (s == 15) { document.title = '[F]'+T+' '; }
if (C < (15 * reps)) {
sT = setTimeout("A()", speed);
C++;
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) mC = 0;
sT = null;
doTheThing();
}
}
doTheThing();
