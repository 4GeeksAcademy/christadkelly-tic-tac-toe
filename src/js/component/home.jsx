import React, { useState } from "react";
import Title from "./title"
import PlayerMessage from "./playerMessage";
import Grid from "./grid";

//create your first component
const Home = () => {
	const [turn, setTurn] = useState ('X');
	const [message, setMessage] = useState("It is X's turn!")

	const turnChanger = () => {
		if (turn === 'X') {
			setTurn('O');
			setMessage("It is O's turn!");
		} else {
			setTurn('X');
			setMessage("It is X's turn!");
		}
	}

	const clickHandler = (e) => {
		if(e.target.innerHTML === ''){
			turn === 'X' ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
			turnChanger(e);
		}
	}

	return (
		<div>
			<Title />
			<PlayerMessage 
				message = {message}/>
			<Grid 
				clickHandler= {clickHandler}/>
		</div>
		
	);
};

export default Home;
