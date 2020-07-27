import React from 'react';
import TeamDescription from '../components/Teams/TeamDescription';
import Footer from '../components/Footer';
import TeamsCta from '../components/Teams/TeamsCta';
import Members from '../components/Teams/Members';

const Team = () => {
  return (
    <>
      <TeamDescription />
      <Members />
      <TeamsCta />
      <Footer />
    </>
  );
};

export default Team;
