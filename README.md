# My Favorite Songs
My Favorite Songs allows you, the user, to keep track of all the songs that you have come across that you ended up liking. This application uses Rails API as its back-end and a Javascript Frontend.

Keep in mind that this uses PostgreSQL. If you dont have it installed: https://github.com/learn-co-curriculum/wsl-setup , scroll down till you see Advanced topics: PostgreSQL setup (OPTIONAL) and it will tell you how to use it.

## Getting Started
- Clone the repository: `https://github.com/EvanRPavone/my-favorite-songs-api.git`
- cd into the backend: `cd favorite-songs-api-backend`
- Install your gems: `bundle install`
- Start you postgresql server: look up PgAdmin in your windows search bar and run it.
- Create the database: `rake db:create`
- Migrate: `rake db:migrate`
- Seed your database: `rake db:seed`
- Start your server: `rails s`
- Open your index.html (located in favorite-songs-api-frontend) in your browser
- Keep track of all your favorite songs!

