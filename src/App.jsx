import { Fragment } from 'react'
import { GlobalStyles } from './theme'
import { Navigation, Header, Blog, About, Stats, Services, Testimonial, Contact, Footer } from '@/container/'


function App() {

	return (
		<Fragment>
			<GlobalStyles />

			<Navigation />
			<Header />
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
