class SongSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :artists
end