
export const getAllTopChart = async (query)=>{
    const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=8`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c4f920a2bmsh9df10d15ac2f0dep1fc722jsn6528d3dd99c2',
            'X-RapidAPI-Host':'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json()
        let id=[];
        
        for(let album of result.albums.items) {
            id.push(album.data.uri)
        } 
        return id;
    
    } catch (error) {
        console.error(error);
    }
}

// export const getAllTopChart = async (query) => {
//     const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=8`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '6c4f920a2bmsh9df10d15ac2f0dep1fc722jsn6528d3dd99c2',
//             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         const albums = result.albums.items.map(album => ({
//             nombre: album.name,
//             imagen: album.images[0].url, // URL de la imagen del álbum
//             spotifyUrl: album.external_urls.spotify // URL del álbum en Spotify
//         }));
//         return albums;
//     } catch (error) {
//         console.error(error);
//     }
// };
