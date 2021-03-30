<template>
<section class="contact-info">
    <h1 class="contact-info__name">
        Имя контакта: <strong>{{ getContact.secondName + " " + getContact.firstName + " " + getContact.lastName }}</strong>   
    </h1>
    <ul class="contact-info__list">
        <li class="contact-info__phone contact-info__list-item">Телефон: {{ getContact.contactPhone }}</li>
        <li 
            class="contact-info__row-inner"
            v-for="(row, index) in getRowInfo" 
            :key="index"
        >
        <input 
            style="font-size: 20px; font-weight: bold; cursor: pointer;"
            type="text" 
            title="Изменить"
            :value="row.title"
        >
            
        <input
            style="cursor: pointer;"
            type="text"
            title="Изменить"
            :value="row.text"
        >
        <router-link
            class="delete-rowInfo"
            :to="{path: `/contact-info/${row.id}/delete-row`}"
        ><span style="transform: rotate(45deg); display: block;">+</span>
        </router-link>
        <button
            type="submit" 
            class="saveBtn-row"
            @click="show(row)"
        >сохранить</button>
        </li>
        <li class="add-btnInner"> 
            <span class="add-btnText">Добавить новый пункт</span> 
            <router-link 
                :to="{path: `/contact-info/${getContact.id}/new-row`}" 
                class="addRow-btn"
            >+</router-link>
        </li>
    </ul>
    <router-link 
        :to="{path: '/'}"
        class="back-page"
    >к журналу</router-link>
</section>
</template>

<script>
export default {
    name: "ContactItem",
    data: () => {
        return {
            title: '',  
            text: ''
        }
    },
    methods: {
        show (row) {
            console.log(row);
            // let text = this.$refs.textInput.value
            // let title = this.$refs.titleInput.value

            // let newRow = {title: title, text: text}
            // this.$store.dispatch('CREATE_ROWS', {row, newRow})
        }
    },
    computed: {
        getContact () {
            return this.$store.getters.CONTACT_INFO(+this.$route.params.id)
        },
        getRowInfo () {
            return this.$store.getters.ROWS_CONTACT(+this.$route.params.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-info{
    max-width: 80%;
    margin: 0 auto;
    &__list-item{
        margin-bottom: 20px;
    }
    &__name{
        font-size: 30px;
        text-align: center;
        margin-bottom: 30px;
    }
    &__phone{
        font-size: 20px;
        margin-bottom: 40px;
    }
    &__row-inner{
        width: 500px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }
}
.add-btnInner{
    display: flex;
    align-items: center;
    margin-top: 50px;
}
.addRow-btn{
    font-weight: bold;
    font-size: 30px;
    color: white;
    padding: 5px 11px;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    background-color: greenyellow;
    border-radius: 50%;
    box-shadow: 0 0 10px 5px #f2f2f2;
    cursor: pointer;
    &:hover{
        background-color: rgb(157, 250, 18);
    }
    &:active{
        transform: scale(.95);
        box-shadow: 0 0 10px 5px #f2f2f29f;
    }
}
.delete-rowInfo{
    display: inline-block;
    color: white;
    font-size: 20px;
    background-color: tomato;
    border-radius: 7px;
    width: 22px;
    height: 22px;
    padding: 1px 5px 0 5px;
    margin-left: auto;

}
.saveBtn-row{
    color: white;
    font-weight: bold;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.151);
    background-color: greenyellow;
    padding: 3px 5px;
    border-radius: 7px;
    margin-left: 15px;
}
.back-page{
    display: inline-block;
    color: #f2f2f2;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.342);
    background-color: greenyellow;
    padding: 5px 10px;
    margin-top: 20px;
    border-radius: 5px;
}
</style>
