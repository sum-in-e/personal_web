const dataRepo = [
	{
		name: 'Todos',
		params: 'todos',
		description: 'Firebase를 기반으로 React와 TypeScript를 결합해 만든 To Do 기록 웹 어플리케이션',
		skill: ['TypeScript', 'React', 'Hooks', 'ES6', 'Styled-components', 'Firebase', 'Git'],
		points: [
			'Firebase를 통한 유저 인증 및 데이터 CRUD 구현',
			'Async/Await을 통한 비동기 처리',
			'Context API, useReducer를 이용한 전역 상태 관리',
			'토글스위치를 이용한 편집 상태 활성화 및 모달 레이어로 시각적 집중도 향상 (Profile, Task Edit)',
			'모바일과 데스크탑에 대응할 수 있는 반응형 웹 구현',
		],
		problems: [
			{
				issueTitle: 'reRender 함수의 props-drilling',
				issue: `reRender 함수는 사용자가 프로필을 편집하면 편집된 프로필 데이터를 받아온 후 userInfo의 상태를 업데이트하는 함수입니다. \n해당 함수는 App 컴포넌트에서 생성되어 Router -> Home -> Header를 통해 MyProfile 컴포넌트에서 호출되는데, Router, Home, Header 컴포넌트의 경우 reRender 함수를 호출하지 않아 props의 전달만을 수행하는 상태였습니다.`,
				solutionTitle: 'contextApi와 useReducer를 이용해 전역에서 상태를 관리 할 수 있도록 하였습니다.',
				solution:
					'userInfo의 상태를 업데이트 하는 dispatch 함수를 contextApi에 전달해 props-drilling 하지 않고도 MyProfile 컴포넌트에서 userInfo를 업데이트 할 수 있도록 개선하였습니다.',
			},
			{
				issueTitle: '유저 정보를 가지는 userInfo와 할 일 목록인 taskList의 상태 관리 필요성을 느꼈습니다.',
				issue:
					'userInfo와 taskList의 상태는 해당 프로젝트에서 중요한 역할을 합니다. \n사용자가 task를 CRUD 할 때마다 userInfo로 유저를 찾아 taskList를 업데이트하는 구조를 갖기 때문입니다. \nuserInfo와 taskList의 상태가 변경될 때마다 상위 컴포넌트에서 최하위 컴포넌트까지 props를 통해 전달하는데, 컴포넌트가 깊어질수록 복잡해지는 구조를 보며 전역적으로 상태를 관리해야 할 필요성을 느끼게 되었습니다.',
				solutionTitle: 'contextApi와 useReducer를 이용해 전역에서 상태를 관리 할 수 있도록 하였습니다.',
				solution:
					'useReducer로 userInfo와 taskList의 상태 관리를 하고, contextApi에 각각의 값과 상태를 업데이트하는 dispatch 함수를 전달하여 어느 컴포넌트에서든 이에 접근하여 값을 받고, 업데이트 할 수 있도록 개선하였습니다.',
			},
		],
		portfolio_keyword: ['TypeScript', 'React', 'Hooks', 'ES6', 'Styled-components', 'Firebase'],
		url: 'https://todos-11f5b.web.app/',
		githubLink: 'https://github.com/sumpson0-0/todos',
		deploy: 'https://img.icons8.com/color/144/000000/firebase.png',
		isResponsive: true,
	},
	{
		name: 'Bookstore',
		params: 'bookstore',
		description: 'React와 인터파크 도서 API를 이용하여 제작한 온라인 서점 웹 사이트',
		skill: ['React', 'ES6', 'Styled-Components', 'Vercel', 'Git'],
		points: [
			'Axios와 Vercel의 Serverless Function을 이용한 서버단에서의 외부API 요청',
			'Promise, Async/Await을 통한 비동기 처리',
			'모바일과 데스크탑에 대응할 수 있는 반응형 웹 구현',
		],
		problems: [
			{
				issueTitle: 'CORS 에러 발생',
				issue:
					'API 요청 시 CORS 정책 위반으로 인해 브라우저가 리소스를 차단하는 문제가 발생했습니다.\n로컬 환경에서는 proxy 설정으로 데이터를 받아올 수 있었으나, 배포 후 다시 CORS 에러가 발생하였습니다. ',
				solutionTitle: 'Serverless Functions를 이용한 외부 API 요청',
				solution: 'Serverless Functions를 이용해 서버단에서 외부 API로 요청을 보내도록 개선하였습니다.',
				solutionLink: 'https://sumpson0-0.github.io/error-cors_2/',
			},
		],
		portfolio_keyword: ['React', 'ES6', 'Axios', 'Styled-components', '인터파크 도서 API'],
		url: 'https://bookstore-iota.vercel.app/',
		githubLink: 'https://github.com/sumpson0-0/bookstore',
		deploy: 'https://d1bd5u3q1t3nu7.cloudfront.net/icons/1482/logo-vercel-icon.webp',
		isResponsive: true,
	},
	{
		name: 'Covid-19 Tracking',
		params: 'covid19-tracking',
		description:
			'React와 COVID-19 Tracking API를 이용하여 한국 및 주요 국가들의 현황과 전 세계 통계를 볼 수 있는 웹 사이트',
		skill: ['React', 'Hooks', 'ES6', 'Styled-components', 'AWS S3', 'Git'],
		points: [
			'Axios를 이용한 API 요청',
			'Async/Await을 통한 비동기 처리',
			'모바일과 데스크탑에 대응할 수 있는 반응형 웹 구현',
		],
		problems: [],
		portfolio_keyword: ['React', 'Hooks', 'ES6', 'Axios', 'Styled-components', 'COVID-19 Tracking API'],
		url: 'http://covid19-korea.s3-website.ap-northeast-2.amazonaws.com/',
		githubLink: 'https://github.com/sumpson0-0/covid19',
		deploy: 'https://img.icons8.com/color/144/000000/amazon-web-services.png',
		isResponsive: true,
	},
	{
		name: 'Vanilla Search Movie',
		params: 'vanilla-search-movie',
		description: 'Vanilla JS로 TMDB API의 데이터를 받아와 구현한 영화 검색 웹 사이트',
		skill: ['JavaScript', 'ES6', 'HTML/CSS', 'AWS S3', 'Git'],
		points: [
			'localStorage를 활용하여 최근 검색어를 최대 5개 까지 저장',
			'인피니티 스크롤 기능으로 검색 결과 추가 로드',
			'Fetch를 이용한 데이터 요청',
			'모바일과 데스크탑에 대응할 수 있는 반응형 웹 구현',
		],
		problems: [],
		portfolio_keyword: ['Vanilla JS', 'ES6', 'Fetch', 'TMDB API'],
		url: 'http://vanilla-search-movies.s3-website.ap-northeast-2.amazonaws.com/',
		githubLink: 'https://github.com/sumpson0-0/VanillaSearchMovie',
		deploy: 'https://img.icons8.com/color/144/000000/amazon-web-services.png',
		isResponsive: true,
	},
	{
		name: 'Wcie',
		params: 'wcie',
		description: 'HTML과 CSS 속성으로 국외 홈페이지 wcie의 디자인을 재현한 웹 사이트',
		skill: ['HTML/CSS', 'AWS S3', 'Git'],
		points: ['CSS의 Flexbox와 Grid를 이용한 레이아웃 구성', '모바일과 데스크탑에 대응할 수 있는 반응형 웹 구현'],
		problems: [],
		portfolio_keyword: ['Flexbox & Grid', '디자인 재현'],
		url: 'http://wcie.s3-website.ap-northeast-2.amazonaws.com/',
		githubLink: 'https://github.com/sumpson0-0/wcie',
		deploy: 'https://img.icons8.com/color/144/000000/amazon-web-services.png',
		isResponsive: true,
	},
];

export default dataRepo;
