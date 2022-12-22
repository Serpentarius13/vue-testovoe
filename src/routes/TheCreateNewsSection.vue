//** Yeah, I know the word 'reusability'. So what? */

<template>
  <h1 class="heading">Create post</h1>
  <div class="forms">
    <form @submit.prevent="submit" class="form">
      <base-input v-model="formState.name" label="Name" type="text" />
      <base-input v-model="formState.email" label="Email" type="text" />
      <the-radio-box-input @gender="(value) => (formState.gender = value)" />
      <base-input v-model="formState.message" label="Message" type="textarea" />
      <the-check-box-input v-model="formState.agree" label="Agree upon" />
      <button class="form__submit-btn" type="submit">Submit</button>
    </form>

    <ul class="newPost" v-show="newPost">
      <li v-for="(value, key) in newPost" :key="key" class="newPost__item">
        <span> {{ key }}: </span>
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import BaseInput from "../components/Form/BaseTextInput.vue";
import TheCheckBoxInput from "./../components/Form/TheCheckBoxInput.vue";
import TheRadioBoxInput from "./../components/Form/TheRadioBoxInput.vue";
import { reactive, ref } from "vue";

const initialState = {
  name: "",
  email: "",
  message: "",
  agree: false,
  gender: "female",
};
const formState = reactive({ ...initialState });

const newPost = ref(null);

//** Yes. I dont know validation in vue. So what? */
const validateLength = (arr) => {
  let check = false;

  arr.forEach((el) => {
    if (el.length < 5 || el.length > 400) check = true;
  });

  return check;
};

//** Utter hell. */
const submit = () => {
  if (!formState.agree) {
    alert("Agree first");
    return;
  }

  const keys = Object.values(formState).slice(0, 3);


  if (validateLength(keys)) {
    alert("Write some more");
    return;
  }

  const emailConditions = ["@", "."];

  if (!emailConditions.some((el) => formState.email.includes(el))) {
    alert("Do some nice email for me");
    return;
  }

  newPost.value = { ...formState };
  Object.assign(formState, initialState);
};
</script>

<style lang="scss" scoped>
.forms {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  & .form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 28px;

    &__submit-btn {
      width: 10%;
      padding: 12px;
    }
  }

  & .newPost {
    width: 40%;
    height: 30rem;

    list-style: none;

    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 20px;

    border: 2px solid gray;

    &__item {
      width: 100%;
      word-break: break-all;
      padding: 2px;
      border-bottom: 0.5px solid gray;

      & span {
        font-size: 14px;
      }
    }
  }
}
</style>
