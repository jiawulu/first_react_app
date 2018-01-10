import axios from "axios"

it("test axios ", () => {

    console.log("start get")

    let data = axios.get("http://baidu.com").then(function (response) {
        // console.log(data)

        console.log("on then")

        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);

        return response.data;

    }).catch(function (e) {
        console.error(e)
    }).then(function (data) {
        console.log("on then2");
        return 123;
    }).then(function (data) {
        console.log("on then2" , data);
        return 456;
    })

    console.log("data",data)

    data.then(function (data) {
        console.log("on outer then" , data);
    })


})


it("test axios error ", () => {

    axios.get("http://baidu0000.com").then(function (response) {
        // console.log(data)

    }).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    })


})