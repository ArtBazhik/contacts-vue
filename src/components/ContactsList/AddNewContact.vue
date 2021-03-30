<template>
  <div class="add-contact">
      <h2 class="add-contact__title" >Добавить новый контакт</h2>
      <div class="add-contact__first-name block-input">
        <input 
            class="input-firstName input-form"
            id="firstName" 
            type="text"
            v-model.trim="firstName"
        >
        <label 
            class="title-input" 
            for="firstName"
            :style="firstName ? invalidInput : ''"
        >Имя</label>
      </div>
      <div class="add-contact__second-name block-input">
        <input 
            class="input-secondName input-form"
            id="secondName" 
            type="text"
            v-model.trim="secondName"
        >
        <label 
            class="title-input" 
            for="secondName"
            :style="secondName ? invalidInput : ''"
        >Фамилия</label>
      </div>
      <div class="add-contact__last-name block-input">
        <input 
            class="input-lastName input-form"
            id="lastName" 
            type="text"
            v-model.trim="lastName"
        >
        <label 
            class="title-input" 
            for="lastName"
            :style="lastName ? invalidInput : ''"
        >Отчество</label>
      </div>
      <div class="add-contact__phone block-input">
          <input
            class="input-phone input-form"
            id="phone-contact"
            type="text"
            v-model.trim="contactPhone"
          >
          <label 
            class="title-input" 
            for="phone-contact"
            :style="contactPhone ? invalidInput : ''"
        >Моб.телефон</label>
      </div>
      <button 
        class="add-contact__btn" 
        :disabled='firstName && secondName && lastName && contactPhone ? !isActiveBtn : isActiveBtn'
        @click="postNewContact"
    >Добавить</button>
  </div>
</template>

<script>
export default {
    name: 'add-new-contact',
    data () {
        return{
            firstName: '',
            secondName: '',
            lastName: '',
            contactPhone: '',
            invalidInput: {
                top: '-12px',
                'font-size': '10px',
                color: 'rgba(0, 0, 255, 0.733)'
            },
            isActiveBtn: true
        }
    },
    methods: {
        postNewContact() {
            const newContact = {
                id: Date.now(),
                firstName: this.firstName,
                secondName: this.secondName,
                lastName: this.lastName,
                contactPhone: this.contactPhone,
                rowsInfo: []
            }
            this.$store.dispatch('POST_CONTACT', newContact)
            this.firstName = this.lastName = this.secondName = this.contactPhone = ''
        }
    }
}
</script>

<style lang='scss' scoped>
    .add-contact{
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        &__title{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 30px;
            align-self: center;
        }
        &__btn{
            font-weight: bold;
            color: white;
            text-transform: uppercase;
            width: fit-content;
            padding: 5px 10px;
            background-color: rgb(6, 173, 6);
            border-radius: 5px;
            box-shadow: 0 0 4px black;
            &:hover{
                background-color: rgba(6, 173, 6, 0.781);
            }  
            &:active{
                box-shadow: 0 0 5px black inset;
                transform: scale(.98);
            }
            &:disabled{
                background-color: gray;
                cursor: auto;
                box-shadow: none;
            }
        }
    }
    .block-input{
        position: relative;
        margin-bottom: 25px;
    }
    .title-input{
        position: absolute;
        color: gray;
        top: 0;
        left: 0;
        transition: top .3s ease;
    }
    .input-form{
        width: 50%;
        padding-bottom: 2px;
        border-bottom: 1px solid rgba(0, 0, 255, 0.322);
        &:focus{
            border-bottom: 1px solid rgba(0, 0, 255, 0.733);
        }
        &:focus + .title-input{
            top: -10px;
            font-size: 10px;
            color: rgba(0, 0, 255, 0.733);
        }
    }
</style>