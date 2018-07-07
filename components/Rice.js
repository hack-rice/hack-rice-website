import PropTypes from 'prop-types';

const Rice = props => (
	<div id="sallyport">
		<img id="building" src="../static/images/sallyport.svg" />
	</div>
);

Rice.propTypes = {
	timeout: PropTypes.bool
};

export default Rice;
