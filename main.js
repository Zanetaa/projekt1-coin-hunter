// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//počáteční skóre

// Panáček do prostřed stránky

/*function priNacteniStranky() {*/

/*let panacek= document.getElementById('panacek');
panacek.style.left= '500px';
panacek.style.top= '260px';


//Náhodné vygenerování mince /vygoogleno: http://www.mendoweb.be/blog/javascript-random-element-position/

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

window.onload = function() {
	var img = document.createElement('img');
	img.setAttribute("style", "position:absolute;");
	img.setAttribute("src", "obrazky/mince.png");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}

//podmínka, kdy se panáček dotkne mince

/*if (panacek=Mince) {

} */

//ovládání panáčka

//onkeydown="priStisknutiSipky(event)"*/

//pokusy ze 4. hodiny

/*let panacek, panacekX

let mince = document.querySelector("mince")
let panacek = document.querySelector("panacek")

panacekX = 50;

function priNacteníStranky() {

	panacek.style.left=panacekX + 'px';
	panacek.style.top='260px';
}

function umistiPanacka () {
	panacek.style.left=panacekX + 'px';
	panacek.style.top='260px';
}

function novaMince() {
	mince.style.left=100 +"px";
	mince.style.top=100+ "px";
	console.log
}

function priStisknutiKlavesy(event) {

if (event.key === "ArrowLeft") {
panacekX -= 10
console.log("do leva");
console.log(panacekX);
}

else if (event.key==="ArrowDown") {
	panacekX=panacekX+10;
	panacek.style.left = panacekX + "px";
}



umistiPanacka();

}

function otestujKolizi() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	}
}*/

//Pokus číslo 3

let panacek, panacekX, panacekY, panacekSirka, panacekVyska
let minnce, minceX, minceY, minceSirka, minceVyska


function priNacteniStranky () {
	panacekX = 420;
	panacekY = 260;

	panacek = document.getElementById("panacek");
	mince =document.getElementById("mince");
	console.log("priNacteniStranky");
	console.log(panacekX);
	umistiPanacka();
	novaMince();
}

function umistiPanacka() {
	panacek.style.left = panacekX + "px";
	panacek.style.top = panacekY+ "px";
	console.log("umistiPanacka");
}

function novaMince() {
	mince.style.left=100 + "px";
	mince.style.top =100 + "px";
	console.log(novaMince)
}

function priStisknutiKlavesy(event) {
	if (event.key === "ArrowLeft") {
		panacekX = panacekX - 10;
		panacek.style.left = panacekX + "px";
		console.log("do leva");
		console.log(panacekX);
	}

	if (event.key === "ArrowRight") {
		panacekX = panacekX + 10;
		panacek.style.left = panacekX + "px";
		console.log("do prava");
		console.log(panacekX);
	}

	if (event.key === "ArrowDown") {
		panacekY = panacekY + 10;
		panacek.style.top = panacekY+ "px";
		console.log("dolu");
		console.log(panacekY);
	}


	if (event.key === "ArrowUp") {
		panacekY = panacekY - 10;
		panacek.style.top = panacekY + "px";
		console.log("nahoru");
		console.log(panacekY);
	}
	umistiPanacka();
}

function otestujKolizi() {
	!( 
		panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY
		)
}

