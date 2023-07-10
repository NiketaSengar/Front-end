const music=new Audio('/audio/Humdard.mp3');
music.play();

let playing=document.getElementById('playing')
playing.addEventListener('click',() =>{
if (music.pause() || music.currentTime<=0) {
    music.play()
    playing.classList.add('bi bi-pause')
    playing.classList.remove('bi bi-play-fill')
} 
else {
    music.pause()
    playing.classList.remove('bi bi-pause')
    playing.classList.add('bi bi-play-fill')
}
})

let left_arrow = document.getElementById('popular_song_left_arrow')
let right_arrow = document.getElementById('popular_song_right_arrow')
let x = document.getElementsByClassName('pop_songs')[0]

right_arrow.addEventListener('click', () => {
    x.scrollLeft += 200
})
left_arrow.addEventListener('click', () => {
    x.scrollLeft -= 200
})


let artist_left_arrow = document.getElementById('pop_artist_left_arrow')
let artist_right_arrow = document.getElementById('pop_artist_right_arrow')
let y = document.getElementsByClassName('pop_artist')[0]

artist_left_arrow.addEventListener('click', () => {
    y.scrollLeft -= 200
})

artist_right_arrow.addEventListener('click', () => {
    y.scrollLeft += 200
})