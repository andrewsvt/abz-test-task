import React, { MutableRefObject, useEffect, useState } from 'react';

import { WideButton } from '../Button/Button';
import UserCard from '../UserCard/UserCard';
import UserSkeleton from '../UserCard/UserSkeleton';

import styles from './Users.module.scss';

import { IUserObj, IUserPage, IUserResponse } from '../../types/typings';

interface IUsersProps {
  usersScrollRef: MutableRefObject<HTMLDivElement | null>;
}

const Users: React.FC<IUsersProps> = ({ usersScrollRef }) => {
  const [usersPage, setUsersPage] = useState<IUserPage>({ currentPage: 1, totalPages: 0 });
  const [users, setUsers] = useState<IUserObj[]>([]);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page: number) => {
    try {
      const res = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${6}`,
      );
      const json: IUserResponse = await res.json();

      setUsersPage({ currentPage: page + 1, totalPages: json.total_pages });

      if (users.length) {
        setUsers((prev) => [...prev, ...json.users]);
      } else setUsers(json.users);

      if (usersPage.currentPage === usersPage.totalPages) {
        setDisabled(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const showMore = () => {
    getUsers(usersPage.currentPage);
  };

  console.log('users', users);
  return (
    <section ref={usersScrollRef} className={styles.users}>
      <h1>Working with GET request</h1>
      <div className={styles.users__grid}>
        {users.length
          ? users.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                position={user.position}
                phone={user.phone}
                photo={user.photo}
                id={user.id}
              />
            ))
          : [...Array(6)].map((card, index) => <UserSkeleton key={index} />)}
      </div>
      <WideButton onClick={showMore} text={'Show more'} isDisabled={isDisabled} />
    </section>
  );
};

export default Users;
