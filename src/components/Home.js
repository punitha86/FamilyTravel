import React from 'react'
// TODO - add proptypes

const Home = props => {
if(props.user!==null)
{
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props.user.firstName)}
				</code>
			</div>
		)
	} else {
		return (
			<p>PleaseLogin</p>
		)
	}

}

export default Home
