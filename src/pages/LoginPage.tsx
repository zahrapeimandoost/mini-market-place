
const LoginPage = () => {
  return (
    <div className=" p-10 bg-amber-200 w-fit mx-auto rounded-xl">
      <div className="text-center mb-3">
        <span>🔐</span>
        <h1>Welcome back</h1>
        <h2>Sign in to your account to continue</h2>
      </div>
      <form className="flex flex-col gap-3"> 
        <div className="flex flex-col">
         <label htmlFor="email">Email Address</label>
         <input
           id="email"
           type="email"
           placeholder="📧 Enter your email"/>
        </div>
        <div className="flex flex-col">
         <label htmlFor="password">Password</label>
         <input
           id="password" 
           type="password" 
           placeholder="🔒 Enter your password"/>
        </div>
        <div className="text-center">
         <p>Forget password? </p>
         <button 
         type="submit"
         className="bg-amber-600 px-2 mt-1.5 cursor-pointer rounded-lg"
         >
          Sign In
         </button>
        </div>
        <hr/>
        <div className="text-center">
          <p>Don't have an account?</p>
          <a href="">Create account</a>
        </div>
      </form>
    </div>

  )
};

export default LoginPage;