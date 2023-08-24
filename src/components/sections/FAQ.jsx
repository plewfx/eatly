import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandButton from '../UI/ExpandButton';

const FAQ = () => {
    return (
        <section className="faq">
            <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="45" viewBox="0 0 47 45" fill="none">
                    <path d="M16.6667 3C11.7046 10.8359 7.61367 19.1607 3 27.2031" stroke="#6C5FBC" strokeWidth="4.78333" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M41.2668 3C29.5782 12.2437 18.6728 22.9633 8.4668 33.9261" stroke="#6C5FBC" strokeWidth="4.78333" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.9997 28.5479C34.4604 30.2883 21.784 37.516 12.5664 41.994" stroke="#6C5FBC" strokeWidth="4.78333" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Frequently Asked <br /><span>Questions</span></h3>
                <div className="questions">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandButton />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>How long does delivery take?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandButton />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>How Does It Work ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandButton />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>How does your food delivery service work?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandButton />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>What payment options do you accept?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandButton />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Do you offer discounts or promotions?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandButton />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>How long does delivery take?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQