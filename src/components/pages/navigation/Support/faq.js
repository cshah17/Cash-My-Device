import React from 'react';
import Support from './Support'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '100%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const Faq = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <Support {...props}></Support>
            <br>
            </br>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Who can I contact about accessibility issues I encountered on this site?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>ecoATM is committed to making its website accessible to all individuals.  Please<a href="/accessibility-statement" target="_self">Click Here</a>to review our Accessibility Statement.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How does Cash my device  work?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>Using Cash my device  is simple!</p>

                            <p>We've worked hard to make Cash my device  as easy as can be for you. To find out the Cash my device  Value for your item, just follow these steps:</p>

                            <p>Find your item on <a href="">www.cashmydevices</a>. If the item is not on our website, unfortunately we do not accept it. Please do NOT select an item if it does not exactly match your item exactly, we will not be able to offer you anything for it.</p>

                            <p>Once you've found your item, let us know what condition its in by answering a few questions. Please remember the rating of "Flawless" would be for an item which appears and functions as if it has never been used.</p>

                            <p>If you like our offer just complete the checkout process and tell us how you'd like to get paid: Check, PayPal or Amazon.com gift card. Shipping is FREE! Our offer is good for 30 days but the faster you send it in, the quicker you'll get paid.</p>

                            <p>Once we receive your box, the Cash my device  team will check out the contents and pay you quickly.</p>

                            <p>Please note: If what you send in does not match the condition you described online, you will be given a revised offer. You'll have the option to decline the new offer during a hold window of 5 days. If you decline the offer we'll send your item back to you and pay for the shipping.</p>
                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How do I set up an account with Cash my device ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>Having an account with Cash my device  is a convenient and easy way to track your transactions.</p>

                            <p>The simplest way to set up an account with Cash my device  is to create a transaction - or in other words -sell a device to us on <a href="">www.cashmydevices</a>, it's easy! You will begin by finding your item, and getting a quote.</p>

                            <p>As you take the steps to lock in the offer on your item, you will be asked for the information needed to create an account. This will include your address, contact information, and payment preferences. As always, there is no cost to using Cash my device  to trade in your device, and never an obligation to send the item to us.</p>

                            <p>After you create the transaction it can take up to 15 minutes for our system to process the new account. From there we will send you an activation email, along with an electronic shipping kit (packing slip and shipping label - .PDF). We will then request that you follow the activation link and confirm your account.</p>

                            <p>If you are looking to purchase a device in our Certified store, You will begin by searching through the device listings and selecting the item you would like to purchase. Once a device has been selected you will proceed to checkout.</p>

                            <p>Though you do have the option to check-out as a guest, it is best to register an account.</p>

                            <p>If you have any trouble activating your account, please call us at 1-800-Cash my device  or ask a question using our web form. Activation prevents any downtime in communication regarding important account and transaction updates that can relate to your inspection and payment.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        What condition is the item in?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Each listing includes a section that describes the cosmetic and functional condition of the item. We rate the cosmetic condition of the item as "Excellent", "Good", "Fair". While each device may have varying cosmetic conditions, we guarantee that each phone is in perfectly functional working condition.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Does Cash my device  purchase phones that have been Lost or Stolen?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>Cash my device  does not purchase items that have been reported as lost or stolen.</p>

                            <p>We use CheckMEND, a state-of-the-art tool that includes information from carriers, law enforcement and insurance companies to identify whether a device has been reported either lost or stolen.</p>

                            <p>CheckMEND is a cutting-edge tool designed to more accurately detect potentially stolen goods, including smartphones, tablets and computers. Developed by Recipero, the largest U.S. consumer electronics background report service, CheckMEND compiles data from major wireless carriers, law enforcement and insurance companies across the country (including the FBI) to provide the most complete database of lost or stolen devices. Cash my device  was the first consumer electronics trade-in site to deploy CheckMEND in the United States.</p>

                            <p>We also regularly assist law enforcement in the investigation of stolen property. <strong>We record the device's electronic serial number</strong> for each item we receive, so we can provide a trail for items under inquiry. All devices go through our data wipe process.</p>

                            <p>As part of our online trade-in process, each of our <strong>customers are required to contractually confirm the device is in fact theirs</strong>  <strong>to sell</strong> and has not been reported as lost or stolen. We also remind customers at several points in the process that we do not accept items that have been reported lost or stolen.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Is my personal information safe with Cash my device ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Cash my device  never sells or shares any of your personal information unless you have specifically opted in to receive offers from our partners. Additionally, during our inspection process all devices receive a full wipe and factory restore prior to or during inspection and we destroy any SIM or memory cards that our customers forget to remove.</p>
                        <p>Please Note: If you do forget to take out your memory card or SIM and your phone is sent to us, we will be unable to send the SIM or memory card back to you should you decide to cancel your transaction as they are destroyed immediately upon the start of the inspection process.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Does Cash my device  Buy from or Sell to customers outside of the United States?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>For individuals, Cash my device  does not currently buy from or sell to customers outside the United States. For wholesale buyers, we do sell in bulk provided you meet our seller requirements.</p>
                        <p>We are definitely excited about the future of Cash my device , and the possibility for expansion, but for now our service is active in the United States alone.</p>
                        <p>Thank you for your interest, and stay tuned!</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Why should I choose Cash my device ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>We understand that our Customers put a lot of trust in us when they trade in their electronics, and we take that responsibility very seriously. We're proud of the good reputation we've earned since we started the business in 2006. We invite you to check out our reviews to see what others are saying about their Cash my device  experience.</p>

                            <p>Cash my device  is a Better Business Bureau accredited business with an A+ rating.</p>

                            <p>You can join others and connect with us on Facebook or Twitter.</p>

                            <p>If you have concerns we haven't addressed here, we'd love to talk with you. Please call us at 1-800-Cash my device  or contact us using our Ask a Question form.</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I buy or sell in bulk with Cash my device ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>Cash my device  does arrange bulk sales as well as bulk purchasing. We have a dedicated department for such transactions, however they require a set of information before they are able to determine how we can best serve your needs.</p>

                            <p>Please email us through our <a href="/business">Ask a Question</a> form with the answers to the following questions. Our Sales team will review the information and follow up with you.</p>

                            <ol>
                                <li>Company/Business:
    </li>
                                <li>Contact Name:
    </li>
                                <li>Website:
    </li>
                                <li>Mailing address:
    </li>
                                <li>Telephone:
    </li>
                                <li>Item description: (Manufacturer, Series and Model Number)
    </li>
                                <li>Quantity:
    </li>
                                <li>Desired Cosmetic Condition:
    </li>
                                <li>Acceptable Defects:
    </li>
                                <li>Reason for purchase:
    </li>
                                <li>Bulk Purchase frequency:
    </li>
                                <li>Offered dollar amount per unit:
    </li>
                                <li>Primary Contact Email:</li>
                            </ol>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        What happens to all the devices Cash my device  buys?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div >
                            <p>Cash my device  believes in reusing products first and recycling when an item no longer has any value. The idea is to keep working products in use as long as possible, extending their life, preventing e-Waste, and ensuring you receive value for the electronics you don't need anymore. It's an idea we call reCommerce.</p>

                            <p>Once we have checked out your item and payment has been sent, we move the item into one of a few directions depending on what it is and what condition it's in.</p>

                            <p>Many of the products sent to Cash my device  still have plenty of life left in them so we find them a new, happy home. We do this by selling many of the items through our <a href="">Cash my device  store</a>. This is the essence of reCommerce - you sell your unwanted gadgets to us and we extend their life by selling them to someone who wants it. As a result, fewer items get thrown to the landfills or collect dust in a drawer, and fewer people buy brand new gadgets since used ones in great condition are available in the market.</p>

                            <p>Some products that we receive in large quantity are sold to wholesale partners, who aggregate these items and resell them via their own networks globally. A smaller portion of products that are sent to us are at the end of their useful life and are sent to domestic recycling partners who abide by the highest standards.</p>

                            <p>The idea is to optimize where to move things in order to get the best return and therefore offer the best value possible to our customers.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        What shipping methods does Cash my device  offer?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div >

                            <p>Cash my device  offers the shipping options of USPS or FedEx.</p>

                            <p>For Items being sent to Cash my device  who we choose will be based on the size and weight of your item, you will have either a USPS label or a FedEx label.</p>

                            <p>If we have sent you a prepaid USPS label, you can bring your package to any Postal facility or arrange a pick up with any friendly Letter Carrier.</p>

                            <p>If you have a FedEx label, you can bring your box to any FedEx Office or Worldwide Service Center location.</p>

                            <p>For items being shipped from Cash my device , we ship via FedEx or USPS. Tracking will be provided to you electronically once the item ships.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Does Cash my device  have a referral program?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>As of 8/29/2019, we have discontinued our referral program, which provided incentives to new customers and referrers when completing a transaction with Cash my device .</p>

                            <p>We appreciate all who participated over the years and shared the benefits of Cash my device  with their family, friends, and clients.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How do I check for water damage on a phone? / Does Cash my device  Accept Water Damaged Phones?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>

                            <p>Water damage may occur if your item is exposed to moisture in any way. This could mean it fell into water or simply that it was exposed to a damp environment. Most items have a sensor that is triggered when exposed to water. To check for water damage, we take a look at this sensor and if it is triggered, we consider the phone water damaged.</p>

                            <p><strong>Will Cash my device  still offer me money if my phone is water damaged?</strong></p>

                            <p>For <strong>iPhones</strong> , Cash my device  <strong>will</strong> make an offer for water damaged phones, but the phone is considered "broken".</p>

                            <p><strong>For all other cell phones brands</strong> with water damage, your offer <strong>will be</strong> significantly affected by a tripped water damage indicator and your offer could be reduced to $0.00.</p>

                            <p>Either way, if we find that your phone is water damaged, we will notify you of a change in offer and allow you to choose the new offer or have the phone shipped back to you.</p>

                            <p><strong>How to determine if your phone is water damaged:</strong></p>

                            <p>Many water damaged phones still appear to be in full working condition, but the indicator sticker being tripped typically will change the value we can offer since it may signal internal corrosion that will cause problems down the road.</p>

                            <p>To determine if your cell phone's water damage indicator has been tripped, you can perform a simple check before creating an offer with Cash my device . First, power down your phone. Next, remove the battery panel, and the battery itself. There will be a white dot on the phone itself, behind the battery. In some instances, the water damage indicator will be on the battery itself, or even on both the phone and battery.</p>

                            <p>If the water damage indicator is WHITE, this means the phone is not water damaged.</p>

                            <p>If the water damage indicator is PINK or RED, this means the water damage indicator has been tripped.</p>

                            <p>In addition to the popularity of the iPhone, we receive a high number of Samsung phones. The Samsung water damage indicator is slightly different than the indicator statuses listed above (White, Pink/Red). We have created a video for you to follow to show you what a water damage indicator looks like in tripped status, as well as untripped status for Samsung phones.</p>

                            <p>Samsung Water Damage Indicator Video: <a href="http://www.youtube.com/watch?v=Fgnx_zoaIk0">http://www.youtube.com/watch?v=Fgnx_zoaIk0</a></p>

                            <p>If your phone is not an iPhone, and not a Samsung phone, and you are still uncertain if your water damage indicator has been tripped, we recommend checking with the manufacturer.</p>

                            <p>Thank you!</p>

                        </div>



                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Are the contents insured against loss or damage?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>

                            <p>As long as you use the shipping label provided by Cash my device , in almost all cases your package will be insured on the way to our facility.</p>

                            <p>Here is what you should know:</p>

                            <p>Do not use a DropBox - We are not able to insure a package against loss if an item is not handed directly to a FedEx or USPS employee. We request and strongly suggest that customers do not use a FedEx or USPS Drop Box. Using a Drop Box of any kind could cause 2-4 weeks of delayed shipping, and if never recovered, could result in the denial of the Lost in Shipping claim.</p>

                            <p>Pack your box carefully - Based on our extensive experience with shipping and carriers, we highly recommend that customers take the highest care to pack electronics very carefully. If you are packing your own box, we also highly recommend extra secure closure of the package around each edge to prevent any potential tampering, water exposure, dust exposure, or ripping of the box. Shipping carriers will deny a damage claim if the package is not properly packed. The claim will be denied if the item(s) are shipped in a flimsy box, or if not enough packing material is used to protect the contents. If you have any concerns about how well you will be able to pack an item, or multiple items, we strongly recommend using a packing service.</p>

                            <p>Record the serial number of your device - We encourage customers to record the serial numbers of the devices in transit prior to shipment, or even snap a few photos for your records. If a damage or loss claim is the only route available in an unexpected situation, it is very helpful to have this information ready</p>

                            <p>We will do whatever we can to help you recover your device or help you with a claim should the unfortunate happen. Our boxes are designed to take a lot, but if you have to pack something yourself, please follow the advice above.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Which types of electronics does Cash my device  buy?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div>
                            <p>Cash my device  buys many types of Apple devices, Apple Macbooks, Samsung devices, and other Android products. All of the items we buy can be found on Cash my device .com.</p>
                            <p>If your exact model does not appear on our website that means we no longer make offers for that item. If we receive an item that is not in our catalog, we will not be able to honor the price quoted in your offer. A counter offer will be provided, or if we cannot take the item, we will either ship it back free of charge, or recycle it responsibly upon your confirmation</p>
                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How to deactivate "Find My iPhone" before shipping to Cash my device
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>Find My iPhone is a feature for iPhone, iPad, and iPod Touch that can help locate your device if lost, but can also block activation by a new owner. Because of this, Cash my device  cannot offer full trade-in value for devices with Find My iPhone enabled. To ensure a fast and hassle-free process, please make sure to turn off Find My iPhone before sending it to Cash my device .</p>

                            <p><strong>How to turn off Find My iPhone</strong></p>

                            <p><strong>Locate and tap the "Settings" icon on your device's home screen.</strong></p>

                            <p><strong>Tap "iCloud" in the Settings menu.</strong></p>

                            <p><strong>If Find My iPhone is ON, tap the slider to turn it OFF.</strong>
                                    If you are prompted to for a password, enter your iCloud password and tap "Turn Off" to confirm.</p>

                            <p>Please note:</p>

                            <p>If you have already reset your device, Find My iPhone is turned off.</p>

                            <p>Please contact us if you need any assistance with this process.</p>
                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How to erase all of your iPhone's data and settings
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>Protect your data and personal information, erase all of data and settings before sending your device to Cash my device . We will still double check your device to make sure it's been erased once we receive it.</p>

                            <p>Before you erase your device, we recommend you make a backup of your iPhone's data via iCloud or by connecting your iPhone to the computer you normally sync with.</p>

                            <p>Here is how you can erase your device before sending it to Cash my device :</p>

                            <ol>
                                <li><p>Tap the settings (gear icon) from the home screen (or whatever page it happens to be located on your iPhone).</p></li>
                                <li><p>Tap the "General" settings menu item.</p></li>
                                <li><p>Choose the "Reset": menu item.</p></li>
                                <li><p>Tap on the "Erase All Contents and Settings" menu item.</p></li>
                            </ol>

                            <p>How to erase your device via iCloud, if it does not power on or after you have shipped it to Cash my device  with iCloud</p>

                            <p>Sign in to icloud.com/#find with your Apple ID (the one you use with iCloud), then click Find My iPhone.</p>

                            <p>Click All Devices, then select the device you want to erase.</p>

                            <p>In the device's Info window, click Erase [device].</p>

                            <p>To erase:</p>

                            <p>An iOS device: Enter your Apple ID password. If the device you're erasing has iOS 7 or later, enter a phone number and message. The number and message will be displayed on the screen after the device is erased.</p>

                            <p>If your device is online, the remote erase begins. A confirmation email is sent to your Apple ID email address.</p>

                            <p>If your device is offline, the remote erase begins the next time it's online.</p>
                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        What happens if you disagree with the condition or model I select for my item?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>How it works - Every item sent to us is hand evaluated by a trained member of our team based on the information you provided. If our evaluation does not match up with the one you completed online, the offer may decrease or increase accordingly.</p>

                            <p>Revised Offers - If your offer changes for any reason, you will receive an adjustment email on the day of inspection with the new value and an explanation of any changes to your offer. If you disagree with our revised offer, we will gladly return your item to you free of charge.</p>

                            <p>Please Note: If you do not respond to our email and we do not hear back from you regarding the revised offer after 5 days, the new offer will be automatically accepted on your behalf and your revised payment will be sent to you.</p>

                            <p>If your offer is revised and you believe there has been a mistake, you can request the attention of our Inspections Manager for a closer look and re-assessment. You can submit this request by using our Ask a Question Form.</p>

                            <p>If you can't find our email you can always submit your decision, by logging into your www.cashmydevices account and visit the "Track My Offers" page to manage your transactions.</p>

                            <p>How to avoid a Revised Offer - The best way to prevent an offer drop is by providing as accurate an initial assessment as possible. If you need assistance determining the condition of your device(s), please visit our "Determining the Condition of My Item" FAQ. It is also very common for customers to select the wrong model on our website. If you are not sure the exact model you have please contact us and ask with your devices serial number and ask for assistance before creating a transaction.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How do I deactivate my phone or other device?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>To deactivate your phone or other device, you must contact your wireless service provider and clear any issues that are causing your device to remain active.</p>

                            <p>An ESN is an Electronic Serial Number. An ESN may be active for the following reasons:</p>

                            <p>The device still holds an "Active" account status with the carrier</p>

                            <p>The account associated with the device has an outstanding balance</p>

                            <p>The device has been reported as lost or stolen</p>

                            <p>Prior to our inspection, we will check to ensure that the ESN has been deactivated. If the ESN is not clear for activation, we will notify you via email and hold the item for 5 days. We will ask you contact your wireless service provider and clear any issues that are causing your item's ESN to be active so that we can complete the evaluation process.</p>

                            <p>After this hold period expires, we will issue a revised value for your phone in "parts only" condition. You will have another 5 days to decide if you would like to Accept or Decline the revised offer.</p>

                            <p>Verizon phones can now be checked through their "Activate Phone or Device" page.</p>

                            <p>This resource will also provide the make and model of the phone which will confirm that you have an accurate quote for the device you are sending to us.</p>

                            <p>Once you have deactivated your device, let us know and we can continue with the inspection process.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How to turn off "Find My iPhone" after you have shipped it to Cash my device
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Find My iPhone is automatically activated with iOS7 for iPhones, iPads, and iPod Touch. This automatically blocks activation by other people, and does not allow Cash my device  to find a new owner for your device. Because of this, Cash my device  will not be able to offer full trade-in value your devices with Find My iPhone enabled unless you deactive the "Find My iPhone" in you iCloud account.</p>

                            <p>The good news is that it is still possible to clear your device. Here's how:</p>

                            <p><strong>Go to</strong>  <strong>http://www.icloud.com/#find</strong> <strong>and login using you Apple iCloud account (this is the same account you use on your device.)</strong></p>

                            <p><strong>Click "Devices" at the top, and locate the device you sent to Cash my device . After a few moments, iCloud will finish</strong>  <strong>updating the location on each of your devices and the device you sent to Cash my device  should appear as offline. Click on the device to select it, go back to the device list, and the click the "X" button to remove it from your account. Please note: device must be powered off.</strong></p>

                            <p><strong>Click "remove" on the next screen to confirm.</strong></p>

                            <p><strong>If you received an email from Cash my device  asking you to complete these steps, use the link in your email to let us know you've removed it from your account so we can continue to process your device.</strong></p>

                            <p>Please note: if you are still in possession of your device, you can turn off Find My iPhone right from the settings menu. If you aren't able to remove the device from your iCloud account, please contact us for assistance.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Where is that box and pre-paid shipping label you promised?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>When creating a transaction with Cash my device , we provide a fast and easy shipping kit for your devices.</p>

                            <p>We send you a prepaid shipping label through email. Available for USPS or FedEx, this will arrive in your email inbox roughly 15 minutes after you have created the transaction on www.cashmydevices. The pre-paid shipping label and packing slip will be attached to the email as a .PDF (Adobe's Portable Document File Format), and you will need the most current version of Adobe Reader to open the file. You will use your own box for this option, so be sure to pack the item very carefully.</p>

                            <p>You can also log into your account on www.cashmydevices and visit your "Track my Offers" page to print the shipping label and packing slip.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I track my package while on it's way to Cash my device ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p><em>If we provided you with a prepaid shipping label via USPS or FedEx, you can enter the carrier tracking number on their web sites.</em></p>

                            <p><em>USPS:</em> <em><a href="https://www.usps.com/">https://www.usps.com/</a></em></p>

                            <p><em>FedEx:</em> <em><a href="https://www.fedex.com/us/track/index.html">https://www.fedex.com/us/track/index.html</a></em></p>

                            <p><em>If you do not have the carrier tracking</em> <em>number</em> <em>you can find it as follows:</em></p>

                            <p><em>If you created an account: Log into your account on cashmydevices. From there you will be able to find your tracking number and track your package.</em></p>

                            <p><em>First, click the "Track My Offers" link at the top right corner of your cashmydevices homepage. Next, click "View Details" next to the item you would like to track, then under the title "Your Box Status" you will see a Shipment Tracking Number which is linked to the carrier you selected. This will bring you to the carrier page where you can see the status of your shipment.</em></p>

                            <p><em>If you do not have an account: Please contact customer care through email or by calling us at 1-800-Cash my device . Have your transaction number with you when you contact</em> <em>us.</em> <em>The number looks like SR123456789 and is located in the email we sent you immediately following your transaction.</em></p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Where is my check? How to track your check.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Checks are shipped via USPS first class and typically take 7 to 10 business days to arrive after your inspection is complete and it has been accepted.</p>

                            <p>Please contact our support team if your check has not arrived after 10 business days.</p>

                            <p><strong>Other Payment Type:</strong>
                                 Paypal customers will see a credit to their account. If you do not see the credit please contact Paypal to see if there is an issue with your payment</p>

                            <p>Amazon customers will receive an email with a redemption code to be used on the Amazon site. Please check you spam folder to see if your email inadvertently went there.</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How long does it take to receive my payment?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Once we receive your item</p>

                            <p>It should only take a day or two for it to be processed. (It depends on the time of day it gets to us) If the model and condition are confirmed during the inspection, the payment is processed within 3-5 business days.</p>

                            <p>Once Payment is Issued</p>

                            <p>Amazon and PayPal are the fastest ways to get paid, they are sent out electronically and should arrive within 24-48 hours of the payment being processed.</p>

                            <p>Checks are shipped via USPS first class and typically take 5 to 10 days to arrive once the payment is processed.</p>

                            <p>An email will always be sent when a payment is processed and will include details regarding when you can expect to receive it.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Which options do I have for payment?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Cash my device  currently offers 3 ways for you to get paid for your used electronics:</p>

                            <ol>
                                <li><p>Check - Shipped using USPS First Class Mail, this option takes 3-10 business days to arrive after the payment is processed.</p></li>
                                <li><p>Paypal -Sent directly to your Paypal account using the email address provided by you during checkout, this option takes 0 - 2 business days to arrive after the payment is processed.</p></li>
                                <li><p>Amazon Electronic Gift Card - Sent directly to your email inbox using the email address provided by you during checkout an Amazon Gift code will be sent for you for you do redeem to be added to your Amazon account. This option takes 0 - 2 business days to arrive in your email after the payment is processed.</p></li>
                            </ol>

                            <p>If you do not receive a check within 10 days it the USPS may have sent it back to us. If so, we will check the address you submitted to see if we can resend it. Please do not hesitate to ask customer care if they can find your check!</p>

                            <p>If you are having problems with Paypal or Amazon, please check your spam folder to see if the emails we sent were sent there. Also, please make sure your Paypal and Amazon accounts are current.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Is there a limit on the number of items I can sell to Cash my device  at once?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Cash my device  is set up for individual users selling under 10 items per transaction. Each phone needs a separate offer made for it, and we have tried to make this as easy as possible, so that you get the maximum value for each device you want to sell.</p>

                            <p>If you have a higher than average number of items to sell, we would still love to buy them! You will just need to create separate transactions once the 10 item limit is reached.</p>

                            <p>Please Note: For certain individual products there is a limit to how many identical models you can trade in under the same account. We do not have a list of these specific products available, but the system will let you know if you have exceeded the trade limit of up to 5 items in a 30 day period when you create the transaction.</p>

                            <p>Cash my device  offers bulk trade-in services for organizations with 10 or more mobile devices, laptops, or tablets through a strategic partnership. This service is tailored to the needs of businesses and organizations looking to responsibly dispose and/or monetize unwanted or broken inventory. If you have questions please email us and we can provide you with the information you need.</p>

                        </div>


                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        I received an email notification saying my payment was issued but I haven't received it. What do I do?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Typically it can take as much as 10 business days (12 - 14 calendar days) from the time you mail your device to the time you receive payment. This all depends on the time of year, the payment method you requested and where you live.</p>

                            <p>After you receive notification that your device has been inspected, you can expect the following time-frames to receive payment:</p>

                            <p>Checks typically take 3 to 5 business days to arrive. This timeframe quote is provided to us by USPS. If it's been more than 14 days since you received the email notification that your check has been sent, please contact us, and we will be happy to look into it for you.</p>

                            <p>You can track your check by logging into your Cash my device  account or via the "Track My Offer" link at the top of our homepage. From there you can click the "Track Payment" link to see the current location of your check. Please note that the tracking system simply provides a scan of the last United States Post Office location and will not provide a delivery date.</p>

                            <p>Paypal payments it should take no longer than 24 hours to arrive. If you have not received the funds it is most likely due to your account not being verified or being able to accept transfers. Please contact PayPal customer support to resolve any issues with your account. You can also request a change in payment address or payment method if you are having difficulties with your PayPal account.</p>

                            <p>Amazon.com Gift Card codes are sent via email within 24 hours of the completed inspection. These messages are sometimes filtered as spam depending on your email provider so be sure to check your spam folder as well as your inbox. If you are unable to find it, please contact us and we can provide you with the code.</p>

                            <p>Please Note: If you sent us more than one item, payments are issued per item, not per box. We do our best to consolidate payments into a lump sum, but because different items move through our evaluation process at different speeds, you may receive multiple payments if you had more than one item in your box.</p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I still sell my device if I don't have all the accessories?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Yes you can, accessories do not affect your offer price and are not required to be sent with your device.</p>

                            <p>Please DO NOT send us your other accessories such as cases, earbuds, protective screens, box, &amp; manuals, they DO NOT affect your price, and are discarded at receipt.</p>

                            <p>Again, We request that customers DO NOT send protective cases or any other accessories not specifically requested on the calculator at the time of the transaction creation. Any extra accessories we receive are discarded at receipt and cannot be returned.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        What happens once I have sent in my item?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Once your item arrives at our warehouse, it typically takes 3 to 5 business days for payment to be issued. Amazon &amp; paypal are the quickest ways to get paid. Checks are delivered to you by USPS, so please allow an additional 7 - 10 days for receipt.</p>

                            <p>There are a number of factors which will impact the overall timeframe for payment.</p>

                            <ol>
                                <li><p>Shipping time to our facility (3-5 business days. We are centrally located in Louisville, KY. You can track your package by logging into the "Track My Offers" page on www.cashmydevices)</p></li>
                                <li><p>Once we receive your item our goal is to inspect your item and get you paid within 3-5 business days.</p></li>
                                <li><p>Once your payment is issued - Paypal or Amazon is Instant! Checks can take from 5 to 10 days to be delivered.</p></li>
                            </ol>

                            <p>The best way to prevent delays is to make sure your package is scanned at the post office or FedEx facility for proper shipping, then watch your email inbox carefully. We recommend checking your email daily to avoid any miscommunication.</p>

                            <p>You should also check with us if you need any help determining the condition of your item, or if you are unsure of the account status on your phone.</p>

                            <p>PLEASE NOTE: If there is an active account on your phone it can cause significant delays as well as a possible adjustment of the amount offered.</p>

                            <p>In addition to our email updates, you can also get an update on your transactions by selecting the "Track My Offers" or "Login" option at the top of the www.cashmydevices homepage.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        What accessories do I need to send with my iPhone?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>When selling a device to Cash my device , we suggest you send your device with a fully charged battery as this will speed the inspection process. Other than that, you do not need to send us anything as it does not impact your offer price.</p>

                            <p>Please note: If you do send in accessories (power cord, charger, USB cable, case, earbuds etc.) they - in most cases - cannot be returned to you. For sanitary reasons most items are discarded and recycled prior to inspection.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel30'} onChange={handleChange('panel30')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        If Cash my device  checks out my item and the offer is lowered, what can I do if I disagree?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>The first action you can take is to request a re-inspection through our Ask a Question form or by calling us at 1-800-Cash my device . We will have our Inspections Management Team take a closer look for you. Some evaluations can be edited or overturned to provide you with additional compensation. During this time, we would request that you do not Accept or Decline the revised offer, as this will cancel the re-inspection request.</p>

                            <p>After any inspection or re-inspection takes place you will receive a notification email shortly after with the evaluation results. If we determine your item possesses a functional or condition rating related defect, or the item is a different model, we will calculate a new offer and you will have <strong>5 days</strong> to decide if you would like to Accept or Decline. After the 5 days passes, we have to assume you do not object to the new offer, and your device will be <strong>automatically processed</strong> under the new amount. If you Decline the offer within the 5 days, the item will be sent back to you <strong>at our cost</strong>.</p>

                            <p>The most reliable way you can manage your transactions is through the <strong>"Track My Offers"</strong> page on www.cashmydevices. Once logged in, you can review the status of each transaction individually and submit any decision we might need from you to proceed. If you submit a "Decline" decision, we will return the device to you within 3 business days. You will receive an email with a tracking number, which will allow you to prepare for the item's delivery. <strong>NOTE: Return packages are not insured against</strong>  <strong>loss or theft</strong>  <strong>and do not require a signature. We strongly recommend that you monitor the tracking, and are present for the return delivery.</strong></p>

                            <p>We recommend checking the <strong>"Track My Offers"</strong> page daily after you ship the package to us. The 5 days following receipt of your item are crucial, and we are dedicated to making the transaction seamless so you can get your money FAST if you choose to Accept the revised offer.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel31'} onChange={handleChange('panel31')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How to deactivate Samsung "Find My Mobile" Reactivation Lock before shipping to Cash my device .

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Reactivation Lock is a security setting on certain Samsung devices (some versions of Galaxy S5 and Note 3) which prevents it from being activated on a new account. Because of this, Cash my device  cannot offer full trade-in value for devices with Reactivation Lock enabled<em>.</em> To ensure a fast and hassle-free process, please make sure to turn off this feature <em>before</em> sending it to Cash my device .</p>

                            <p><strong>How to turn off Reactivation Lock</strong></p>

                            <p><strong>1.</strong> From the Home Screen, touch <strong>Apps</strong> then <strong>Settings</strong> and select the <strong>Security</strong> icon</p>

                            <p><strong>2.</strong> Once in Security options, scroll to <strong>Reactivation Lock</strong>. Make sure the box is <strong>UNCHECKED</strong>. You may be prompted for a password when turning off this feature - make sure to use your Samsung account password. If you do not see this option listed, the feature is not available for your device and no further action is needed.</p>

                            <p><strong>Please note:</strong> if you have already reset the device to factory settings and were prompted for a password at that time, you have already disabled Reactivation lock.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel32'} onChange={handleChange('panel32')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        Which iPhone do I have?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <p>Please contact Cash my device  Customer Support for further assistance. <strong>1-800-GAZELLE</strong></p>
                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        I did not include my packing slip in my box.


                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>No worries at all, we do not need your packing slip! We can identify your item(s) from our prepaid label on your box.</p>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel34'} onChange={handleChange('panel34')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        What if I have mailed my item to you but I forgot to include an accessory?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Good news, for iPhone, iPads and iPods, the quote you receive is for the unit ONLY. We actually encourage customers to please refrain from sending ANY accessories. Of course if you would like to include the charger, we will recycle it for you.</p>

                            <p>With non-Apple cell phones, 99% of the offers will not change due to a forgotten charger or battery. There are a few select models which have unique chargers and batteries which, if missing, will affect the payment. We recommend waiting for the results of the inspection to determine if this is the cause for an offer drop, then contacting us immediately if so.</p>

                            <p>Missing Accessories for Computers or Apple Cinema Displays <strong>WILL</strong> have a significant affect on your offer.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel35'} onChange={handleChange('panel35')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How is the "Cash my device  Value" offer calculated?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>In order to calculate a competitive offer for your item, we have invested in tools that use data like market demand, business costs and available inventory to determine a competitive market value.</p>

                            <p>We are always happy to explain a little about how we arrive at our "Cash my device  Value". Additionally, there are a few things you should consider when deciding if selling to Cash my device  is the right choice for you.</p>

                            <ol>
                                <li><p>Listings made easy: Taking pictures, composing descriptions, managing online accounts and postings can be a pain. With Cash my device , you just need to answer a few quick questions to receive an offer.</p></li>
                                <li><p>Competitive Pricing: Here at Cash my device , we know that determining the right asking price for your item can be difficult. In order to calculate a competitive offer for your item, we have invested in patent pending tools that use data like market demand, business costs and available inventory to determine a competitive market value.</p></li>
                                <li><p>Safe and Secure Payment: Instead of waiting to find a seller, we will pay you fast after the condition of the item has been confirmed by a quick inspection process. Simply select your preferred payment method during the checkout process.</p></li>
                            </ol>

                            <p>The value we pride ourselves on more than anything is our commitment to providing you with a crazy awesome experience. Our outstanding customer service paired with our safe and simple experience has made Cash my device  a Better Business Bureau approved company with an A+ rating since we began back in 2006. We remain confidently as the leader in the reCommerce industry.</p>

                            <p>We know we are not the only choice for finding new homes for used electronics, but we encourage you to try out Cash my device . We know that you will be glad you did.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel36'} onChange={handleChange('panel36')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        When selling my device to Cash my device , how can I remove an item from my transaction or how can I cancel my whole transaction?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Removing an item from my order when selling my device to Cash my device :</p>

                            <p>To remove an item from your order while creating the order, near the top right corner of the screen, click on "You have 1 item in your box" (where 1 can be however many items are in your open box order).</p>

                            <p>Next, click the blue link that says "Remove" under the item photo in the small popup. Once you click "Remove", you will be asked to confirm, and should see the item disappear from your order.</p>

                            <p>To cancel an entire transaction:</p>

                            <p>Go to the cashmydevices website and click "Track My Offers" in the top right hand corner of the cashmydevices website. This will lead you to your Transaction Management page.</p>

                            <p>Under your Open orders tab, you will see a "View Details" link next to each item. Once you have clicked this link, you will see a blue "Cancel this Item" link available.</p>

                            <p>Additionally, you can cancel the whole order by clicking "Cancel this Box" at the top right hand corner of the "Box Status" window.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel37'} onChange={handleChange('panel37')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        When selling my device to Cash my device , how can I remove an item from my transaction or how can I cancel my whole transaction?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Removing an item from my order when selling my device to Cash my device :</p>

                            <p>To remove an item from your order while creating the order, near the top right corner of the screen, click on "You have 1 item in your box" (where 1 can be however many items are in your open box order).</p>

                            <p>Next, click the blue link that says "Remove" under the item photo in the small popup. Once you click "Remove", you will be asked to confirm, and should see the item disappear from your order.</p>

                            <p>To cancel an entire transaction:</p>

                            <p>Go to the cashmydevices website and click "Track My Offers" in the top right hand corner of the cashmydevices website. This will lead you to your Transaction Management page.</p>

                            <p>Under your Open orders tab, you will see a "View Details" link next to each item. Once you have clicked this link, you will see a blue "Cancel this Item" link available.</p>

                            <p>Additionally, you can cancel the whole order by clicking "Cancel this Box" at the top right hand corner of the "Box Status" window.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel38'} onChange={handleChange('panel38')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        What is an ESN, IMEI or MEID?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>An "ESN" is an Electronic Serial Number. An MEID ( <strong>M</strong> obile <strong>E</strong> quipment <strong>ID)</strong> and ESN uniquely identify a CDMA cellphone. In the 2005 time frame, the MEID began to replace the 32-bit ESN. An IMEI ( <strong>I</strong> nternational <strong>M</strong> obile <strong>E</strong> quipment <strong>I</strong> dentity) is unique number assigned to a GSM, UMTS or IDEN cellphones.</p>

                            <p>An ESN, IMEI or MEID may be active for the following reasons:</p>

                            <p>The device still holds an "Active" account status with the carrier</p>

                            <p>The account associated with the device has an outstanding balance</p>

                            <p>The device has been reported as lost or stolen</p>

                            <p>This number is tied to a carrier and helps record the activity and status of the device. Prior to our inspection, we will check to ensure that the ESN has been deactivated.</p>

                            <p><strong>If the ESN is not clear for activation</strong> , we will notify you via email and hold the item for <strong>5 days</strong>. To clear and active number, you must contact your wireless service provider and clear any issues that are causing your item's ESN to be active so that we can complete the evaluation process.After this hold period expires, we will issue a revised value for your phone in "parts only" condition. You will have another 5 days to decide if you would like to Accept or Decline the revised offer.</p>

                            <p><strong>Helpful Hint -</strong> You may need this number as a reference. On many phones you can find your ESN, MEID or IMEI by typing in *#06# and your phone and the number will appear on your screen.</p>

                            <p>Verizon phones can now be checked through their "Activate Phone or Device" page. For other carriers you may choose their Chat function on their Customer Service page.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel39'} onChange={handleChange('panel39')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        I can't find my device on cashmydevices, what should I do?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>If your model is not on our website, then unfortunately we do not accept it for trade.</p>

                            <p>If we receive a different model than what you indicated in your transaction, a revised offer will be sent for as little as $0.00. As with all our offers, if the revised offer does not meet your satisfaction we will return your device - free of charge or offer to responsibly recycle it for you.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel40'} onChange={handleChange('panel40')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I change my payment type?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Yes, provided the item has not been inspected. Why? Once we inspect an item payment is issued VERY quickly and will probably be already issued the way you indicated in your original offer.</p>

                            <p>You can change your payment type in one of two ways:</p>

                            <p>Use your www.cashmydevices account: Log into your account and from there you will be able to change your payment type.</p>

                            <p>Contact Customer Care: We recommend calling us because it is the fastest way for us to update your payment type. You can also contact us using our Ask A Question form, however this can take up to 24 hours to receive a response.</p>

                            <p>You can track your payment under the "Track My Offer" in the upper right hand corner of the cashmydevices website.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Will Cash my device  pay me for any extra accessories I send?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            Cash my device  does not purchase any accessories outside those specifically requested in the offer calculator. Unfortunately, any extra accessories shipped with your order can not be returned once they arrive at Cash my device .
                            </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel42'} onChange={handleChange('panel42')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can someone sell my phone that was lost or possibly stolen?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Cash my device  does not purchase phones that have been reported as lost or stolen at the time of sale.</p>

                            <p>We always try to identify the owner of any lost or stolen device we find. If your phone has been lost or potentially stolen, make sure you report the incident to your service provider and or local police as they can prohibit the item from being activated by a new user.</p>

                            <p>Most phones can be remotely locked and erased to keep your information safe, you may even be able to put a message on the lock screen with a contact number in case your phone is located.</p>

                            <p>With iPhones for example you can use the Find My iPhone feature if it has been enabled. With this tool you can lock the device and provide a phone number on the screen.</p>

                            <p>When we receive an item that has been locked and has contact information we use that information to contact the owner and initiate a return. For your protection we will require information to verify that you are in fact the rightful owner of the device. Once that has been confirmed, we will return your lost property free of charge!</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel43'} onChange={handleChange('panel43')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How do I remove my SIM card?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div>
                            Locate the tray in the right edge of the casing. Gently insert a SIM card removal tool or a straightened paperclip into the pin-sized hole in the SIM card tray. Once you release the catch in bottom of the hole, the SIM tray will eject from the phone body. Remove your card from the tray and reinsert the tray so it is secure and flush with the casing.
                            </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        Does Cash my device  buy engraved items?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div>
                            If your item has an engraved message, it may affect the trade in value. Once we receive your item our inspectors will remove engravings of personal and/or offensive nature prior to reselling the device.
                            </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel45'} onChange={handleChange('panel45')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Do I need to remove the SIM card from my phone or iPad?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>We recommend that you remove the SIM card from your phone before sending it to us. Your SIM card stores information that uniquely identifies your phone on a cellular network. By removing your SIM card, you protect your private service-subscriber key and free your phone to be resold on the second-hand market. On most devices, the SIM card is located under the battery and can easily be ejected.</p>

                            <p>iPhone and iPad SIM cards can be a little tricky. If you have an iPhone 2G, 3G, or 3Gs, locate the SIM card tray in the top edge of the casing, between the headphone jack and power button. If you have an iPhone 4, 4S, 5, 5S and the 5C locate the tray in the right edge of the casing. Gently insert Apple's SIM card removal tool or a straightened paperclip into the pin-sized hole in the SIM card tray. Once you release the catch in bottom of the hole, the SIM tray will eject from the phone body. Remove your card from the tray and reinsert the tray so it is secure and flush with the casing.</p>

                            <p>If you have an iPad 1 (with AT&amp;T 3G), iPad 2 (with AT&amp;T 3G), or the New iPad for either AT&amp;T or Verizon (4G LTE), you should remove the SIM card from the side of the iPad by inserting Apple's SIM card removal tool or a straightened paperclip into the pin-sized hole in the SIM card tray.</p>

                            <p>When we receive devices with SIM cards intact, we are required to destroy them in an effort to protect your privacy.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel46'} onChange={handleChange('panel46')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Does Cash my device  accept devices that are locked to a non-listed carrier?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            Yes, when searching for your item simply select "Other Carrier" from the list. If there is not an option for "Other Carrier" on your specific model then unfortunately we only accept the carriers listed for that item.
                            </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel47'} onChange={handleChange('panel47')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        All items we purchase are shown on the website.

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>All items we purchase are listed on our site. If the device you are looking to sell is not listed then unfortunately we cannot make an offer at this time. It is very important that you select the exact model you will be sending, if we receive a device that is different than the model you obtained an offer for we cannot guarantee that the item will be returned to you.</p>

                            <p>When new gadgets are released we try to add them as quickly as possible but it can take some time. If a new device is released and you do not see it listed on our site, check back at a later date or ask our customer service team when it will be added.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel48'} onChange={handleChange('panel48')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I add more items to my order after I have checked out?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Unfortunately, our system will not allow the website to add an item to your order once we've created your shipping label.</p>

                            <p>We recommend that you create a new order for the additional items. You can ship both orders together in the same physical box, with the same shipping label, but please remember to include the packing slips for both transactions. We would also even recommend that you wrap each phone in the respective packing slip and secure the document to the phone for shipping. Whichever shipping label you use will be the order that shows up in our system when we scan the package at our dock.</p>

                            <p>If each item in the box does not have a packing slip, it could cause confusion once the box arrives that will delay you getting paid.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel49'} onChange={handleChange('panel49')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Do you offer extra money if my item has a warranty or extended warranty?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Unfortunately, to transfer ownership of a warranty, we would need to pass on the personal information of the item seller to the item buyer - we are not legally able to do this.</p>

                            <p>Warranties and Extended Warranties will not garner any additional trade-in value on items.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel50'} onChange={handleChange('panel50')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How can I change the mailing address for my payment?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Up until the item is inspected, you can change your mailing address in one of two ways:</p>

                            <p><strong>If you have an activated account</strong> , log into your account, and from there you will be able to update your address. This change will be immediately reflected in our records and be applicable for any open or future transactions.</p>

                            <p><strong>If you have not activated an account, and are unable to do so,</strong> please call us at 1-800-Cash my device  for the quickest service. Changing your payment mailing address can only be done up to a certain point in the transaction, so timing can be important. You can also reach us through our Ask a Question form, however this can take up to 24 hours to receive a response.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel51'} onChange={handleChange('panel51')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        How can I find out what items this payment covers?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Our website provides a Transaction Management tool for you as part of your account.</p>

                            <p>Simply login to your account on www.cashmydevices,then locate the "Track My Offers" link at the top right corner of the page. This will be the Transaction Management area of your account where you can see all pending transactions as well as all past transactions. The statuses on the page update in real time so you can track your item's progress every step of the way!</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How do I deactivate iMessage so I receive messages on my new phone?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>In some cases, moving from an Apple device to a different type of device can cause problems receiving SMS messages. This is due to the Apple iMessage setup.</p>

                            <p><strong>To deactivate on your phone:</strong> Tap Settings from the home screen. Tap Messages. Move the iMessage slider to OFF.</p>

                            <p><strong><em>-OR-</em></strong></p>

                            <p>If you no longer have access to the phone, contact Apple Support and they can assist you in deactiving the device.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel53'} onChange={handleChange('panel53')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        When does my offer expire?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <div class="page_body">
                                <main class="faq_show pt-3">
                                    <div class="faq_question">
                                        <h1>
                                            <p class="faq_medium">When does my offer expire?</p>
                                        </h1>
                                    </div>
                                </main></div>
                            <p>The value of electronics typically declines pretty quickly over time so we can only honor your offer for 30 days. If we receive your item after 30 days, we'll inspect it and let you know the current offer value. If you are not happy with the revised offer, you will have the opportunity to request that the item is returned to you.</p>

                            <p>If your offer has expired, but you would still like to sell your item to Cash my device , simply return to cashmydevices and go through the process again to see what your item is worth today.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel54'} onChange={handleChange('panel54')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How long do I have to change my mind on the payment method?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            Updates and changes to payment options must be made before we finish checking out your item. We'll send you an email when this happens. Please note, our whole process only takes a few days once your box arrives so you'll need to be quick.
                            </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel55'} onChange={handleChange('panel55')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How can I check what address I gave you for payment?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div>
                            It's easy. There's a link at the top of every page where you can look up details about your transaction.
                            </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel56'} onChange={handleChange('panel56')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        My PayPal payment was sent to the wrong email address, what do I do?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>If you know and have access to the email address, the easiest and fastest solution is to add that address to your PayPal account. You then should be able to access the payment instantly.</p>

                            <p>If that's not possible, please call us at 1-800-Cash my device  or contact us using our Ask a Question form. We will send a request to PayPal to refund the money and reissue to the correct address.</p>

                            <p>Please note: It may take up to 30 days for PayPal to refund and reissue payment.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel57'} onChange={handleChange('panel57')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Will Cash my device  extend my offer date?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            Cash my device  provides an industry leading 30 day offer lock meaning you have 30 days from when you lock in your offer, to when you have to ship the item(s) to us.We are unable to extend any offer past the 30 day deadline.
                            </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel58'} onChange={handleChange('panel58')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How to prepare device to ship to Cash my device

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>To ensure the fastest possible processing and payment for your device, please review the checklist below before sending your device to Cash my device .</p>

                            <p>You must:
                            Deactivate Service
                            If your device has cellular service, remove SIM card or deactivate through your carrier and pay the balance of your bill.
                            Turn Off Device Tracking (i.e. Find My iPhone, Samsung Reactivation Lock) and remove password
                This can restrict the device to your account and prevent us from inspecting it. For Apple device, turn it off in the iCloud settings menu. For Samsung phones, check the Security settings.</p>

                            <p>We recommend:
                            Save Your Data
                            Backup your photos and files. If your device has an SD card, remove it. We will remove all personal data from the device.
                            Send Just Your Device
                            Please do not send any extra items that you did not submit online. We cannot pay you for additional items or accessories.
                            Charge Your Device
                            Devices received with at least a partial charge can be processed faster.
                            If you're switching from an Apple device to something else, deactivate iMessage to ensure you continue to receive message on your new phone.
                                            Tap Settings, then Messages, and move the iMessage slider to OFF.</p>

                            <p>Please note that we do not accept devices that have been reported lost or stolen.</p>

                            <p>Offers are only valid through the expiration date listed in your email. Devices shipped after this date may receive a revised offer.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel59'} onChange={handleChange('panel59')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Once I have shipped my item, how long does it take to receive payment?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Once your item arrives at our warehouse, it typically takes about a week for payment to be issued. Amazon &amp; Paypal are the quickest ways to get paid. Checks are delivered to you by USPS, so please allow an additional 7 - 10 days for receipt.</p>

                            <p>There are a number of factors which will impact the overall timeframe for payment. 1. Shipping time to our facility (3-5 business days. We are centrally located in Louisville, KY. You can track your package by logging into the "Track My Offers" page on www.cashmydevices) 2. Once we receive your item our goal is to inspect your item and get you paid within 3-5 business days.</p>

                            <ol>
                                <li>Once your payment is issued - Paypal or Amazon is Instant!, Checks can take from 7 - 10 days to be received.</li>
                            </ol>

                            <p>The best way to prevent delays is to make sure your package is scanned at the post office or FedEx facility for proper shipping, then watch your email inbox carefully. We recommend checking your email daily to avoid any miscommunication.</p>

                            <p>You should also check with us if you need any help determining the condition of your item, or if you are unsure of the account status on your phone. <strong>PLEASE NOTE</strong> : If there is an active account on your phone it can cause significant delays as well as a possible adjustment of the amount offered.In addition to our email updates, you can also get an update on your transactions by selecting the "Track My Offers" or "Login" option at the top of the www.cashmydevices homepage.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel60'} onChange={handleChange('panel60')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Guide to Determining the Condition of Your Item

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">

                            <p>It is important to accurately rate the physical and functional condition of your item. These ratings are crucial to helping Cash my device  meet your expectations.</p>

                            <p>iPhone Conditions</p>

                            <p>Flawless (if all of the following is true):</p>

                            <p>Works perfectly
                            No noticeable flaws, still in its package or looks like new
                            Has zero scratches
            Has no dust under the glass</p>

                            <p>Good (if the following is true):
                            Your iPhone is in great working order with some minor cosmetic signs of wear
                Your iPhone has no cracks or missing buttons (power, home, ringer, and/or volume)</p>

                            <p>Broken (if any of the following is true:
                            Does not power on
                            Broken or cracked LCD screen or glass
                            Missing buttons (power, home, ringer, volume)
                            Broken or cracked hardware (charging ports, casing, etc.)
                                Housing separation beyond the width of a nickel</p>

                            <p>Cell Phone Conditions (non-iPhone)</p>

                            <p>Flawless (if all of the following is true):
                            Works perfectly
                            No noticeable flaws, still in its package or looks like new
                                        Has zero scratches</p>

                            <p>Good (if the following is true):
                                        Your phone is in great working order with some minor cosmetic signs of wear</p>

                            <p>Broken (if any of the following is true:
                            Does not power on
                            Broken or cracked LCD screen
                            Broken, cracked, or missing parts (buttons, charging port, battery cover, etc.)
                            Cannot be activated for service
                                                            Critical features cannot be used (touch screen, camera, etc.)</p>

                            <p>Computer Conditions (Laptop &amp; Desktop):</p>

                            <p>Flawless (if all of the following is true):
                            Works perfectly
                            No noticeable flaws, or looks like new
                            No scratches or wear
                                                                        No scratches or scuffs on the display surface</p>

                            <p>Good (normal signs of use such as the following):
                            Your laptop is 100% functional
                            Has normal wear on the keyboard and/or trackpad
                            Has light scratches and/or very minor dents or nicks
                May have very light scratches or scuffs on the display surface, which do not affect viewing</p>

                            <p>Fair (if any of the following is true):
                            Your laptop is 100% functional
                            Has normal wear on the keyboard and/or trackpad
                            Your laptop has a non-functional component, but still powers on (i.e., the keyboard or trackpad are defective, but the laptop functions otherwise)
                            Moderate to heavy wear on the keyboard and/or trackpad
                            Moderate to heavy scratches, dents or scuffs
                            Minor display issues, such as dead pixels or screen burn
                                        Non-functional port; minor damage to the display hinge</p>

                            <p>Broken (if any of the following is true):
                            Laptop does not power on properly
                            Has multiple functional defects (defective keyboard and a defective trackpad, or multiple non-functional ports, etc.)
                            Display is heavily damaged or non-functional
                            Power port is broken or non-functional
                            Has major physical defects, such as missing keyboard keys or major damage to the display hinge
                                                            System fan does not function</p>

                            <p>Apple Desktops</p>

                            <p>Flawless (if all of the following is true):
                            Works perfectly
                            No noticeable flaws, or looks like new
                            No scratches or wear
                                                                        No scratches or scuffs on the display surface (iMac)</p>

                            <p>Good (normal signs of use such as the following):
                            Your device is 100% functional
                            Has light scratches and/or very minor dents or nicks
                                                                                May have very light scratches or scuffs on the display surface, which do not affect viewing (iMac)</p>

                            <p>Fair (if any of the following is true):
                            Your device has a non-functional component, but still powers on (i.e., the hard drive or optical drive are defective, but the desktop functions otherwise)
                            Bent housing
                            Moderate to heavy scratches, dents or scuffs
                            Minor display issues, such as dead pixels or screen burn (iMac)
                            Non-functional port
                                                                                                    Minor damage to the display stand (iMac)</p>

                            <p>Broken (if any of the following is true):
                            Desktop does not power on properly
                            Has multiple functional defects (such as a defective hard drive and a defective optical drive, or multiple non-functional ports.)
                            Display is heavily damaged or non-functional (iMac)
                            Power port is broken or non-functional
                            Has major physical defects, such as missing housing panels
                                                                                                                        System fan does not function</p>

                            <p>If you have any condition questions which are not answered in this FAQ, please call us at 1-800-Cash my device  or use our Ask a Question form.</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel61'} onChange={handleChange('panel61')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Frequently Asked Questions - Cash my device  Rewards Program

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ol>
                            <li>
                                <p>Does the Cash my device  Rewards Program work for both Trading In and Buying from Cash my device ?
                                Unfortunately, the Cash my device  Rewards Program only applies to the Trade In portion of our business at this time.  At a future date, we plan to expand the program so that you can earn and apply reward points for both Trading In and Buying certified used devices from Cash my device .
      </p>
                            </li>
                            <li>
                                <p>How do I sign up for a Cash my device  Rewards account and begin earning points?
                                To start earning points as part of our loyalty program, you need to first create a Cash my device  Trade In account to sign up for Cash my device  Rewards.  For specific details on how to sign up, see our Cash my device  Rewards page (https://www.cashmydevices/rewards). Cash my device  Rewards accounts are separate from Cash my device  Trade In accounts. To earn points on your trade-in, you will need both a Trade In account and a Rewards account.  At this time, we only offer rewards on our Trade In website.  To ensure you are able to earn and utilize your Rewards points, it will be necessary to use the same email address for your Cash my device  Trade In and Rewards program accounts.  If you are creating a Cash my device  Rewards account for the first time you will be granted an enrollment bonus.
      </p>
                            </li>
                            <li>
                                <p>What if I already use different email addresses for Cash my device  Trade In, Store and Rewards program?
                                If you have existing accounts with Cash my device  Trade In, Store, and Rewards that use different email addresses, you can contact our customer service team to help you align these accounts to a single email address.
      </p>
                            </li>
                            <li>
                                <p>How can I earn points for trading in a device or making purchases through the Cash my device  Store?
                                If you agree to and finalize a trade-in with Cash my device , you will receive points as long as you have a Cash my device  Trade In account and Cash my device  Rewards account.
      </p>
                            </li>
                            <li>
                                <p>How are points calculated?
                                You will receive 1 point for every $1 you receive trading in a used device with Cash my device .  Points are accrued for money received on a trade-in.  Any taxes, shipping costs, discounts and promotional gifts do not earn points.
      </p>
                            </li>
                            <li>
                                <p>What are other ways I can earn Cash my device  Rewards points?
                                Listed below are the many ways in which you can earn points. They can also be viewed within the “My Rewards” dashboard. Trade-in (no limit), 1st Trade-in bonus (one time), Sign up for Cash my device  Rewards program (one time), Connect on Facebook (one time), Connect on Twitter (one time), Connect on Instagram (one time), Connect on YouTube (one time), Daily visit and sign into Cash my device .com Trade In account (once daily).
      </p>
                            </li>
                            <li>
                                <p>How can I redeem my rewards points?
                                Once you earn a sufficient number of reward points, you can redeem your points to increase the total amount you will receive for a future device trade-in to Cash my device .   In order to claim a reward amount and add it to a trade-in, log into your account and select the Manage Rewards tab.  If you have a sufficient number points to claim a reward, the reward amount and number of points will show.  Just select the promotion you wish to claim that is available to you then step through your quote and trade-in process.  You will see the redemption amount in your packing slip and invoice at checkout.   After Cash my device  receives your trade-in device and completes the inspection process, your rewards promo will be added to your payout.  You will also receive new rewards points based on the value of the device you sent in.
      </p>
                            </li>
                            <li>
                                <p>Is a Trade in required to redeem and use my reward points?
                                Yes, you can only redeem your reward points for an addition payout during a trade-in.
      </p>
                            </li>
                            <li>
                                <p>Do points expire?
                                All points which you have accrued are available for your use for three years.  Individual points will expire 36 months after the date you have earned them.
      </p>
                            </li>
                            <li>
                                <p>What is the minimum number of points needed to redeem rewards?
                                The minimum number of points currently needed to redeem a reward is 250. Our reward tiers are subject to change however so check your rewards dashboard frequently.
      </p>
                            </li>
                            <li>
                                <p>How soon after earning rewards points can I redeem and use them for a trade in or purchase on Cash my device ?
                                For points earned trading in a device, they will be placed into a “pending” status until the devices have been accepted and your payment has been issued. You will not be able to use the points until they have been released from “pending”.
                                Should the trade-in device be returned to you, the “pending” points will be removed from your account.  Reward points you earn from other activities such as visiting the Cash my device  website and logging into your rewards account, or connecting through a social network, are immediately available for you to redeem.
      </p>
                            </li>
                            <li>
                                <p>How can I view the points I earned from a recent trade-in?
                                You will be able to see your reward point balance by logging into your reward account. Recent points will be marked as “pending.”
      </p>
                            </li>
                            <li>
                                <p>How do I track my loyalty points?
                                You can track your loyalty points at any time by logging into your account through the Cash my device  Reward program page [https://www.cashmydevices/rewards] or the login links at the top of each Cash my device  page and navigating to “My Rewards” tab within your Trade In account dashboard.  This will also allow you to redeem points, see account activity and check point earning rules.
      </p>
                            </li>
                            <li>
                                <p>What happens to points I received or redeemed if I decide to decline an adjusted offer from Cash my device ?  Will the points be deducted from my account?
                                Yes. Once you place a device trade in order, your points earned will be shown in your rewards account with an “pending” status. Until these points are released from hold, you will not be able to redeem or use these individual points.  For Trade In orders to Cash my device  reward points are released from their “pending” state after your device has been inspected and paid for or will be dropped after 60 days from the time you place your order if your trade in device has not been received and inspected by Cash my device . For any points you redeemed to receive a bonus on your trade in, prior to your canceled device trade in will be returned to your Rewards Account.
      </p>
                            </li>
                        </ol>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel62'} onChange={handleChange('panel62')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I send more than one item in the same box?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>Yes, but please make sure you identify which device belongs to which offer by securing the "PS" number to the device.</p>

                            <p>If you have 2 or more transactions on different orders and would like to ship them using one box, we recommend securing each packing slip to it's respective device. Additionally, sometimes electronics moving through the mail in the same box can cause damage to each other, so please be sure to pack them carefully.</p>

                            <p>Please Note: Missing or mixed up packing slips will cause delays at receiving, and could affect the amount paid due to the mix up, or the time it takes to receive your payment.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel63'} onChange={handleChange('panel63')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Is there any cost or obligation to use Cash my device ?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>There is no cost to having a Cash my device  account or setting up a transaction with us. We'll even take care of the shipping label!</p>

                            <p>You are under no obligation to send the item to us, and if you decide not to, there are never any penalties! Should you decide not to send in your phone, your transaction will automatically cancel within 30 days from the day it was created. There is no need for you do to anything.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel64'} onChange={handleChange('panel64')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Can I still send you things to recycle?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>It's important that we all do our part in preventing unwanted electronics from becoming e-waste. Cash my device 's main focus is on the "REUSE" part of the recycling equation.</p>

                            <p>Recently, we have changed our focus to concentrate on helping people with items that still hold some value and can be reused. If it turns out that an item you send us actually does not have value, we will make sure it is recycled. If we receive an item which is not in our catalog, our standard policy dictates that a customer would like the item recycled. Please be sure you are choosing the correct model before you ship us your device.</p>

                            <p>If you have an item that is not listed on our site, we recommend finding a local option to help you recycle your electronics simply and safely. There are a number of places online where you can find information about local recycling options. A few examples are 1-800-Recycling.com, Greener Gadgets, and e-stewards.</p>

                            <p><em>We hope that these resources help. Cash my device  is not affiliated with nor do we endorse any of the services above. Please use your own judgement to ensure your confidence when choosing a recycling option.</em></p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel65'} onChange={handleChange('panel65')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        I was given one mailing label but I have two boxes, how can I receive an additional label?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>If using 2 boxes is the best way to safely ship the 2 or more items you are sending us, we fully support that notion! If you only have 1 label, it is likely due to all of your items currently being listed on 1 order (1 box). In order to receive multiple shipping labels, you will need to create a new transaction for one of the items. This will generate a second shipping label.</p>

                            <p>Once you have shipped both packages out, you can cancel the old transaction which is present on the first order you created (since you have now shipped it under a separate order). The "Cancel" option will be available in your "Track My Offers" page on <a href="">www.cashmydevices</a>.</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel66'} onChange={handleChange('panel66')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        Can I use the shipping label you sent on a different box?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>You can use the label we send you on any box.</p>

                            <p>If you lost your label we have two great options for you:</p>

                            <p>1) Print the shipping label by looking up your order under Track My Offers on the cashmydevices site. Once printed, put it on any sturdy box that you may have and take the package to your local Post Office for shipment.</p>

                            <p>2) Print the shipping label and go to your local Post Office and get a priority mail box that will fit your items.</p>

                            <p>Be sure to pack it carefully to avoid damage, and please remember to include your packing slip!</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel67'} onChange={handleChange('panel67')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Do I have to go to the Post Office to ship my item?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">
                            <p>Cash my device  offers the shipping options of USPS or FedEx only. Based on the size and weight of your item, you will have either a <strong>USPS label</strong> or a <strong>FedEx label</strong>.</p>

                            <p>If we have sent you a prepaid USPS label, you can bring your package to any Postal facility or arrange a pick up with any friendly Letter Carrier.</p>

                            <p>If you have a FedEx label, you can bring your box to any FedEx Office or Worldwide Service Center location. You can bring the label with you and have it packed using FedEx's packing services. (Optional)</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel68'} onChange={handleChange('panel68')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>

                        How Can I Cancel My Transaction?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">
                            <p>You can view and manage your trades with Cash my device  by logging into your account or using the "Track My Offers" feature in the top right section of the homepage.</p>

                            <p>To cancel the entire packing slip:</p>

                            <ol>
                                <li><p>Log into your Cash my device  account.</p></li>
                                <li><p>Next to the box status update, select 'cancel the box'.</p></li>
                            </ol>

                            <p>To cancel an individual item:</p>

                            <ol>
                                <li><p>Log into your Cash my device  account.</p></li>
                                <li><p>Under the individual item, select 'cancel this item'.</p></li>
                            </ol>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel69'} onChange={handleChange('panel69')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        How do I deauthorize my Apple computer? (music, apps, software, etc.)

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>A common challenge we face when checking out our customer laptops is Apple's "Authorization" protocols. In nearly all cases, these security safeguards can only be removed by the registered or original owner of a computer. These protocols are in place for your protection in examples such as the application "Find My Mac", but can pose a problem during inspection or for a new owner.</p>

                            <p>Additionally, we strongly recommend backing up any product keys and following the deauthorization procedures for other software vendors. This can include vendors such as <em>Adobe, Microsoft, Avid</em>, or any other software associated with limited license use. Please contact the appropriate vendor if you are not certain on how to transfer your licenses.</p>

                            <p>We recommend beginning the deauthorization process within your iTunes. You will be able to navigate to the iTunes menu option "Store", and find the "Deauthorize This Computer" command. Once you have confirmed the prompts, and entered your Apple ID and password, Apple will proceed with the deauthorization and the rights to any music, apps, or other downloaded content will be released back to your account for use on another device.</p>

                            <p>Next, if you have registered your device in the "Find My Mac" application, open System Preferences, then open iCloud, from there you should find the "Find My Mac" checkbox. Please make sure the "Find My Mac" checkbox is <strong><em>UNCHECKED</em></strong>.</p>

                            <p>If you would prefer to leave the location tracking service provided by "Find My Mac" intact during shipping, we encourage you to do so. However, once the package is delivered to our facility our process will require that the device is removed from the application. This can be done simply by logging into iCloud (www.icloud.com), opening the application, and clicking the "Devices" button in the top left corner. From the drop-down menu, find your device and click the "X" to the right of the device title. Once the device is cleared, we can proceed with the full inspection, and ownership can be fully transferred to a new owner.</p>

                            <p>With the laptop completely deauthorized, the speed of processing will be optimized, and we can issue payment with an absolute minimum of time at our facility.</p>

                            <p>If you have any questions regarding this process, please call us at 1-800-Cash my device  or use our Ask a Question form. We're happy to help!</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel70'} onChange={handleChange('panel70')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        I have upgraded my Apple laptop and I do not see any options to add these upgrades, will you pay me extra money for the upgrades at a later time?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="page_body">

                            <p>Any upgrades offered by Apple are included in the offer quote on our website. If the upgrades are not offered by Apple at the point of sale, we do not offer extra money for them.</p>

                            <p>If you believe the offer for the laptops is not sufficient considering your upgrades, we recommend you remove or replace the upgraded components and sell them privately. The reason for this is when selling laptops in the used marketplace, we have found the prices are not significantly affected by these component upgrades. The most important aspect of the evaluation is the accuracy of the model and native hardware.</p>

                            <p>If you are unsure of your Apple laptop model, we kindly request that you contact us directly. If you can provide the serial number of the laptop, we would be happy to make sure you are receiving an accurate quote to determine which upgrade options are included in our offer.</p>

                            <p>Along with the serial number, please submit the following: <strong>-</strong>  <strong>Screen Size</strong>
                                <strong>-</strong>  <strong>Processor Type and Speed</strong>
                                <strong>-</strong>  <strong>Hard Drive Type and Size</strong>
                                <strong>-</strong> <strong>Memory (RAM) Size</strong></p>

                            <p>To locate these specifications, simply click the Apple logo at the top left corner of your screen, then click "About this Mac". You will find the serial number on this screen. Next, click "More Info".</p>

                            <p>We look forward to receiving your Apple Laptop!</p>

                        </div>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel71'} onChange={handleChange('panel71')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        I have upgraded my Apple laptop and I do not see any options to add these upgrades, will you pay me extra money for the upgrades at a later time?

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <div class="page_body">

                            <p>Any upgrades offered by Apple are included in the offer quote on our website. If the upgrades are not offered by Apple at the point of sale, we do not offer extra money for them.</p>

                            <p>If you believe the offer for the laptops is not sufficient considering your upgrades, we recommend you remove or replace the upgraded components and sell them privately. The reason for this is when selling laptops in the used marketplace, we have found the prices are not significantly affected by these component upgrades. The most important aspect of the evaluation is the accuracy of the model and native hardware.</p>

                            <p>If you are unsure of your Apple laptop model, we kindly request that you contact us directly. If you can provide the serial number of the laptop, we would be happy to make sure you are receiving an accurate quote to determine which upgrade options are included in our offer.</p>

                            <p>Along with the serial number, please submit the following: <strong>-</strong>  <strong>Screen Size</strong>
                                <strong>-</strong>  <strong>Processor Type and Speed</strong>
                                <strong>-</strong>  <strong>Hard Drive Type and Size</strong>
                                <strong>-</strong> <strong>Memory (RAM) Size</strong></p>

                            <p>To locate these specifications, simply click the Apple logo at the top left corner of your screen, then click "About this Mac". You will find the serial number on this screen. Next, click "More Info".</p>

                            <p>We look forward to receiving your Apple Laptop!</p>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Faq;
