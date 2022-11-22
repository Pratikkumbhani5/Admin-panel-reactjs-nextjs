import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserForm } from "../../components/admin/userForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const EditUser = (context) => {
  const [userData, setUserData] = useState(null);
  const { status, data } = useSession();

  const router = useRouter();

  // const { id } = useParams();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    getEditData();
  }, [status, id]);

  const getEditData = async () => {
    if (!(status === "loading")) {
      await axios
        .get(`${process.env.NEXT_PUBLIC_NEXT_API}/admin/user/${id}`, {
          headers: {
            Authorization: `Bearer ${data.user.token}`,
          },
        })
        .then((res) => {
          setUserData(res.data.user);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            router.push("/unauthorized");
          }
        });
    }
  };

  return userData ? (
    <UserForm preLoadedValues={userData} />
  ) : (
    <div className="text-center">Loading...</div>
  );
};

export default EditUser;

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/edit/[id]",
      // Object variant:
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // const { params } = context;
  console.log(context);
  // if (!(status === "loading")) {
  //   // console.log("IN");
  //   await axios
  //     .get(`${process.env.NEXT_PUBLIC_NEXT_API}/admin/users`, {
  //       headers: {
  //         Authorization: `Bearer ${data?.user.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setUserData(res.data.users);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // const res = await axios.post(`${API_BASE_URL}/api/cms/page`);
  // // Assuming `res.data` format: { content, seoTitle, seoDescription, seoKeyword }
  // return {
  //   props: res.data,
  // };
  return { props: { name: "pratik" } };
}
