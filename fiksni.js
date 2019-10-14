var message = new Array();
message[0] =  "  okupi Fiksni";
message[1] =  "  xkupi Fiksni";
message[2] =  "  okupi Fiksni";
message[3] =  "  xkupi Fiksni";
message[4] =  "  okupi Fiksni";
message[5] =  "  xkupi Fiksni";
message[6] =  "  okupi Fiksni";
message[7] =  "  xkupi Fiksni";
message[8] =  "  okupi Fiksni";
message[9] =  "  xkupi Fiksni";
message[10] = "  okupi Fiksni";
message[11] = "  xkupi Fiksni";
message[12] = "  okupi Fiksni";
message[13] = "  xkupi Fiksni";
message[14] = "  okupi Fiksni";
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
if (s == 1)  { document.title = '[P] '+T+' '; }
if (s == 2)  { document.title = '[x] '+T+' '; }
if (s == 3)  { document.title = '[P]  '+T+' '; }
if (s == 4)  { document.title = '[x]  '+T+' '; }
if (s == 5)  { document.title = '[P] '+T+' '; }
if (s == 6)  { document.title = '[x] '+T+' '; }
if (s == 7)  { document.title = '[P]  '+T+' '; }
if (s == 8)  { document.title = '[x]  '+T+' '; }
if (s == 9)  { document.title = '[P] '+T+' '; }
if (s == 10) { document.title = '[x] '+T+' '; }
if (s == 11) { document.title = '[P]  '+T+' '; }
if (s == 12) { document.title = '[x]  '+T+' '; }
if (s == 13) { document.title = '[P] '+T+' '; }
if (s == 14) { document.title = '[x] '+T+' '; }
if (s == 15) { document.title = '[P]  '+T+' '; }
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
