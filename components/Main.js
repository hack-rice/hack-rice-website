import PropTypes from 'prop-types';
import Link from 'next/link'

// Accordion
import React from 'react';
import ReactDOM from 'react-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import '../node_modules/react-accessible-accordion/dist/fancy-example.css';

// Icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import facebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import facebookMessenger from '@fortawesome/fontawesome-free-brands/faFacebookMessenger'
import email from '@fortawesome/fontawesome-free-regular/faEnvelope'
import calendar from '@fortawesome/fontawesome-free-regular/faCalendar'
import map from '@fortawesome/fontawesome-free-regular/faMap'
import handSpock from '@fortawesome/fontawesome-free-regular/faHandSpock'
import trophy from '@fortawesome/fontawesome-free-solid/faTrophy'
import question from '@fortawesome/fontawesome-free-solid/faQuestion'
import donate from '@fortawesome/fontawesome-free-solid/faDonate'
import mobileAlt from '@fortawesome/fontawesome-free-solid/faMobileAlt'
import cogs from '@fortawesome/fontawesome-free-solid/faCogs'
import users from '@fortawesome/fontawesome-free-solid/faUsers'
import paintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush'
import { faGrinStars } from '@fortawesome/free-solid-svg-icons/faGrinStars'
import userPlus from '@fortawesome/fontawesome-free-solid/faUserPlus'

// Gallery
import Gallery from 'react-grid-gallery';


