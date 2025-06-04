import React from 'react';

class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      status: 'Component Constructed',
    };
    console.log('constructor: Component Constructed');
  }

  componentDidMount() {
    console.log('componentDidMount: Component Mounted');
    this.setState({ status: 'Fetching user data...' });

    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        console.log('API Data Fetched');
        this.setState({ users: data.users, status: 'Data Loaded' });
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        this.setState({ status: 'Error loading data' });
      });
  }


  render() {
    console.log('render: Rendering Component');

    const { users, status } = this.state;

    return (
      <div>
        <h1>Lifecycle Demo (Class Component)</h1>
        <p><strong>Status:</strong> {status}</p>

        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default LifeCycleComponent;
