function initMap ( ) {
	let ulutu = { lat: -23.710, lng: -46.563 };
	let map = new google.maps.Map( $("#maps"), {
		zoom: 4,
		center: ulutu
	} );

	let marker = new google.maps.Marker( {
		position: ulutu,
		map: map
	} );

}