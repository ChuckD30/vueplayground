<template>
    <div>
        <div class="container">
            <h3><strong>Quotes Added</strong></h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width:(counter/total) * 100 + '%'}">{{counter}}/{{total}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        props: ['counter', 'total'],
    }
</script>

<style scoped>
.container {
    margin: 30px;
}

.progress {
    height: 30px;
    font-size: 22px;
}

</style>