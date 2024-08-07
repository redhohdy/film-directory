import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons.css'

const Buttons = () => {
    return (
        <>
        <div>
            <Button href="/film-directory/about/test?productCode=" variant="outlined">non SPA</Button>
        </div>
        <div>
        <br></br>
        <Button component={Link} to="/film-directory/about/test?productCode=" variant="outlined">SPA</Button>
        </div>
        </>
    )
}

export default Buttons