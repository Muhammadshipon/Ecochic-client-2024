

const LogIn = () => {
  return (
    <div className="flex justify-center items-center">

      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-xl bottom-2 border-gray-400 mt-20">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log in</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-200  text-gray-600" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-200  text-gray-600" />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-500 text-white">Log in</button>
            </div>
            <p className="px-6 text-sm text-center">Do not have an account yet?
              <a rel="noopener noreferrer" href="#" className="hover:underline text-indigo-400">Register</a>.
            </p>
          </div>
        </form>
      </div>

    </div>
  );
};

export default LogIn;