//** DONT LOOK AT THIS! */ //! I WARN YOU.

<template>
  <div>
    <b>Ваш пол</b>

    <div class="radio-box">
      <label for="female" class="container">
        <input
          :checked="isGenderFemale"
          type="radio"
          :value="isGenderFemale"
          @click="onChange"
          id="female"
        />
        <span class="mark" />
        Женский
      </label>
      <label for="male" class="container">
        <input
          :checked="!isGenderFemale"
          type="radio"
          :value="!isGenderFemale"
          @click="onChange"
          id="male"
        />
        <span class="mark" />
        Мужской
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["gender"]);
const isGenderFemale = ref(false);

const onChange = () => {
  isGenderFemale.value = !isGenderFemale.value;

  const emittedValue = isGenderFemale.value ? "female" : "male";
  emit("gender", emittedValue);
};
</script>

<style lang="scss" scoped>
.radio-box {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 4px;
}
</style>
