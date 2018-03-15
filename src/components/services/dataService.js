import Consts from "../consts";
import axios from "axios/index";

class API {

  getAuthors = () => {
    return [
      {id: 1, name: 'David Starr', occupation: 'Technical Learning Director'},
      {id: 2, name: 'Scott Allen', occupation: 'Web Developer'},
      {id: 3, name: 'Matt Milner', occupation: 'Programmer Extraordinaire'},
      {id: 4, name: 'Ben Day', occupation: 'Pluralsight Author & Consultant'},
      {id: 5, name: 'Cory House', occupation: 'React.js Guru'}
    ]
  };

  getWeather = () => {
    let api_url = `${Consts.api_url}`;
    console.log(`api: ${api_url}`);
    axios.get(api_url, {headers: {'Access-Control-Allow-Origin': '*',}})
      .then(resp => {
        console.log(resp);
        // this.props.onSubmit(resp.data[this.state.userName]);
        return resp.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getDataPromise = () => {
    let api_url = `${Consts.api_url}`;
    console.log(`api: ${api_url}`);
    return axios.get(api_url, {headers: {'Access-Control-Allow-Origin': '*',}})
    // .then(resp => {
    //   console.log(resp);
    //   // this.props.onSubmit(resp.data[this.state.userName]);
    //   return resp.data;
    // })
      .catch(function (error) {
        console.log(error);
      });
  }

  getApiData = (success_cb, uri, conditional) => {
    // /posts 	100 items
// /comments 	500 items
// /albums 	100 items
// /photos 	5000 items
// /todos 	200 items
// /users 	10 items

// http://jsonplaceholder.typicode.com/posts/1/comments

    if (conditional) {
      // let api_url = `${Consts.api_url}.com/${tableName.toLowerCase()}/${this.props.lookup}`;
      let api_url = `${Consts.api_url}.com/${uri.toLowerCase()}`;
      console.log(`hitting: ${api_url}`);
      // axios.get(api_url, {headers: {'Access-Control-Allow-Origin': '*',}})
      axios.get(api_url)
        .then(resp => {

          // console.log('api call success!');
          // console.log(resp);
          success_cb(uri, resp.data)
        })
        .catch(function (error) {
          // console.log('api call error :(');
          // console.log(error);
          success_cb(uri, [{Error: 'call'}])
        });
    }
    else {
      // null return
      success_cb(uri, [])
    }
  };
}

export default new API();

