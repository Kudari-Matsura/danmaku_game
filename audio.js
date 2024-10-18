// audio.js

// オーディオファイルの読み込み
const bulletFireSound = new Audio('sounds/発射音.mp3');
const grazeSound = new Audio('sounds/グレイズ音.mp3');
const backgroundMusic = new Audio('sounds/BGM.mp3');

// BGMの設定
backgroundMusic.loop = true; // ループ再生
backgroundMusic.volume = 1.0; // 音量を50%に設定（0.0〜1.0）

// 効果音の音量調整（必要に応じて）
bulletFireSound.volume = 0.7;
grazeSound.volume = 0.7;

// オーディオを再生する関数
function playBulletFireSound() {
  bulletFireSound.currentTime = 0; // 再生位置を先頭に
  bulletFireSound.play();
}

function playGrazeSound() {
  grazeSound.currentTime = 0;
  grazeSound.play();
}

function playBackgroundMusic() {
  backgroundMusic.play();
}

function stopBackgroundMusic() {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}
