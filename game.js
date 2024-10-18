// game.js

function gameLoop(timestamp) {
  if (gameOver) {
    displayGameOver();

    // BGMを停止
    stopBackgroundMusic();

    return; // ゲームオーバーの場合は停止
  }

  const deltaTime = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  // 画面をクリア
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 背景の描画
  drawBackground();

  // 各コンポーネントの更新
  movePlayer();
  moveEnemy();
  updateBullets();
  checkCollision(deltaTime);

  // 各コンポーネントの描画
  drawBullets(); // 弾を先に描画
  drawPlayer();
  drawEnemy();

  // 耐久フレーム数の更新
  framesSurvived++;
  updateFramesSurvived();

  requestAnimationFrame(gameLoop);
}

// ゲームの初期化
function initGame() {
  gameOver = false;
  framesSurvived = 0;
  grazeCount = 0;
  playerLife = 120; // ライフを初期化
  bullets = [];
  initPlayer();
  initEnemy();
  initBullets();
  updateFramesSurvived();
  updateGrazeCount();
  updatePlayerLife();
  lastTimestamp = performance.now();

  // BGMを再生
  playBackgroundMusic();

}

// ゲームのリセット
function resetGame() {
  initGame();
  requestAnimationFrame(gameLoop);
}

// ゲーム開始
initGame();
requestAnimationFrame(gameLoop);
