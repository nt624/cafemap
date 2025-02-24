import { useEffect, useState } from 'react';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const savedPlaces = JSON.parse(localStorage.getItem('savedPlaces') || '[]');
    setPlaces(savedPlaces);
  }, []);

  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <a href={`/saved-places/${place.id}`}>{place.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default PlaceList;
