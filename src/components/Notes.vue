<template>
  <div class="notes">
    <div class="container">
      <div class="notes__top">
        <h2 class="notes__title">
          {{ notes.length > 0 ? words.infobar[lang] : words.noinfobar[lang] }}
        </h2>
        <button class="notes__btn" @click="grid = !grid">
          <img src="@/assets/img/column.svg" alt="" v-if="grid" />
          <img src="@/assets/img/row.svg" alt="" v-else />
          <span>{{ grid ? "Список" : "Сетка" }}</span>
        </button>
      </div>
      <div class="notes__list" :class="{ active: !grid }">
        <NoteItem
          :grid="grid"
          v-for="note in notes"
          :key="note.id"
          :note="note"
          @delNote="$emit('delNote', note.id)"
          @changeNote="$emit('changeNote', note.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem.vue";
export default {
  inject: ["words"],
  props: {
    notes: {
      typeof: Array,
      required: true,
    },
    lang: String,
  },
  data() {
    return {
      grid: true,
    };
  },
  components: {
    NoteItem,
  },
};
</script>

<style>
.notes {
  margin-top: 30px;
}
.notes__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.notes__title {
  font-size: 22px;
  line-height: 28px;
  color: #323232;
}
.notes__btn {
  width: 120px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.11),
      rgba(103, 80, 164, 0.11)
    ),
    #fffbfe;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}
.notes__btn span {
  font-family: "RM";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #6750a4;
}
.notes__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.notes__list.active {
  grid-template-columns: 1fr;
}
</style>