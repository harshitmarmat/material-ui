import { Fragment } from "react"
import { Typography } from "@mui/material"

const TypographyUI = () => {
    return (
        <Fragment>
            <Typography color="textPrimary" variant="h1">H1 Bro</Typography>
            <Typography color="Primary" variant="h2">H2 Bro</Typography>
            <Typography color="textSecondary" variant="h3">H3 Bro</Typography>
            <Typography color="secondary" variant="h4">H4 Bro</Typography>
            <Typography variant="h5">H5 Bro</Typography>
            <Typography variant="h6">H6 Bro</Typography>
            <Typography variant="h7">H7 Bro</Typography>
        </Fragment>
    )
}

export default TypographyUI;

