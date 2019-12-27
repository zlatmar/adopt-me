import React, { FunctionComponent } from 'react';
import { Animal } from '@frontendmasters/pet';
import Pet from './Pet';

interface IProps {
    pets: Animal[];
}


const Results: FunctionComponent<IProps> = ({ pets }) => {
    return (
        <div className="search">
            {pets.length === 0 ? <h1>No Pets found.</h1> :
                (
                    pets.map(pet => (
                        <Pet
                            animal={pet.type}
                            key={pet.id}
                            id={pet.id}
                            name={pet.name}
                            breed={pet.breeds.primary}
                            media={pet.photos}
                            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        />


                    ))
                )
            }
        </div>
    );
}

export default Results;
