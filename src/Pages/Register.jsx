import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";



const Register = () => {
    const {createUser} = useAuth()

    // ! form control
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

    //! password validation
    if(password.length < 6){
      toast.error("Password must be at least 6 characters")
      return;
    }
      //! create new user
      createUser(email, password)
      .then(res => {
        console.log(res.user);
        toast.success('User Registration Successful!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      }).catch(err => {
        console.log(err);
      });

    }
    return (
        <div className="hero h-[85vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse gap-5">
            <div className="card w-full lg:w-[900px] max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-3xl font-bold text-center text-red-500 p-4">
                Register
              </h1>
              <form onSubmit={handleRegister} 
              className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ab@example.com"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-500 text-white" type="submit">Register</button>
                </div>
                <p className="p-4">
                  Do not have an account?
                  <Link className="text-red-700 font-semibold ml-2" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
            {/* <div className="w-72 lg:w-[500px]">
              <Lottie loop={true} animationData={animation}></Lottie>
            </div> */}
          </div>
        </div>
      </div>
    );
};

export default Register;