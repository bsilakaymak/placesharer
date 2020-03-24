import React, { useEffect, useState, useContext, Fragment } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/component/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/component/UIElements/LoadingSpinner';
import useHttpClient from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [processedUsers, setProcessedUsers] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);
  useEffect(() => {
    const getUsers = async () => {
      try {
        if (!auth.token) {
          const data = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users`);
          setUsers(data.users);
        } else {
          const data = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users`);

          const userData = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/users/me`,
            'GET',
            null,
            {
              Authorization: 'Bearer ' + auth.token,
            },
          );
          setUser(userData);
          setUsers(data.users);
        }
      } catch (error) { console.error(error) }
    };
    getUsers();
  }, [processedUsers,auth.token,sendRequest]);

  const sendFriendRequestHandler = id => {
    setProcessedUsers(prevValue => [...prevValue, id]);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && users && (
        <UsersList
          items={users}
          userData={user}
          auth={auth}
          sendFriendRequestHandler={sendFriendRequestHandler}
        />
      )}
    </Fragment>
  );
};

export default Users;
