import React, {useState, useEffect}from 'react';

export default function Api() {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(characters => {
                console.log('the list of characters is' + characters)
                setCharacters(characters);
            })
    }, []);

    return (
        <div className="App">
                {characters.map(character => (
                    <li key={character.id}>{character.id}</li>
                ))}
        </div>
    )
}