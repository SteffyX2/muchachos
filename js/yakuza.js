var message = new Array();
message[0] =  "akuza";
message[1] =  "aku7a";
message[2] =  "akuza";
message[3] =  "aku7a";
message[4] =  "akuza";
message[5] =  "aku7a";
message[6] =  "akuza";
message[7] =  "aku7a";
message[8] =  "akuza";
message[9] =  "aku7a";
message[10] = "akuza";
message[11] = "aku7a";
message[12] = "akuza";
message[13] = "aku7a";
message[14] = "akuza";
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
if (s == 1)  { document.title = '[Y]'+T+' '; }
if (s == 2)  { document.title = '[x]'+T+' '; }
if (s == 3)  { document.title = '[Y]'+T+' '; }
if (s == 4)  { document.title = '[x]'+T+' '; }
if (s == 5)  { document.title = '[Y]'+T+' '; }
if (s == 6)  { document.title = '[x]'+T+' '; }
if (s == 7)  { document.title = '[Y]'+T+' '; }
if (s == 8)  { document.title = '[x]'+T+' '; }
if (s == 9)  { document.title = '[Y]'+T+' '; }
if (s == 10) { document.title = '[x]'+T+' '; }
if (s == 11) { document.title = '[Y]'+T+' '; }
if (s == 12) { document.title = '[x]'+T+' '; }
if (s == 13) { document.title = '[Y]'+T+' '; }
if (s == 14) { document.title = '[x]'+T+' '; }
if (s == 15) { document.title = '[Y]'+T+' '; }
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
