# DB設計

## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :groups through: :member
- has_many :messages


## messages テーブル
|Column|Type|
|------|----|
|user_id|integer|
|message_id|string|
|group_id|integer|
|message|integer|
|user|reference|


### Association
- belongs_to :group
- belongs_to :user


## groups テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|member_id|integer|null: false, foreign_key: true|
|user|references|foreign_key: true|

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