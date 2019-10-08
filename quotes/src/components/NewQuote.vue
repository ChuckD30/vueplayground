<template>
    <div class="container">
        <p><strong>Quotes</strong></p>
        <form>
            <div class="form-group">
                <textarea class="form-control quote-input" id="" rows="3" placeholder="Type quotes here and click 'Add Quote' to submit" v-model="entry"></textarea>
            </div>
        </form>
         <button class="btn btn-primary add-quote" type="submit" style="width:200px;" @click.prevent="addQuote">Add Quote</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            entry:''
        }
    },

    methods: {
        addQuote() {
            if (this.entry != '') {
                this.$emit('quoteAdded', this.entry);
                this.entry = '';
            }
        }
        },

}

</script>

<style scoped>
.quote-input {
    height: 200px;
    width: 800px;
}

/* .add-quote {
    display: flex;
    justify-content: center;
} */


</style>