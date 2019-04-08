import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const list = [
      {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      }
    ];
    return (
      <div className="App">
        {list.map(item =>
            <div key={item.objectID}>
              <a href={item.url} target="_blank" rel="noopener noreferrer"><h1>{item.title}</h1></a>
              <p>{item.author}</p>
            </div>
        )}
      </div>
    );
  }
}

export default App;