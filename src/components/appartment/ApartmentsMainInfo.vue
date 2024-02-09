<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <ButtonVue class="btn-dark" label="Забронювати" @click="handleApartmentsBooking"></ButtonVue>
    </div>
  </article>
</template>

<script>
import StarRating from '../shared/StarRating.vue';
import ButtonVue from '../shared/ButtonVue.vue';

export default {
  name: 'ApartmentsMainInfo',
  components: {
    StarRating,
    ButtonVue,
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleApartmentsBooking() {
    //   const body = {
    //     apartmentId: this.$route.params.id,
    //     date: Date.now(),
    //   };

    //   try {
    //     this.isLoading = true;
    //     await bookApartment(body);

    //     this.$notify({
    //       type: 'success',
    //       title: 'Заказ добавлен',
    //     });
    //   } catch (error) {
    //     this.$notify({
    //       type: 'error',
    //       title: 'Произошла ошибка',
    //       text: error.message,
    //     });
    //   } finally {
    //     this.isLoading = false;
    //   }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
