var mymap = L.map('mapid').setView([-6.921980, 107.606940],11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/"> openstreetmap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/"> CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 20,
		id:'mapbox.streets',
		accessToken:
		'pk.eyJ1IjoicmFrYWlxYmFsc3kiLCJhIjoiY2pucXY4MmQ1MDFwOTNwcW1ucDV3cnJwbiJ9.uuQ8RGp41ZzQVuxsp4jTcw'
}).addTo(mymap);

	let lokasi =[-6.957230, 107.712032];
	let sponsor = "GBLA STADIUM"

	var marker = L.marker(lokasi).addTo(mymap)
		.bindPopup(sponsor);

	let place =[{"lokasi": [-6.957230, 107.712032], "sponsor": "GBLA STADIUM"},
				{"lokasi": [-6.910491, 107.673364], "sponsor": "ARCAMANIK STADIUM"},
				{"lokasi": [-6.910275, 107.619710], "sponsor": "SILIWANGI STADIUM"},
				{"lokasi": [-6.916975, 107.629527], "sponsor": "SIDOLIG STADIUM"},
				{"lokasi": [-6.996434, 107.529621], "sponsor": "SIJALAK HARUPAT STADIUM"}];

				for(var i of place) {
					 marker = L.marker(i.lokasi).addTo(mymap)
						.bindPopup(i.sponsor);
				}