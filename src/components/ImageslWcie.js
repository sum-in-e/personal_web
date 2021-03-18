import React from 'react';
import styled from 'styled-components';

const Detail = () => (
	<Container>
		<Desktop>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/wcie%2Fdesktop-main.jpg?alt=media&token=5b395adf-de81-421f-b17d-57a703d3e227"
				alt="Desktop Preview"
			/>
		</Desktop>
		<Tablet>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/wcie%2Ftablet-main.jpg?alt=media&token=1efc46eb-23cf-49e1-bb39-1d04370933ce"
				alt="Tablet Preview"
			></img>
		</Tablet>
	</Container>
);

const Container = styled.div`
	& > * {
		width: 100%;
		border-radius: 5px;
		background-color: #d9d7d4;
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
	justify-content: center;
	padding: 3%;
	margin-bottom: 50px;
`;

/* ----------- Tablet ----------- */
const Tablet = styled.div`
	padding: 10%;
	@media ${props => props.theme.m} {
		padding: 5% 25%;
	}
`;

export default Detail;
