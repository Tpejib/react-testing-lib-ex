import { useEffect, useState } from 'react';
import User from './User';

const UsersForTest = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        setUsers(json);
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  const onDelete = (id) => setUsers(users.filter(user => user.id !== id));

  return (
    <div data-testid={'users-for-test'}>
      {isLoading && <div id={'users-loading'}>Loading...</div>}
      {!!users.length && (
        <div id={'users-list'}>
          {users.map(user => (
            <User
              key={user.id}
              user={user}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersForTest;