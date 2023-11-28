import React, { useRef } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Button, Form } from 'react-bootstrap';
import { CustomInput } from '../../components/custom-input/CustomInput';
import { loginUser } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';

export const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    if (!email || !password) {
      return toast.error('Both input field must be filled ');
    }

    ///axios
    const { status, message } = await loginUser({ email, password });
    toast[status](message);
  };

  const inputs = [
    {
      label: 'Email',
      name: 'email',
      placeholder: 'sujan@gmail.com',
      type: 'email',
      required: true,
      passRef: emailRef,
    },

    {
      label: 'Password',
      name: 'password',
      placeholder: '*******',
      type: 'password',
      required: true,
      passRef: passwordRef,
    },
  ];
  return (
    <div>
      <MainLayout>
        <div className='bg-dark p-3 text-white'>
          <Form
            onSubmit={handleOnSubmit}
            className='form-center border shadow-lg p-4 rounded mt-5'
          >
            <h2>Welcome Admin Login Area</h2>
            <hr />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}

            <div className='d-grid mt-2'>
              <Button type='submit' variant='primary'>
                Login
              </Button>
            </div>
          </Form>
        </div>
      </MainLayout>
    </div>
  );
};
