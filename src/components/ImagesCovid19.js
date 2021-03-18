import React from 'react';
import styled from 'styled-components';

const Detail = () => (
	<Container>
		<Desktop>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Fdesktop-home.png?alt=media&token=f37de825-699b-469c-8498-c493c96eb61a"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Fdesktop-about.png?alt=media&token=ae35a152-2f4b-48d2-8143-fb7a9c11932c"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Fdesktop-dashboard.png?alt=media&token=05c4ccdc-3ede-48e9-b9c5-468868168e8b"
				alt="Desktop Preview"
			/>
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Ftablet-home.png?alt=media&token=efe359ff-5bb6-41cc-a46a-1fa652e49543"
					alt="Tablet Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Ftablet-dashboard.png?alt=media&token=7e9126a7-2976-4c5f-bc25-6e227c7c3f62"
					alt="Tablet Preview"
				></img>
			</BlockInTablet>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Ftablet-about.png?alt=media&token=c9c1ffb4-2642-4ecc-ab86-6b637d2cfc09"
				alt="Tablet Preview"
			></img>
		</Tablet>
		<Mobile>
			<BlockInMobile>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Fmobile-home.png?alt=media&token=259c8c9d-f93c-49f8-b6f5-82435738936b"
					alt="Mobile Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Fmobile-dashboard.png?alt=media&token=00fb1763-c517-4f44-8bf3-52c1d1399fb0"
					alt="Mobile Preview"
				></img>
			</BlockInMobile>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/covid19%2Fmobile-about.png?alt=media&token=4c7f0c44-6238-4857-9e60-581d85c3cb28"
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
	@media ${props => props.theme.m} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5% 15%;
		& > *:last-child {
			width: 70%;
		}
	}
`;

const BlockInTablet = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		width: 70%;
		& > * {
			margin-bottom: 5%;
		}
	}
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	padding: 15%;

	@media ${props => props.theme.m} {
		display: flex;
		justify-content: space-around;
		padding: 5%;
		& > *:last-child {
			width: 35%;
			margin: 0;
			padding-top: 90px;
		}
	}
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}

	@media ${props => props.theme.m} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 35%;
		img {
			height: auto;
		}
	}
`;

export default Detail;
