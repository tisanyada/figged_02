import { AiFillStar } from "react-icons/ai"

import { SlideButtons, TestimonialContainer, TestimonialItem } from "@/components/Testimonial"
import { SectionHeader, Wrapper } from "@/components/Utils"


const Testimonial = () => {
	return (
		<Wrapper id="testimonials" nopadding={true}>
			<SectionHeader>
				<h2>What Customers Say</h2>
				<p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
			</SectionHeader>
			<TestimonialContainer>
				<TestimonialItem
					whileInView={{ y: [40, 1] }}
					transition={{ duration: 0.8 }}
				>
					<h6>Best Design And Delivered in Time</h6>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusantium aspernatur consectetur dicta doloribus explicabo fuga non molestiae laboriosam illo obcaecati adipisci, vel unde corporis beatae dolor, perferendis iure optio laudantium. Repudiandae, ipsam deleniti repellendus suscipit veniam minus eaque possimus commodi? Illum eum dolor voluptatum minima placeat ipsam quaerat doloribus!</p>
					<div className="stars">
						<AiFillStar size={25} />
						<AiFillStar size={25} />
						<AiFillStar size={25} />
						<AiFillStar size={25} />
						<AiFillStar size={25} />
					</div>
					<h4>Mansur</h4>
					<p className="lead" style={{ marginTop: '10px' }}>CEO @ airbnb</p>
				</TestimonialItem>

				<SlideButtons>
					<div className="radio"></div>
					<div className="radio"></div>
					<div className="radio active"></div>
					<div className="radio"></div>
				</SlideButtons>
			</TestimonialContainer>
		</Wrapper>
	)
}

export default Testimonial