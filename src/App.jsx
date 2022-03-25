import { Fragment } from 'react'
import { GlobalStyles } from './theme'
import { Navigation, Home, Blog, About, Stats, Services, Testimonial, Contact, Footer } from '@/container/'


function App() {

	return (
		<Fragment>
			<GlobalStyles />

			<Navigation />
			<Home />
			<Services />
			<About />
			<Stats />
			<Testimonial />
			<Blog />
			<Contact />
			<Footer />
		</Fragment>
	)
}

export default App
