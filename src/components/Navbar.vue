<template>
  <header class="header">
    <Transition name="notes">
    <div class="header__notes" v-show="header === true">
      <button @click="changeLang" class="header__lang" v-if="lang == 'ru'">UZ</button>
      <button @click="changeLang" class="header__lang" v-else>RU</button>
      <h1 class="header__title">{{words.appbartitle[lang]}}</h1>
      <button class="header__search" @click="header = false">
        <img src="@/assets/img/search.svg" alt="" />
      </button>
    </div>
    </Transition>
    <Transition name="forms">
    <div class="header__forms" v-show="header === false">
      <button class="header__back" @click="(header = true), (search = '')">
        <img src="@/assets/img/arrow.svg" alt="" />
      </button>
      <input 
      type="text" 
      class="header__input" 
      placeholder="Поиск..."
      v-model="search"
       />
      <button class="header__close" @click="search = ''">
        <img src="@/assets/img/clear.svg" alt="" />
      </button>
    </div>
    </Transition>
  </header>
</template>

<script>
export default {
  inject:['words'],
  props: ['lang'],
  data() {
    return {
      header: true,
      search: ''
    };
  },
  watch: {
    search(val){
      this.$emit('searchValue', val)
    }
  },
  methods:{
    changeLang(){
      this.$emit('changeLang', this.lang == 'ru' ? 'uz' : 'ru')
    }
  }
};
</script>

<style>
.header {
  background: #f3edf7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 18px;
  height: 70px;
  overflow: hidden;
}
.header__notes,
.header__forms {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__lang {
  font-size: 22px;
  font-weight: 700;
}
.header__title {
  font-size: 22px;
  line-height: 28px;
  color: #1c1b1f;
}
.header__input {
  width: 85%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  line-height: 20px;
  color: #9d9d9d;
}

.notes-enter-active,
.notes-leave-active {
  transition: 0.5s linear;
}

.notes-enter-from,
.notes-leave-to {
  transform: translateY(-200px);
}
.forms-enter-active,
.forms-leave-active {
  transition:  0.5s linear;
}

.forms-enter-from,
.forms-leave-to {
 transform: translateY(200px);
}



</style>