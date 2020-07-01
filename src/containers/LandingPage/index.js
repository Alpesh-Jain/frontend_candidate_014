import React, {useState} from 'react';
import Card from '../../components/Card';
import { feedsource } from '../../data/data';
import './styles.scss';


function LandingPage() {

  return (
    <div className="grid-container">
      {feedsource.map((item, id) => (
        <div key={id} className="grid-item">
          <Card key={id} data={item}  />
          </div>
      ))}
    </div>
  );
}

export default LandingPage;
