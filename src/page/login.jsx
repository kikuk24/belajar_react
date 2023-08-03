import AuthLayout from '../component/Layout/AuthLayout'
import FormLogin from '../component/Fragment/FormLogin'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthLayout type="login" title="Login" desc="Hai, Selamat datang dan selamat bergabung">
        <FormLogin/>
      </AuthLayout>
    </div>
  )
}

export default LoginPage