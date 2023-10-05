import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container'

import { styles } from './styles'

const AboutUs = () => {
    return (
        <>
            <Box sx={ styles.root }>
                <Grid container spacing={0}>
                    <Grid xs={ 8 } sx={ styles.grid1 }>
                        <img
                            src="/BLogo.png"
                            alt="Centered Image"
                            style={ styles.image }
                        />
                        <Typography variant='h5' sx={ styles.text }>About Us</Typography>
                        <Typography variant='h4' sx={ styles.text }>Yukihira Dine: A Decade of Culinary Excellence in Kathmandu, Nepal</Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            Nestled in the heart of Kathmandu, Nepal, Yukihira Dine has been a beloved family restaurant for the past 10 years. Situated in the vibrant neighborhood of Kapan, this establishment has carved a niche for itself as a go-to destination for locals and tourists alike, offering a delightful fusion of flavors that cater to a diverse range of palates.
                        </Typography>

                        <Typography variant='h6' sx={ styles.text }>
                            The Dining Experience
                        </Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            Yukihira Dine prides itself on providing an inviting and cozy atmosphere, perfect for gatherings with friends and family or a quiet dinner for two. The restaurant boasts a charming interior with warm lighting, tasteful décor, and comfortable seating, creating an ambiance that encourages relaxation and conversation.
                        </Typography>

                        <Typography variant='h6' sx={ styles.text }>
                            Cuisine
                        </Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            The heart and soul of Yukihira Dine lies in its diverse and flavorful menu. The restaurant offers a delectable selection of dishes inspired by both Nepali and international cuisines. From traditional Nepali momo dumplings and aromatic dal bhat to continental classics like pasta and steak, there is something for everyone.

                            The chefs at Yukihira Dine are known for their dedication to quality ingredients and culinary expertise, ensuring that each dish is a culinary masterpiece. Their commitment to sourcing fresh, locally-sourced ingredients whenever possible highlights their commitment to sustainability and supporting the community.
                        </Typography>

                        <Typography variant='h6' sx={ styles.text }>
                            Beverage Selection
                        </Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            To complement the exquisite food offerings, Yukihira Dine offers a carefully curated beverage menu. Guests can choose from a variety of refreshing non-alcoholic beverages, as well as a selection of wines, beers, and cocktails to enhance their dining experience. Whether you're celebrating a special occasion or simply unwinding after a long day, there's a drink to suit every preference.
                        </Typography>

                        <Typography variant='h6' sx={ styles.text }>
                            A Decade of Excellence
                        </Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            Celebrating 10 years of service, Yukihira Dine has consistently evolved and adapted to meet the changing tastes and expectations of its patrons. The restaurant's success is not only attributed to its exceptional food and inviting atmosphere but also to its dedicated and friendly staff who strive to make every guest feel like a part of the family.
                        </Typography>

                        <Typography variant='h6' sx={ styles.text }>
                            Community Engagement
                        </Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            Beyond its culinary offerings, Yukihira Dine is deeply rooted in the local community. The restaurant actively participates in charity events, supports local artisans, and occasionally hosts cultural events to showcase the rich heritage of Nepal. This commitment to community engagement has endeared it to the people of Kapan and beyond.
                        </Typography>

                        <Typography variant='h6' sx={ styles.text }>
                            Visit Yukihira Dine
                        </Typography>
                        <Typography variant='body1' sx={ styles.text }>
                            Whether you're a local resident or a traveler exploring Kathmandu, Yukihira Dine is a must-visit destination for those seeking a memorable dining experience. With its delicious cuisine, warm hospitality, and a decade of culinary excellence, it continues to be a cherished establishment in the heart of Kapan. Come and savor the flavors that have made Yukihira Dine a beloved institution for the past 10 years.
                        </Typography>
                    </Grid>
                    <Grid xs={ 4 } sx={ styles.grid2 }>
                            <img
                                style={ styles.sideimg }
                                src="/restaurant1.jpg"
                            />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AboutUs
