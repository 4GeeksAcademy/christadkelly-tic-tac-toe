import React from "react";

const Grid = (prop) => {
    return (
        <div className="container-fluid">
		    <div className="row">
		        <div className="col" onClick={prop.clickHandler}></div>
				<div className="col" onClick={prop.clickHandler}></div>
				<div className="col" onClick={prop.clickHandler}></div>	
	        </div>
			<div className="row">
	            <div className="col" onClick={prop.clickHandler}></div>
				<div className="col" onClick={prop.clickHandler}></div>		
    			<div className="col" onClick={prop.clickHandler}></div>
	        </div>
			<div className="row">
		        <div className="col" onClick={prop.clickHandler}></div>
				<div className="col" onClick={prop.clickHandler}></div>
				<div className="col" onClick={prop.clickHandler}></div>
	        </div>
        </div>
    )
}

export default Grid;