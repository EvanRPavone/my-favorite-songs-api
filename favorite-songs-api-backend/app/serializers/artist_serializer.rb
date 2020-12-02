class ArtistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :songs
end
