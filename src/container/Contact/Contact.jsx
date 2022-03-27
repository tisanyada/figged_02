import { ContactContainer } from "@/components/Contact"
import { InputGroup, SearchInput } from "@/components/Home"
import { Button, Wrapper } from "@/components/Utils"


const Contact = () => {
	return (
		<Wrapper id="contact">
			<ContactContainer
				whileInView={{ scale: [0.9, 1] }}
				transition={{ duration: 0.6 }}
			>
				<h4>Get your updated news</h4>
				<p className="lead">If you are going to use a passage from Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>

				<InputGroup>
					<SearchInput type="email" placeholder="Enter your email" />
					<Button
						color="white"
						bg="orange"
						fw={600}
						type={1}
						shadow={2}
						radius={50}
						inputBtn={true}
					>SEND</Button>
				</InputGroup>
			</ContactContainer>
		</Wrapper>
	)
}

export default Contact