// Oregon Trail 1k Competition entry
// 
// Night is falling, how many feet can you travel
// down the trail? Click to turbo boost across the rivers.
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

/* Really nice (but wrong) shape
a.beginPath();
a.arc(100, 150, 20, 3.14, 0, false);
a.arc(100, 200, 30, 3.14, 0, false);
a.fill();
*/

d=document;
c.height=c.width=cx=480;
// river y
ry=240;	
// default fill style
f = a.fillStyle;
pi2 = Math.PI*2;
// wagon x,y ground y
wx = 380;
gy=wy = 172;
// tree x
tx=95;
// score, river x, force x&y
s=rx=fx=fy=0;
// river width, river width divided by 2
rw=30;
rd=rw/2;
// playing
p=1;

b=a.createLinearGradient(0,0,0,cx);
b.addColorStop(0,'#0EF');
b.addColorStop(0.5,'#f8f');
b.addColorStop(0.5,'#5e0');
b.addColorStop(1,'#fff');
a.strokeStyle = '#00F';
	
d.onclick = function(e){
	if(!fy){
		fx=10;
		fy=-15;
	}
};

setInterval(function () {
	if(p){
		++s;
		if(s%500==0){++rw;rd=rw/2;}
		tx=(++tx + fx)% (cx+40);
		rx=(rx>cx+rw)?rx=(-rw*2):++rx;
		rx= (rx+=2)% (cx+rw);
		wy+=fy;
		rx+=(fx*2);
		fx>0?--fx:0;
		if(gy-wy>0) fy+=1; else {fx=fy=0; wy=gy;}
	}
	
	a.fillStyle = b;
	a.fillRect(0, 0, cx, cx);
	
	// Tree
	a.beginPath();
	a.fillStyle = '#FDA';
	a.fillRect(tx-20, 220, 10, 20);
	a.fillStyle = '#0F0';
	a.arc(tx-15, 200, 20, 0, pi2, false);
	a.fill();
	
	// River
	a.beginPath();
	a.lineWidth = rw;
	a.moveTo(rx,ry);
	a.lineTo(rx,ry+20);
	a.stroke();
	
	// Wagaon
	a.fillStyle = '#FEF';
	a.fillRect(wx + 20, wy, 60, 50);
	a.fillStyle = '#E90';
	a.fillRect(wx, wy + 30, 80, 25);
	a.fillStyle = f;
	
	// Wheels
	a.beginPath();
	a.lineWidth = 4;
	wt=wy+50;
	a.arc(wx + 15, wt, 18, 0, 90, 0);
	a.moveTo(wx + 83, wy + 50);
	a.arc(wx + 65, wt, 18, 0, 90, 0);
	a.stroke();
	
	// Score
	a.lineWidth = 1;
	a.strokeText(s+' feet',20,20);
	
	if (wy==gy && rx+rd>=(wx+15) && (rx-rd)<450)p=0;
}, 20);
