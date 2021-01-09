var message = new Array();
message[0] =  "";
message[1] =  "";
message[2] =  "";
message[3] =  "";
message[4] =  "";
message[5] =  "";
message[6] =  "1312";
message[7] =  "";
message[8] =  "";
message[9] =  "";
message[10] = "";
message[11] = "";
message[12] = "";
message[13] = "";
message[14] = "";
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
if (s == 1)  { document.title = '[TM]'+T+' '; }
if (s == 2)  { document.title = '[xY]'+T+' '; }
if (s == 3)  { document.title = '[TM]'+T+' '; }
if (s == 4)  { document.title = '[xy]'+T+' '; }
if (s == 5)  { document.title = '[TM]'+T+' '; }
if (s == 6)  { document.title = '[Xy]'+T+' '; }
if (s == 7)  { document.title = '[TM]'+T+' '; }
if (s == 8)  { document.title = '[XY]'+T+' '; }
if (s == 9)  { document.title = '[TM]'+T+' '; }
if (s == 10) { document.title = '[xY]'+T+' '; }
if (s == 11) { document.title = '[TM]'+T+' '; }
if (s == 12) { document.title = '[Xy]'+T+' '; }
if (s == 13) { document.title = '[TM]'+T+' '; }
if (s == 14) { document.title = '[xy]'+T+' '; }
if (s == 15) { document.title = '[TM]'+T+' '; }
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
