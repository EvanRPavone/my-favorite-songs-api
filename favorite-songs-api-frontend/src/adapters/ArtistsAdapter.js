class ArtistsAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/artists"
    }

    getArtists() {
        return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
    }
}