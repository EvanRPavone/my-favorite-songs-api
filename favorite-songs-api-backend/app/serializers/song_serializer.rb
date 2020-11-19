class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :song_link, :image_link, :artists
end
