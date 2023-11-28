import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CustomInput } from '../../components/custom-input/CustomInput';
import { postAdminUser } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';

const initialstate = {
  fName: '',
  lName: '',
  phone: '',
  email: '',
  password: '',
  confirmpassword: '',
};

export const AdminSignUp = () => {
  const [form, setForm] = useState(initialstate);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmpassword, ...rest } = form;

    if (confirmpassword !== rest.password) {
      return alert('Password do not match!');
    }
    const pending = postAdminUser(rest);
    toast.promise(pending, {
      pending: 'Please wait',
      // success: 'request success',
      // error: 'error in request',
    });

    const { status, message } = await pending;
    toast[status](message); //toast.success() toast.error()
  };
  const inputs = [
    {
      label: 'First Name',
      name: 'fName',
      placeholder: 'Sujan',
      type: 'text',
      required: true,
    },

    {
      label: 'Last Name',
      name: 'lName',
      placeholder: 'Mahat',
      type: 'text',
      required: true,
    },

    {
      label: 'Email',
      name: 'email',
      placeholder: 'sujan@gmail.com',
      type: 'email',
      required: true,
    },

    {
      label: 'Phone',
      name: 'phone',
      placeholder: '0424249946',
      type: 'number',
    },

    {
      label: 'Password',
      name: 'password',
      placeholder: '*******',
      type: 'password',
      required: true,
    },

    {
      label: 'Confirm Password',
      name: 'confirmpassword',
      placeholder: '*******',
      type: 'password',
      required: true,
    },
  ];
  return (
    <div className='bg-dark p-3 text-white'>
      <Form
        onSubmit={handleOnSubmit}
        className='form-center border shadow-lg p-4 rounded mt-5'
      >
        <h2>Create New Admin</h2>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className='d-grid mt-2'>
          <Button type='submit' variant='primary'>
            Create New Admin
          </Button>
        </div>
      </Form>
    </div>
  );
};
