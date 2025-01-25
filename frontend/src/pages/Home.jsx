import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Notes from "../components/Notes";

const Home = () => {
  const token = localStorage.getItem("token");
  const { login, user, notes } = useAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/authenticate`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      login(response.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Home | {process.env.APP_NAME}</title>
      </Helmet>
      <Navbar />
      {user && (
        <>
          <div className='text-center mt-5'>
            <h1 className='text-2xl font-bold'>Welcome {user?.name}</h1>
          </div>
          {notes.map((note) => (
            <Notes key={note._id} title={note.title} body={note.body} />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
