import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box
                sx={ {
                    backgroundColor: "#333",
                    color: "#fff",
                    py: 2,
                } }
            >
                <Container>
                    <Typography variant="body2" align="center">
                        &copy; { new Date().getFullYear() } Yukihira Family Dine
                    </Typography>
                    <Typography variant="body2" align="center">
                        All rights reserved.
                    </Typography>
                    <Typography variant="body2" align="center">
                        <Link href="/privacy-policy">Privacy Policy</Link> |{ " " }
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </Typography>
                    <Typography variant="body2" align="center" sx={ { mt: 1 } }>
                        Contact us at:{ " " }
                        <Link href="mailto:contact@example.com">dineatyukihira@gmail.com</Link>
                    </Typography>
                    <Typography variant="body2" align="center">
                        Phone: +123-456-789
                    </Typography>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
