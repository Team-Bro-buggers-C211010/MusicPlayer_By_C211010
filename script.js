let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let singer = document.getElementById("Singer");

// Initialize the progress bar
song.onloadedmetadata = function() {
    progress.max = song.duration;
}

// Update the progress bar while playing
song.addEventListener("timeupdate", function() {
    progress.value = song.currentTime;
});

// Play/Pause function
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("bi-play-fill");
        ctrlIcon.classList.add("bi-pause-fill");
        songImg.classList.add("rotating-border"); // Add the class to start rotation
    } 
    else {
        song.pause();
        ctrlIcon.classList.add("bi-play-fill");
        ctrlIcon.classList.remove("bi-pause-fill");
        songImg.classList.remove("rotating-border"); // Remove the class to stop rotation
    }
}

// Reset the progress bar to 0 when the song ends
song.addEventListener("ended", function() {
    progress.value = 0;
    ctrlIcon.classList.add("bi-play-fill");
    ctrlIcon.classList.remove("bi-pause-fill");
    songImg.classList.remove("rotating-border"); // Remove the class when the song ends
});

// Update the song position when the progress bar changes
progress.oninput = function() {
    song.currentTime = progress.value;
};

// Update the play/pause button based on song state
song.addEventListener("play", function() {
    ctrlIcon.classList.remove("bi-play-fill");
    ctrlIcon.classList.add("bi-pause-fill");
});

song.addEventListener("pause", function() {
    ctrlIcon.classList.add("bi-play-fill");
    ctrlIcon.classList.remove("bi-pause-fill");
});

if(song.play())
{
    setInterval(() =>{progress.value = song.currentTime},500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("bi-pause-fill");
    ctrlIcon.classList.remove("bi-play-fill");
};

// Define an array of songs with their information
const songs = [
    {
      title: "Din Te Raat",
      singer: "Kkartik Malhotra ft. Fukra Insaan",
      imgSrc: "Media/DinTeRaatImg.jpeg",
      audioSrc: "Media/Din Te Raat Song Fukra Insaan, Kkartik Malhotra.mp3",
    },
    // Add more songs as needed
    {
        title: "Tum Mere",
        singer: "Fukra Insaan",
        imgSrc: "Media/Tum mere.jpeg",
        audioSrc: "Media/Tum Mere.mp3",
      },
      {
        title: "Chaand Baaliyan",
        singer: "Aditya A.",
        imgSrc: "Media/Chaand Baaliyan.jpeg",
        audioSrc: "Media/Chaand Baaliyan.mp3",
      },
      {
        title: "Hok Kolorob",
        singer: "Arnob",
        imgSrc: "Media/Hok-Kolorob-Arnob.jpeg",
        audioSrc: "Media/Hok-Kolorob-Arnob.mp3",
      },
      {
        title: "Hariye Jao",
        singer: "ARBOVIRUS",
        imgSrc: "Media/ARBOVIRUS - HARIYE JAO.jpeg",
        audioSrc: "Media/Arbovirus - Hariye Jao.mp3",
      },
  ];
  
  // Initialize the current song index
  let currentSongIndex = 0;
  
  // Function to update the player with the current song
  function updatePlayer() {
    const currentSong = songs[currentSongIndex];
    songTitle.textContent = currentSong.title;
    singer.textContent = currentSong.singer;
    songImg.src = currentSong.imgSrc;
    song.src = currentSong.audioSrc;
  }
  
  // Function to play the next song
  function playForward() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
    song.play();
  }
  
  // Function to play the previous song
  function playBackward() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
    song.play();
  }
  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    const nextSongURL = songs[currentSongIndex];
    song.src = nextSongURL;
    updatePlayer();
    song.play();
  }
  song.addEventListener('ended', playNextSong);
  // Call the initial update to load the first song
  updatePlayer();
