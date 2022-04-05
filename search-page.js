
async function loadSongs() {
    let response = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem',{
	"method": "GET",
	"headers": {
		'x-rapidapi-key': '59e5b560f5msh05a5409340843dcp1e2092jsnac5fb9fb794a',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
})

let songsResponse = await response.json();
console.log(songsResponse);
return songsResponse.data;
}
	//  .then(response => response.json())
	//  .then(response => console.log(response))
	//  .catch(err => console.error(err));

