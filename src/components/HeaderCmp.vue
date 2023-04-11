<script>
    export default{
        props: {
            msg: String
        }
    }
</script>

<template>
    <h1>{{ msg || 'NO PROPS PASSED YET ' }}</h1>
</template>