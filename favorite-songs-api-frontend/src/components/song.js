class Song {
    constructor(title, imageLink, songLink, artists) {
        this.title = title;
        this.imageLink = imageLink;
        this.songLink = songLink;
        this.artists = artists;
    }
  
    createSongCard() {
      const card = document.createElement('div')
      card.className = "card"
      const img = document.createElement('img')
      img.src = this.imageLink
      card.appendChild(img)
      const cardInfo = document.createElement('div')
      cardInfo.className = "card-info"
      const title = document.createElement('h1')
      title.innerHTML = this.title
      cardInfo.appendChild(title)
      const artHeader = document.createElement('h3')
      artHeader.innerHTML = `Artist: ${this.artists}`
      cardInfo.appendChild(artHeader)
      const ul = document.createElement('ul')
      cardInfo.appendChild(ul)
      const footer = document.createElement('div')
      footer.className = "card-footer"
      const link = document.createElement('a')
      link.href = this.songLink
      link.innerHTML = "View Song on Youtube"
      footer.appendChild(link)
      card.appendChild(cardInfo)
      card.appendChild(footer)
      document.getElementById('song-card-container').appendChild(card)
    }
}