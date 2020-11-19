class ArtistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :songs
end
