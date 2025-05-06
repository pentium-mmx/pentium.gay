const apiKey = 'f07853ea36de32e0d19816858df4b5ea'; // Replace with your Last.fm API key
const username = 'koltontheshek'; // Replace with your Last.fm username
const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;

async function fetchNowPlaying() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Get the most recent track
        const track = data.recenttracks.track[0];
        const isNowPlaying = track['@attr'] && track['@attr'].nowplaying;

        // Extract track details
        const artist = track.artist['#text'];
        const title = track.name;
        const albumArt = track.image[2]['#text']; // Medium-sized album art

        // Update the box content
        const box = document.querySelector('.mainbox1 .text1');
        box.innerHTML = `
            <div class="titlebar">
                <div class="title-left">
                    <img src="images/placeholder.png" alt="icon" class="title-icon">
                    <h2>what am i listening to?</h2>
                </div>
                <div class="win98-buttons">
                    <button class="wbutton">_</button>
                    <button class="wbutton">▢</button>
                    <button class="wbutton">X</button>
                </div>
            </div>
            <div class="now-playing">
                <img src="${albumArt}" alt="Album Art" class="album-art">
                <p><strong>${title}</strong> by <em>${artist}</em></p>
                ${isNowPlaying ? '<p>Currently Playing</p>' : '<p>Last Played</p>'}
            </div>
        `;
    } catch (error) {
        console.error('Error fetching data from Last.fm:', error);
    }
}

// Call the function to fetch now playing data
fetchNowPlaying();