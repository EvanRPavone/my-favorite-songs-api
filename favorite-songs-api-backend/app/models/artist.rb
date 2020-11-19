class Artist < ApplicationRecord
    has_many :artists_songs, dependent: :delete_all
    has_many :songs, through: :artists_songs
end
