import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase'
import myDisney from "../../assets/Mydisney.png"
import footer from "../../assets/footer.png"

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in Successfully');
      //navigate('/protected');
    } catch (error) {
      console.error('Error en el login', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral text-primary">
      <div className="card lg max-w-96 bg-zinc-50 shadow-xl">
        <div className="card-body">
        <img src={myDisney} alt="disney" style={{height:"30px", width:"70px"}} />
          <h2 className="card-title  text-black font-bold text-1xl">Enter your email to continue</h2>
          <p className='text-xs text-black'>Log in to Star Wars with your MyDisney account. If you don't have one, you will be prompted to create one.</p>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered bg-zinc-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered bg-zinc-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="text-xs btn  btn-warning  bg-yellow-400">Continue</button>
            </div>
            <p className='text-xs text-gray-600 font-bold mt-3'>Star Wars is part of The Walt Disney Family of Companies.</p>
            <p className='text-xs text-gray-700 mt-3 mb-2'>MyDisney lets you seamlessly log in to services and experiences across The Walt Disney Family of Companies, such as Disney+, ESPN, Walt Disney World, <a href="https://my.disney.com/" target="_blank" className='no-underline hover:underline text-black'>and more.</a></p>
            <img src={footer} alt="footer sponsors" style={{height:"30px", width:"400px"}} />
          </form>
        </div>
      </div>
    </div>
  );
};


