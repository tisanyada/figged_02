import { AboutContainer, AboutLeftCol, AboutRightCol } from "@/components/About"
import { ButtonGroup } from "@/components/Home"
import { Button, SectionHeader, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const About = () => {
	return (
		<Wrapper id="about">
			<SectionHeader>
				<h2>How it Works?</h2>
				<p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
			</SectionHeader>

			<AboutContainer>
				<AboutLeftCol>
					<div className="process">
						<div className="avatar">
							<img src={images.icons_user} />
						</div>
						<h4>Create Account</h4>
					</div>
					<div className="process">
						<div className="avatar">
							<img src={images.icons_file} />
						</div>
						<h4>Upload Documents</h4>
					</div>
					<div className="process">
						<div className="avatar">
							<img src={images.icons_search} />
						</div>
						<h4>Search Services</h4>
					</div>
					<div className="process">
						<div className="avatar">
							<img src={images.icons_verify} />
						</div>
						<h4>Apply</h4>
					</div>
				</AboutLeftCol>

				<AboutRightCol>
					<h4>How to Create an Account</h4>
					<p className="lead">
						And produce say ten moment parties. Simple innate fat appear basket his desire joy.
						Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
					</p>
					<p className="lead">
						And produce say ten moment parties. Simple innate fat appear basket his desire joy.
						Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
					</p>

					<ButtonGroup id="buttons">
						<Button
							bg="orange"
							fw={600}
							type={1}
							shadow={2}
							radius={50}
						>Create Account</Button>
						<Button
							color="black02"
							border={0.4}
							fw={600}
							type={3}
							shadow={2}
							radius={50}
						>Learn More</Button>
					</ButtonGroup>
				</AboutRightCol>
			</AboutContainer>
		</Wrapper>
	)
}

export default About