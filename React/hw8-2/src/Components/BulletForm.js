import React from 'react';

function BulletForm(props) {
  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BulletForm;