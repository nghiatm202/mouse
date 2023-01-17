import wards from '../constants/data/wards.json'
import provinces from '../constants/data/provinces.json'
import districts from '../constants/data/districts.json'

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

export const pcVN = {
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getDistrictsByProvinceCode: (provinceCode) =>
    districts.filter((x) => x.province_code == provinceCode),
  getWardsByDistrictCode: (districtCode) =>
    wards.filter((x) => x.district_code == districtCode),
  getWardsByProvinceCode: (provinceCode) =>
    wards.filter((x) => x.province_code == provinceCode),
}
