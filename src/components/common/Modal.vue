<template>
  <div class="modal" v-if="showModal" @wheel="handleWheel" @click="closeModalOutside">
    <div class="image-container" @mousedown="startDrag" @mousemove="handleDrag" @mouseup="endDrag" ref="imageContainer">
      <img :src="selectedImage" alt="モーダル画像" class="modal-image" :style="imageStyle" @click.stop draggable="false" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    showModal: Boolean,
    selectedImage: String,
  },
  setup(props, { emit }) {
    const imageScale = ref(1); // 画像の初期スケール
    const maxImageScale = 3; // 最大のスケール
    const minImageScale = 0.9; // 最小のスケール
    const mouseX = ref(0); // マウスのX座標
    const mouseY = ref(0); // マウスのY座標
    const isDragging = ref(false); // ドラッグ中かどうかのフラグ
    const dragStartX = ref(0); // ドラッグ開始時のマウスX座標
    const dragStartY = ref(0); // ドラッグ開始時のマウスY座標
    const dragStartScrollLeft = ref(0); // ドラッグ開始時の水平スクロール位置
    const dragStartScrollTop = ref(0); // ドラッグ開始時の垂直スクロール位置

    const imageContainer = ref(null); // imageContainerを定義

    // 画像のスケールを計算する計算プロパティ
    const imageStyle = computed(() => {
      return {
        transform: `scale(${imageScale.value})`,
        transition: 'transform 0.2s ease', // スケール変更のアニメーションを追加
        transformOrigin: 'top left', // 左上を中心に拡大/縮小
      };
    });

    // image-containerのスタイルを計算する計算プロパティ
    const imageContainerStyle = computed(() => {
      return {
        width: `calc(100% / ${imageScale.value})`, // スケールに応じて image-container の幅を調整
        height: `calc(100% / ${imageScale.value})`, // スケールに応じて image-container の高さを調整
        cursor: isDragging.value ? 'grabbing' : 'grab', // ドラッグ中は"grabbing"カーソルにする
      };
    });

    // 画像以外の領域をクリックしてモーダルを閉じる
    const closeModalOutside = (event) => {
      if (event.target.classList.contains('modal')) {
        closeModal();
      }
    };

    // モーダルを閉じるロジック
    const closeModal = () => {
      emit('closeModal');
    };

    // ホイールイベントを処理
    const handleWheel = (event) => {
      const container = imageContainer.value; // imageContainerへの参照を取得
      if (!container) return; // imageContainerがnullの場合は処理しない

      const containerRect = container.getBoundingClientRect();
      const containerX = event.clientX - containerRect.left;
      const containerY = event.clientY - containerRect.top;

      // 現在のスケールとマウスの位置を取得
      const currentScale = imageScale.value;
      const mouseX = containerX + container.scrollLeft;
      const mouseY = containerY + container.scrollTop;

      // 拡大または縮小の倍率
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;

      // 新しいスケールを計算
      const newScale = currentScale * scaleFactor;

      // 最大スケールと最小スケールを制限
      imageScale.value = Math.max(minImageScale, Math.min(maxImageScale, newScale));

      // スケール変更前後の差分を計算
      const scaleDiff = imageScale.value / currentScale;

      // マウスの位置を中心にスクロール位置を調整
      container.scrollLeft = (mouseX * scaleDiff) - containerX;
      container.scrollTop = (mouseY * scaleDiff) - containerY;

      // イベントのデフォルト動作をキャンセル
      event.preventDefault();
    };

    // マウスの座標を更新
    const handleMouseMove = (event) => {
      mouseX.value = event.clientX;
      mouseY.value = event.clientY;
    };

    // ドラッグ開始時の処理
    const startDrag = (event) => {
      isDragging.value = true;
      dragStartX.value = event.clientX;
      dragStartY.value = event.clientY;
      dragStartScrollLeft.value = imageContainer.value.scrollLeft;
      dragStartScrollTop.value = imageContainer.value.scrollTop;

      // ドラッグ中にカーソルを"grabbing"に変更
      document.body.style.cursor = 'grabbing';

      // ドラッグ中のマウスの移動を追跡
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', endDrag);
    };

    // ドラッグ中の処理
    const handleDrag = (event) => {
      if (isDragging.value) {
        const offsetX = event.clientX - dragStartX.value;
        const offsetY = event.clientY - dragStartY.value;
        imageContainer.value.scrollLeft = dragStartScrollLeft.value - offsetX;
        imageContainer.value.scrollTop = dragStartScrollTop.value - offsetY;
      }
    };

    // ドラッグ終了時の処理
    const endDrag = () => {
      isDragging.value = false;

      // ドラッグ中のカーソルスタイルを元に戻す
      document.body.style.cursor = 'default';

      // ドラッグ中のマウス移動と終了イベントのリスナーを削除
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', endDrag);
    };

    return {
      imageScale,
      imageStyle,
      imageContainerStyle,
      closeModalOutside,
      closeModal,
      handleWheel,
      handleMouseMove,
      startDrag,
      handleDrag,
      endDrag,
      imageContainer, // imageContainerを追加
    };
  },
};
</script>

<style scoped>
/* モーダルのスタイルを追加 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 背景を半透明に */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 他の要素より上に表示 */
  overflow: hidden; /* コンテンツのはみ出しを制御 */
  border: 1px solid black;
}

.image-container {
  padding: 30px;
  background-color: aliceblue;
  width: 90%;
  max-height: 80vh;
  overflow: auto; /* 縦方向のスクロールを有効に */
}

.modal-image {
  border: none; /* 枠線を削除 */
  width: 85%; /* 画像の幅を100%に */
  cursor: grabbing;
}
</style>
