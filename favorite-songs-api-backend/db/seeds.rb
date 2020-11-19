# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
s1 = Song.create(title: "Shadow Moses", song_link: "https://www.youtube.com/watch?v=HJEahE-4juQ", image_link: "https://images-na.ssl-images-amazon.com/images/I/91Z82BKqrSL._SL1500_.jpg", genre: "Rock/Metal", album: "Sempiternal")

s1.artists << [Artist.find_or_create_by(name: "Bring Me The Horizon")]

s2 = Song.create(title: "Masochist", song_link: "https://www.youtube.com/watch?v=jmU2HH0LHmY", image_link: "https://f4.bcbits.com/img/a1971027986_10.jpg", genre: "Metal", album: "The Death of Me")

s2.artists << [Artist.find_or_create_by(name: "Polaris")]

s3 = Song.create(title: "letdown", song_link: "https://www.youtube.com/watch?v=XedrXl-aiBA", image_link: "https://i1.sndcdn.com/artworks-000426060165-68pnrf-t500x500.jpg", genre: "Alternative", album: "single")

s3.artists << [Artist.find_or_create_by(name: "Nothing, Nowhere")]
