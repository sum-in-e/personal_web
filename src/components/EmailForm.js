import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const EmailForm = () => {
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('contact-me', 'template_7rs5e3a', e.target, 'user_mqwlbOYlYY2V5X6YJOOXM').then(
			result => {
				window.alert('메일이 성공적으로 전송되었습니다.');
				nameRef.current.value = '';
				phoneRef.current.value = '';
				emailRef.current.value = '';
				messageRef.current.value = '';
			},
			error => {
				window.alert(
					'메일 전송에 실패하였습니다. 해당 사이트에서 재전송 혹은 개인적으로 메일을 보내주세요. 불편을 드려 죄송합니다.',
				);
			},
		);
	}
	useEffect(() => {
		emailjs.init('user_mqwlbOYlYY2V5X6YJOOXM');
	}, []);

	return (
		<Form className="contact-form" onSubmit={sendEmail}>
			<input type="hidden" name="contact_number" />
			<InputWrapper>
				<label htmlFor="name">
					성함 / 기업명<Span>*</Span>
				</label>
				<Input
					ref={nameRef}
					type="text"
					id="name"
					name="o_name"
					placeholder="성함(기업명)을 입력해주세요."
					required
				/>
			</InputWrapper>
			<InputWrapper>
				<label htmlFor="phone">연락처</label>
				<Input
					ref={phoneRef}
					type="tel"
					id="phone"
					name="o_phone"
					placeholder="연락처를 입력해주세요.(생략 가능)"
				/>
			</InputWrapper>
			<InputWrapper>
				<label htmlFor="email">
					이메일<Span>*</Span>
				</label>
				<Input
					ref={emailRef}
					type="email"
					id="email"
					name="o_email"
					placeholder="메일 주소를 입력해주세요."
					required
				/>
			</InputWrapper>
			<InputWrapper>
				<label htmlFor="message">
					메세지<Span>*</Span>
				</label>
				<MessageInput
					ref={messageRef}
					type="text"
					id="message"
					name="o_message"
					placeholder="내용을 입력해주세요."
					required
				/>
			</InputWrapper>
			<SubmitBtn>보내기</SubmitBtn>
		</Form>
	);
};
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 480px;
	width: 100%;
	margin-top: 20px;
	padding: 10px 20px;
	border-radius: 3px;
	box-shadow: rgb(15 15 15 / 30%) 0px 0px 0px 1px, rgb(15 15 15 / 30%) 0px 2px 4px;
	@media ${props => props.theme.l} {
		padding: 15px;
	}
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 5px;
	input {
		border: 1px solid ${props => props.theme.line};
		border-radius: 3px;
		-webkit-appearance: none;
	}
	label {
		font-size: 13px;
		margin-bottom: 3px;
	}
	@media ${props => props.theme.l} {
		justify-content: space-between;
		flex-direction: row;
		label {
			margin: 10px 15px 0 0;
			font-size: 15px;
		}
		input {
			width: 88%;
		}
	}
`;
const Span = styled.span`
	color: red;
`;

const Input = styled.input`
	height: 40px;
	box-shadow: none;
	outline-color: ${props => props.theme.main};
`;

const MessageInput = styled.textarea`
	height: 150px;
	outline-color: ${props => props.theme.main};
	border: 1px solid ${props => props.theme.line};
	border-radius: 3px;
	padding: 5px;
	-webkit-appearance: none;
	box-shadow: none;
	@media ${props => props.theme.l} {
		width: 88%;
	}
`;

const SubmitBtn = styled.button`
	width: 100%;
	padding: 10px 0;
	border: none;
	border-radius: 5px;
	background-color: ${props => props.theme.main};
	font-size: 15px;
	line-height: 20px;
	color: ${props => props.theme.white};
	outline-color: ${props => props.theme.main};
	@media ${props => props.theme.xl} {
		cursor: pointer;
	}
`;

export default EmailForm;
