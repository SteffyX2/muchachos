var message = new Array();
message[0] =  "acetime";
message[1] =  "ace7time";
message[2] =  "acetime";
message[3] =  "ace7time";
message[4] =  "acetime";
message[5] =  "ace7time";
message[6] =  "acetime";
message[7] =  "ace7time";
message[8] =  "acetime";
message[9] =  "ace7time";
message[10] = "acetime";
message[11] = "ace7time";
message[12] = "acetime";
message[13] = "ace7time";
message[14] = "acetime";
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
if (s == 2)  { document.title = '[6]'+T+' '; }
if (s == 3)  { document.title = '[F]'+T+' '; }
if (s == 4)  { document.title = '[6]'+T+' '; }
if (s == 5)  { document.title = '[F]'+T+' '; }
if (s == 6)  { document.title = '[6]'+T+' '; }
if (s == 7)  { document.title = '[F]'+T+' '; }
if (s == 8)  { document.title = '[6]'+T+' '; }
if (s == 9)  { document.title = '[F]'+T+' '; }
if (s == 10) { document.title = '[6]'+T+' '; }
if (s == 11) { document.title = '[F]'+T+' '; }
if (s == 12) { document.title = '[6]'+T+' '; }
if (s == 13) { document.title = '[F]'+T+' '; }
if (s == 14) { document.title = '[6]'+T+' '; }
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
