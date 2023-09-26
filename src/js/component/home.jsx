import React, { useState } from "react";
import Title from "./title"
import PlayerMessage from "./playerMessage";

const Home = () => {
	const [turn, setTurn] = useState ('X');
	const [message, setMessage] = useState("It is X's turn!");
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

	const turnChanger = () => {
		if (turn === 'X') {
			setTurn('O');
			setMessage("It is O's turn!");
		} else {
			setTurn('X');
			setMessage("It is X's turn!");
		}
	};

	const clickHandler = (e) => {
		if(e.target.innerHTML === ''){
			turn === 'X' ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
			turnChanger(e);	
		}
		let loc = e.target.id;
		let currentBoard = board;
		currentBoard.splice(loc, 1, turn);
		setBoard(currentBoard);
		checkWin(board);
	};

	const checkWin = (board) => {
		const winPatterns = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];

		for(let pattern of winPatterns) {
			let [a, b, c] = pattern;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				console.log(board[a]);
				setMessage(board[a]+" wins!") 
			}
		}
		return null;
	}

	const reset = () => {
		setTurn('X');
		setBoard(['', '', '', '', '', '', '', '', '']);
		setMessage("It is X's turn!");
	};

	return (
		<div>
			<Title />
			<PlayerMessage 
				message = {message}/>
			<div className="container-fluid">
				{board.map((value, i) => (
					<div 
						className="tile" 
						onClick={clickHandler}
						key={i}
						id={i}>
							{value}
					</div>
				))}
			</div>
			<div>
				<button onClick={reset}>Reset Game!</button>
			</div>
		</div>
		
	);
};

export default Home;
