import PropTypes from 'prop-types';

const MLH = (props) => (
    <div id="mlh" style={props.timeout ? {display: 'none'} : {}}>
        <a href="https://mlh.io/seasons/na-2019/events"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg"/></a>
    </div>
)

MLH.propTypes = {
    timeout: PropTypes.bool
}

export default MLH
