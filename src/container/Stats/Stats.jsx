import { AiFillStar } from "react-icons/ai"

import { StatsContainer, StatsLeftCol, StatsRightCol } from "@/components/Stats"
import { ClientCard, SectionHeader, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Stats = () => {
    return (
        <Wrapper>
            <SectionHeader>
                <h2>We Make your Business Bright</h2>
                <p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
            </SectionHeader>

            <StatsContainer>
                <StatsLeftCol>
                    <div className="item">
                        <h3>1500+</h3>
                        <p className="lead">Projects <br /> Done</p>
                    </div>
                    <div className="item">
                        <h3>2000+</h3>
                        <p className="lead">Happy <br /> Customers</p>
                    </div>
                    <div className="item">
                        <h3>3000+</h3>
                        <p className="lead">Cup of <br /> Coffee</p>
                    </div>
                    <div className="item">
                        <h3>1890+</h3>
                        <p className="lead">Projects in<br /> Queue</p>
                    </div>
                </StatsLeftCol>

                <StatsRightCol>
                    <img src={images.client} className="main" />

                    <ClientCard type={2}>
                        <div className="avatar">
                            <img src={images.avatar2} />
                            <div className="stars">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                        <div className="text">
                            <p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
                            <small>Linda, Project Manager</small>
                        </div>
                    </ClientCard>
                    <ClientCard type={3}>
                        <div className="avatar">
                            <img src={images.avatar3} />
                            <div className="stars">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                        <div className="text">
                            <p className="lead">Wisdom new valley answer. Contended it so is discourse recomment Man it upon him call mile.</p>
                            <small>Linda, Project Manager</small>
                        </div>
                    </ClientCard>
                </StatsRightCol>
            </StatsContainer>
        </Wrapper>
    )
}

export default Stats