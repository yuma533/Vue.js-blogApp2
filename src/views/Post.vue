<script>
import HeaderCmp from '../components/HeaderCmp.vue'

    export default{
        data() {
            return{
                newTitle: '',
                newDate: '',
                newText: '',
                blogArray: [],
                headerText: 'POST'
            }
        },
        components: {
            HeaderCmp
        },
        methods: {
            addText() {
                this.blogArray.push({
                    id: this.id++,
                    title: this.newTitle, 
                    date: this.newDate, 
                    text: this.newText
                })
                this.newTitle =''
                this.newDate = ''
                this.newText = ''
            },
            // #TODO 毎回全ての配列を保存している状態なので、修正する必要あり
            // #TODO id++でキーを設定して、ローカルストレージに保存→できひんぽい？
            saveData() {
                localStorage.setItem('blogArray', JSON.stringify(this.blogArray))
                console.log(this.blogArray)
            },
        }
    }
</script>

<template>
    <HeaderCmp :msg="headerText"/>
    <form @submit.prevent="addText">
        <input v-model="newTitle" placeholder="Title">
        <input v-model="newDate" placeholder="Date">
        <input v-model="newText" placeholder="Text">
        <button>配列に保存する</button>
    </form>
    <button @click="saveData">ローカルストレージに保存</button>
</template>