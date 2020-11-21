var message = new Array();
message[0] =  "lice";
message[1] =  "lixe";
message[2] =  "lice";
message[3] =  "lixe";
message[4] =  "lice";
message[5] =  "lixe";
message[6] =  "lice";
message[7] =  "lixe";
message[8] =  "lice";
message[9] =  "lixe";
message[10] = "lice";
message[11] = "lixe";
message[12] = "lice";
message[13] = "lixe";
message[14] = "lice";
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
if (s == 1)  { document.title = '[U]'+T+' '; }
if (s == 2)  { document.title = '[x]'+T+' '; }
if (s == 3)  { document.title = '[U]'+T+' '; }
if (s == 4)  { document.title = '[x]'+T+' '; }
if (s == 5)  { document.title = '[U]'+T+' '; }
if (s == 6)  { document.title = '[x]'+T+' '; }
if (s == 7)  { document.title = '[U]'+T+' '; }
if (s == 8)  { document.title = '[x]'+T+' '; }
if (s == 9)  { document.title = '[U]'+T+' '; }
if (s == 10) { document.title = '[x]'+T+' '; }
if (s == 11) { document.title = '[U]'+T+' '; }
if (s == 12) { document.title = '[x]'+T+' '; }
if (s == 13) { document.title = '[U]'+T+' '; }
if (s == 14) { document.title = '[x]'+T+' '; }
if (s == 15) { document.title = '[U]'+T+' '; }
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
