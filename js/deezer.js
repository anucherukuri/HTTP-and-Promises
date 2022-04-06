
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
// 		'X-RapidAPI-Key': '0b0dc2c530msh8f8b7e3d91c4b39p18f7d2jsn1302039241ee'
// 	}
// };

// fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

let albums = [];
let error = false;

function searchDeezer(query){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+query, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "0b0dc2c530msh8f8b7e3d91c4b39p18f7d2jsn1302039241ee",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"	
        },
    })
    .then((response) => response.json())    
    .then((data) => {
        //resolved
        console.log("resolved");
        if(data.data){
            const obj = {title: query, albums: data.data}
           albums.push(obj);
           console.log(albums);
           /**
            * [{title:'pink floyd', albums:[{title:'Dark side of the moon', cover:"https://something.png"}]}]
            */
        }else{
            error = true;
        } 
    })
    .catch((err) => {
        //rejected
        console.log("rejected");
        console.error(err);  
        error = true;           
});
}
window.onload=function() {
    const renderLink = document.querySelector("#trending")
    renderLink.addEventListener('click', function(){
        alert('render is clicked');
    })
};

window.onload();

