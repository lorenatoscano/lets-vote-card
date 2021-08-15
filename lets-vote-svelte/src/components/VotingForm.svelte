
<div class="card-container">
  <h2 class="title">Inicie uma votação</h2>
  <form on:submit={handleSubmit}>
    <div class="form-field">
      <label for="title">Título:</label>
      <input
        type="text"
        placeholder="O que gostaria de perguntar?"
        id="title"
        name="title"
        class={`${$errors.required || $errors.maxLength ? 'field-invalid' : ''}`}
        on:blur={handleChange}
        bind:value={$form.title}
      />
      {#if $errors.required}
        <span>{$errors.required}</span>
      {/if}
      {#if $errors.maxLength}
        <span>{$errors.maxLength}</span>
      {/if}
    </div>

    <div class="form-field">
      <label for="threeOptions">Opções de voto:</label>
      <select 
        id="threeOptions"
        name="threeOptions"
        class={`${$errors.optionRequired ? 'field-invalid' : ''}`}
        on:blur={handleChange}
        bind:value={$form.threeOptions}
      >
        <option></option>
        <option value="0">Sim, não</option>
        <option value="1">Sim, não, talvez</option>
      </select>
      {#if $errors.optionRequired}
        <span>{$errors.optionRequired}</span>
      {/if}
    </div>

    <button type="submit">Começar</button>
  </form>
</div>


<script>
  import { createForm } from "svelte-forms-lib";
  import { createEventDispatcher } from 'svelte';
  import { createVotation } from './store.js';

  let votation = createVotation();

  const dispatcher = createEventDispatcher();

  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      title: "",
      threeOptions: "",
    },
    validate: values => {
      let errs = {};
      if (values.title === "") {
        errs["required"] = "Título é obrigatório";
      }
      if (values.title.length > 30) {
        errs["maxLength"] = "Máximo de 30 caracteres";
      }
      if (values.threeOptions === "") {
        errs["optionRequired"] = "Campo obrigatório";
      }
      return errs;
    },
    onSubmit: data => {
      votation.setTitle(data.title);
      votation.setOptions(data.threeOptions);
      dispatcher('start');
    }
  });
</script>

<style>
.card-container {
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
}

.title {
  color: #2e384d
}

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

button, input, select {
  font: 400 1rem "Inter", sans-serif; 
}

button {
  width: 7.5rem;
  height: 2.5rem;

  margin-top: 2rem;
  margin-bottom: 2rem;

  border: 0;
  border-radius: 5px;

  background: #5965e0;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;

  cursor: pointer;

  transition: background-color 0.2s;
}

button:hover {
  background: #4953b8;
}
</style>