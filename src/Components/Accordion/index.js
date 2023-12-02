import React from 'react';
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "./accordion.css";

const Accordion = ({ title, content }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ marginBottom: '10px', width: '100%', maxWidth: '600px' }}>
        <MuiAccordion className='accordionTitle' style={{ borderRadius: "13px", width: '100%' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{
                color:"var(--css-primary)",
                fontSize:"40px"
            }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
                background:"var(--css-black)",
                color:"white",
                border:"2px solid white",
                borderRadius:"10px"
              }}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{
            background:"var(--css-white)",
            color:"black",
            borderRadius:"10px"
          }}>
            <Typography className='acordionContent'>
              {content}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      </div>
    </Box>
  );
};

export default Accordion;
