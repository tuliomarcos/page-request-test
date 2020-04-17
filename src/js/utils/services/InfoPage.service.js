export const texts = () => {
  return fetch('https://demo3241810.mockable.io/trial/content')
    .then(res => res.json())
    .then(res => res.data)
    .catch(err => {
      throw err
    })
}