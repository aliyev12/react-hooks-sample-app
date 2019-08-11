import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Refactoring.css';
import chuckNorris from '../img/chuck-norris.png';

class NeedRefactoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      newName: ''
    };
    this.BASE_URL = `http://api.icndb.com/jokes/random`;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  async componentDidMount() {
    this.setState({ newName: this.props.myProp });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.myProp !== this.props.myProp) {
      this.setState({ newName: this.props.myProp });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const res = await axios.get(
      this.state.newName
        ? `${this.BASE_URL}?firstName=${this.state.newName}`
        : this.BASE_URL
    );
    this.setState({ joke: res.data.value.joke });
  }

  handleReset() {
    this.setState({ newName: '' });
  }

  render() {
    return (
      <div>
        <div className="propContainer">
          {this.props.myProp && (
            <span>
              I just received a prop: <strong>{this.props.myProp}</strong>
            </span>
          )}
        </div>

        <form
          method="post"
          onSubmit={this.handleSubmit}
          className="newNameForm"
        >
          <label>
            New Name:
            <input
              type="text"
              value={this.state.newName}
              name="newName"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">New Joke!</button>
          <button type="button" onClick={this.handleReset}>
            &times;
          </button>
        </form>
        <div className="imageContainer">
          <img width="100" height="100" src={chuckNorris}  alt="Chuck Norris"/>
        </div>
        <h3>Random Chuck Norris Joke</h3>
        <p>{this.state.joke.replace(/&quot;/g, '"')}</p>
      </div>
    );
  }
}

export default NeedRefactoring;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/Refactoring.css';
// import chuckNorris from '../img/chuck-norris.png';

// const NeedRefactoring = ({ myProp }) => {
//   const BASE_URL = `http://api.icndb.com/jokes/random`;
//   const [joke, setJoke] = useState('');
//   const [newName, setNewName] = useState('');

//   useEffect(() => setNewName(myProp), [myProp]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const res = await axios.get(newName ? `${BASE_URL}?firstName=${newName}` : BASE_URL);
//     setJoke(res.data.value.joke);
//   };

//   return (
//     <div>
//       <div className="propContainer">
//         {myProp && (
//           <span>
//             I just received a prop: <strong>{myProp}</strong>
//           </span>
//         )}
//       </div>

//       <form method="post" onSubmit={handleSubmit} className="newNameForm">
//         <label>
//           New Name:
//           <input
//             type="text"
//             value={newName}
//             name="newName"
//             onChange={e => setNewName(e.target.value)}
//           />
//         </label>
//         <button type="submit">New Joke!</button>
//         <button type="button" onClick={() => setNewName('')}>
//           &times;
//         </button>
//       </form>
//       <div className="imageContainer">
//         <img width="100" height="100" src={chuckNorris} alt="Chuck Norris"/>
//       </div>
//       <h3>Random Chuck Norris Joke</h3>
//       <p>{joke.replace(/&quot;/g, '"')}</p>
//     </div>
//   );
// };

// export default NeedRefactoring;
