const buton=document.getElementById("buton");
const nume=document.getElementById("nume");
const descriere=document.getElementById("descriere");
const educatie=document.getElementById("educatie");
const pasiuni=document.getElementById("pasiuni")
const poza=document.getElementById("poza");
buton.addEventListener("click", function () {
	nume.textContent= "Ing. Gavra Ana-Miruna";
	descriere.textContent= "DevOps Engineer";
	educatie.innerHTML=<h2>Realizari</h2><p>Absolvent ETTI</p>;
	pasiuni.innerHTML=<h2>Experiente</h2><p>Diplome concursuri</p;
	
	poza.src="poza2.jpg";
	poza.alt="poza alta viata";
	poza.style.opacity="1";
	pagina.style.border="Spx solid black";
	
	pagina.style.backgroundColor="#f2f2f2";
	pagina.style.fontFamily="Arial, Helvetica, dans-serif";
	
} );
const anNastere=document.getElementById("anNastere");
const anCurent = new Date().getFullYear();
const varsta = anCurent - parseInt(anNastere.textContent);
anNastere.onmouseover = function () {
	anNastere.textContent = varsta+"ani";
}
anNastere.onmouseout= function(){
	anNastere.textContent=anCurent-varsta;
}
const submit=document.getElementById("submit");
submit.addEventListener("click", function (event) {
	event.preventDefault();
	const email=document.getElementById("email").value;
	if(email.includes("@")){
		console.log("adresa valida");
		
	}else{
		console.log("adresa invalida");
	}
	
}