<script>
import HeaderCmp from '../components/HeaderCmp.vue';

    export default{
        data() {
            return {
                blogArray: [],
                headerText: 'VIEW ALL ARCHIVES'
            }
        },
        components: {
            HeaderCmp
        },
        methods: {

        // #TODO 毎回全ての配列を取得している状態なので、修正する必要あり
        // #TODO 解決策は、for文でkeyであるidを回して、ローカルストレージからデータを取得
            loadData() {
                const data = localStorage.getItem('blogArray');
                if(data) {
                    this.blogArray = JSON.parse(data);
                    console.log(this.blogArray)
                }
                else{
                    console.log("no data")
                }
            }
        }
    }
</script>

<template>
    <HeaderCmp :msg="headerText" />
    <ul>
        <button @click="loadData">ローカルストレージから取得</button>
        <li v-for="(item, index) in blogArray" :key="index">
            {{ item.title }}
            {{ item.date }}
            {{ item.text }}
        </li>
    </ul>
</template>