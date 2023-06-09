import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectStatusError } from 'redux/auth/selectors';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { WrapperForm } from '../LoginForm/LoginForm.style';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(2, 'Name should be of minimum 2 characters length')
    .required('Name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only Latin letters are allowed for this field'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const statusError = useSelector(selectStatusError);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: value => {
      dispatch(
        register({
          name: value.name,
          email: value.email,
          password: value.password,
        })
      );
    },
  });

  return (
    <>
      <WrapperForm>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="dense"
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            margin="dense"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {statusError === 400 ? (
            <div style={{ color: 'red' }}>
              Unable to register with this email
            </div>
          ) : (
            ''
          )}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Register
          </Button>
        </form>
      </WrapperForm>
    </>
  );
};
