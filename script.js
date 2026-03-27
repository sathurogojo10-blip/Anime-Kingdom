const animeListContainer = document.getElementById('animeList');
const playerContainer = document.getElementById('player-container');
const videoPlayer = document.getElementById('videoPlayer');
const playingTitle = document.getElementById('playing-title');

// 1. Jikan API එකෙන් Trending Anime ලබා ගැනීම
async function fetchAnime() {
    const res = await fetch('https://api.jikan.moe');
    const data = await res.json();
    displayAnime(data.data);
}

// 2. ඇනිමේ කාඩ් පත පෙන්වීම
function displayAnime(animeList) {
    animeListContainer.innerHTML = '';
    animeList.forEach(anime => {
        const div = document.createElement('div');
        div.className = 'anime-card';
        div.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        div.onclick = () => playAnime(anime.title, "https://www.w3schools.com"); // මෙතැනට සැබෑ ලින්ක් එක දිය යුතුය
        animeListContainer.appendChild(div);
    });
}

// 3. වීඩියෝව ධාවනය කිරීම (SPlayer සඳහා intent එකක් ලෙස සිතන්න)
function playAnime(title, videoUrl) {
    playingTitle.innerText = "Playing: " + title;
    videoPlayer.src = videoUrl;
    playerContainer.style.display = 'block';
    window.scrollTo(0, 0);
}

function closePlayer() {
    playerContainer.style.display = 'none';
    videoPlayer.pause();
}

fetchAnime();
