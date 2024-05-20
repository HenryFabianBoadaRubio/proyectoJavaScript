
/*ESTA PARTE SI FUNCIONA!*/
// let cancionContainer = document.querySelector(".album__canciones");

// // import {getAllTopChart} from  "./modules/now-playing.js"
// import {getAllTopChart} from "./modules/top-chart.js"

// let buscadores = document.querySelectorAll ("input")

// buscadores[0].addEventListener("keyup", async function(event) {
//     if (event.key == "Enter") {
//         cancionContainer.innerHTML="";
//         const query = event.target.value; // Obtener el valor del campo de búsqueda
//         const canciones = await getAllTopChart(query);
//         for (let cancion of canciones){
//             let idAlbum = cancion.split(":")[2];
//             cancionContainer.innerHTML+= `
//             <div class="iframe-wrapper">
//                 <iframe  style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//             </div> 
//             `

//         } // Llamar a la función allGetTrack con la consulta de búsqueda
//         console.log( canciones);
//     }
// });
/*ESTA PARTE SI FUNCIONA!*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**********************************************************************************************************************/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MODIFICACION NUEVA ULTIMO CODIGO FUNCIONAL!

let cancionContainer = document.querySelector(".album__canciones");
let youMayContainer = document.querySelector(".canciones__youmay");

// Array de álbumes predeterminados (puedes agregar más según tus necesidades)
const albumesPredeterminados = [
    "34jqKGS3XSMznpvtCwh9so",
    "5w4BxSdTSlYUQcVRSa8Nxq",
    "0fSaofDMk7H5ZUJ98SH5Uu",
    "7ot6ebVthlYG3wXzLaZ5NF",
];
// array para youmay
const albumesPredeterminados2 = [
    "2X6WyzpxY70eUn3lnewB7d",
    "4jox3ip1I39DFC2B7R5qLH",
    "1yjQhgZzBmfdS0CTj6xQ2h",
    "3XeEBV0owMhwHmyLfaMxwg",
];

// Mostrar los álbumes predeterminados inicialmente
albumesPredeterminados.forEach(idAlbum => {
    const iframeHTML = `
        <div class="iframe-wrapper">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 
    `;
    cancionContainer.innerHTML += iframeHTML;
});
albumesPredeterminados2.forEach(idAlbum => {
    const iframeHTML = `
        <div class="iframe-wrapper">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 
    `;
    youMayContainer.innerHTML += iframeHTML;
});

// import {getAllTopChart} from "./modules/now-playing.js"
import {getAllTopChart} from "./modules/top-chart.js";

let buscadores = document.querySelectorAll("input");

buscadores[0].addEventListener("keyup", async function(event) {
    if (event.key === "Enter") {
        cancionContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos resultados
        youMayContainer.innerHTML = "";  // Limpiar el contenedor adicional

        const query = event.target.value; // Obtener el valor del campo de búsqueda
        const canciones = await getAllTopChart(query);

        if (canciones.length === 0) {
            // Mostrar un mensaje si no se encontraron canciones
            cancionContainer.innerHTML = "<p>No se encontraron resultados</p>";
            youMayContainer.innerHTML = "<p>No se encontraron resultados</p>";
        } else {
            const mitad = Math.ceil(canciones.length / 2);

            // Agregar la primera mitad de los resultados a cancionContainer
            canciones.slice(0, mitad).forEach(cancion => {
                let idAlbum = cancion.split(":")[2];
                cancionContainer.innerHTML += `
                    <div class="iframe-wrapper">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div> 
                `;
            });

            // Agregar la segunda mitad de los resultados a youMayContainer
            canciones.slice(mitad).forEach(cancion => {
                let idAlbum = cancion.split(":")[2];
                youMayContainer.innerHTML += `
                    <div class="iframe-wrapper">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div> 
                `;
            });
        }
        console.log(canciones);
    }
});



/*PARTE DERECHA DE LA WEB*/

// let cancionesContainer = document.querySelector(".pistas__totales");

// // import {getAllTopChart} from  "./modules/now-playing.js"
// import {getAllListTracks} from "./modules/track.list.js"

// let buscador = document.querySelectorAll ("input")

