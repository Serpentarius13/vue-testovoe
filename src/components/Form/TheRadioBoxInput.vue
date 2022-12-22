//** DONT LOOK AT THIS! */ //! I WARN YOU.

<template>
  <div class="radio-box">
    <div>
      <input
        :checked="!gender"
        type="radio"
        :value="gender"
        @click="onChange"
        id="female"
      />
      <label for="female"> Female </label>
    </div>
    <div>
      <input
        :checked="gender"
        type="radio"
        :value="!gender"
        @click="onChange"
        id="male"
      />
      <label for="male"> Male </label>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["gender"]);
const gender = ref(false);

const onChange = () => {
  gender.value = !gender.value;

  const emittedValue = gender.value ? "female" : "male";
  emit("gender", emittedValue);
};
</script>

<style lang="scss" scoped>
.radio-box {
  display: flex;
  gap: 60px;
  align-items: center;
}
</style>
