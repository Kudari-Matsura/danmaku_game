// player.js

// プレイヤーの設定
let player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    width: 32,
    height: 32,
    speed: 5,
  };
  
  // プレイヤーの初期化
  function initPlayer() {
    player.x = canvas.width / 2;
    player.y = canvas.height - 100;
  }
  
  // プレイヤーの移動
  function movePlayer() {
    if (keys['ArrowUp'] && player.y > 0) {
      player.y -= player.speed;
    }
    if (keys['ArrowDown'] && player.y < canvas.height - player.height) {
      player.y += player.speed;
    }
    if (keys['ArrowLeft'] && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
      player.x += player.speed;
    }
  }

function drawPlayer() {
    context.drawImage(playerImg, player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
  
    // デバッグ用に当たり判定を描画
    if (debugMode) {
      // ライフが削られる当たり判定
      context.beginPath();
      context.arc(player.x, player.y, playerDamageRadius, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(255, 0, 0, 0.5)';
      context.stroke();
  
      // グレイズ判定
      context.beginPath();
      context.arc(player.x, player.y, playerGrazeRadius, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(0, 0, 255, 0.5)';
      context.stroke();
    }
  }
  
  // デバッグモードのフラグ
  const debugMode = true; // デバッグ時は true に設定
  
  
  
  // プレイヤーの描画
  function drawPlayer() {
    context.drawImage(playerImg, player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);
  }
  
  // プレイヤーの画像
  const playerImg = new Image();
  playerImg.src = 'player.png';
  