import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
    const handleSocialLogin = (media) => {
        media().then((result) => {
          const userInfo = {
            email:result.user?.email,
            name: result.user?.displayName
          }
          axiosPublic.post('/users', userInfo)
          .then(res =>{
            console.log(res.data)
            navigate(location?.state ? location.state : "/");
          })
        });
      };
    return (
        <div>
        <div className='divider'>continue with</div>
        <div className='text-center'>
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            className='btn bg-slate-200 text-black font-bold'>
            <FcGoogle></FcGoogle> Log in with Google
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;