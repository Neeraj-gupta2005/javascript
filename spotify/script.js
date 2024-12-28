import {songs} from "./data/utils.js"
const player = document.getElementById("audio-player")
const playButtons = document.querySelectorAll(".left-playbtn")

const playbar = document.querySelector(".playbar")
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");
const playbarHeading = document.querySelector(".playbar-heading");
const playbarSubHeading = document.querySelector(".playbar-subheading");



let isPlayingFromLeft = false

let songId;
let currentPlayIcon = null;
let currentPauseIcon = null;


playButtons.forEach((playbutton) => {
    playbutton.addEventListener("click", () => {
        const filePath = playbutton.getAttribute("data-filePath")
        songId = playbutton.getAttribute("data-id")
        const playIcon = document.querySelector(`.play-${songId}`)
        const pauseIcon = document.querySelector(`.pause-${songId}`)
        const songName = songs[songId-1].title
        const songArtist = songs[songId-1].artist
        changeStyle(songId)

        // Reset previous play/pause icons
        if (currentPlayIcon && currentPauseIcon) {
            currentPlayIcon.style.display = "block";
            currentPauseIcon.style.display = "none";
        }

        //update current play/pause icon
        currentPlayIcon = playIcon;
        currentPauseIcon = pauseIcon;

        // toggle play/pause
        if(player.src.includes(filePath)){
            if(player.paused){
                currentPlayIcon.style.display = "none";
                currentPauseIcon.style.display = "block";
                player.play()
                isPlayingFromLeft= true
            }
            else{
                currentPauseIcon.style.display = "none";
                currentPlayIcon.style.display = "block";
                player.pause()
                isPlayingFromLeft = false
            }
        }else{
            player.src = filePath
            currentPlayIcon.style.display = "none";
            currentPauseIcon.style.display = "block";
            player.play()
            isPlayingFromLeft = true
        }

        // how or hide playbar
        if (isPlayingFromLeft === true) {
            playbar.classList.add("show");
            leftSection.style.paddingBottom = "60px";
            rightSection.style.paddingBottom = "60px";
        } else {
            playbar.classList.remove("show");  
            leftSection.style.paddingBottom = "0px";
            rightSection.style.paddingBottom = "0px";
        }




        // this all will be for playbar

        //to change the left playbar song name and artist
        playbarHeading.innerText = songName
        playbarSubHeading.innerText = songArtist

        

        playBarPlayBtn.style.display = isPlayingFromLeft ? "none" : "block";
        playBarPauseBtn.style.display = isPlayingFromLeft ? "block" : "none";

    })
});

const playBarPlayBtn = document.querySelector(".playbar-play-icon")
const playBarPauseBtn = document.querySelector(".playbar-pause-icon")
const previousBtn = document.querySelector(".previous")
const nextBtn = document.querySelector(".next")

function changeStyle(songId){
    if(songId == 1 ){
        previousBtn.style.fill = "#2e2e2e"
        previousBtn.style.pointerEvents = "none"
    }
    else if(songId ==  songs.length){
        nextBtn.style.fill = "#2e2e2e"
        nextBtn.style.pointerEvents = "none"
    }
    else{
        previousBtn.style.fill = "#b3b3b3"
        previousBtn.style.pointerEvents = "auto"
        nextBtn.style.fill = "#b3b3b3"
        nextBtn.style.pointerEvents = "auto"
    }
}


playBarPauseBtn.addEventListener("click",() => {
    if (currentPlayIcon && currentPauseIcon) {
        currentPauseIcon.style.display = "none";
        currentPlayIcon.style.display = "block";
    }

    playBarPauseBtn.style.display = "none"
    playBarPlayBtn.style.display = "block"
    player.pause()

    
})

playBarPlayBtn.addEventListener("click",()=>{
    if (currentPlayIcon && currentPauseIcon) {
        currentPauseIcon.style.display = "block";
        currentPlayIcon.style.display = "none";
    }

    playBarPlayBtn.style.display = "none"
    playBarPauseBtn.style.display = "block"
    player.play()

    
})

previousBtn.addEventListener("click" , ()=>{
    const currentPlayingSongId = songId;
    changeStyle(songId - 1)
    if(currentPlayingSongId > 1){
        const previousSongId = currentPlayingSongId - 1;
        const previousSongIndex = previousSongId - 1;
        let source = songs[previousSongIndex].file
    
        if(player.paused){
            player.src = source
            // changing the icons
            const currentSongPlayIcon = document.querySelector(`.play-${currentPlayingSongId - 1}`)
            const currentSongPauseIcon = document.querySelector(`.pause-${currentPlayingSongId - 1}`)

            currentSongPauseIcon.style.display = "none"
            currentSongPlayIcon.style.display = "block"
            currentPauseIcon =   currentSongPauseIcon
            currentPlayIcon = currentSongPlayIcon
            songId -= 1
        }else{
            player.pause()
            player.src = source
            player.play()
        

            // changing the icons
            const currentSongPlayIcon = document.querySelector(`.play-${currentPlayingSongId}`)
            const currentSongPauseIcon = document.querySelector(`.pause-${currentPlayingSongId}`)

            currentSongPauseIcon.style.display = "none"
            currentSongPlayIcon.style.display = "block"
            
            const previousSongPlayIcon = document.querySelector(`.play-${previousSongId}`)
            const previousSongPauseIcon = document.querySelector(`.pause-${previousSongId}`)

            previousSongPauseIcon.style.display = "block"
            previousSongPlayIcon.style.display = "none"


            currentPauseIcon =  previousSongPauseIcon
            currentPlayIcon = previousSongPlayIcon
            songId -= 1
        }
    }
})


