import axios from "axios"

export default defineNuxtPlugin((app) => {
  const instance = axios.create({
    baseURL: app.$config.public.API_URL,
  })

  instance.interceptors.request.use(function (config) {
    return config
  })

  instance.interceptors.response.use(
    function (response) {
      return response?.data?.data ?? null
    },
    function (error) {
      const code = error.response?.status ?? 500

      switch (code) {
        case 400:
          break
        case 409:
          break
        case 413:
          break
        case 404:
          break
        case 401:
          break
        default:
          break
      }
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: instance,
    },
  }
})
