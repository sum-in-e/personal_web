import React from 'react';
import styled from 'styled-components';

const Detail = () => (
	<Container>
		<Desktop>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fdesktop-main.png?alt=media&token=5a9840dc-8fe9-4621-b1bb-c0e0461803ee"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fdesktop-search.png?alt=media&token=592d3ae3-d082-4cbe-a329-95f240b59433"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fdesktop-results.png?alt=media&token=a8765f70-2fd0-4232-a35d-a0450bcb77de"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fdesktop-detail.png?alt=media&token=f8d9e581-9563-4059-a327-4967981d1b07"
				alt="Desktop Preview"
			/>
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Ftablet-main.png?alt=media&token=a50fc8db-2931-4e5e-954b-cf4ce1e740d4"
					alt="Tablet Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Ftablet-detail.png?alt=media&token=9fa5060d-fe64-486e-ba2c-30c3bc8fd9ea"
					alt="Tablet Preview"
				></img>
			</BlockInTablet>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Ftablet-search.png?alt=media&token=425c7f17-a551-457d-a2a3-5f09cd382f85"
				alt="Tablet Preview"
			></img>
		</Tablet>
		<Mobile>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fmobile-search.png?alt=media&token=ee60052b-6a1a-4acf-b413-8e457d68bbfb"
				alt="Mobile Preview"
			></img>
			<BlockInMobile>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fmobile-main.png?alt=media&token=349eb8cc-3c5c-470c-a93c-478694646926"
					alt="Mobile Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/vanillaSearchMovie%2Fmobile-detail.png?alt=media&token=53586f0b-26f8-43f8-ab51-db7f4ae176d6"
					alt="Mobile Preview"
				></img>
			</BlockInMobile>
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
	& > *:first-child {
		margin-bottom: 10%;
	}

	@media ${props => props.theme.m} {
		display: flex;
		justify-content: space-around;
		padding: 5%;
		& > *:first-child {
			width: 35%;
			margin: 0;
		}
	}
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > *:first-child {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 35%;
		img {
			height: auto;
		}
	}
`;

export default Detail;
