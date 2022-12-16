import React, { useRef } from 'react';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Users from './components/Users/Users';
import Form from './components/Form/Form';

function App() {
  const usersScrollRef = useRef<null | HTMLDivElement>(null);
  const formScrollRef = useRef<null | HTMLDivElement>(null);

  const scrollToUsers = () =>
    usersScrollRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

  const scrollToForm = () =>
    formScrollRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <>
      <Header scrollToUsers={scrollToUsers} scrollToForm={scrollToForm} />
      <main>
        <Banner scrollToForm={scrollToForm} />
        <Users usersScrollRef={usersScrollRef} />
        <Form formScrollRef={formScrollRef} />
      </main>
    </>
  );
}

export default App;
