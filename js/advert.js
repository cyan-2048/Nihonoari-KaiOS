var enabledAds = "true";
function displayAd(){
	
getKaiAd({
	publisher: 'f76b7e40-cd70-4a3a-b98f-f03ad252de83',
	app: 'Nihonoari',
	slot: 'Nihonoari',
	onerror: err => console.error('Custom catch:', err),
	onready: ad => {
		// Ad is ready to be displayed
		// calling 'display' will display the ad
		ad.call('display');
		ad.on('close', () => document.querySelector("#kopi").focus() );
	}
})


}