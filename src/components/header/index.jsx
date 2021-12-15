import React, { useState } from 'react'
import Navbar from './navbar'
import Hamburger from './hamburguer'
import Sidebar from './sidebar'
import { Wrapper, Overlay } from './styles'

export default () => {
	const [sidebar, toggle] = useState(false)
	return (
		<Wrapper>
			<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
			<Navbar />
			<Hamburger sidebar={sidebar} toggle={toggle} />
			<Sidebar sidebar={sidebar} toggle={toggle} />
		</Wrapper>
	)
}