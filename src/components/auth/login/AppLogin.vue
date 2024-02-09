<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <AppForm ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        autocomplete="current-password"
        type="password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <ButtonVue class="login__btn" type="submit" :loading="loading">Вхід</ButtonVue>
    </AppForm>
  </AuthContainer>
</template>

<script>
import AppForm from '../../shared/AppForm.vue';
import CustomInput from '../../shared/CustomInput.vue';
import ButtonVue from '../../shared/ButtonVue.vue';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../../shared/MainTitle.vue';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../../utils/validationRules';
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  components: {
    AppForm,
    CustomInput,
    ButtonVue,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        try {
          this.loading = true;
          await this.login(this.formData);

          this.$router.push({ name: 'homepage' });
          form.reset();
        } catch (error) {
          this.$notify({
            type: 'error',
            title: 'Сталася помилка',
            text: error.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
