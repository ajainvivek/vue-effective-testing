<template>
    <div class="Home">
        <list :list="characters" :loading="loading" @fetchMore="loadMore"></list>
    </div>    
</template>

<script>
import List from '@/components/List.vue'

const characters = require('./../../data/people.json');

export default {
    name: 'home',
    components: {
       List 
    },
    computed: {
        characters () {
            return characters.results.map((character, index) => {
                return {
                    id: index,
                    title: character.name
                }
            });
        }
    }, 
    data () {
        return {
            loading: false
        };
    }
}
</script>
