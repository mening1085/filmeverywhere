// import authService from "../authService";
import Service from '../service'

const post = {
  getPosts() {
    return Service.get(`/api/posts`)
  },
  getPostById(id) {
    return Service.get(`/api/posts/${id}`)
  },
  save(data) {
    return Service.post(`/api/create-post`, data)
  },
  update(data) {
    return Service.put(`/api/posts/${data._id}`, data)
  },
  delete(id) {
    return Service.delete(`/api/posts/${id}`)
  },
}

export default post
