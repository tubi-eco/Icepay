import axios from "axios";
import router from "@/router/index"

const getTransactions = (context) =>{
    var APIurl =
      "https://raw.githubusercontent.com/icepaydevelopers/fe-assignment/main/dataset.json";
    axios
      .get(APIurl)
      .then((response) => {
        context.commit('SET_ITEMS', response.data.transactions)
        console.log('api')
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          router.push({name: 'Error' })
        } 
        else {
          return Promise.reject(error)
        }
      });
    };

    export default {
      getTransactions
      };