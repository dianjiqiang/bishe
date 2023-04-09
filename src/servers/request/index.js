import axios from "axios";

class Request {
  constructor(baseURL, timeout) {
    const instance = axios.create({
      baseURL,
      timeout,
    });

    instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.instance = instance;
  }
  getRequest(url, config) {
    return this.instance.get(url, config);
  }
  postRequest(url, config) {
    return this.instance.post(url, config);
  }
}

export default new Request("/", 3000);
// export default new Request('http://codercba.com:1888/airbnb/api', 3000)
