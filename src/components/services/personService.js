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
      let api_url = `${Consts.api_url}`
      // console.log(api_url);
      axios.get(api_url, {headers: {'Access-Control-Allow-Origin': '*',}})
        .then(resp => {
          console.log(resp);
          // this.props.onSubmit(resp.data[this.state.userName]);
          this.props.onSubmit(resp.data);
          this.setState({userName: 'kod'});
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

export default API;
