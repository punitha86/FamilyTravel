import React from 'react'
// TODO - add proptypes

const Home = props => {

		return (
			<div className="Home">
				<p>Current User seems to be null:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	
}

export default Home
