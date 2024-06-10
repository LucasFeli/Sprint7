import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/Firebase";
import myDisney from "../../assets/Mydisney.png";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log("user", user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
        });
      }
      console.log("the user logged successfully");

      navigate("/starships");
    } catch (error) {
      console.error("Error en el registro", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral text-primary">
      <div className="card lg max-w-96 bg-zinc-50 shadow-xl">
        <div className="card-body">
          <img
            src={myDisney}
            alt="disney"
            style={{ height: "30px", width: "70px" }}
          />
          <h2 className="card-title  text-black font-bold text-2xl">
            Create an account to continue
          </h2>
          <p className="text-sm text-black ">
            With a MyDisney account, you can log in to Star Wars and other
            services across The Walt Disney Family of Companies. Create your
            account using.
          </p>
          <form onSubmit={handleRegister}>
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
                placeholder="Choose a password"
                className="input input-bordered bg-zinc-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <h1 className="text-xs text-black mt-3 ms-3">
              Yes! I would like to receive by email special offers and updates
              about Lucasfilm Ltd. and other products and services from{" "}
              <a
                href="https://privacy.thewaltdisneycompany.com/en/definitions/#The-Walt-Disney-Family-of-Companies"
                target="_blank"
                className="no-underline hover:underline text-blue-700"
              >
                The Walt Disney Family of Companies.
              </a>{" "}
            </h1>
            <p className="text-xs text-black mt-3">
              By creating an account, you agree to our Terms of Use, and
              acknowledge that you have read our Privacy Policy, Cookies Policy
              and UK & EU Privacy Rights. More...
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn  btn-warning  bg-yellow-400">
                Agree & Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
