import React from 'react';

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}

export default Tweet;

// In a file in the same directory
import Tweet from './Tweet';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Tweet />,
  document.getElementById('root')
);
