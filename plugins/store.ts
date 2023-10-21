const auth = { name: "bien" }
const register = { step: 0 }
const loading = false

export default defineNuxtPlugin((app) => {
  const store = reactive({ auth, register, loading })
  return {
    provide: {
      store,
    },
  }
})
