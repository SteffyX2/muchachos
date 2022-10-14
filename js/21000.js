var message = new Array();
message[0] =  "21000";
message[1] =  "02100";
message[2] =  "00210";
message[3] =  "00021";
message[4] =  "10002";
message[5] =  "21000";
message[6] =  "02100";
message[7] =  "00210";
message[8] =  "00021";
message[9] =  "10002";
message[10] = "21000";
message[11] = "02100";
message[12] = "00210";
message[13] = "00021";
message[14] = "10002";
message[15] = "21000";
var reps = 2;
var speed = 10; var p = message.length;
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
if (s == 1)  { document.title = '[S]'+T+' '; }
if (s == 2)  { document.title = '[x]'+T+' '; }
if (s == 3)  { document.title = '[S]'+T+' '; }
if (s == 4)  { document.title = '[x]'+T+' '; }
if (s == 5)  { document.title = '[S]'+T+' '; }
if (s == 6)  { document.title = '[x]'+T+' '; }
if (s == 7)  { document.title = '[S]'+T+' '; }
if (s == 8)  { document.title = '[x]'+T+' '; }
if (s == 9)  { document.title = '[S]'+T+' '; }
if (s == 10) { document.title = '[x]'+T+' '; }
if (s == 11) { document.title = '[S]'+T+' '; }
if (s == 12) { document.title = '[x]'+T+' '; }
if (s == 13) { document.title = '[S]'+T+' '; }
if (s == 14) { document.title = '[x]'+T+' '; }
if (s == 15) { document.title = '[S]'+T+' '; }
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
