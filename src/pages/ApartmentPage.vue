<template>
    <main class="apartment-page">
        <SectionWithHeaderSpacer>
            <AppContainer>
                <div v-if="apartment" class="apartment-page__content">
                    <ApartmentsMainInfo :apartment="apartment" />
                    <div class="apartment-page__additional-info">
                        <AprtmentsOwner
                            class="apartment-page__owner"
                            :owner="apartment.owner"
                        />
                        <ReviewsVisitor :reviews="reviewsList" />
                    </div>
                </div>
            </AppContainer>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import AppContainer from '../components/shared/AppContainer.vue';
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue';
import ApartmentsMainInfo from '../components/appartment/ApartmentsMainInfo.vue';
import AprtmentsOwner from '../components/appartment/AprtmentsOwner.vue';
import ReviewsVisitor from '../components/reviews/ReviewsVisitor.vue';
import reviewsList from '../components/reviews/reviews.json';
import { getApartmentById } from '../services/apartments.service';

export default {
    name: 'ApartmentPage',
    components: {
        AppContainer,
        SectionWithHeaderSpacer,
        ApartmentsMainInfo,
        AprtmentsOwner,
        ReviewsVisitor
    },
    data() {
        return {
            apartment: null,
        };
    },
    computed: {
        reviewsList() {
            return reviewsList;
        },
    },
    async created() {
        try {
            const { id } = this.$route.params;
            const { data } = await getApartmentById(id);
            this.apartment = data;
        } catch (error) {
            console.error(error);
        }
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