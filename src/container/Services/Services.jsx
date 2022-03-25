import { Serviceitem, ServicesContainer } from "@/components/Services"
import { SectionHeader, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Services = () => {
	return (
		<Wrapper>
			<SectionHeader>
				<h2>Our Services</h2>
				<p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
			</SectionHeader>
			<ServicesContainer>
				<Serviceitem>
					<img src={images.services1} />
					<h6>Branding Identity</h6>
					<p>Our support team will assistance from AI-powered.</p>
				</Serviceitem>
				<Serviceitem>
					<img src={images.services2} />
					<h6>Branding Consult</h6>
					<p>Our support team will assistance from AI-powered.</p>
				</Serviceitem>
				<Serviceitem>
					<img src={images.services3} />
					<h6>Web Development</h6>
					<p>Our support team will assistance from AI-powered.</p>
				</Serviceitem>
				<Serviceitem>
					<img src={images.services4} />
					<h6>Market Analysis</h6>
					<p>Our support team will assistance from AI-powered.</p>
				</Serviceitem>
			</ServicesContainer>
		</Wrapper>
	)
}

export default Services