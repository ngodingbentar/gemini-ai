const apiKey = import.meta.env.VITE_API_KEY

export const cekEnv = () => {
  console.log('api', apiKey)
}