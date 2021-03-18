import React from 'react';
import styled from 'styled-components';

const Detail = () => (
	<Container>
		<Desktop>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fdesktop-auth.png?alt=media&token=cd72ca33-9559-421a-a214-d574b2fd7e9b"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fdesktop-profile1.png?alt=media&token=33937a7a-736a-42cc-bfe4-242a3d08e692"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fdesktop-profile2.png?alt=media&token=c89b8442-9f75-4cd9-985e-fabc47f5c349"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fdesktop-main.png?alt=media&token=a02ec844-6bb7-4c22-a53e-0e22db02ccd4"
				alt="Desktop Preview"
			/>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fdesktop-edit.png?alt=media&token=5584483d-6c50-48a0-93e1-aa160a3f34ca"
				alt="Desktop Preview"
			/>
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Ftablet-auth.png?alt=media&token=948cf620-0629-4c06-835b-4e9f01b4443e"
					alt="Tablet Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Ftablet-profile1.png?alt=media&token=196e8251-751f-4fb1-8c06-23252ba4290f"
					alt="Tablet Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Ftablet-profile2.png?alt=media&token=14293585-b179-4bb5-a89e-c41fd46e6000"
					alt="Tablet Preview"
				></img>
			</BlockInTablet>
			<BlockInTablet2>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Ftablet-main.png?alt=media&token=713c75bb-b8c4-4d40-9cc0-8a7bc0af17e4"
					alt="Tablet Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Ftablet-edit.png?alt=media&token=9fbb260d-0052-43c3-ad35-93310c072d44"
					alt="Tablet Preview"
				></img>
			</BlockInTablet2>
		</Tablet>
		<Mobile>
			<BlockInMobile>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fmobile-auth.png?alt=media&token=ebfb212d-4d58-4bea-852a-6d745c25063a"
					alt="Mobile Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fmobile-profile1.png?alt=media&token=996dc8f6-41b0-4be3-816a-261ffcd102f9"
					alt="Mobile Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fmobile-profile2.png?alt=media&token=12c317cf-0e74-4277-ba04-20f12b5b29d2"
					alt="Mobile Preview"
				></img>
			</BlockInMobile>
			<BlockInMobile2>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fmobile-main.png?alt=media&token=8988209d-263e-4438-b1dd-db070a332a63"
					alt="Mobile Preview"
				></img>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/sum-in.appspot.com/o/todos%2Fmobile-edit.png?alt=media&token=698bc79e-f80d-4ad1-b931-79914fcd2a38"
					alt="Mobile Preview"
				></img>
			</BlockInMobile2>
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

const BlockInTablet2 = styled.div`
	width: 100%;
	& > *:first-child {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		width: 70%;
		& > *:first-child {
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
		img {
			height: auto;
		}
	}
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		width: 35%;
	}
`;

const BlockInMobile2 = styled.div`
	width: 100%;

	& > *:first-child {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		width: 35%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

export default Detail;
