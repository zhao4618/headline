<template>
    <div class="list">
        <div class="article_item" v-for="item in currentList" :key="item.art_id">
            <h3 class="van-ellipsis">{{ item.title }}</h3>
            <div class="img_box" v-if="item.cover.type === 1">
                <img :src="item.cover.images[0]" class="w100" />
            </div>
            <div class="img_box" v-else-if="item.cover.type === 3">
                <img :src="item.cover.images[0]" class="w33" />
                 <img :src="item.cover.images[1]" class="w33" />
                  <img :src="item.cover.images[2]" class="w33" />
            </div>
            <div class="info_box">
                <span>13552285417</span>
                <span>0评论</span>
                <span>{{item.pubdate}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['currentCatagtory','currentList'])
    },
    watch: {
        currentCatagtory(newvalue) {
            this.$store.dispatch('newlist/getNewList', newvalue)
        }
    }
}
</script>

<style>
</style>