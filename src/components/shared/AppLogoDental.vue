<template>
    <router-link :to="{ name: 'homepage' }">
        <img src="../../assets/svg/logo-dental.svg" alt="logo">
    </router-link>
</template>

<script>
export default {
    name: 'AppLogoDental'
}
</script>

<style lang="scss" scoped>
img {
    width: 282px; /* Змініть на бажану ширину */
    height: 168px; /* Змініть на бажану висоту */
}
</style>