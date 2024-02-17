<template>
  <div>
    <Header />
    <div>
      <h2 :class="['cute-title', 'reservation-title']">{{ currentMonth }}月の予定日</h2>
      <table :class="['large-calendar', 'reservation-calendar']">
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day" :class="['day-header']">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in calendar" :key="index">
            <td v-for="day in week" :key="day.date" :class="['calendar-day', { today: isToday(day) }]">
              <p>{{ day.day }}</p>
              <p>18:00~22:00</p>
              <div class="calendar-menu">
                <p @click="showReservationPopup(day)" class="reservation-menu">予約</p>
                <p @click="showEditPopupWindow(day)" class="edit-menu">編集</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />

    <!-- 予約ポップアップウィンドウ -->
    <div v-if="showPopup" class="reservation-popup" @click.self="closeReservationPopup">
      <div :class="['popup-content', 'reservation-popup-content']">
        <h3>予約</h3>
        <p>{{ selectedDay.date }}の予約を設定</p>
        <label :class="['popup-label']" for="reservationTime">時間:</label>
        <div class="reservation-studyTime">
          <input :class="['popup-input']" type="time" id="reservationTime" v-model="reservationStartTime" />
          <p>~</p>
          <input :class="['popup-input']" type="time" id="reservationTime" v-model="reservationEndTime" />
        </div>
        <button :class="['popup-button']" @click="submitReservation">予約する</button>
        <button :class="['popup-button', 'cancel-button']" @click="cancelReservation">キャンセル</button>
      </div>
    </div>
    <!-- 編集ポップアップウィンドウ -->
    <div v-if="showEditPopup" class="edit-popup" @click.self="closeEditPopup">
      <div :class="['popup-content', 'edit-popup-content']">
        <h3>編集</h3>
        <p>{{ selectedDay.date }}の予定を編集</p>
        <label :class="['popup-label']" for="editTime">新しい時間:</label>
        <div class="edit-studyTime">
          <input :class="['popup-input']" type="time" id="editTime" v-model="reservationStartTime" />
          <p>~</p>
          <input :class="['popup-input']" type="time" id="editTime" v-model="reservationEndTime" />
        </div>
        <button :class="['popup-button']" @click="submitEdit">変更する</button>
        <button :class="['popup-button', 'cancel-button']" @click="closeEditPopup">キャンセル</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { ref, computed, onMounted } from 'vue';

