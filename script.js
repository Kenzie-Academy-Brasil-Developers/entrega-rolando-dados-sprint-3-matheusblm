function dados(){
	let dado1 = Math.floor(Math.random() * 6 + 1)
	let dado2 = Math.floor(Math.random() * 6 + 1)
	return dado1 + dado2
}

function lançamento (){
	let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
	for(jogada = 0; jogada < 1000; jogada++){
	let roll = dados()
		if(roll == 2){
			count[2] += 1
		}
		if(roll == 3){
			count[3] += 1
		}
		if(roll == 4){
			count[4] += 1
		}
		if(roll == 5){
			count[5] += 1
		}
		if(roll == 6){
			count[6] += 1
		}
		if(roll == 7){
			count[7] += 1
		}
		if(roll == 8){
			count[8] += 1
		}
		if(roll == 9){
			count[9] += 1
		}
		if(roll == 10){
			count[10] += 1
		}
		if(roll == 11){
			count[11] += 1
		}	
		if (roll == 12)  {
			count[12] += 1
		}
}
	let randomColor = () => {
	const colors = ["#1F271B", "#003F91", "#6D326D", "#157A6E", "#916953"];
	      
	return colors[Math.floor(Math.random() * 5)];
   	};	
	for(prg = 2; prg <= count.length-1; prg++){
		const body = document.querySelector("body");
		const novo = document.createElement("div");
		novo.classList.add("minhaBarra" + prg);
		novo.append(prg + ": " + count[prg])
		body.appendChild(novo)
		let larguraDaBarra = count[prg] * 2;
		novo.style.width = `${larguraDaBarra}px`;
		novo.style.background =`${randomColor}`
	}

}
lançamento()
