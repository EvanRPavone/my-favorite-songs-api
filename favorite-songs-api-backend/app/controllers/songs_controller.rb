class SongsController < ApplicationController
    def index
        songs = Song.all

        render json: SongSerializer.new(songs)
    end

    def show
        songs = Artist.find_by(name: params[:artist_name]).songs

        render json: SongSerializer.new(songs.sample)
    end

    def create
        song = Song.new(song_params)

        artists = params[:artists].map { |artist| Artist.find_or_create_by(name: artist)}
        song.artists << artists
        song.save
        render json: SongSerializer.new(song)
    end

    private

    def song_params
        params.require(:song).permit(:title)
    end
end
