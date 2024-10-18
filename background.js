// background.js

// 背景画像の読み込み
const backgroundImage = new Image();
backgroundImage.src = 'background.jpg'; // 背景画像のファイル名

function drawBackground() {
  // 現在のコンテキストの状態を保存
  context.save();

  // 透明度を設定（0.0 〜 1.0 の値を使用）
  context.globalAlpha = 0.5; // 透明度を50%に設定（必要に応じて変更）

  // 背景画像を画面全体に描画
  context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // コンテキストの状態を復元
  context.restore();
}
