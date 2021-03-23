<template>
    <div class="container">
        <div class="row">
            <app-quote v-for="quote in quotes" :key="quote.id" @click.native="deleteQuote">{{quote}}</app-quote>
        </div>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    props: ['quotes'],
    components: {
        'app-quote': Quote,
    },
    methods: {
        deleteQuote() {
            this.$emit('quoteDeleted');
        }
    }
}
</script>

<style scoped>

</style>