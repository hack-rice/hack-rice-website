import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Judging Criteria</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Essential Info</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>FAQ</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
