import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button, HeadingXL, Layout, SEO, TextBody } from "../components"
const Wrapper = styled.div ` display: flex; flex-direction: column; justify-content:
center; `
const ButtonCentered = styled(Button)
` margin-left: auto; margin-right: auto; margin-top: 5vh; `
export default function NotFoundPage() {
    return ( < >
            <SEO title = "404: Not found" / >
            <Layout >
            <Wrapper >
            <HeadingXL > NULL 
</HeadingXL> <TextBody style = {
                { textAlign: "center" }
            } > Esta entrada todavía no está escrita { " " } 
<span role = "img" aria-label = "duh" > 😓
            </span> 
</TextBody > <Link to = "/" >
            <ButtonCentered > Seguir leyendo </ButtonCentered> 
            </Link > 
        </Wrapper> 
    </Layout > 
</> ) }