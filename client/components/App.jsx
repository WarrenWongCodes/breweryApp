import React from 'react';
import axios from 'axios';

import Breweries from './Breweries';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = [];
    this.toggleMap = false;
  }

  // Retrieves Breweries from API
  async componentDidMount() {
    try {
      const config = {
        method: 'get',
        url: '/breweries',
      };

      const { data } = await axios(config);
      this.setState({
        data: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  // TODO: toggle Map
  showMap() {
    this.setState({ toggleMap: !this.toggleMap });
    console.log('the state:', this.toggleMap);
  }

  render() {
    return (
      <div>
        <Breweries breweries={this.state.data} />
      </div>
    );
  }
}
