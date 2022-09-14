import axios from 'axios'

export default {
  getContacts: function () {
    return axios.get("/api/contact")
  },

  contactForm: function (data) {
    return axios.post("/api/contact", data)
  }
}