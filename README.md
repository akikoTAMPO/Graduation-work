# Graduation-work
### 企画概要

- 今日着たいアイテムを登録すると、AIが着こなし提案をしてくれるサービス
- 提案してくれる着こなしポイントは3つ

### 関連サービスとの違い

- 購入レコメンドサービスではないこと
    - 好きなアイテムの着こなしをフリーワードで入力できる

### 機能一覧

- 着こなし提案
    - アイテムカテゴリーとカラーを入力し、アドバイスを受けるをクリックするとアドバイスがテキストで3点表示される
    - chatGPT　APIを使用
- HOT KEYWORD表示
    - デフォルトのカテゴリーの他、1分以上30分以内に検索されたキーワードを表示
    - firebase realtime databaseを使用

