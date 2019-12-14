import React from 'react';
import Pet from './Pet';


const Results = ({ pets }) => {
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
                            breed={pet.breed}
                            media={pet.photos}
                            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        >

                        </Pet>
                    ))
                )
            }
        </div>
    );
}

export default Results;
