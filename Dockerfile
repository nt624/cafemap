# Node.js の公式イメージを使う
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースコードをコピー
COPY . .

# Astro の開発サーバーを起動
CMD ["npm", "run", "dev", "--", "--host"]