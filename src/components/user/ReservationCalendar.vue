<template>
  <div>
    <Header />
    <div>
      <h2 class="cute-title">{{ currentMonth }}月の予定日</h2>
      <table class="large-calendar">
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in calendar" :key="index">
            <td v-for="day in week" :key="day.date" :class="{ today: isToday(day) }">
              {{ day.day }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
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
    const daysOfWeek = computed(() => ['日', '月', '火', '水', '木', '金', '土']);

    // カレンダーの初期データを生成
    onMounted(() => {
      generateCalendar();
    });

    return {
      currentMonth,
      daysOfWeek,
      calendar: calendarData,
      isToday,
    };
  },
};
</script>

<style scoped>
.large-calendar {
  margin: 80px auto;
  height: 70vh;
  width: 90%; /* テーブルの幅を100%に設定 */
  border-collapse: collapse; /* セル間の隙間をなくす */
}

.large-calendar th,
.large-calendar td {
  width: 40px; /* セルの幅を調整 */
  height: 40px; /* セルの高さを調整 */
  text-align: center;
  border: 1px solid #ccc; /* セルの境界線を表示 */
}

.cute-title {
  text-align: center; /* タイトルを中央寄せ */
  font-size: 24px; /* フォントサイズを調整 */
  color: #ff5aad; /* タイトルの文字色を指定 */
  margin-bottom: 20px; /* 下マージンを追加 */
  margin-top: 50px;
}

.today {
  background-color: lightblue;
}
</style>