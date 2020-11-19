class AddImageLinkToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :image_link, :string
  end
end
