# DB設計

## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :groups through: :member
- has_many :messages


## contents テーブル
|Column|Type|
|------|----|
|user_id|integer|
|content_id|integer|
|group_id|integer|
|content|string|
|image|string|
|user|reference|


### Association
- belongs_to :group
- belongs_to :user


## groups テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|member_id|integer|null: false, foreign_key: true|


### Association
- has_many :users through: :member
- has_many :messages


## members テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user