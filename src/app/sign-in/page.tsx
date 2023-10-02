export default function Page(){
    return (
        <div className="flex-row flex w-screen h-screen">
        <div className="bg-blue-300 w-1/2">
            <div className="w-full h-full content-center flex" data-aos="fade-down">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="object-cover"></img>
            </div>
            </div>
        <div className="bg-white w-1/2 justify-center flex flex-col align-middle">
          <div className="bg-white mx-10 lg:mx-32 my-14 flex-col flex justify-center align-middle">
            <h3 className="self-start font-serif px-3 text-2xl" data-aos="fade-right">Welcome back!</h3>
            <h3 className="self-start font-serif px-3 pb-4 pt-2 text-xs" data-aos="fade-right">Join the world's largest community</h3>
            <input className="h-40px m-3 rounded-md p-3 border border-solid border-black" placeholder="Username" data-aos="fade-left"></input>
            <input className="h-40px m-3 rounded-md p-3 border-black border-solid border" placeholder="Password" type="password" data-aos="fade-left"></input>
            <a href="#" className="text-xs self-end mx-3 text-black-600 hover:text-blue-800" data-aos="fade-left">Forgot Password?</a>
            <button className="bg-black my-5 mx-3 rounded-md text-white py-3" data-aos="fade-down">Sign In</button>
            <button className="mx-3 flex flex-wrap justify-center rounded-md border-black border font-semibold py-3" data-aos="fade-up">
              <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                    Log in With Google</button>
            <div className="mt-20 self-center text-xs" data-aos="zoom-in">Don't have an account?<a href="signup.html" className="self-end mx-1 text-black-600 font-semibold hover:text-blue-800">Sign Up</a></div>
          </div>
        </div>
      </div>
    )
}