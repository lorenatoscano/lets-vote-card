<template>
  <div class="card-container">
    <h2 class="title">Inicie uma votação</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-field">
          <label>Título:</label>
          <input
            type="text"
            placeholder="O que gostaria de perguntar?"
            v-model="v$.title.$model"
            :class="{ 'field-invalid': v$.title.$error}"
          />
          <div v-for="(error, index) of v$.title.$errors" :key="index">
            <span>{{ error.$message }}</span>
          </div>
        </div>
        
        <div class="form-field">
          <label>Opções de voto:</label>
          <select 
            v-model="v$.threeOptions.$model"
            :class="{ 'field-invalid': v$.threeOptions.$error}"
          >
            <option value=""></option>
            <option value="0">Sim, não</option>
            <option value="1">Sim, não, talvez</option>
          </select>
          <div v-for="(error, index) of v$.threeOptions.$errors" :key="index">
            <span>{{ error.$message }}</span>
          </div>
        </div>

        <button type="submit">Começar</button>
      </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'
import { setOptions, title } from '../store.js';

export default {
  setup () {
    const state = reactive({
      title: '',
      threeOptions: '',
    });

    const rules = {
      title: {
          required,
          max: maxLength(30)
      },
      threeOptions: {
          required
      },
    }

    const v$ = useVuelidate(rules, state);
   
    return { v$, state }
  },

  methods: {
    handleSubmit() {
      this.v$.$touch()
      if (this.v$.$error) return;
      title.value = this.state.title;
      setOptions(this.state.threeOptions);
      this.$emit('start');
    }
  }
}
</script>

<style>
.form-field {
  text-align: left;
  margin-bottom: 1rem;
}

.form-field input, select {
  display: block;
  width: 100%;
  height: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #2e384d;
  border: solid 1px #666666;
  border-radius: 5px;
}

.form-field input:focus-visible:not(.field-invalid), select:focus-visible {
  outline: #2e384d auto 1px;
}

.form-field span {
  font-size: 0.9rem;
  color: #D65151;
}

.field-invalid {
  border: solid 1px #D65151 !important;
}

.field-invalid:focus-visible {
  outline: #D65151 auto 1px;
}

.form-field select {
  height: 2.25rem;
}
</style>