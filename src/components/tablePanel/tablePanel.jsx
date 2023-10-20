import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import { foodProducts, beverageProducts } from '../../constants/productsConstants';
import { styles } from './styles';

const categories = [
  { label: 'FOOD', products: foodProducts },
  { label: 'BEVERAGE', products: beverageProducts },
];

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

export default function TabWithProducts() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={ styles.root }>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={ value }
          onChange={ handleChange }
          aria-label="Vertical tabs example"
          sx={ { borderRight: 1, borderColor: 'divider' } }
        >
          { categories.map((category, index) => (
            <Tab label={ category.label } key={ index } />
          )) }
        </Tabs>
        { categories.map((category, index) => (
          <TabPanel value={ value } index={ index } key={ index }>
            { category.products.map((productCategory) => (
              <Link to={ `#${productCategory.category}` } smooth={ true } key={ productCategory.id }>
                { productCategory.category }
              </Link>

            )) }
          </TabPanel>
        )) }
      </Box>
    </div>
  );
}
