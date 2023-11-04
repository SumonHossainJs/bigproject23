import './Login.scss';

const Login = () => {
  return (
    <div className='Login-con'>
      <div className="input-con">
        <h2>Sign In</h2>
        <span>to continue Video App</span>
        <div className="log">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <div className="log-btn">SignIn</div>
        </div>

        Or
        <div className="log">
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='Password' />
          <div className="log-btn">SignIn</div>
        </div>
      </div>
    </div>
  )
}

export default Login