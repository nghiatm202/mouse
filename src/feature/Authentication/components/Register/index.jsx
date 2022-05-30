import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

function Register(props) {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((x) => !x)
  }

  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required('Hãy nhập họ'),
    firstName: Yup.string().required('Hãy nhập tên'),
    email: Yup.string()
      .required('Hãy nhập địa chỉ email')
      .email('Địa chỉ email không hợp lệ'),
    password: Yup.string()
      .required('Hãy nhập mật khẩu')
      .min(6, 'Sử dụng 6 ký tự trở lên cho mật khẩu của bạn')
      .max(40, 'Sử dụng 40 ký tự trở xuống cho mật khẩu của bạn'),
    retypePassword: Yup.string()
      .required('Xác nhận mật khẩu của bạn')
      .oneOf(
        [Yup.ref('password'), null],
        'Mật khẩu đã nhập không khớp. Hãy thử lại.'
      ),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='family-name'
              name='lastName'
              required
              fullWidth
              id='lastName'
              label='Họ'
              autoFocus
              {...register('lastName')}
              error={errors.lastName ? true : false}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='firstName'
              label='Tên'
              name='firstName'
              autoComplete='given-name'
              {...register('firstName')}
              error={errors.firstName ? true : false}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              {...register('email')}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              error={errors.password ? true : false}
              fullWidth
              variant='outlined'
              required
            >
              <InputLabel htmlFor='password'>Mật khẩu</InputLabel>
              <OutlinedInput
                {...register('password')}
                error={errors.password ? true : false}
                id='password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={toggleShowPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Mật khẩu'
              />
              <FormHelperText error={errors.password ? true : false}>
                {errors.password?.message}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              error={errors.retypePassword ? true : false}
              fullWidth
              variant='outlined'
              required
            >
              <InputLabel htmlFor='retypePassword'>Xác nhận</InputLabel>
              <OutlinedInput
                {...register('retypePassword')}
                error={errors.retypePassword ? true : false}
                id='retypePassword'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={toggleShowPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Xác nhận'
              />
              <FormHelperText error={errors.retypePassword ? true : false}>
                {errors.retypePassword?.message}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 3, mb: 2, backgroundColor: '#1a94ff' }}
        >
          Đăng Ký
        </Button>
      </Box>
    </Box>
  )
}

export default Register
