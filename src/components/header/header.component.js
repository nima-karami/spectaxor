import './header.style.css';
import { Typography } from "@mui/material";
import { Box } from '@mui/system';

const Header = () => {
    return(
        <Box component={'div'} >
            <Typography variant='h1' align='center' mt={3}> ta<span className="title-bold">X</span>ulator </Typography>
            <Typography component='h2' variant='h4' align='center' sx={{ color: 'rgba(70, 70, 180, 0.8)' }}> A Tax Calculator for Canadians</Typography>
        </Box>
    )
}

export default Header;