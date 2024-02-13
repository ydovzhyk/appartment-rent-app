<template>
  <main class="homepage">
    <SectionWithHeaderSpacer>
    <AppContainer>
      <ApartmentsFilterForm @submit="updateData"/>
    </AppContainer>
    <AppContainer>
      <p v-if="!apartments.length">За вашим пошуком не знайдено квартир</p>
      <ApartmentsList v-else :items="apartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
      <CircleLoader v-if="loading" width="90" height="90" color="#ff662d" />
    </AppContainer>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import ApartmentsList from '../components/appartment/ApartmentsList.vue';
import ApartmentsItem from '../components/appartment/ApartmentsItem.vue';
import ApartmentsFilterForm from '../components/appartment/ApartmentsFilterForm.vue';
import AppContainer from '../components/shared/AppContainer.vue';
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue';
import { getApartmentsList } from '../services/apartments.service';
import CircleLoader from '../components/shared/loaders/CircleLoader.vue';

export default {
  name: 'HomePage',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    AppContainer,
    SectionWithHeaderSpacer,
    CircleLoader,
  },
  data() {
    return {
      loading: false,
      text: '',
      selectedItem: '',
      apartments: [],
      filters: {
        city: '',
        price: ''
      }
    }
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await getApartmentsList();
      this.apartments = data;
      this.loading = false
    } catch (error) {
      console.error(error);
      this.loading = false
    }
  },
  methods: {
    async updateData({ city, price }) {
      if (city !== undefined && price !== undefined) {
        try {
          this.loading = true;
          const { data } = await getApartmentsList();
          this.apartments = data;
          this.filters.city = city;
          this.filters.price = price;

          // Оновлюємо apartments з відфільтрованими apartment
          this.apartments = this.apartments.filter(apartment => {
            return (this.filters.city === 'Всі міста' || apartment.location.city === this.filters.city) && apartment.price >= this.filters.price;
          });
          this.loading = false;
        } catch (error) {
          console.error(error);
          this.loading = false;
        }
      } else {
        return
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
