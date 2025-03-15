import { useState } from "react";

const InitialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard({onSelectSquare ,}) {
    /* const [gameBoard , setGameBoard] = useState(InitialGameBoard); 

    function handleSelectSquare (rowIndex ,colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedboard = [...prevGameBoard.map (innerArray =>[...innerArray])];
            updatedboard [rowIndex][colIndex] = activePlayerSymbol;
            return updatedboard ;
        });

        onSelectSquare();
    } */
    return <ol id="game-board">
        {gameBoard.map((row , rowIndex)=>
            (<li key={rowIndex}> 
<ol>
    {row.map((playerSymbol ,colIndex) => (
        <li key={colIndex}>
            <button onClick={()=> handleSelectSquare(rowIndex , colIndex)}>{playerSymbol}</button> </li>
    ))}
</ol>
    </li>))}
</ol>
}