import { IconArrowRight } from '@tabler/icons'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as Yup from "yup"

interface IValues {
    email: string | undefined
}

const EmailSignUp = ()=>{

    const [status, setStatus] = useState("")
    const [feedback, setFeedback] = useState("")

    const sendEmail = async (values: IValues)=>{
        const email = values.email
        try {
            const response = await axios.post('/api/newsletter', { email })
            const {state} = response.data.data.subscription
            console.log(state)
            if (state === 'active'){
                setStatus("email-subscribed")
            } else (
                setStatus("success")
            )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (status === "submitting") {
                setFeedback("I'll put you on the list...✍️")
            } else if (status === "success") {
                setFeedback(`Done 🎉! I have sent you an email.`)
            } else if (status === 'email-subscribed') {
                setFeedback(`It seems like you're already subscribed 🙂.`)  
            } else if (status === "error") {
            setFeedback("Oops 😞. Something did not work out.")
            } else setFeedback("")
    },[status])

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            setStatus("submitting")
            sendEmail(values)
            setTimeout(() => {
                resetForm()
            }, 400)
            },
        })

    return (
        <SignUpBox>
                <h2>Newsletter <span>(sort of) </span></h2>
                <p>I let you know when there is something new right after I pressed "publish". You will be the first one to get it. It's free. No spam. I don't share your data. Unsubscribe whenever you want.</p>
            <div className="form-container">
                {
                    feedback !== "" ? <p className='feedback'>{feedback}</p> : 
                    <form noValidate onSubmit={formik.handleSubmit} className='signup-form'>
                        <div className="input-container">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                            <span className="error-message">{formik.errors.email}</span>
                            ) : null}
                        </div>
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            <IconArrowRight/>
                            Subscribe
                        </button>
                    </form>
                }
            </div>
            
        </SignUpBox>
    )
}

export default EmailSignUp

const SignUpBox = styled.div`
    background-color: ${({theme}) => theme.color.background.dark};
    padding: 2rem;
    margin: 0 0 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    h2 {
        grid-column: span 2;
        margin-top: 0;
    }
    p {
        margin-bottom: 0;
    }
    span {
        font-weight: 300;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    .input-container {
        width: 100%;
        input {
            width: 100%;
            padding: 0.5rem;
            background: ${({theme})=> theme.color.background.main};
            border:none;
            border-bottom: 0.08rem solid ${({theme})=> theme.color.primary};
            font-size: ${({theme})=> theme.text.base};
            font-weight: 300;
            margin: 0.5rem 0;
        }
        label {
            font-weight: 300;
            font-size: ${({theme})=> theme.text.sm};
        }
    }
    button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: ${({theme})=> theme.text.base};
        color: ${({theme})=> theme.color.primary};
        font-weight: 600;
        padding: 0.5rem;
        width: fit-content;
        align-self: flex-end;
        display: flex;
        align-items: center;
        svg {
            margin-right: 0.5rem;
        }
    }
    .error-message {
        font-size: ${({theme})=> theme.text.xs};
    }
    .feedback {
        color: ${({theme})=> theme.color.primary};
        font-weight: 400;
    }
    @media screen and (max-width: 40rem){
        grid-column-gap: 0;
        padding: 1rem;
        p, form {
            grid-column: span 2;
        }
        form {
            margin-top: 2rem;
        }
    }
`
