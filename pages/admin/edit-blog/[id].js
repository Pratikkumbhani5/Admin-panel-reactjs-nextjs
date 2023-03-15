import React, { useEffect, useState } from "react";
import axios from "axios";
import { BlogForm } from "../../../Components/Admin/Blog/BlogForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const EditBlog = () => {
  const [data, setData] = useState(null);

  // console.log(data);

  const router = useRouter();

  const { id } = router.query;

  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      getEditData();
    }
    // eslint-disable-next-line
  }, [session.status]);

  const getEditData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/blog-edit/${id}`, {
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
    <BlogForm preLoadedValues={data} />
  ) : (
    <div className="text-center">Loading...</div>
  );
};

export default EditBlog;