export default {
  name: "ReservationCalendar",
  components: {
    Header,
    Footer,
  },
  setup() {
    // カレンダーの初期データ
    const calendarData = ref([]);

    // 今日の日付を取得
    const today = ref(new Date());
    const currentYear = ref(today.value.getUTCFullYear());
    const currentMonth = ref(today.value.getUTCMonth() + 1);

    const showPopup = ref(false);
    const selectedDay = ref(null);
    const reservationStartTime = ref("");
    const reservationEndTime = ref("");
    const reservationOpenTime = ref("");
    const reservationCloseTime = ref("");

    // 週の日付の配列を生成
    const generateWeek = (startDate) => {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setUTCDate(startDate.getUTCDate() + i);
        week.push({
          day: date.getUTCDate(),
          date: date.toISOString().split('T')[0],
        });
      }
      return week;
    };

    // カレンダーの初期データを生成
    const generateCalendar = () => {
      const firstDayOfMonth = new Date(currentYear.value, currentMonth.value - 1, 1);
      const lastDayOfMonth = new Date(currentYear.value, currentMonth.value, 0);
      const startDay = firstDayOfMonth.getUTCDay();
      const endDay = lastDayOfMonth.getUTCDate();
      let dayCounter = 1;

      const calendar = [];
      for (let i = 0; i < 6; i++) {
        if (dayCounter > endDay) break;

        if (i === 0) {
          // 最初の週は前月の末尾から始まる可能性がある
          const lastMonthEnd = new Date(currentYear.value, currentMonth.value - 1, 0);
          const lastMonthEndDay = lastMonthEnd.getUTCDate();
          const lastMonthStartDay = lastMonthEndDay - startDay + 1;
          calendar.push(generateWeek(new Date(Date.UTC(currentYear.value, currentMonth.value - 2, lastMonthStartDay))));
        } else {
          calendar.push(generateWeek(new Date(Date.UTC(currentYear.value, currentMonth.value - 1, dayCounter))));
        }

        dayCounter += 7;
      }

      calendarData.value = calendar;
    };

    // 今日の日付かどうかを判定
    const isToday = (day) => {
      const todayDate = new Date(today.value);
      const dayDate = new Date(day.date);
      return (
        todayDate.getDate() === dayDate.getDate() &&
        todayDate.getMonth() === dayDate.getMonth() &&
        todayDate.getFullYear() === dayDate.getFullYear()
      );
    };

    // 曜日の配列
    const daysOfWeek = computed(() => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

    const showReservationPopup = (day) => {
      selectedDay.value = day;
      showPopup.value = true;
    };

    const closeReservationPopup = () => {
      showPopup.value = false;
      selectedDay.value = null;
      reservationStartTime.value = "";
      reservationEndTime.value = "";
    };

    const submitReservation = () => {
      // 予約の処理を追加
      // reservationTime.value に選択された時間が含まれています
      closeReservationPopup();
    };

    const cancelReservation = () => {
      closeReservationPopup();
    };

    // 編集ポップアップの表示状態と対象の日付
    const showEditPopup = ref(false);

    // 編集ポップアップを表示する
    const showEditPopupWindow = (day) => {
      selectedDay.value = day;
      showEditPopup.value = true;
    };

    // 編集ポップアップを閉じる
    const closeEditPopup = () => {
      showEditPopup.value = false;
      selectedDay.value = null;
    };

    // 新しい時間を選択し、表示を変更するメソッド
    const submitEdit = () => {
      // 新しい時間の編集処理を追加
      // selectedDay.value に選択された日付が含まれています
      // reservationTime.value に新しい時間が含まれています
      console.log(`編集日: ${selectedDay.value.date}, 解放開始時間: ${reservationOpenTime.value}, 解放終了時間: ${reservationCloseTime.value}`);
      // ここでデータの更新処理などを行う

      // 編集が完了したらポップアップを閉じる
      closeEditPopup();
    };

    // カレンダーの初期データを生成
    onMounted(() => {
      generateCalendar();
    });

    return {
      currentMonth,
      daysOfWeek,
      calendar: calendarData,
      isToday,
      showPopup,
      selectedDay,
      reservationStartTime,
      reservationEndTime,
      showReservationPopup,
      closeReservationPopup,
      submitReservation,
      cancelReservation,
      showEditPopup,
      showEditPopupWindow,
      closeEditPopup,
      submitEdit,
    };
  },
};
</script>

<style scoped>
/* カレンダー全体に関するスタイル */
.reservation-title {
  text-align: center;
  font-size: 1.5rem;
  font-size: 24px; 
  color: #ff5aad;
  margin-bottom: 20px;
  margin-top: 50px;
}

.reservation-calendar {
  margin: 80px auto;
  height: 70vh;
  width: 90%;
  border-collapse: collapse;
}

/* 曜日のヘッダーに関するスタイル */
.day-header {
  padding: 10px;
  text-align: center;
  background-color: #eee;
}

/* カレンダーの日付に関するスタイル */
.calendar-day {
  width: 100px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ddd;
}

.today {
  font-weight: bold;
  background-color: #ffb3d9;
}

.calendar-menu {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

.edit-menu{
  margin-left: 5px;
}

/* 予約ポップアップウィンドウ全体に関するスタイル */
.reservation-popup, .edit-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 予約ポップアップウィンドウのコンテンツに関するスタイル */
.reservation-popup-content, .edit-popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.reservation-popup-content h3, .edit-popup-content h3 {
  margin-bottom: 10px;
}

.edit-studyTime, .reservation-studyTime {
  display: flex;
  align-items: center;
}

/* ラベルに関するスタイル */
.popup-label {
  display: block;
  margin-bottom: 5px;
}

/* 入力欄に関するスタイル */
.popup-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: solid 1px rgb(192, 192, 192);
}

/* ボタンに関するスタイル */
.popup-button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.popup-button:hover {
  background-color: #45a049;
}

/* キャンセルボタンに関するスタイル */
.cancel-button {
  background-color: #f44336;
  margin-left: 10px;
}

.cancel-button:hover {
  background-color: #d32f2f;
}
</style>