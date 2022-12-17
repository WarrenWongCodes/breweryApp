import React, { useState } from 'react';
import Map from './Map';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Brewery({ brewery, showMap }) {
  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    longitude,
    latitude,
  } = brewery;

  return (
    <Card style={{ width: '50rem' }} bg={'light'} className="mb-2">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {brewery_type}
        </Card.Subtitle>
        <Card.Text>{`${street}, ${city}, ${state}, ${postal_code}`}</Card.Text>
        <Card.Link href={website_url} target="_blank">
          {website_url}
        </Card.Link>
        <Map lng={Number(longitude)} lat={Number(latitude)} />
        <Button variant="primary">See Map</Button>
      </Card.Body>
    </Card>
  );
}
