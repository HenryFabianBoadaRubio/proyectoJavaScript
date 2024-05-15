/*ESTO ES EL DEL PROFESOR*/
// class myframe extends HTMLElement{
//     id
//     constructor(id){
//         super();
//         this.attachShadow({mode: "open"});
//     }
//     connectedCallback(){
//         this.shadowRoot.innerHTML = /*html*/`
//             <iframe class="spotify-iframe" width="454" height="690" src="https://open.spotify.com/embed/album/${this.id}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
//         `
//     }
//     static get observedAttributes(){
//         return ["uri"];
//     }
//     attributeChangedCallback(name,old,now){
//         let[nameUri, album, id] = now.split(":")
//         this.id = id;
//     }
// }
// customElements.define("my-frame",myframe)
// import {getAllTopChart} from "./modules/top-chart.js"



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**********************************************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////
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
/**********************************************************************************************************************/

// let cancionContainer = document.querySelector(".album__canciones");
// let youMyLike = document.querySelector(".canciones__youmay");

// // Array de álbumes predeterminados (puedes agregar más según tus necesidades)
// const albumesPredeterminados = [
//     "34jqKGS3XSMznpvtCwh9so",
//     "5w4BxSdTSlYUQcVRSa8Nxq",
//     "0fSaofDMk7H5ZUJ98SH5Uu",
//     "7ot6ebVthlYG3wXzLaZ5NF",

// ];

// // Mostrar los álbumes predeterminados inicialmente
// albumesPredeterminados.forEach(idAlbum => {
//     cancionContainer.innerHTML += `
//         <div class="iframe-wrapper">
//             <iframe  style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//         </div> 
//     `;
// });

// // import {getAllTopChart} from  "./modules/now-playing.js"
// import {getAllTopChart} from "./modules/top-chart.js"

// let buscadores = document.querySelectorAll ("input")

// buscadores[0].addEventListener("keyup", async function(event) {
//     if (event.key == "Enter") {
//         cancionContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos resultados

//         const query = event.target.value; // Obtener el valor del campo de búsqueda
//         const canciones = await getAllTopChart(query);

//         if (canciones.length === 0) {
//             // Mostrar un mensaje si no se encontraron canciones
//             cancionContainer.innerHTML = "<p>No se encontraron resultados</p>";
//         } else {
//             for (let cancion of canciones){
//                 let idAlbum = cancion.split(":")[2];
//                 cancionContainer.innerHTML += `
//                 <div class="iframe-wrapper">
//                     <iframe  style="border-radius:12px" src="https://open.spotify.com/embed/album/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//                 </div> 
//                 `;
//             }
//         }
//         console.log(canciones);
//     }
// });




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
/**********************************************************************************************************************/

// // Obtener una referencia al contenedor de canciones
// let cancionesContainer = document.querySelector(".pistas__totales");

// // Importar la función para obtener todas las pistas de la lista
// import { getAllListTracks } from "./modules/track.list.js";

// // Función para mostrar canciones predeterminadas
// async function mostrarCancionesPredeterminadas() {
//     // Lista de IDs de canciones predeterminadas
//     const cancionesPredeterminadas = ["0IPD4hNAGIjVDBTHfVdv8o", "65DUocb3eZpJHN5AsVgKmT", "2OQJLR0GbgHXq2GG7lEaqr"]; // Reemplaza con tus IDs reales

//     // Mostrar las canciones predeterminadas en el contenedor
//     for (let idAlbum of cancionesPredeterminadas) {
//         cancionesContainer.innerHTML += `
//             <div class="iframe-wrapper">
//                 <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//             </div>
//         `;
//     }
// }

// // Llamar a la función para mostrar canciones predeterminadas cuando la página se cargue
// document.addEventListener("DOMContentLoaded", async function() {
//     await mostrarCancionesPredeterminadas();
// });

// // Obtener referencias a los campos de búsqueda
// let buscador = document.querySelectorAll("input");

// // Agregar un event listener para el campo de búsqueda
// buscador[2].addEventListener("keyup", async function(event) {
//     if (event.key === "Enter") {
//         cancionesContainer.innerHTML = ""; // Limpiar el contenedor de canciones

//         // Obtener el valor del campo de búsqueda
//         const query = event.target.value;

//         // Obtener las pistas de la lista basadas en la búsqueda
//         const playlists = await getAllListTracks(query);

//         // Mostrar las pistas obtenidas en el contenedor
//         for (let playlist of playlists) {
//             let idAlbum = playlist.split(":")[2];
//             cancionesContainer.innerHTML += `
//                 <div class="iframe-wrapper">
//                     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${idAlbum}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//                 </div>
//             `;
//         }
//         console.log(playlists);
//     }
// });