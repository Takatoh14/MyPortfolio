# 軽量かつ安定した Node イメージを使用
FROM node:20-slim

# 作業ディレクトリを作成
WORKDIR /app

# SCSSコンパイルに必要なビルドツールをインストール
RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  && rm -rf /var/lib/apt/lists/*

# 依存関係のインストール
COPY package.json package-lock.json* ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .
EXPOSE 5173
# 開発サーバを起動
CMD ["npm", "run", "dev"]
