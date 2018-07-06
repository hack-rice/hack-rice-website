import Head from 'next/head';
import stylesheet from '../styles/main.scss';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import MLH from '../components/MLH';
import Owl from '../components/Owl';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isArticleVisible: false,
			timeout: false,
			articleTimeout: false,
			article: '',
			loading: 'is-loading'
		};
		this.handleOpenArticle = this.handleOpenArticle.bind(this);
		this.handleCloseArticle = this.handleCloseArticle.bind(this);
	}

	componentDidMount() {
		this.timeoutId = setTimeout(() => {
			this.setState({ loading: '' });
		}, 100);
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}

	handleOpenArticle(article) {
		this.setState({
			isArticleVisible: !this.state.isArticleVisible,
			article
		});

		setTimeout(() => {
			this.setState({
				timeout: !this.state.timeout
			});
		}, 100);

		setTimeout(() => {
			this.setState({
				articleTimeout: !this.state.articleTimeout
			});
		}, 100);
	}

	handleCloseArticle() {
		this.setState({
			articleTimeout: !this.state.articleTimeout
		});

		setTimeout(() => {
			this.setState({
				timeout: !this.state.timeout
			});
		}, 100);

		setTimeout(() => {
			this.setState({
				isArticleVisible: !this.state.isArticleVisible,
				article: ''
			});
		}, 100);
	}
	render() {
		return (
			<div
				className={`body ${this.state.loading} ${
					this.state.isArticleVisible ? 'is-article-visible' : ''
				}`}>
				<div>
					<Head>
						<title>HackRice 8</title>
						<link
							href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,500,600,700"
							rel="stylesheet"
						/>
					</Head>

					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />

					<div id="wrapper">
						<MLH timeout={this.state.timeout} />
						<Header
							onOpenArticle={this.handleOpenArticle}
							timeout={this.state.timeout}
						/>
						<Owl timeout={this.state.timeout} />
						<Main
							isArticleVisible={this.state.isArticleVisible}
							timeout={this.state.timeout}
							articleTimeout={this.state.articleTimeout}
							article={this.state.article}
							onCloseArticle={this.handleCloseArticle}
						/>
						<Footer timeout={this.state.timeout} />
					</div>

					<div id="bg" />
				</div>
			</div>
		);
	}
}

export default IndexPage;
