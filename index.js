import './app.scss';

const lyricsContainer = document.getElementById('lyrics');
const artistOutput = document.getElementById('artistOutput');
const titleOutput = document.getElementById('titleOutput');
const submitBtn = document.getElementById('submitBtn');

function getLyrics(artist, title) {
    fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title)
        .then((resp) => resp.json())
        .then(function (data) {
            let lyrics = data.lyrics;
            lyricsContainer.innerHTML = lyrics;
            artistOutput.innerHTML = artist;
            titleOutput.innerHTML = title;
        });
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let artistInput = document.getElementById('artist').value;
    let titleInput = document.getElementById('title').value;

    getLyrics(artistInput, titleInput);
});
