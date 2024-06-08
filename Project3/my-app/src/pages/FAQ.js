import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

function FAQ() {
  const theme = useTheme();

  return (
    <div style={{ marginTop: theme.spacing(4) }}>
      <Typography variant="h2" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept various payment methods including credit cards, PayPal, and bank transfers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">Do you offer refunds?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer refunds within 30 days of purchase for unused products. Please refer to our refund policy for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Add more questions and answers */}
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">How long does shipping take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Shipping times vary depending on your location and the shipping method chosen. Typically, orders are delivered within 3-5 business days.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">Can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can track your order using the tracking number provided in the shipping confirmation email.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">Is international shipping available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on the destination.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">Do you provide installation services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Installation services are available for certain products. Please contact us for more information and pricing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our return policy allows returns within 30 days of purchase. Items must be in their original condition and packaging. Certain restrictions may apply.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ marginBottom: theme.spacing(2), boxShadow: theme.shadows[1], borderRadius: theme.shape.borderRadius }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
          style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
        >
          <Typography variant="h6">How can I contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can contact our customer support team via email at support@example.com or by phone at 123-456-7890 during business hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
