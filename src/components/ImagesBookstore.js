import React from 'react';
import styled from 'styled-components';

const Detail = () => (
	<Container>
		<Desktop>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fdesktop-home.png?alt=media&token=066c02b6-7624-4a52-b4a5-5ccb844ae438"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fdesktop-detail.png?alt=media&token=b5f7b050-6d1e-42d5-a725-0ad8a9c99262"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fdesktop-search.png?alt=media&token=c44882b3-abf0-4da5-a6df-458e7d6c970a"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fdesktop-no-search.png?alt=media&token=5b2e2e56-915a-47aa-8699-a906190e97cc"
				alt="Desktop Preview"
			/>
		</Desktop>
		<Tablet>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Ftablet-home.png?alt=media&token=cb81338d-4c78-46a7-bbec-7a5c2f979d03"
				alt="Tablet Preview"
			></img>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Ftablet-detail.png?alt=media&token=07d66f41-6e38-4c0e-824f-d77fb8792f3f"
				alt="Tablet Preview"
			></img>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Ftablet-search.png?alt=media&token=9ff7f3bd-3451-407b-896d-03d846de25fb"
				alt="Tablet Preview"
			></img>
		</Tablet>
		<Mobile>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fmobile-home.png?alt=media&token=8a19e366-cdf6-4463-b7f8-ee684734b93b"
				alt="Mobile Preview"
			></img>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fmobile-detail.png?alt=media&token=d46f6c0b-43fc-4f82-b885-6dba899a1919"
				alt="Mobile Preview"
			></img>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/bookstore%2Fmobile-search.png?alt=media&token=7c0c730e-0bb7-45c2-a3de-670c2d4d3a3c"
				alt="Mobile Preview"
			></img>
		</Mobile>
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > * {
		width: 100%;
		border-radius: 5px;
		background-color: #d9d7d4;
	}
	& > *:not(:last-child) {
		margin-bottom: 50px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 5px;
	}
	@media ${props => props.theme.l} {
		padding: 0 100px;
	}
	@media ${props => props.theme.xl} {
		padding: 0 250px;
	}
`;

/* ----------- Desktop ----------- */
const Desktop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 3%;
	& > *:not(:last-child) {
		margin-bottom: 5%;
	}
`;

/* ----------- Tablet ----------- */
const Tablet = styled.div`
	padding: 10%;
	& > *:not(:last-child) {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		padding: 5% 25%;
		& > *:not(:last-child) {
			margin-bottom: 5%;
		}
	}
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	padding: 15%;
	& > *:not(:last-child) {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		padding: 5% 35%;
		& > *:not(:last-child) {
			margin-bottom: 5%;
		}
	}
`;

export default Detail;
