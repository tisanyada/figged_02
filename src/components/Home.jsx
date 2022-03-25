import styled from "styled-components"


export const HomeContainer = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)); */
    /* gap: 10px; */
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: -50px; */
    height: 100vh;
`

export const HomeLeftCol = styled.div`
    width: 100%;
    /* margin-top: -200px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    h1 {
        letter-spacing: -5px;
        font-weight: 450;
        line-height: 1;
        span{
            font-weight: 800;
            color: var(--orange);
        }
    }
`

export const HomeRightCol = styled.div`
    width: 100%;
    position: relative;
    
    img {
        width: 100%;
    }
`
export const InputGroup = styled.div`
    position: relative;
    width: 100%;
`
export const SearchInput = styled.input`
    outline: none;
    border: none;
    background: white;
    width: 100%;
    padding: 29px 240px 29px 45px;
    box-shadow: 0px 30px 30px rgba(99, 122, 166, 0.1);
    border-radius: 40px;
    margin: 20px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--black01);

    &::placeholder {
        font-size: 16px;
        text-transform: uppercase;
        color: var(--black02);
        font-weight: 600;
    }
`

export const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 75%;
    gap: 15px;
    margin: 20px auto 0;
`

