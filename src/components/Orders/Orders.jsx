import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const Orders = () => {
  return (
    <div>
        <Accordion>
          <AccordionSummary expandIcon = {<ExpandMore />}>
            <Typography>
              Order 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
          </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default Orders;