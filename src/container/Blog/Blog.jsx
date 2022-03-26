import { BlogContainer, BlogItem, BlogItemContent, BlogItemTag } from "@/components/Blog"
import { Button, SectionHeader, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Blog = () => {
	return (
		<Wrapper>
			<SectionHeader>
				<h2>What Customers Say</h2>
				<p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
			</SectionHeader>

			<BlogContainer>
				<BlogItem>
					<img src={images.blog1} />

					<BlogItemTag>NEW</BlogItemTag>

					<BlogItemContent>
						<h4>Distrusts fulfilled happiness unwilling as explained to difficult.</h4>
						<p className="lead">Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.</p>

						<Button
							color="black01"
							fw={600}
							type={0}
							textdecor="underline"
						>READ MORE</Button>
					</BlogItemContent>
				</BlogItem>

				<BlogItem>
					<img src={images.blog2} />

					<BlogItemTag>NEW</BlogItemTag>

					<BlogItemContent>
						<h4>Distrusts fulfilled happiness unwilling as explained to difficult.</h4>
						<p className="lead">Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.</p>

						<Button
							color="black01"
							fw={700}
							type={0}
							textdecor="underline"
						>READ MORE</Button>
					</BlogItemContent>
				</BlogItem>
			</BlogContainer>
		</Wrapper>
	)
}

export default Blog