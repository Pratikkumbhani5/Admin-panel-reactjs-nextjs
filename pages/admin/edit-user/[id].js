import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserForm } from "../../../Components/Admin/User/UserForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const EditUser = () => {
  const [data, setData] = useState(null);

  // console.log(data);

  const router = useRouter();

  const { id } = router.query;
  const session = useSession();

  // if (session.status === "authenticated") {
  //   const decoded = jwt_decode(session.data.user.token);
  //   console.log(decoded);
  //   if (decoded.role !== 1) {
  //     nav.push("/admin/dashboard");
  //   }
  // }

  useEffect(() => {
    if (session.status === "authenticated") {
      getEditData();
    }
    // eslint-disable-next-line
  }, [session.status]);

  const getEditData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/user-edit/${id}`, {
        headers: {
          Authorization: `Bearer ${session.data.user.token}`,
        },
      })
      .then((res) => {
        setData(res.data[0]);
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
