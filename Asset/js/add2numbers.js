function calc() {
	let angka = document.querySelectorAll('input');
	let i1 = parseInt(angka[0].value);
	let i2 = parseInt(angka[1].value);
	angka[2].value = parseInt(i1) + parseInt(i2);

	//pesan selesai
	let pesan = document.getElementById('message');
	pesan.textContent = "Selesai";
	//let label = document.querySelector('label');
	//label.textContent= "<==Ini label";
}

let tombol = document.querySelector('button');
tombol.addEventListener('click', calc);