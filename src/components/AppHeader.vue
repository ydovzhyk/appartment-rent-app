<template>
    <header class="header">
        <AppContainer>
            <AppLogo />
        </AppContainer>
    </header>
</template>

<script>
import AppContainer from '../components/shared/AppContainer.vue'
import AppLogo from './shared/AppLogo.vue';

    export default {
        name: 'AppHeader',
        components: {
            AppContainer,
            AppLogo
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $secondary-color;
    padding: 16px 0;
}


</style>