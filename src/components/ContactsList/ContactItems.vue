<template>
<ul class="contacts-list">
    <li v-for="(contact, index) in ALL_CONTACTS" :key="contact._id" class="contacts-list__item">
        <div class="contact-name">
        <span style="font-weight: bold; margin-right: 10px;">{{ index + 1}}.</span>
            <span style="margin-right: 5px">{{contact.secondName}}</span>
            <span>{{contact.firstName}}</span>
        </div>
        <div>
            <span class="contact-phone">{{contact.contactPhone}}</span>
            <router-link 
                class="delete-contactBtn contact-btn"
                :to="{path: `/contact-info/${index}/delete`}" 
            >удалить</router-link>
            <router-link
                :to="{path: `/contact-info/${contact.id}`}" 
                class="open-contactBtn contact-btn"
            >подробнее</router-link>
        </div>
    </li>
</ul>
</template>

<script>
import {mapGetters} from 'vuex'
import DeletePopup from '../popups/DeletePopup.vue'
export default {
    components: { DeletePopup },
    name: "contact-items",
    computed: {
        ...mapGetters(['ALL_CONTACTS'])
    },
}
</script>

<style lang='scss' scoped>
.contacts-list{
    background-color: #f2f2f2b9;
    padding: 30px 0;
    border-radius: 7px;
    &__item{
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto 20px;
        border-bottom: 1px solid gray;
        padding: 0 10px 7px;
    }
    .contact-btn{
        display: inline-block;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        padding: 5px 10px;
        margin-left: 15px;
        border-radius: 5px;
        box-shadow: 0 0 3px gray;
    }
    .delete-contactBtn{
        background-color: tomato;
            &:hover{
            background-color: rgb(252, 84, 54);
        }
        &:active{
            background-color: rgba(255, 0, 0, 0.767);
            box-shadow: 0 0 10px rgba(128, 128, 128, 0.336) inset;
            transform: scale(.98);
        }
    }
    .open-contactBtn{
            background-color: rgb(6, 173, 6);
             &:hover{
                background-color: rgba(6, 173, 6, 0.781);
            }  
            &:active{
                box-shadow: 0 0 5px black inset;
                transform: scale(.98);
            }
    }
    .contact-name{
        align-self: center;
    }
}
</style>
