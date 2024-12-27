
const player = document.getElementById("audio-player")
const playButtons = document.querySelectorAll(".left-playbtn")

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
            }
            else{
                pauseIcon.style.display = "none"
                playIcon.style.display = "block"
                player.pause()
            }
        }else{
            player.src = filePath

            playIcon.style.display = "none"
            pauseIcon.style.display = "block"
            player.play()
        }

    })
});