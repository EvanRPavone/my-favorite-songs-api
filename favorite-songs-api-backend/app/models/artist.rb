class Artist < ApplicationRecord
    has_many :genres, dependent: :delete_all
    has_many :songs, through: :genres
end
