// enemy.js

// 敵の設定
let enemy = {
    width: 32,
    height: 32,
    radius: 200,
    angle: 0,
    speed: 0.01,
  };
  
  // 敵の初期化
  function initEnemy() {
    enemy.angle = 0;
  }
  
  // 敵の移動
  function moveEnemy() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
  
    enemy.x = centerX + enemy.radius * Math.cos(enemy.angle);
    enemy.y = centerY + enemy.radius * Math.sin(enemy.angle);
  
    enemy.angle += enemy.speed;
  
    if (enemy.angle > Math.PI * 2) {
      enemy.angle = 0;
    }
  }
  
  // 敵の描画
  function drawEnemy() {
    context.drawImage(enemyImg, enemy.x - enemy.width / 2, enemy.y - enemy.height / 2, enemy.width, enemy.height);
  }
  
  // 敵の画像
  const enemyImg = new Image();
  enemyImg.src = 'enemy.png';
  