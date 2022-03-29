import { ButtonGroup, HomeContainer, HomeLeftCol, HomeRightCol } from "@/components/Home"
import { Button, ButtonIconed, ClientCard, SearchInput, Wrapper, InputGroup } from "@/components/Utils"
import images from "@/constants/images"


const Home = () => {
	return (
		<Wrapper id="home">
			<HomeContainer>
				<HomeLeftCol>
					<h1>Growing your<br /><span>Business</span></h1>

					<InputGroup>
						<SearchInput placeholder="search for services" />
						<Button
							color="white"
							bg="orange"
							fw={600}
							type={1}
							shadow={2}
							radius={50}
							inputBtn={true}
						>SEARCH</Button>
					</InputGroup>

					<ButtonGroup>
						<ButtonIconed
							bg="white"
							fw={600}
							type={1}
							shadow={1}
							radius={50}

							whileInView={{ scale: [0.8, 1, 0.9, 1] }}
							transition={{ duration: 0.8 }}
						>
							<img src={images.logo_airbnb} /> airbnb
						</ButtonIconed>
						<ButtonIconed
							fw={600}
							type={1}
							shadow={1}
							radius={50}

							whileInView={{ scale: [0.8, 1, 0.9, 1] }}
							transition={{ duration: 0.8 }}
						>
							<img src={images.logo_dropbox} /> Dropbox
						</ButtonIconed>
						<ButtonIconed
							fw={600}
							type={1}
							shadow={1}
							radius={50}

							whileInView={{ scale: [0.8, 1, 0.9, 1] }}
							transition={{ duration: 0.8 }}
						>
							<img src={images.logo_microsoft} /> Microsoft
						</ButtonIconed>
						<ButtonIconed
							fw={600}
							type={1}
							shadow={1}
							radius={50}

							whileInView={{ scale: [0.8, 1, 0.9, 1] }}
							transition={{ duration: 0.8 }}
						>
							Stripe
						</ButtonIconed>
					</ButtonGroup>
				</HomeLeftCol>

				<HomeRightCol
					whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
					transition={{ duration: 1.5 }}
				>
					<img src={images.heroimage} />

					<ClientCard type={1}>
						<img src={images.avatar1} className="avatar-1" />
						<div className="text">
							<p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
							<small>Sameer - CEO @airbnb</small>
						</div>
					</ClientCard>
				</HomeRightCol>
			</HomeContainer>
		</Wrapper>
	)
}

export default Home