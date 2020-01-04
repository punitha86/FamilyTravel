import React from 'react'
// TODO - add proptypes

const Home = props => {

		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props.user.local.username)}
				</code>
			</div>
		)

}

export default Home
