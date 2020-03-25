<template>
<v-text-field
          v-model="localValue"
          autofocus
          @keypress="fetchData"
          label="Enter Artists Name"
          append-icon="search"
        ></v-text-field>
</template>

<script>
export default {
  name: 'App',
   props: {
    value: String
  },
  data: () => ({
  localValue: "",
  url_base: 'https://itunes.apple.com/search?entity=album&term=',
  }),
  created () {
      this.localValue = this.value;
      this.$watch("localValue", value => {
      this.$emit("input", value);
  });
 },
 methods: {
        fetchData(e) {
        if (e.key == "Enter") {
        console.log(this.localValue);
        }
    }
 }
}

</script>

