<template>
    <main class="apartment-page">
        <SectionWithHeaderSpacer>
            <AppContainer>
               
            </AppContainer>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import AppContainer from '../components/shared/AppContainer.vue';

import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';

export default {
    name: 'ApartmentPage',
    components: {
        AppContainer,
        SectionWithHeaderSpacer,
    },
};
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        align-items: flex-start;
    }

    &__additional-info {
        margin-left: 30px;
        max-width: 350px;
        flex-grow: 0;
        flex-shrink: 1;
    }
}
</style>