import PropTypes from 'prop-types';


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src="../static/images/logo.png" transform="grow-18" className="logo"/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>hackrice8</h1>
                <p>September 14-16, 2018</p>
                <p>Rice Memorial Center</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Criteria</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Info</a></li>
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
