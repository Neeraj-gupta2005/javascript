import { popularArtist, popularAlbums, popularRadio, featuredCharts, playlist, footerData , songs } from './data/utils.js';

let rightSection = document.querySelector(".right-section")

function popularArtistFun() {
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
        return `
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
    return div
}

function popularAlbumsFun() {
    let div = document.createElement("div")
    let html = `
        <div class="right-header popular-albums">
            <h4>Popular albums and singles</h4>
            <p>Show all</p>
        </div>
    `
    div.innerHTML = html
    let artistDiv = document.createElement("div")
    artistDiv.className = "artist popular-albums"

    div.appendChild(artistDiv)

    let artists = popularAlbums.map((artist) => {
        return `
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
    return div
}

function popularRadioFun() {
    let div = document.createElement("div")
    let html = `
        <div class="right-header popular-albums">
            <h4>Popular Radio</h4>
            <p>Show all</p>
        </div>
    `
    div.innerHTML = html
    let artistDiv = document.createElement("div")
    artistDiv.className = "artist popular-albums"

    div.appendChild(artistDiv)

    let artists = popularRadio.map((artist) => {
        return `
            <div class="grid">
                <div class="artist-card">
                    <div class="image">
                        <img src="${artist.src}"
                            alt="${artist.alt}">
                    </div>
                    <div class="text-content">
                        <p>${artist.para}</p>
                    </div>
                </div>
            </div>
        `;
    }).join("")

    artistDiv.innerHTML = artists
    return div
}

function featuredChartsFun() {
    let div = document.createElement("div")
    let html = `
        <div class="right-header popular-albums">
            <h4>Featured Charts</h4>
        </div>
    `
    div.innerHTML = html
    let artistDiv = document.createElement("div")
    artistDiv.className = "artist popular-albums"

    div.appendChild(artistDiv)

    let artists = featuredCharts.map((artist) => {
        return `
            <div class="grid">
                <div class="artist-card">
                    <div class="image">
                        <img src="${artist.src}"
                            alt="${artist.alt}">
                    </div>
                    <div class="text-content">
                        <p>${artist.para}</p>
                    </div>
                </div>
            </div>
        `;
    }).join("")

    artistDiv.innerHTML = artists
    return div
}

function playlistFun() {
    let div = document.createElement("div")
    let html = `
        <div class="right-header popular-albums">
            <h4>Playlist from our editors</h4>
            <p>Show all</p>
        </div>
    `
    div.innerHTML = html
    let artistDiv = document.createElement("div")
    artistDiv.className = "artist popular-albums"

    div.appendChild(artistDiv)

    let artists = playlist.map((artist) => {
        return `
            <div class="grid">
                <div class="artist-card">
                    <div class="image">
                        <img src="${artist.src}"
                            alt="${artist.alt}">
                    </div>
                    <div class="text-content">
                        <p>${artist.para}</p>
                    </div>
                </div>
            </div>
        `;
    }).join("")

    artistDiv.innerHTML = artists
    return div
}

function footerFun() {
    const footerSection = document.createElement("div")
    footerSection.className = "footer"

    // Create the footer content dynamically
    footerData.forEach((section) => {
        const collDiv = document.createElement("div");
        collDiv.className = "coll";

        // Create the <ul> and <h6> elements
        const ul = document.createElement("ul");
        const h6 = document.createElement("h6");
        h6.textContent = section.title;
        ul.appendChild(h6);

        // Loop through the links and add them to the <ul>
        section.links.forEach((link) => {
            const li = document.createElement("li");
            li.textContent = link;
            ul.appendChild(li);
        });

        collDiv.appendChild(ul);
        footerSection.appendChild(collDiv);
    });

    // Icons section
    const iconsDiv = document.createElement("div");
    iconsDiv.className = "icons";

    // Add each button with SVG icon to the iconsDiv
    const buttons = [
        `<button class="home-btn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dCAvla" fill="currentColor" style="color: white;"><path color="white" d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 0 1-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 0 1-.921-.599 2.477 2.477 0 0 1-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 0 1 .92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 0 0-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 0 0 2.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 0 0-.923-1.418A3.928 3.928 0 0 0 13.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z"></path><path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.775a2.668 2.668 0 1 1 0-5.335 2.668 2.668 0 0 1 0 5.335zm4.27-5.978a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92z"></path></svg></button>`,
        `<button class="home-btn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="white"><path d="M13.54 3.889a2.968 2.968 0 0 0 1.333-1.683 5.937 5.937 0 0 1-1.929.738 2.992 2.992 0 0 0-.996-.706 2.98 2.98 0 0 0-1.218-.254 2.92 2.92 0 0 0-2.143.889 2.929 2.929 0 0 0-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 0 1-3.484-.932A8.536 8.536 0 0 1 1.532 2.54a2.993 2.993 0 0 0-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 0 1-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 0 0 1.739 1.048 2.937 2.937 0 0 1-1.365.056 2.94 2.94 0 0 0 1.063 1.5 2.945 2.945 0 0 0 1.77.603 5.944 5.944 0 0 1-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 0 0 5.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 0 0 1.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 0 0 .738-1.988 8.417 8.417 0 0 0 .246-2.429 6.177 6.177 0 0 0 1.508-1.563c-.56.249-1.14.407-1.738.476z"></path></svg></button>`,
        `<button class="home-btn"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="white"><path d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8z"></path></svg></button>`
    ];

    buttons.forEach(buttonHTML => {
        iconsDiv.innerHTML += buttonHTML;
    });

    footerSection.appendChild(iconsDiv);
    return footerSection;

}

function lastPartFun(){
    const lastPart = document.createElement("div")
    lastPart.className = "bottom-part"
    let line = document.createElement("div")
    line.className = "line"
    lastPart.appendChild(line)
    let p = document.createElement("p")
    p.className = "reserved"
    p.textContent = "© 2021 Spotify AB"
    lastPart.appendChild(p)

    return lastPart
}

function getSong(){
    let songDiv = document.getElementById("songs")
    songs.forEach((song) => {
        let playlistDiv = document.createElement("div")
        playlistDiv.className = "first-playlist"
        let html = `
            <div class="number">${song.id}.</div>
            <div class="song-detail">
                <div class="heading">${song.title}</div>
                <div class="sub-heading">${song.artist}</div>
            </div>
            <button class="left-playbtn">
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
            </button>
        `
        playlistDiv.innerHTML += html
        songDiv.appendChild(playlistDiv)
    })
}

rightSection.appendChild(popularArtistFun())
rightSection.appendChild(popularAlbumsFun())
rightSection.appendChild(popularRadioFun())
rightSection.appendChild(featuredChartsFun())
rightSection.appendChild(playlistFun())
rightSection.appendChild(footerFun())
rightSection.appendChild(lastPartFun())
getSong()

