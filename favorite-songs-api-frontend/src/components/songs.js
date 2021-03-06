class Songs {
    constructor() {
        this.songs = [];
        this.adapter = new SongsAdapter();
        this.formSubmit = document.getElementById("form-submit");
        this.formButtons = document.getElementById("form-show-buttons");
        this.addSongButton = document.getElementById("add-song");
        this.cardContainer = document.getElementById('song-card-container');
        this.bindEventListeners();
        this.fetchAndLoadSongs();
    }

    fetchAndLoadSongs(){
        this.adapter.getSongs().then(songs => this.createSongs(songs)).then(() => this.addSongsToDom())
    }

    bindEventListeners() {
        this.formSubmit.addEventListener("click", function() {
            event.preventDefault();
            this.addSong();
        }.bind(this))
        this.addSongButton.addEventListener("click", function() {
            this.toggleForm();
            this.toggleButtons();
        }.bind(this))
    }

    createArrayOfSongArtists(artists) {
        let artistArray = [];
        for (let artist of artists) {
          artistArray.push(artist.name);
        }
        return artistArray
    }

    createSongs(songs) {
        for (let song of songs) {
          let artists = this.createArrayOfSongArtists(song.attributes.artists)
          this.songs.push(new Song(song.attributes.title, song.attributes.image_link, song.attributes.song_link, song.attributes.genre, song.attributes.album, artists))
        }
    }

    addSongsToDom() {
        for (let song of this.songs) {
          song.createSongCard()
        }
    }

    addSong() {
        const form = event.target.parentElement
        const artists = form[5].value.split(', ')
        const song = new Song(form[0].value, form[1].value, form[2].value, form[3].value, form[4].value, artists)
        const configurationObject = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "title": form[0].value,
            "image_link": form[1].value,
            "song_link": form[2].value,
            "genre": form[3].value,
            "album": form[4].value,
            "artists": artists
          })
        };
        this.adapter.postSongToApi(configurationObject).then(function(json) {
          song.createSongCard();
          this.toggleButtons();
          this.toggleForm();
        }.bind(this))
    }

    hideOrShowElement(element) {
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
        } else {
          element.className += " hidden";
        }
    }

    toggleForm() {
        const form = this.formSubmit.parentElement;
        this.hideOrShowElement(form);
    }

    toggleButtons() {
        this.hideOrShowElement(this.formButtons);
    }
}


// Adds all the events to the page like clicking add song which toggles the form.
// Adds the ability to save the songs to the page with the addSong() class function