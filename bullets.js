// bullets.js

// 弾幕の設定
let bullets = [];
const bulletSpeed = 2;

// 弾の画像を読み込む
const bulletImg = new Image();
bulletImg.src = 'bullet.png'; // 弾の画像ファイル名を指定

// 弾幕の初期化
function initBullets() {
  bullets = [];
}

// 弾幕の生成
function createBullets() {
  for (let i = 0; i < 36; i++) {
    const angle = i * (Math.PI / 18);
    bullets.push({
      x: enemy.x,
      y: enemy.y,
      angle: angle,
      width: 16,   // 弾の幅（画像のサイズに合わせて調整）
      height: 16   // 弾の高さ
    });
  }

  // 弾幕発射音を再生
  playBulletFireSound();

}


// 弾幕の更新
function updateBullets() {
  bullets.forEach((bullet, index) => {
    bullet.x += bulletSpeed * Math.cos(bullet.angle);
    bullet.y += bulletSpeed * Math.sin(bullet.angle);

    // 画面外に出た弾を削除
    if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
      bullets.splice(index, 1);
    }
  });
}

// 弾幕の描画
// 弾幕の描画
function drawBullets() {
  bullets.forEach(bullet => {
    context.drawImage(
      bulletImg,
      bullet.x - bullet.width / 2,
      bullet.y - bullet.height / 2,
      bullet.width,
      bullet.height
    );
  });
}


// 弾幕の発射間隔
const bulletInterval = 500; // 0.5秒

// 弾幕の発射タイマー
setInterval(() => {
  if (!gameOver) createBullets();
}, bulletInterval);
