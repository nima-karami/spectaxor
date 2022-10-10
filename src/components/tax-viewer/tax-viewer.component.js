import { Typography, Box } from "@mui/material";

const TaxViewer = () => {
    return(
        <Box sx={{ p: 3, m: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4 }}>
            <Typography variant='h6' align='center'>Results</Typography>
        </Box>
        
    )
}

export default TaxViewer;