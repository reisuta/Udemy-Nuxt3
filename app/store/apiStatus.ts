import { defineStore } from 'pinia'

export const useApiStatusStore = defineStore('apiStatus', {
  state: () => {
    return {
      statusCode: null as number | null
    }
  },
  actions: {
    setStatusCode(newStatusCode: number) {
      this.statusCode = newStatusCode
    }
  },
})
