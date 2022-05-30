import axiosClient from './axiosClient'

const categoryMenuApi = {
  getAll(params) {
    const url = '/categoryMenu'
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/categoryMenu/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/categoryMenu'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/categoryMenu/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `/categoryMenu/${id}`
    return axiosClient.delete(url)
  },
}

export default categoryMenuApi
