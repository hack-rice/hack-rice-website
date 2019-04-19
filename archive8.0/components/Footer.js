import PropTypes from 'prop-types';

const Footer = props => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}} />
);

Footer.propTypes = {
	timeout: PropTypes.bool
};

export default Footer;