class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			/>
		);

		const IMAGES =
		[{
	      src: "../static/sponsors/twosigma.png",
	      thumbnail: "../static/images/sponsors/twosigma.png",
	      thumbnailHeight: 200,
		},
		{
	      src: "../static/sponsors/schlumberger.png",
	      thumbnail: "../static/images/sponsors/schlumberger.png",
	      thumbnailHeight: 200,
		},
		{
	      src: "../static/sponsors/indeed.png",
	      thumbnail: "../static/images/sponsors/indeed.png",
	      thumbnailHeight: 200,
		},
		{
	      src: "../static/sponsors/mlh.png",
	      thumbnail: "../static/images/sponsors/mlh.png",
	      thumbnailHeight: 200,
		},
		{
	      src: "../static/sponsors/ricecs.png",
	      thumbnail: "../static/images/sponsors/ricecs.png",
	      thumbnailHeight: 200,
		},
		{
	      src: "../static/sponsors/chevron.png",
	      thumbnail: "../static/images/sponsors/chevron.png",
	      thumbnailHeight: 200,
		},
		{
	      src: "../static/sponsors/microsoft.png",
	      thumbnail: "../static/images/sponsors/microsoft.png",
	      thumbnailHeight: 200,
		},
	];

		return (
			<div
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
				<article
					id="intro"
					className={`${this.props.article === 'intro' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="introTitle">LEARN. CREATE. DESIGN. CODE. WIN.</h2>
          <span className="introText">
						<span className="bullet"><FontAwesomeIcon icon={cogs} color="#CCD4FF" /> HackRice is Rice University&#39;s <strong>annual hackathon</strong>. We bring tinkerers together to collaborate on beautiful products.</span>
						<span className="bullet"><FontAwesomeIcon icon={paintBrush} color="#CCD4FF" /> It brings together <strong>four hundred </strong> of the brightest minds to <strong>develop & showcase</strong> their creative and entrepreneurial talents.</span>
						<span className="bullet"><FontAwesomeIcon icon={users} color="#CCD4FF" /> Attendees join a team (max of 5) to work on a project – typically some <strong>hardware or software</strong> – in an environment designed for creativity.</span>
						<span className="bullet"><FontAwesomeIcon icon={trophy} color="#CCD4FF" /> Teams showcase their projects after <strong>36 hours</strong> of hacking, with the opportunity to <strong>build their networks</strong>, win incredible <strong>prizes</strong> from
						 world-class sponsors, and learn <strong>modern tools and systems</strong>.
						</span>
					</span>
					{close}
				</article>

				<article
					id="judging"
					className={`${this.props.article === 'judging' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="introTitle">HOW ARE YOU EVALUATED?</h2>
					<span className="introText">
						<span className="bullet"><h3><FontAwesomeIcon icon={cogs} color="#CCD4FF" /> Technical Difficulty</h3> We are looking for <b>technically advanced solutions to technically challenging problems</b> that make use of <b>hardware and APIs</b>. That being said, if you can solve a technically challenging problem with a simple solution, we will be very impressed!</span>
						<span className="bullet"><h3><FontAwesomeIcon icon={paintBrush} color="#CCD4FF" /> Creativity</h3> We are looking for <b>original ideas</b> or <b>new angles on existing ideas</b>. For example, using an API in a unique way. We know APIs work - we want to see if you can do something new and awesome with them!</span>
						<span className="bullet"><h3><FontAwesomeIcon icon={faGrinStars} color="#CCD4FF" /> Design & Polish</h3> We are looking for <b>aesthetically pleasing</b> projects with <b>smooth and clear user experience.</b></span>
						<span className="bullet"><h3><FontAwesomeIcon icon={userPlus} color="#CCD4FF" /> Practicality & Usefulness</h3> We are looking for <b>socially good projects</b> that <b>people would use</b>. Additionally, we would like to emphasize that we will extensively check to make sure that your project is one that people can use in the real world and <b>doesn&#39;t only work on the cases you demo.</b></span>
					</span>
					{close}
				</article>

				<article
					id="faq"
					className={`${this.props.article === 'faq' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="introTitle">FAQ</h2>
					<Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>How long is HackRice?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>36 hours</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>How many hackers will there be?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Around 400</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>How many hackers per team are permitted?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Team are limited to 5 hackers. That being said, you don&#39;t have to have 5 hackers to win a prize!</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Is there a HackRice Facebook page?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Yes there is! Click <a href="https://www.facebook.com/hackrice/">here</a> to access it!</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>How do I submit my project? Is there a Devpost?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>You can submit your project on <a href="https://hackrice8.devpost.com/">this Devpost link</a></p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Who is eligible for HackRice?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the <a href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct.</a></p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Will my travel be reimbursed?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Yes! We&#39;ll be providing travel reimbursements for all visiting hackers. <br /><br />Hackers who ride in team cars or take buses or trains to HackRice will receive full reimbursement for their travel costs (up to $100). <br /><br /> Hackers who fly to Hackrice will recieve reimbursement on a first-come, first-served basis. Initially, reimbursement up to $200 will be provided. As funds are exhausted, reimbursement up to $100 will be provided. Tickets must be standard economy or lower. We cannot reimburse hackers flying internationally any more than is listed above, and international hackers should contact us at <a href="mailto:officialhackrice@gmail.com">officialhackrice@gmail.com</a>.<br /><br />To recieve your reimbursement, please fill out the reimbursement section of the admission form <b>within one week</b>. There will be a reimbursment booth at the event where you will be able to finalize your reimbursment details!</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Will there be prizes?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>We will have prizes for 1st, 2nd, 3rd place, several track prizes, and many other company sponsored prizes.</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Will there be free food?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going.</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>What are the acceptance criteria?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Rice students and alumni are guaranteed acceptance. For Non-Rice students, we ask for their previous hackathon and coding experiences, so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>What do I need to bring?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Please bring a student ID so we can verify and register you on-site! You&#39;ll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other.</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>What if I&#39;m not very experienced?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>We will try our best to point people in the right direction and use tools and languages that allow rapid development with the least amount of frustration. There will also be upperclassmen participating in the hackathon who can help you out. Furthermore, you can look up tutorials and sample code online. We will also be having workshops the week before the hackathon!</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Can Rice alumni attend?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel.></p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>What if I don&#39;t have a team before the event?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>You don&#39;t have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to.</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
          <Accordion className="demo-container" accordion="true" expanded="false">
						<AccordionItem>
							<AccordionItemTitle>
									<h3>Do I need to stay the whole time?</h3>
							</AccordionItemTitle>
							<AccordionItemBody>
									<p>Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might have other commitments during that time. Feel free to stay and leave as you choose. However, we would prefer that people stay to promote the environment.</p>
							</AccordionItemBody>
						</AccordionItem>
					</Accordion>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<div className="contact">
						<div className="method">
							<a href='https://facebook.com/hackrice'> <FontAwesomeIcon icon={facebookMessenger} color="#CCD4FF" /></a>
						</div>
						<div className="method">
							<a href='https://facebook.com/hackrice'> <FontAwesomeIcon icon={email} color="#CCD4FF" /></a>
						</div>
					</div>
					{close}
				</article>

				<article
					id="sponsors"
					className={`${this.props.article === 'sponsors' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					{close}
					<div style={{
					 display: "block",
					 height: "100%",
					 width: "100%",
					 overflow: "auto"}}
					>
						<Gallery images={IMAGES}
					 		enableLightbox={false}
					 		enableImageSelection={false}
						/>
						</div>
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Main;
