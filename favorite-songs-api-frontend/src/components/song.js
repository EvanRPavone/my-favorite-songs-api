class Song {
    constructor(title, imageLink, songLink, genre, album, artists) {
        this.title = title;
        this.imageLink = imageLink;
        this.songLink = songLink;
        this.genre = genre;
        this.album = album;
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
      const genHeader = document.createElement('h3')
      genHeader.innerHTML = `Genre: ${this.genre}`
      cardInfo.appendChild(genHeader)
      const albHeader = document.createElement('h3')
      albHeader.className = 'album-name'
      albHeader.innerHTML = `Album: ${this.album}`
      cardInfo.appendChild(albHeader)
      const ul = document.createElement('ul')
      cardInfo.appendChild(ul)
      const footer = document.createElement('div')
      footer.className = "card-footer"
      const link = document.createElement('a')
      link.href = this.songLink
      link.innerHTML = "View Song on Youtube"
      const breakPoint = document.createElement('br')
      const deleteBtn = document.createElement('button')
      deleteBtn.className = 'deleteBtn'
      deleteBtn.innerHTML = "Delete"
      footer.appendChild(link)
      footer.appendChild(breakPoint)
      footer.appendChild(deleteBtn)
      card.appendChild(cardInfo)
      card.appendChild(footer)
      document.getElementById('song-card-container').appendChild(card)
    }
}