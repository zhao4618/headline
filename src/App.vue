<template>
   <div id="app">
    <Catagtory></Catagtory>
      <Newlist></Newlist>
    </div>
</template>

<script>
import Catagtory from './components/catagtory.vue';
import Newlist from './components/newlist.vue';
export default {
    components: { Catagtory, Newlist }
}
</script>

<style>

</style>