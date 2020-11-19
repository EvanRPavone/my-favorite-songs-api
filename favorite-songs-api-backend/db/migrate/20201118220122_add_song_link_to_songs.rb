class AddSongLinkToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :song_link, :string
  end
end
