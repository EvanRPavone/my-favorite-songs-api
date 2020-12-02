class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :song_link, :image_link, :genre, :album, :artists
end
