class SongsAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/songs"
    }

    getSongs() {
        return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
    }

    postSongToApi(configurationObject) {
        return fetch(this.baseURL, configurationObject)
        .then(response => response.json())
        .catch(error => console.log("Error: " + error))
    }

    getSongByArtist(artist) {
        return fetch(this.baseURL + `/${artist}`).then(response => response.json())
    }
}

// The Fetch Requests for songs and gets the song by the artist.