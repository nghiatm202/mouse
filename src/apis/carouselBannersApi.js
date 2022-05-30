import axiosClient from './axiosClient'

const carouselBannersApi = {
  getAll(params) {
    const url = '/carouselBanners'
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/carouselBanners/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/carouselBanners'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/carouselBanners/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `/carouselBanners/${id}`
    return axiosClient.delete(url)
  },
}

export default carouselBannersApi
