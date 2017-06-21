import React from 'react';

export default class JokeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {jokeData: []};
  }

  componentDidMount() {
    fetch('https://api.icndb.com/jokes/random/6.json', {method: 'get'})
    .then((data) => { return data.json() })
    .then((res) => {
      console.log(res.value);
      this.setState({ jokeData: res.value });
    })
  }

  render() {
    const jokes = this.state.jokeData.map((item, i) => {
      return <div key={item.id}>
      <div className="joke"><span className="joke-id">ID: {item.id} </span> - {item.joke}</div>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper"><div className="panel-list">{ jokes }</div></div>
  }


}
