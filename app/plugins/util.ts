export default defineNuxtPlugin(() => {
  return {
    provide: {
      goToBlank(url: string) {
        navigateTo(url, {
          external: true,
          open: {
            target: '_blank',
            windowFeatures: {
              noopener: true
            }
          }
        })
      }
    }
  }
})
