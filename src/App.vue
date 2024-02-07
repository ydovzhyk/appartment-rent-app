<template>
  <div id="app">
    <AppHeader />
    <div class="content">
      <h2>{{ text }}</h2>
      <h2>{{ selectedItem }}</h2>
      <AppContainer>
        <ApartmentsFilterForm @submit="updateData"/>
      </AppContainer>
      <AppContainer>
        <p v-if="!apartments.length">За вашим пошуком не знайдено квартир</p>
        <ApartmentsList v-else :items="apartments">
          <template v-slot:apartment="{apartment}">
            <ApartmentsItem
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
              @click="handleItemClick"
            />
          </template>
        </ApartmentsList>
      </AppContainer>
    </div>
    <AppFooter />
  </div>

</template>

<script>
import ApartmentsList from './components/appartment/ApartmentsList.vue';
import ApartmentsItem from './components/appartment/ApartmentsItem.vue';
import apartments from './components/appartment/apartments';
import ApartmentsFilterForm from './components/appartment/ApartmentsFilterForm.vue';
import AppContainer from './components/shared/AppContainer.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    AppContainer,
    AppFooter,
    AppHeader
  },
  data() {
    return {
      text: '',
      selectedItem: '',
      apartments,
      filters: {
        city: '',
        price: ''
      }
    }
  },
  methods: {
    handleItemClick() {
      console.log('item clicked')
    },
    updateData({ city, price }) {
      if (city !== undefined && price !== undefined) {
        this.apartments = apartments;
        this.filters.city = city;
        this.filters.price = price;

        // Оновлюємо apartments з відфільтрованими apartment
        this.apartments = this.apartments.filter(apartment => {
          return (this.filters.city === 'Всі міста' || apartment.location.city === this.filters.city) && apartment.price >= this.filters.price;
        });
      } else {
        return
      }
    },
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
