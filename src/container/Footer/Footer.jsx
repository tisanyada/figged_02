import { Fragment, useState } from "react"
import { FaFacebookF, BsInstagram, BsTwitter, FaLinkedinIn } from "react-icons/all"


import { Copyright, FooterCol, FooterContainer } from "@/components/Footer"
import { Logo, Wrapper } from "@/components/Utils"
import { NavLink } from "@/components/Navigation"


const Footer = () => {
	const [activeLink, setActiveLink] = useState("")
	console.log(activeLink);
	return (
		<Fragment>
			<Wrapper>
				<FooterContainer>
					<FooterCol>
						<Logo>Digi.Businness</Logo>

						<p className="lead">We use multi-mic and echo cancellation technology so that everyone can use device.</p>

						<div className="socials">
							<div
								className={`icon ${activeLink === 'fb' && 'active'}`}
								onClick={() => setActiveLink("fb")}
							><FaFacebookF size={20} /></div>
							<div
								className={`icon ${activeLink === 'ins' && 'active'}`}
								onClick={() => setActiveLink("ins")}
							><BsInstagram size={20} /></div>
							<div
								className={`icon ${activeLink === 'twt' && 'active'}`}
								onClick={() => setActiveLink("twt")}
							><BsTwitter size={20} /></div>
							<div
								className={`icon ${activeLink === 'lin' && 'active'}`}
								onClick={() => setActiveLink("lin")}
							><FaLinkedinIn size={20} /></div>
						</div>
					</FooterCol>

					<FooterCol>
						<h5>Resources</h5>

						<NavLink className="link">Features</NavLink>
						<NavLink className="link">Pricing</NavLink>
						<NavLink className="link">Login</NavLink>
					</FooterCol>

					<FooterCol>
						<h5>Legal</h5>

						<NavLink className="link">Terms of Use</NavLink>
						<NavLink className="link">Privacy Policy</NavLink>
						<NavLink className="link">Legal Notice</NavLink>
					</FooterCol>

					<FooterCol>
						<h5>Links</h5>

						<NavLink className="link">Feedback</NavLink>
						<NavLink className="link">Privacy Policy</NavLink>
						<NavLink className="link">Leagl Notice</NavLink>
					</FooterCol>
				</FooterContainer>
			</Wrapper>

			<Copyright>Copyright &copy; arshakir.com, All rights reserved.</Copyright>
		</Fragment>
	)
}

export default Footer