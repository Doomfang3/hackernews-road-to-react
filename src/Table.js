import React, { Component } from 'react';

const isSearched = searchTerm =>  item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
;

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <a className="App-link" href={item.url} target="_blank" rel="noopener noreferrer"><h1>{item.title}</h1></a>
            <p>{item.author}</p>
            <span>
              <button onClick={() => onDismiss(item.objectID)} type="button"> Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Table;