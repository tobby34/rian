<template>
  <div class="notes__item">
    <div class="notes__item-top" :class="{ between: !grid }">
      <h3 class="notes__item-title">{{note.title}}</h3>
      <p class="notes__item-date">{{note.date}}</p>
    </div>
    <p class="notes__item-text">
      {{note.descr}}
    </p>
    <div class="notes__item-btns">
      <button class="notes__item-btn edit" @click="$emit('changeNote', note.id)">
        <img src="@/assets/img/edit.svg" alt="" />
        <span>РЕДАКТИРОВАТЬ</span>
      </button>
      <button class="notes__item-btn del" @click="$emit('delNote', note.id)">
        <img src="@/assets/img/del.svg" alt="" />
        <span>Удалить</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: Boolean,
    note: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
.notes__item {
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.05),
      rgba(103, 80, 164, 0.05)
    ),
    #fffbfe;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 16px;
}
.notes__item-title {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #1c1b1f;
}
.notes__item-date {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #cac4d0;
}
.notes__item-top {
  margin-bottom: 16px;
}
.notes__item-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #49454f;
  margin-bottom: 16px;
}
.notes__item-btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.notes__item-btn {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 10px;
  background: transparent;
  padding: 12px;
  transition: 0.4s;
}
.notes__item-btn span {
  font-family: "RM";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}
.edit span {
  color: #6750a4;
}
.del span {
  color: #cf1b1b;
}
.edit:hover {
  background: #e6ddff;
  border-radius: 5px;
}
.del:hover {
  background: #ffe1e1;
  border-radius: 5px;
}
.between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>