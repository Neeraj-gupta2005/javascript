import {popularArtist , popularAlbums , popularRadio , featuredCharts , playlist} from './data/utils.js';

let rightSection = document.querySelector(".right-section")

let div = document.createElement("div")
let html = `
    <div class="right-header">
        <h4>Popular artists</h4>
        <p>Show all</p>
    </div>
`
div.innerHTML = html
let artistDiv = document.createElement("div")
artistDiv.className = "artist"

div.appendChild(artistDiv)

let artists = popularArtist.map((artist) => {
    return`
        <div class="grid">
            <div class="artist-card">
                <div class="image">
                    <img src="${artist.src}"
                        alt="${artist.alt}">
                </div>
                <div class="text-content">
                    <h6>${artist.heading}</h6>
                    <p>${artist.para}</p>
                </div>
            </div>
        </div>
    `;
}).join("")

artistDiv.innerHTML = artists

