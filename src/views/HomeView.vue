<template>
  <div class="home">
    <ItemsListComponentVue :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemsListComponentVue from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponentVue,
  },

  setup() {
    const items: ItemInterface[] = [
      {
        id: 1,
        name: "Item 1",
        selected: false,
      },
      {
        id: 2,
        name: "Item 2",
        selected: false,
      },
      {
        id: 3,
        name: "Item 3",
        selected: false,
      },
      {
        id: 4,
        name: "Item 4",
        selected: false,
      },
    ];

    return {
      items,
    };
  },
});
</script>
