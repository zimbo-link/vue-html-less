<template>
  <parent-component />
</template>

<script>
import ParentComponent from "./components/parent-component";

export default {
  props: {},
  data() {
    return {};
  },
  name: "app",
  components: {
    ParentComponent,
  },
};
</script>
