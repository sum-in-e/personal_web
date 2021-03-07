const size = {
	// Small devices (landscape phones, 576px and up)
	s: '576px',

	// Medium devices (tablets, 768px and up)
	m: '768px',

	// Large devices (desktops, 992px and up)
	l: '992px',

	// X-Large devices (large desktops, 1200px and up)
	xl: '1200px',

	// XX-Large devices (larger desktops, 1400px and up)
	xxl: '1400px',
};

const theme = {
	main: '#fca311',
	text: '#616161',
	indigo: '#14213d',
	black: '#272625',
	white: '#ffffff',
	line: '#adb5bd',
	s: `(min-width:${size.s})`,
	m: `(min-width:${size.m})`,
	l: `(min-width:${size.l})`,
	xl: `(min-width:${size.xl})`,
	xxl: `(min-width:${size.xxl})`,
};

export default theme;
