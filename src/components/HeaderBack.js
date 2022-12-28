import React from "react"
import {Link} from "gatsby"
import {Box, Image} from "@chakra-ui/react"
import {ArrowBack} from "../images"

export function HeaderBack() {
  return (
    <Box px={9}>
      <Link to="/">
        <Image src={ArrowBack} alt="Back" className="arrowback"/>
      </Link>
    </Box>
  )
}