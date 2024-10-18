// globals.js

// キャンバスとコンテキストの取得
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const maxPlayerLife = 120; // ライフの最大値


// キャンバスのサイズ設定
canvas.width = document.getElementById('gameContainer').clientWidth;
canvas.height = window.innerHeight;

// ゲーム状態の変数
let gameOver = false;
let keys = {};
let framesSurvived = 0; // 耐久フレーム数
let grazeCount = 0; // グレイズ数
let playerLife = maxPlayerLife; // プレイヤーの残機（ライフ）を初期化

// イベントリスナーの設定

// キャンバスのサイズ設定
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// ウィンドウサイズが変更されたときにキャンバスをリサイズ
window.addEventListener('resize', resizeCanvas);

window.addEventListener('keydown', (event) => {
  keys[event.key] = true;

  // Enterキーでゲームをリセット
  if (event.key === 'Enter' && gameOver) {
    resetGame();
  }
});

window.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});

