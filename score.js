// score.js

// 既存のコード
const framesSurvivedDisplay = document.getElementById('framesSurvived');
const grazeCountDisplay = document.getElementById('grazeCount');
const playerLifeDisplay = document.getElementById('playerLife');

// ライフゲージの要素を取得
const lifeGaugeInner = document.getElementById('lifeGaugeInner');

// 耐久フレーム数の更新
function updateFramesSurvived() {
  framesSurvivedDisplay.textContent = framesSurvived;
}

// グレイズ数の更新
function updateGrazeCount() {
  grazeCountDisplay.textContent = grazeCount;
}

// ライフの更新
function updatePlayerLife() {
  // 数値の表示を更新
  playerLifeDisplay.textContent = Math.max(0, Math.floor(playerLife));

  // ライフゲージの幅を更新
  const lifePercentage = Math.max(0, playerLife) / maxPlayerLife * 100;
  lifeGaugeInner.style.width = lifePercentage + '%';
}
