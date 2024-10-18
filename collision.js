// collision.js

function checkCollision(deltaTime) {
  let isColliding = false;

  bullets.forEach((bullet) => {
    const dx = bullet.x - player.x;
    const dy = bullet.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const bulletRadius = bullet.width / 2; // bullet が定義されているので、この位置で計算します

    // プレイヤーの当たり判定の半径を定義（必要に応じて調整）
    const playerDamageRadius = player.width / 2; // または適切な値
    const playerGrazeRadius = playerDamageRadius + 10; // グレイズ判定の半径

    if (distance < playerDamageRadius + bulletRadius) {
      isColliding = true; // ライフが削られる
    } else if (distance < playerGrazeRadius + bulletRadius) {
      grazeCount++;
      updateGrazeCount();
      // 弾を削除しない

      // グレイズ音を再生
      playGrazeSound();

    }
  });

  // 敵との当たり判定も含める場合
  const dxEnemy = enemy.x - player.x;
  const dyEnemy = enemy.y - player.y;
  const distanceEnemy = Math.sqrt(dxEnemy * dxEnemy + dyEnemy * dyEnemy);
  const enemyRadius = enemy.width / 2;

  const playerDamageRadius = player.width / 2; // プレイヤーの当たり判定の半径

  if (distanceEnemy < playerDamageRadius + enemyRadius) {
    isColliding = true;
  }

  // 衝突している場合、ライフを減少させる処理（既存のコード）
  if (isColliding) {
    const damagePerSecond = 30; // 1秒間に減少するライフの量
    playerLife -= (damagePerSecond * deltaTime) / 1000; // deltaTimeはミリ秒単位
    updatePlayerLife();

    if (playerLife <= 0) {
      gameOver = true;
    }
  }
}
