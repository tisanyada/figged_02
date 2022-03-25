import styled from "styled-components"


export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    column-gap: 100px;
    margin-top: 50px;
`

export const AboutLeftCol = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    border-radius: 10px;

    .process{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px auto;
        
        .avatar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            background: var(--gray);
            border-radius: 50%;
            margin: 20px auto;
        }

        h4{
            font-weight: 600;
            letter-spacing: -1.5px;
            position: relative;

            &:hover::before {
                position: absolute;
                content: "";
                bottom: 0;
                margin-left: 40px;
                width: 35%;
                text-align: center;
                border-bottom: 2px solid var(--orange);
            }
        }
    }
`

export const AboutRightCol = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;


    h4 {
        font-size: 26px;
        font-weight: 700;
    }

    p {
        margin: 30px auto;
    }

    #buttons {
        margin-top: 100px;
    }
`