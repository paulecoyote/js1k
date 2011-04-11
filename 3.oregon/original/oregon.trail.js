// Oregon Trail 1k Competition entry
// 
// By @PaulECoyote

// Shim gives us this:
// var b = document.body;
// var c = document.getElementsByTagName('canvas')[0];
// var a = c.getContext('2d');

// Colours that happen to be words in geek
// Off white colour: #BADDAD
// Dirt green: #707707
// Light Brown: #FA11

c.height=c.width=480;
var defaultFill = a.fillStyle;
var time = 0;

var bg=a.createLinearGradient(0,0,0,480);
bg.addColorStop(0,'#00ABEB');
bg.addColorStop(0.5,'#fff');
bg.addColorStop(0.5,'#26C000');
bg.addColorStop(1,'#fff');
a.fillStyle = bg;
a.fillRect(0, 0, 480, 480);

wx = 380;
wy = 172;
a.fillStyle = '#FEF';

//a.strokeRect(wagon.px, wagon.py, 60, 50);
a.fillRect(wx + 20, wy, 60, 50);
a.fillStyle = '#FA1';
a.fillRect(wx, wy + 30, 80, 25);
a.fillStyle = defaultFill;

//Wheels
a.beginPath();
a.lineWidth = 4;
a.arc(wx + 15, wy + 50, 18, 0, 90, 0);
a.moveTo(wx + 83, wy + 50);
a.arc(wx + 65, wy + 50, 18, 0, 90, 0);
a.stroke();

a.beginPath();
a.arc(100, 100, 20, 3.14, 1.6, false);
a.fill();

setInterval(function () {

}, 20);

