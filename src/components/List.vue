<template>
  <div class="List">
    <ul class="List__list">
        <li class="List__listitem" v-for="item in list" :key="item.id">{{ item.title }}</li>
    </ul>
    <p v-show="loading" class="List__listitem-loading">
        Loading...
    </p>
   </div> 
</template>

<style>
    .mint-spinner-fading-circle {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }
</style>

<style scoped>
    .List {
        margin-top: 40px;
    }

    .List__list {
        margin: 0;
        padding: 0;
    }

    .List__listitem {
        height: 70px;
        line-height: 70px;
        border-bottom: solid 1px #eee;
        text-align: center;
        list-style: none;
    }

    .List__listitem-loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
        margin: 0;
    }
</style>

<script>
export default {
  name: 'list',
  props: [
    'loading',
    'list'
  ],
  methods: {
    fetchMore () {
      this.$emit('fetchMore');
    }
  }
}
</script>
