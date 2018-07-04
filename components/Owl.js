import PropTypes from 'prop-types';

const Owl = props => (
	<div id="owl-cage">
		<img id="owl" src="../static/images/owl.svg" />
		<img id="branch" src="../static/images/branch.svg" />
	</div>
);

Owl.propTypes = {
	timeout: PropTypes.bool
};

export default Owl;
