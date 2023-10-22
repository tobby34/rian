<template>
  <Transition name="modal">
    <div class="modal" @click="closeModal">
      <div class="modal__block" @click.stop>
        <h2 class="modal__title">{{edit ? 'Изменить заметку' : 'Добавить заметку'}}</h2>
        <div class="modal__inputs">
          <label>
            <span>Title</span>
            <input type="text" v-model="title" />
          </label>
          <label>
            <span>Content</span>
            <textarea v-model="descr"></textarea>
          </label>
        </div>
        <div class="modal__btns">
          <button class="modal__btn cancel" @click="closeModal">Отмена</button>
          <button class="modal__btn add" @click="addNote" v-if="!edit">Добавить</button>
          <button class="modal__btn add" @click="changeNote" v-else>Изменить</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    currentId: Number,
    edit: Boolean,
    editNote: Object
  },
  data() {
    return {
      title: "",
      descr: "",
      id: this.currentId,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
      (this.title = ""), (this.descr = "");
    },
    addNote() {
      if (this.title != "" && this.descr != "") {
        const item = {
          id: this.id++,
          title: this.title,
          descr: this.descr,
          date: new Date().toLocaleDateString(),
        };
        this.$emit("addNote", item);
        this.closeModal()
      }
    },
    changeNote(){
      if (this.title != '' && this.descr != '') {
        const editedNote = {
          id: this.editNote.id,
          title: this.title,
          descr: this.descr,
          date: new Date().toLocaleDateString()
        }
        this.$emit('editedNote', editedNote)
        this.closeModal()
      }
    }
    
  },
};
</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__block {
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.11),
      rgba(103, 80, 164, 0.11)
    ),
    #fffbfe;
  border-radius: 28px;
  padding: 24px;
  max-width: 312px;
  width: 100%;
}
.modal__title {
  font-size: 24px;
  line-height: 32px;
  color: #1c1b1f;
  margin-bottom: 15px;
}
.modal__inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.modal__inputs label {
  position: relative;
}
.modal__inputs span {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6750a4;
}
.modal__inputs input,
.modal__inputs textarea {
  border: none;
  resize: none;
  outline: none;
  background: #e7e0ec;
  border-radius: 4px 4px 0px 0px;
  padding: 23px 0 9px 16px;
  height: 56px;
  width: 100%;
  border-bottom: 1px solid #1c1b1f;
}
.modal__btns {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 8px;
}
.modal__btn {
  font-family: "RM";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  background: transparent;
  padding: 10px 12px;
}
.cancel {
  color: #cf1b1b;
}
.add {
  color: #6750a4;
}

.modal-enter-active,
.modal-leave-active {
  transition: 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
</style>