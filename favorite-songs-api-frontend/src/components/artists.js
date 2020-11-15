class Artists {
    constructor() {
        this.adapter = new ArtistsAdapter();
        this.artistDropDown = document.getElementById("filter-dropdown");
        this.fetchAndPopulateDropDown();
    }

    fetchAndPopulateDropDown() {
        this.adapter.getArtists().then(json => this.populateArtistDropDown(json))
    }

    populateArtistDropDown(data) {
        data.sort((a, b) => (a.attributes.name > b.attributes.name) ? 1 : -1)
        for (let artist of data) {
          let option = document.createElement("option")
          option.value = artist.attributes.name
          option.innerHTML = artist.attributes.name
          this.artistDropDown.appendChild(option)
        }
    }
}