nextBtn.addEventListener("click" , ()=>{
    const currentPlayingSongId = parseInt(songId);
    changeStyle(currentPlayingSongId + 1)
    if(currentPlayingSongId < songs.length){


        const nextSongId = currentPlayingSongId + 1;
        const nextSongIndex = nextSongId - 1;
        
        let source = songs[nextSongIndex].file

        if(player.paused){
            player.src = source
            const currentSongPlayIcon = document.querySelector(`.play-${currentPlayingSongId + 1}`)
            const currentSongPauseIcon = document.querySelector(`.pause-${currentPlayingSongId + 1}`)

            currentSongPauseIcon.style.display = "none"
            currentSongPlayIcon.style.display = "block"
            currentPauseIcon =   currentSongPauseIcon
            currentPlayIcon = currentSongPlayIcon
            songId = currentPlayingSongId + 1
        }else{
            player.pause()
            player.src = source
            player.play()

            // changing the icons
            const currentSongPlayIcon = document.querySelector(`.play-${currentPlayingSongId}`)
            const currentSongPauseIcon = document.querySelector(`.pause-${currentPlayingSongId}`)

            currentSongPauseIcon.style.display = "none"
            currentSongPlayIcon.style.display = "block"
            
            const nextSongPlayIcon = document.querySelector(`.play-${nextSongId}`)
            const nextSongPauseIcon = document.querySelector(`.pause-${nextSongId}`)

            nextSongPauseIcon.style.display = "block"
            nextSongPlayIcon.style.display = "none"


            currentPauseIcon =  nextSongPauseIcon
            currentPlayIcon = nextSongPlayIcon

            songId = currentPlayingSongId + 1
        }
    }
    
})

function formatTime(seconds){
    let minute = Math.floor(seconds / 60);
    let second = Math.floor(seconds % 60);

    return `${minute}:${second}`
}

player.addEventListener("timeupdate" , ()=> {
    const seconds = player.currentTime
    const duration = player.duration

    const currentTime = document.querySelector("#CurrentTime");
    const durationTime = document.querySelector("#durationTime");
    const currentPlayLine = document.querySelector(".current-play-line")


    let width = (seconds/duration) * 100
    currentPlayLine.style.width = `${width}%`

    currentTime.innerText = formatTime(seconds);
    durationTime.innerText = formatTime(duration)


})

const timelineBar = document.querySelector(".play-line");
timelineBar.addEventListener("click", (event) => {
    const rect = timelineBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const timelineWidth = rect.width;

    
    const clickTime = (offsetX / timelineWidth) * player.duration;

    player.currentTime = clickTime;
});

const volumeBar = document.querySelector(".volume-bar");
const volumePerc = document.querySelector("#volume-perc");
const volumeInnerBar = document.querySelector(".current-volume-line");
volumeBar.addEventListener("click", (event) => {
    const rect = volumeBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const timelineWidth = rect.width;
    const volume = Math.min(Math.max(offsetX / timelineWidth, 0), 1); // Clamp between 0 and 1
    player.volume = volume; // Set normalized volume (0 to 1)
    volumeInnerBar.style.width = `${volume * 100}%`
    volumePerc.innerText = `${Math.round(volume * 100)}%`; // Display percentage (0 to 100)

});

// to set volume width when dom conten loaded and also to change the volume text

function setVolumeWidth(){
    volumeInnerBar.style.width = `${player.volume * 100}%`
    volumePerc.innerText = `${Math.round(player.volume * 100)}%` // 
}
document.addEventListener("DOMContentLoaded", () => {
    setVolumeWidth();
})

previousBtn.addEventListener("click" , ()=>{
    playbarHeading.textContent = songs[songId - 1].title
    playbarSubHeading.textContent = songs[songId - 1].artist
})
nextBtn.addEventListener("click" , ()=>{
    playbarHeading.textContent = songs[songId - 1].title
    playbarSubHeading.textContent = songs[songId - 1].artist
})



const mute = document.querySelector("#mute");
const currentVolume = player.volume * 100
let isMute = false
mute.addEventListener("click" , ()=>{
    if(isMute == false){
        player.muted = !player.muted;
        volumePerc.innerText = "0%"
        volumeInnerBar.style.width = "0%"
        mute.style.fill = "#2e2e2e"
        isMute = true
    }
    else{
        player.muted = !player.muted;
        volumePerc.innerText = "0%"
        setVolumeWidth()
        mute.style.fill = "#b3b3b3"
        isMute = false
    }
    
})