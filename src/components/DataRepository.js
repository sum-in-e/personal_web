import portfolioWcie from '../assets/images/previewWcie.png';
import previewVanillaSearchMovie from '../assets/images/previewVanillaSearchMovie.png';
import previewBookstore from '../assets/images/previewBookstore.png';
import previewCovid19 from '../assets/images/previewCovid19.png';
import previewTodos from '../assets/images/previewTodos.png';

const dataRepo = [
	{
		name: 'Wcie',
		params: 'wcie',
		previewImg: portfolioWcie,
		summary: 'HTML, CSS를 이용해 만든 정적인 웹사이트',
		description: 'HTML5와 CSS3를 이용해 해외 웹 사이트 wcie의 디자인을 재현한 반응형 웹사이트입니다.',
		url: 'http://wcie.s3-website.ap-northeast-2.amazonaws.com/',
		stacks: ['Responsive Web', 'HTML5', 'CSS3'],
	},
	{
		name: 'Vanilla Search Movie',
		params: 'vanilla-search-movie',
		previewImg: previewVanillaSearchMovie,
		summary: 'Vanilla JS와 TMDB API를 이용해 만든 영화 검색 웹사이트',
		description: 'JavaScript와 TMDB API를 이용하여 영화를 검색 할 수 있도록 만든 반응형 웹사이트입니다.',
		url: 'http://vanilla-search-movies.s3-website.ap-northeast-2.amazonaws.com/',
		stacks: ['Responsive Web', 'HTML5', 'CSS3', 'JavaScript'],
	},
	{
		name: 'Bookstore',
		params: 'bookstore',
		previewImg: previewBookstore,
		summary: 'React와 인터파크 도서 API를 이용해 만든 온라인 서점',
		description: 'React와 인터파크 도서 Open API를 이용하여 제작한 온라인 서점 웹사이트입니다.',
		url: 'http://bookstore-sumpson.s3-website.ap-northeast-2.amazonaws.com/',
		stacks: ['Responsive Web', 'HTML5', 'Styled-Components', 'React'],
	},
	{
		name: 'Covid-19 Tracking',
		params: 'covid19-tracking',
		previewImg: previewCovid19,
		summary: 'React와 COVID-19 Tracking API를 이용해 만든 Covid-19 Tracking 웹사이트',
		description:
			'React와 COVID-19 Tracking API를 이용하여 한국 및 주요 국가들의 COVID-19 현황과 전세계 통계를 볼 수 있도록 제작한 반응형 웹사이트입니다.',
		url: 'http://covid19-korea.s3-website.ap-northeast-2.amazonaws.com/',
		stacks: ['Responsive Web', 'HTML5', 'Styled-Components', 'React'],
	},
	{
		name: 'Todos',
		params: 'todos',
		previewImg: previewTodos,
		summary: 'Firebase를 기반으로한 서버에 React + TypeScript를 결합해 만든 To Do 기록 웹사이트',
		description: 'Firebase를 기반으로한 서버에 React와 TypeScript를 결합해 만든 To Do 기록 웹사이트입니다.',
		url: 'https://todos-11f5b.web.app/',
		stacks: ['Responsive Web', 'HTML5', 'Styled-Components', 'React', 'TypeScript', 'Firebase'],
	},
];

export default dataRepo;
