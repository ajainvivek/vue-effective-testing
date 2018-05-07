<template>
    <div class="Home">
        <list :list="list" :loading="loading" @fetchMore="loadMore"></list>
    </div>    
</template>

<script>
import List from '@/components/List.vue'

export default {
    name: 'home',
    components: {
       List 
    },
    data () {
        return {
            loading: false,
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    },
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        }
    }
}
</script>
