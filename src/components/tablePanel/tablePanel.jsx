import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Products from '../products/products';

import { foodProducts, beverageProducts } from '../../constants/productsConstants';
import { styles } from './styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `vertical-tabpanel-${index}` }
            aria-labelledby={ `vertical-tab-${index}` }
            { ...other }
        >
            { value === index && (
                <Box sx={ { p: 3 } }>
                    <Typography>{ children }</Typography>
                </Box>
            ) }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const categories = ['Category 1', 'Category 2', 'Category 3'];

export default function TabWithProducts() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const allProducts = [...foodProducts, ...beverageProducts];

    return (
        <div>
            <Box
                sx={ styles.root }
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={ value }
                    onChange={ handleChange }
                    aria-label="Vertical tabs example"
                    sx={ { borderRight: 1, borderColor: 'divider' } }
                >
                    { categories.map((category, index) => (
                        <Tab label={ category } { ...a11yProps(index) } key={ index } />
                    )) }
                </Tabs>
                { categories.map((category, index) => (
                    <TabPanel value={ value } index={ index } key={ index }>
                        {/* <Products
                            category={ category }
                            products={ allProducts.filter((product) => product.category === category) }
                        /> */}
                    </TabPanel>
                )) }
            </Box>
        </div>
    );
}
