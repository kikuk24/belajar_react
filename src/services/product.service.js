import axios from "axios";

export const getDataProduct = (callback) => {
  axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data)
    }).catch((err) => {
      console.log(err)
    })
}

export const getProduct = (id , callback) => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}