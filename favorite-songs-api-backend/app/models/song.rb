class Song < ApplicationRecord
    has_many :genres, dependent: :delete_all
    has_many :artists, through: :genres
end
