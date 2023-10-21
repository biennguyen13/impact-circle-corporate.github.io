<template>
  <div></div>
</template>

<script lang="ts" setup>
const app = useNuxtApp()
const { $axios } = useNuxtApp()
$axios.get("news").then((res) => res)

const state = reactive({ search: "", options: null })

const handleDropdownOk = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss"></style>
