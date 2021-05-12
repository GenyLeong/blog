import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingXL = styled.h1`
  background: #000;
  display: block;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: 700;
  margin: 4vh auto 3vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }
`
