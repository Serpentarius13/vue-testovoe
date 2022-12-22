<template>
  <div class="news-section__list-item">
    <p class="news-section__list-item-id">{{ id }}</p>
    <div class="news-section__list-item-description">
      <button @click="onShow" class="news-section__list-item-description-name">
        {{ title }}
      </button>
      <p class="news-section__list-item-description-author">
        id автора: {{ userId }}
      </p>
    </div>
    <button @click="onDelete" class="news-section__list-item-deleteBtn">
      Удалить
    </button>
  </div>

  <p class="news-section-text-body" v-show="isShowingText">{{ body }}</p>
</template>

<script setup>
import { defineProps, ref } from "vue";
// eslint-disable-next-line vue/no-setup-props-destructure
const { item } = defineProps(["item"]);
const { userId, title, body, id } = item;
const isShowingText = ref(false);

console.log(isShowingText);

const onDelete = () => {
  alert("Deleted");
};

const onShow = () => {
  isShowingText.value = !isShowingText.value;
};
</script>

<style lang="scss" scoped>
.news-section {
  &__list-item {
    display: flex;
    align-items: center;

    gap: 0.3rem;

    &-id {
      font-size: 72px;
      color: #999;
      width: 10%;
      padding-left: 12px;
    }
    &-description {
      flex: 1;

      &-name {
        font-size: 24px;
        font-weight: bold;
        color: black;
        cursor: pointer;
        border: none;

        &:hover {
          color: gray;
        }
      }
    }

    &-deleteBtn {
      width: 5%;
      text-align: center;
      margin-top: 36px;
      border: none;
      color: red;
      cursor: pointer;
      &:hover {
        color: rgb(148, 0, 0);
      }
    }
  }
  &-text-body {
    font-size: 16px;
    padding: 12px;
  }
}
</style>
