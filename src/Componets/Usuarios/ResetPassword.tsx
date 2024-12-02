import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalChek from "../../Componentes/ui/ModalChek";
import Loader from "../../Componentes/ui/Loader";

let url = `http://localhost:4000/resetpassword`;

interface ReplezePassword {
  password: string;
  confirmpassword: string;
  condition: false;
}

const NuevaResearContrasenia = () => {
  const { token } = useParams();
  const [Form, setForm] = useState<ReplezePassword>({} as ReplezePassword);
  const navigate = useNavigate();
  const [LoadinModal, setLoading] = useState(false);

  const handleChague = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const hanldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      e.preventDefault();

      setTimeout(() => {}, 2000);

      const datatoBack = {
        contrasenia: Form.password,
        reconfir: Form.confirmpassword,
        token,
      };
      let AxiosFeching = await axios.post(url, datatoBack);
      let secondo = AxiosFeching.data;
      if (secondo.msg) {
        navigate("/formulario");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        {/* <pre className="bg-white">{JSON.stringify(token)}</pre> */}

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h2>
            <form
              onSubmit={hanldeSubmit}
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
            >
              <div></div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  onChange={handleChague}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  onChange={handleChague}
                  type="confirmpassword"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-green-500"
              >
                {LoadinModal ? <Loader></Loader> : <h1>Reset Password</h1>}
              </button>
            </form>
          </div>
          <ModalChek>
            <p> Se cambio la contrasenia Correctaemente </p>
          </ModalChek>
          <pre>{JSON.stringify(LoadinModal)}</pre>
        </div>
      </section>
    </>
  );
};

export default NuevaResearContrasenia;
