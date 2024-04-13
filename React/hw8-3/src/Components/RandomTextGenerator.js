import React, {useState} from "react";

function GenerateChar(){
    let ascii = Math.random() * 26 + 65;
    return String.fromCharCode(ascii);
}

function GetRandomText(size = 5){
    let word = "";
    for(let i = 0; i < size; i++){
        word += GenerateChar();
    }

    return word;
}

function RandomTextGenerator(props){
    const [word, setWord] = useState(GetRandomText(props.size));
    const handleClick = () => {
        setWord(GetRandomText(props.size))
      };

    return(
        <div>
            <button onClick={handleClick}>Generate Random Text</button>
            <p>{word}</p>
        </div>
    )
} 

export default RandomTextGenerator;