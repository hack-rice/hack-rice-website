import PropTypes from 'prop-types';

// Icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import calendar from '@fortawesome/fontawesome-free-regular/faCalendar'
import map from '@fortawesome/fontawesome-free-regular/faMap'
import handSpock from '@fortawesome/fontawesome-free-regular/faHandSpock'
import trophy from '@fortawesome/fontawesome-free-solid/faTrophy'
import question from '@fortawesome/fontawesome-free-solid/faQuestion'

const Header = props => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			<img
				src="../static/images/logo.png"
				transform="grow-18"
				className="logo"
			/>
		</div>
		<div className="content">
			<div className="inner">
				<img className="type" src="../static/images/type.png" />
				<span className="subtitle"><FontAwesomeIcon icon={calendar}/> September 14-16, 2018</span>
				<span className="subtitle"><FontAwesomeIcon icon={map} /> Rice Memorial Center</span>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('intro');
						}}>
						<FontAwesomeIcon icon={handSpock} /> Intro
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('criteria');
						}}>
						<FontAwesomeIcon icon={trophy} /> Criteria
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('faq');
						}}>
						<FontAwesomeIcon icon={question} /> FAQ
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('sponsors');
						}}>
						Sponsors
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('contact');
						}}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Header;
