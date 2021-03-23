<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="quote-body">
                <slot></slot>
            </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
.quote-body {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    &:hover {
        background-color: #ffe2e2;
    }
}
</style>