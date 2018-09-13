export const LOADING = "LOADING"

export function loading(isLoading) {
  return {
    type: LOADING,
    payload: {
      isLoading
    }
  }
}
