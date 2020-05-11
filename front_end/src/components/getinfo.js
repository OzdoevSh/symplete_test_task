import React, { Component } from 'react';
import moment from 'moment';


class Getinf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inf: [],
      itemsToShow: 10,
      flag: true,
    };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    for (let a = 0; a < this.state.inf.length; a++) {
      this.setState({ itemsToShow: this.state.itemsToShow + 10 });
    }
  }


  componentDidMount() {
    fetch('/infoget')
      .then((res) => res.json())
      .then((res) => this.setState({ inf: res.success }, () => console.log('inf fetched..', res)));
  }


  render() {
    return (
      <div>
        <h1>Информация о запросах</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">IP</th>
              <th scope="col">Порядковый номер</th>
              <th scope="col">Найденное значение</th>
              <th scope="col">Дата</th>
            </tr>
          </thead>
          {this.state.inf.slice(0, this.state.itemsToShow).map((i) => (
            <tbody>
              <th key={i.id} scope="row">{i.id}</th>
              <td>{i.ip}</td>
              <td>{i.index}</td>
              <td>{i.value}</td>
              <td>{moment(i.created_at).format('DD.MM.YYYY HH:mm')}</td>
            </tbody>
          ))}
        </table>
        {this.state.itemsToShow < this.state.inf.length ? (
          <div className="btn btn-primary" onClick={this.showMore}>
            <span>Show more</span>
          </div>
        ) : (
          <div />
        )}
      </div>

    );
  }
}

export default Getinf;