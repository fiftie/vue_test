# vue_roulette

## 環境構築
nodeインストール  
余裕があるならバージョン管理できるようにしたほうがいい。(macならnvm,winならnvm-windowsなど)  
nvm-windowsならchocolatey(macでいうhomebrew的なやつ)を使って入れると楽  
基本的に偶数でかつ、より新しいバージョンを使う。(v8.x.x, v10.x.xなど)  
  
このリポジトリをクローンしたら  
```cd vue_test```  
```npm i```  
windowsなら更に下も必要かも  
```npm i webpack -g``` 

## build  
ビルドすることで、このあとたてるサーバがhtmlファイルとjsファイルを投げてくれる。  
```npm run build```
  
## server start  
webpack dev serverを使っているため遅め。  
```npm run server```  
ブラウザでlocalhost:8080に接続。

## 説明
```https://dwait.net/index.php/tdswait```
上記のサイトから待ち時間を取得している。
server.jsでクライアントからgetを受け取って、上記サイトにアクセス、待ち時間のエレメントを取得してクライアントに投げる。クライアントは受け取ったデータをweb上に表示。
ディズニー本家のサイトはヘッダーとかUAとかをきちんと設定しないとデータが取れなそうだったから違うサイトにした。
  
良いvueライフを:)