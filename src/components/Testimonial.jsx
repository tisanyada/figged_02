import styled from "styled-components"


export const TestimonialContainer = styled.div`
    width: 100%;
    margin-top: 150px;
    height: 350px;
    background: var(--orange);
    position: relative;
`

export const TestimonialItem = styled.div`
    position: absolute;
    left: 0;
    top: -100px;
    right: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: white;
    width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    padding: 10px;


    h6 {
        font-size: 16px;
    }
    p.lead {
        margin: 30px auto;
    }
    .stars {
        color: #ffb905;
    }
`

export const SlideButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 10%;
    
    .radio {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
    }
    .radio.active {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
    }
`