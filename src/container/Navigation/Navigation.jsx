import { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"
import { AiOutlineMenuFold } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'


import { Nav, NavAuthButtons, NavBg, NavCloseButton, NavigationContainer, NavLink, NavMenuButton } from "@/components/Navigation"
import { Button, Logo, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Navigation = () => {
    const { y: pageYOffset } = useWindowScroll()

    const [activeLink, setActiveLink] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        if (pageYOffset > 0) return setSticky(true)
        setSticky(false)
    }, [pageYOffset])

    const setNavbar = (link) => {
        setActiveLink(link)
        setShowMenu(showMenu && !showMenu)
    }

    return (
        <Wrapper bgColor="orange02" navbar={true} sticky={sticky && sticky}>
            <NavigationContainer>
                <Logo href="#">
                    Digi.Business
                </Logo>

                <NavMenuButton onClick={() => setShowMenu(!showMenu)}>
                    <AiOutlineMenuFold size={24} />
                </NavMenuButton>

                <Nav className={showMenu && 'active'}>
                    <NavCloseButton onClick={() => setShowMenu(!showMenu)}>
                        <IoClose size={24} />
                    </NavCloseButton>

                    {['Home', 'About', 'Testimonials', 'Contact'].map((link, index) => (
                        <NavLink key={index}
                            href={`#${link.toLowerCase()}`}
                            className={`${activeLink === link ? 'active' : ''}`}
                            onClick={() => setNavbar(link)}
                        >{link}</NavLink>
                    ))}

                    <NavAuthButtons>
                        <Button
                            // fw={500}
                            color="black01"
                        >Login</Button>
                        <Button
                            color="black01"
                            bg="white"
                            fw={600}
                            type={1}
                            shadow={1}
                            radius={50}

                            whileHover={{ scale: [1, 0.95, 0.9] }}
                            transition={{ duration: 0.3 }}
                        >Sign up</Button>
                    </NavAuthButtons>
                </Nav>

                {/* <NavBg src={images.homebg2}/> */}
            </NavigationContainer>
        </Wrapper>
    )
}

export default Navigation