export const formatPrice = (price) => {
  let temp = price
  let round = 1

  while (temp > 1) {
    temp /= 10
    round *= 10
  }

  round /= 100
  const newPrice = Math.round(price / round) * round
  return newPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })
}

export const roundPrice = (price) => {
  let temp = price
  let round = 1

  while (temp > 1) {
    temp /= 10
    round *= 10
  }

  round /= 100
  const newPrice = Math.round(price / round) * round
  return newPrice
}