// buscador[2].addEventListener("keyup", async function(event) {
//     if (event.key == "Enter") {
//         cancionesContainer.innerHTML="";
//         const query = event.target.value; // Obtener el valor del campo de búsqueda
//         const playlists = await getAllListTracks(query);
//         for (let playlist of playlists){
//              let idAlbum = playlist.split(":")[2];
//             cancionesContainer.innerHTML+= `
//             <div class="iframe-wrapper"> 
//                         <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//                     </div>
//             `;
//         }
//         console.log(playlists);
//     }
// });
/*FIN PARTE DERECHA DE LA WEB*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**********************************************************************************************************************/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PARTE DERECHA LISTA CANCIONES
let cancionesContainer = document.querySelector(".pistas__totales");

// Importar la función para obtener todas las pistas de la lista
import { getAllListTracks } from "./modules/track.list.js";

// Función para mostrar canciones predeterminadas
async function mostrarCancionesPredeterminadas() {
    // Lista de IDs de canciones predeterminadas
    const cancionesPredeterminadas = ["0IPD4hNAGIjVDBTHfVdv8o", "65DUocb3eZpJHN5AsVgKmT", "2OQJLR0GbgHXq2GG7lEaqr"]; // Reemplaza con tus IDs reales

    // Mostrar las canciones predeterminadas en el contenedor
    for (let idAlbum of cancionesPredeterminadas) {
        cancionesContainer.innerHTML += `
            <div class="iframe-wrapper">
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        `;
    }
}

// Llamar a la función para mostrar canciones predeterminadas cuando la página se cargue
document.addEventListener("DOMContentLoaded", async function() {
    await mostrarCancionesPredeterminadas();
});

// Obtener referencias a los campos de búsqueda
let buscador = document.querySelectorAll("input");

// Agregar un event listener para el campo de búsqueda
buscador[2].addEventListener("keyup", async function(event) {
    if (event.key === "Enter") {
        cancionesContainer.innerHTML = ""; // Limpiar el contenedor de canciones

        // Obtener el valor del campo de búsqueda
        const query = event.target.value;

        // Obtener las pistas de la lista basadas en la búsqueda
        const playlists = await getAllListTracks(query);

        // Comprobar si se encontraron pistas
        if (playlists.length === 0) {
            cancionesContainer.innerHTML = "<p>No se encontraron resultados.</p>";
        } else {
            // Mostrar las pistas obtenidas en el contenedor
            for (let playlist of playlists) {
                let idAlbum = playlist.split(":")[2];
                cancionesContainer.innerHTML += `
                    <div class="iframe-wrapper">
                        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                `;
            }
        }
        console.log(playlists);
    }
});



///PARTE MEDIO
import { allGetTrack } from "./modules/now-playing.js";

let unicancionContainer = document.querySelector(".album__main__reproductor");

// Obtener referencia al campo de búsqueda
let buscadorr = document.querySelectorAll("input")[1]; // Asumiendo que es el tercer input

// Agregar un event listener para el campo de búsqueda
buscadorr.addEventListener("keyup", async function(event) {
    if (event.key === "Enter") {
        unicancionContainer.innerHTML = ""; // Limpiar el contenedor de canciones

        // Obtener el valor del campo de búsqueda
        const query = event.target.value;

        // Obtener la pista basada en la búsqueda
        const cancionUri = await allGetTrack(query);

        if (cancionUri) {
            // Extraer el ID de la canción de la URI
            let idCancion = cancionUri.split(":")[2];

            // Mostrar la pista obtenida en el contenedor
            unicancionContainer.innerHTML = `
                <div class="iframe-wrapper">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idCancion}" width="350" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            `;
            console.log(cancionUri);
        } else {
            unicancionContainer.innerHTML = "<p>No se encontraron resultados</p>";
        }
    }
});

// Cargar una canción predeterminada cuando la página se cargue
window.addEventListener("DOMContentLoaded", async function() {
    // Obtener la URI de la canción predeterminada (reemplaza 'uri_cancion_predeterminada' con la URI real)
    const uriCancionPredeterminada = 'spotify:trac123456789k:2q7DY7bBua9e9Aygmz8XmB'; // URI de la canción predeterminada
    // Extraer el ID de la canción predeterminada de la URI
    const idCancionPredeterminada = uriCancionPredeterminada.split(":")[2];

    // Mostrar la canción predeterminada en el contenedor
    unicancionContainer.innerHTML = `
        <div class="iframe-wrapper">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idCancionPredeterminada}" width="350" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `;
});