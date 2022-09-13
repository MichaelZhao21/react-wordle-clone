import React, { useEffect, useState } from 'react';
import Character from './character';

export default function Word(props) {
    const [charList, setCharList] = useState(['', '', '', '', '']);
    const [guessResList, setGuessResList] = useState([-2, -2, -2, -2, -2, -2]);

    useEffect(() => {
        // Create an array of 5 characters
        const splitWord = props.word.split('');
        setCharList(splitWord.concat(Array(5 - splitWord.length).fill('')));
    }, [props.word]);

    useEffect(() => {
        // Make sure guessRes is not null
        if (!props.guessRes) {
            return;
        }

        // Update the state variable
        setGuessResList(props.guessRes);
    }, [props.guessRes]);

    return (
        <div className="word">
            {charList.map((c, i) => (
                <Character char={c} key={i} guessRes={guessResList[i]} />
            ))}
        </div>
    );
}
