import {songs} from "./data/utils.js"
const player = document.getElementById("audio-player")
const playButtons = document.querySelectorAll(".left-playbtn")

const playbar = document.querySelector(".playbar")
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");

const playbarHeading = document.querySelector(".playbar-heading");
const playbarSubHeading = document.querySelector(".playbar-subheading");
const playBarPlayBtn = document.querySelector(".playbar-play-icon")
const playBarPauseBtn = document.querySelector(".playbar-pause-icon")


let isPlayingFromLeft = false
let isPlayingFromPlayBar = false
playButtons.forEach((playbutton) => {
    playbutton.addEventListener("click", () => {
        const filePath = playbutton.getAttribute("data-filePath")
        const songId = playbutton.getAttribute("data-id")
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
        if (isPlayingFromLeft === true && !isPlayingFromPlayBar) {
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


playBarPauseBtn.addEventListener("click" ,() => {

    isPlayingFromPlayBar = isPlayingFromPlayBar ? false : true;

})