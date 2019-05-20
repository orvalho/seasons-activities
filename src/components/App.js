import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => this.setState({lat: position.coords.latitude}), err => this.setState({errorMessage: err.message}));
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div><SeasonDisplay lat={this.state.lat}/></div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Loader message="Please accept location request"/>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
