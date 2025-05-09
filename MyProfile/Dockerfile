FROM node:18

WORKDIR /app

# 依存関係インストール
COPY package.json package-lock.json* ./
RUN npm install

# 残りをコピー
COPY . .

# Viteサーバ起動
CMD ["npm", "run", "dev"]
