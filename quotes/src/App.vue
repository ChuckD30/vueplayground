<template>
    <div>
      <app-header :counter="quotes.length" :total="total"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="removeQuote(quote)"></app-quote-grid>
      <footer>
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="alert alert-info">You need to click on a quote to delete it</div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NewQuote from '@/components/NewQuote.vue'
import QuoteGrid from '@/components/QuoteGrid.vue'
// import Quotes from '@/components/Quotes.vue'

export default {
  name: 'app',

  components : {
    'app-header': Header,
    'app-new-quote': NewQuote,
    'app-quote-grid': QuoteGrid,
  },

  data: function() {
    return {
      quotes: [
        "If you can't run, walk, if you can't walk.",
      ],
      total: 10,
      counter: 0,
    }
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.total) {
        alert("You may add only 10 quotes. Please delete a quote if you wish to add more");
      }
      this.quotes.push(quote)
    },
    removeQuote(quote) {
      this.quotes.pop(quote)
    }
  }
}
</script>

<style>
footer {
  margin: 30px;
}
</style>
