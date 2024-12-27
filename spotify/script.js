
const player = document.getElementById("audio-player")
const playButtons = document.querySelectorAll(".left-playbtn")

const playbar = document.querySelector(".playbar")
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");


let isPlaying = false
playButtons.forEach((playbutton) => {
    playbutton.addEventListener("click", () => {
        const filePath = playbutton.getAttribute("data-filePath")
        const songId = playbutton.getAttribute("data-id")
        const playIcon = document.querySelector(`.play-${songId}`)
        const pauseIcon = document.querySelector(`.pause-${songId}`)

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
                isPlaying = true
            }
            else{
                pauseIcon.style.display = "none"
                playIcon.style.display = "block"
                player.pause()
                isPlaying = false
            }
        }else{
            player.src = filePath
            playIcon.style.display = "none"
            pauseIcon.style.display = "block"
            player.play()
            isPlaying = true
        }

        // to make playbar hide and show
        // if (isPlaying === true) {
        //     playbar.classList.add("show");
        //     leftSection.style.paddingBottom = "60px";
        //     rightSection.style.paddingBottom = "60px";
        // } else {
        //     playbar.classList.remove("show");  
        //     leftSection.style.paddingBottom = "0px";
        //     rightSection.style.paddingBottom = "0px";
        // }


    })
});

