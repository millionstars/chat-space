class CreateGroups < ActiveRecord::Migration[5.0]
  def create
    change_table :groups do |t|
      t.string  :name, null: false
      t.index   :name, unique: true
      t.timestamps
    end
  end
end
