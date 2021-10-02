import { Component } from 'react';

interface User {
  name: string; 
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
  msg: string;
}

class UserSearchCC extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
    msg: ''
  };

  componentDidMount() {
    this.setState({msg: ''});
    this.setState({user: undefined});
  }

  handleBtnClick = (): void => {
    const {users} = this.props;

    console.log(users);

    this.setState({name: ''});

    const foundUser = users.find(user => {
      return user.name === this.state.name;
    });

    if (foundUser === undefined) {
      this.setState({msg: 'User Not Found'});
      this.setState({user: undefined});
    } else {
      this.setState({msg: ''});
      this.setState({user: foundUser});
    }
  }

  render() {
    const {name, user, msg} = this.state;

    return (
      <div>
        <h2>User Search (class-based component)</h2>
        <input 
          type="text"
          value={name}
          onChange={e => this.setState({name: e.target.value})} 
        />
        <button onClick={this.handleBtnClick}>Find User</button>
        {user && <><h3>Name: {user.name} | Age: {user.age}</h3></>}
        {<><h3>{msg}</h3></>}
      </div>
    );
  }
}

export default UserSearchCC;
