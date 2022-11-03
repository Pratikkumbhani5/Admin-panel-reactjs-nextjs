import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserForm } from "./userForm";

const EditUser = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getEditData();
    // eslint-disable-next-line
  }, []);

  const getEditData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return data ? (
    <UserForm preLoadedValues={data} />
  ) : (
    <div className="text-center">Loading...</div>
  );
};

export default EditUser;
