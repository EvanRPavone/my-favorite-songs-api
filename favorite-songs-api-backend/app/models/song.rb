class Song < ApplicationRecord
    has_many :artists_songs, dependent: :delete_all
    has_many :artists, through: :artists_songs
end
