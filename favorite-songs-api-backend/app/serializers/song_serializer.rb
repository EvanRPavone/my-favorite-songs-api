class SongSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :song_link, :artists
end