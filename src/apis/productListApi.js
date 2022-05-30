import axiosClient from './axiosClient'

const productListApi = {
  getAll(params) {
    const url = '/productList'
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/productList/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/productList'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/productList/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `/productList/${id}`
    return axiosClient.delete(url)
  },
}

export default productListApi
