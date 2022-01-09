import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"

const MainContainer = styled.main `
height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    h3{
       text-transform:uppercase;
       margin:0;

    }
    h1{
        background-image: linear-gradient(
          -550deg,
          #231557 0%,
          #44107a 29%,
          #ff1361 67%,
          #fff800 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 5s linear infinite;
        display: inline-block;
            font-size: 150px;
      }
      
      @keyframes textclip {
        to {
          background-position: 200% center;
        }
    }
  `

const IndexPage = () => {
    return (
        <Layout>
            <MainContainer>
                <section>
                    <h1>Karen Molina</h1>
                </section>
                <section>
                    <h3>Frontend developer <span role="img" aria-label="woman">👩‍💻</span></h3>
                </section>

            </MainContainer>

        </Layout>
    )
}

export default IndexPage
