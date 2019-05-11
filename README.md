# DB設計

## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :groups through: :members
- has_many :members
- has_many :messages


## messages テーブル
|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
|content|string|
|image|string|
|user|references|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user


## groups テーブル
|Column|Type|Options|
|------|----|-------|
|user|string|null: false|


### Association
- has_many :users through: :members
- has_many :members
- has_many :messages


## members テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user