<template>
    <div class="popup">
      <div class="popup__inner">
          <span
            class="popup__btn-close"
            @click="goBack"
          >&#10006</span>
          <p class="popup__text">Данное действие приведет к удалению поля.</p>
          <button
            class="popup__btn-delete"
            @click="delRow"
          >удалить</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'delete-popup-row',
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        delRow () {
            const idUrl = +this.$route.params.id
            this.$store.dispatch('DELETE_ROW_CONTACT', idUrl)
            this.$router.go(-1)
        }
    },
}
</script>

<style lang='scss'>
.popup{
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
    height: 35%;
    padding: 10px;
    margin: auto 0;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(102, 101, 101);
  }
  &__btn-close{
    display: block;
    text-align: right;
    margin-bottom: 70px;
    cursor: pointer;
  }
  &__text{
    font-size: 18px;
    margin-bottom: 50px;
  }
  &__btn-delete{
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
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
}
</style>