import React, {useState} from 'react';
import Card from '../../components/Card';
import { feedsource } from '../../data/data';
import './styles.scss';


function LandingPage() {

  return (
    <div className="landing-page">
      {feedsource.map((item, id) => (
          <Card key={}  />
      ))}
    </div>
  );
}

export default LandingPage;
