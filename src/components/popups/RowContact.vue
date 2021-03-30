<template>
  <div 
    class="popup-newRow" 
  >
      <div class="popup-newRow__inner">
          <div
            class="popup-newRow__btn-close"
            @click="closePopup"
          >&#10006</div>
          <p class="popup-newRow__text">Добавление нового поля</p>
          <div class="block-input">
            <div class="block-input__title">
              <input 
                type="text" 
                id="input-title"
                v-model="titleRow"
              >
              <label 
                class="label-input label-input__title" 
                for="input-title"
                :style=" titleRow ? isHideLabel : '' "
              >Заголовок <span style="color: gray; font-size: 12px">(например: Email)</span> </label>
            </div>
            <div class="block-input__text">
              <input 
                type="text" 
                id="input-text"
                v-model="textRow"
              >
              <label 
                class="label-input label-input__text" 
                for="input-text"
                :style=" textRow ? isHideLabel : '' "
              >Значение <span style="color: gray; font-size: 12px">(например: example@example.com)</span></label>
            </div>
          </div>
          <button
            class="popup-newRow__btn-delete btn-rowPopup"
            @click="backAction"
          >отмена</button>
          <button
            class="popup-newRow__btn-add btn-rowPopup"
            @click.prevent="postRowInfo"
            :disabled=" titleRow && textRow ? !isNoActiveBtn : isNoActiveBtn "
          >добавить</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'new-row-popup',
    data: () => {
      return {
        titleRow: '',
        textRow: '',
        isNoActiveBtn: true,
        isHideLabel: {
          display: 'none'
        }
      }
    },
    methods: {
      closePopup() {
        this.$router.go(-1)
      },
      backAction () {
        this.titleRow = this.textRow =  ''
          this.$router.go(-1)
      },
      postRowInfo() {
        let newRow = {
          id: Date.now(),
          title: this.titleRow,
          text: this.textRow
        }
        const idUrl = +this.$route.params.id
        this.$store.dispatch('ADD_ROWS_CONTACT', {newRow, idUrl})
        if(this.titleRow && this.textRow) {
          this.$router.go(-1)
        }
      }
    }
}
</script>

<style lang='scss' scoped>
.block-input{
  margin-bottom: 30px;
  padding: 0 20px;
  &__title{
    position: relative;
    border-bottom: 1px solid #000;
    margin-bottom: 15px;
    width: 300px;
  }
  &__text{
    position: relative;
    border-bottom: 1px solid #000;
    width: 300px;
  }
}
.label-input{
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
#input-title{
  &:focus + .label-input__title{
    display: none;
  }
}
#input-text{
  &:focus + .label-input__text{
    display: none;
  }
}
.popup-newRow{
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  &__inner{
    background-color: white;
    width: 35%;
    height: 40%;
    padding: 10px;
    margin: auto 0;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(102, 101, 101);
  }
  &__btn-close{
    text-align: right;
    margin-bottom: 40px;
    cursor: pointer;
  }
  &__text{
    font-size: 18px;
    margin-bottom: 50px;
  }
  &__btn-delete{
    background-color: tomato;
    &:hover{
      background-color: rgb(253, 79, 48);
      box-shadow: 0 0 10px 3px rgba(255, 0, 0, 0.048);
    }
    &:active{
      background-color: red;
      box-shadow: 0 0 5px 5px rgba(128, 128, 128, 0.301) inset;
      transform: scale(.98);
    }
  }
  &__btn-add{
    background-color: yellowgreen;
    margin-left: 15px;
    &:disabled{
      background-color: gray;
    }
  }
}
.btn-rowPopup{
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>