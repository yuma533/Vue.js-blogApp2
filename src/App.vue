<script>
export default{
  data() {
    return{
      blogArray: [],
    }
  },
}
</script>

  <template>
    <h1>BROG APP</h1>
    <div>
      <router-link to="/">VIEW ALL ARCHIVES</router-link>
      <router-link to="/post" @send-data="(t) => blogArray = t">/POST</router-link>
      <router-view></router-view>
    </div>
    <div>
        <ul>
            <li v-for="item in blogArray" :key="blogArray.id">
                {{ item.title }}
                {{ item.date }}
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>