import {songs} from "./data/utils.js"
const player = document.getElementById("audio-player")
const playButtons = document.querySelectorAll(".left-playbtn")

const playbar = document.querySelector(".playbar")
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");
const playbarHeading = document.querySelector(".playbar-heading");
const playbarSubHeading = document.querySelector(".playbar-subheading");



let isPlayingFromLeft = false
let isPlayingFromPlayBar = false

let songId;


playButtons.forEach((playbutton) => {
    playbutton.addEventListener("click", () => {
        const filePath = playbutton.getAttribute("data-filePath")
        songId = playbutton.getAttribute("data-id")
        const playIcon = document.querySelector(`.play-${songId}`)
        const pauseIcon = document.querySelector(`.pause-${songId}`)
        const songName = songs[songId-1].title
        const songArtist = songs[songId-1].artist
        playButtons.forEach((btn) => {
            const otherSongId = btn.getAttribute("data-id");
            const otherPlayIcon = document.querySelector(`.play-${otherSongId}`);
            const otherPauseIcon = document.querySelector(`.pause-${otherSongId}`);
            if (otherPlayIcon && otherPauseIcon) {
                otherPlayIcon.style.display = "block";
                otherPauseIcon.style.display = "none";
            }
        });


        if(player.src.includes(filePath)){
            if(player.paused){
                playIcon.style.display = "none"
                pauseIcon.style.display = "block"
                player.play()
                isPlayingFromLeft= true
            }
            else{
                pauseIcon.style.display = "none"
                playIcon.style.display = "block"
                player.pause()
                isPlayingFromLeft = false
            }
        }else{
            player.src = filePath
            playIcon.style.display = "none"
            pauseIcon.style.display = "block"
            player.play()
            isPlayingFromLeft = true
        }

        // to make playbar hide and show
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

        

        if(isPlayingFromLeft === true){
            playBarPlayBtn.style.display = "none"
            playBarPauseBtn.style.display = "block"
        }else{
            playBarPauseBtn.style.display = "none"
            playBarPlayBtn.style.display = "block"
        }

    })
});

const playBarPlayBtn = document.querySelector(".playbar-play-icon")
const playBarPauseBtn = document.querySelector(".playbar-pause-icon")
const previousBtn = document.querySelector(".previous")
const nextBtn = document.querySelector(".next")

playBarPauseBtn.addEventListener("click",() => {
    const currentPlayingSongId = songId;
    const currentSongPlayIcon = document.querySelector(`.play-${currentPlayingSongId}`)
    const currentSongPauseIcon = document.querySelector(`.pause-${currentPlayingSongId}`)

    currentSongPauseIcon.style.display = "none"
    currentSongPlayIcon.style.display = "block"

    playBarPauseBtn.style.display = "none"
    playBarPlayBtn.style.display = "block"
    player.pause()
    isPlayingFromPlayBar = true;
    
})

playBarPlayBtn.addEventListener("click",()=>{
    const currentPlayingSongId = songId;
    const currentSongPlayIcon = document.querySelector(`.play-${currentPlayingSongId}`)
    const currentSongPauseIcon = document.querySelector(`.pause-${currentPlayingSongId}`)

    currentSongPauseIcon.style.display = "block"
    currentSongPlayIcon.style.display = "none"

    playBarPlayBtn.style.display = "none"
    playBarPauseBtn.style.display = "block"
    player.play()
    isPlayingFromPlayBar = true;
})

previousBtn.addEventListener("click" , ()=>{
    const currentPlayingSongId = songId;
    const previousSongId = currentPlayingSongId - 1;
    const previousSongIndex = previousSongId - 1;
    let source = songs[previousSongIndex].file
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


    isPlayingFromPlayBar = true;
    songId -= 1
})


nextBtn.addEventListener("click" , ()=>{
    const currentPlayingSongId = parseInt(songId);
    console.log(currentPlayingSongId)
    const nextSongId = currentPlayingSongId + 1;
    console.log(nextSongId)
    const nextSongIndex = nextSongId - 1;
    console.log(nextSongIndex)
    let source = songs[nextSongIndex].file
    console.log(source)
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


    isPlayingFromPlayBar = true;
    songId = currentPlayingSongId + 1
})

