import { Link, Typography } from "@mui/material";

const Footer = () => {
    return(
        <Typography variant="body" sx={{ mb:3 }}>© {new Date().getFullYear()} All Rights Reserved by <Link href="https://nima-karami.github.io" target={"_blank"}>Nima Karami</Link></Typography>
    )
}

export default Footer;
