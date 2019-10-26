<template>
     <span>{{this.currency+this.value.toFixed(this.precision)}}</span>   
</template>

<script>
export default {
    name:'GoodPrice',
    props:['currency','precision','value']
}

</script>

<style scoped>

</style>
