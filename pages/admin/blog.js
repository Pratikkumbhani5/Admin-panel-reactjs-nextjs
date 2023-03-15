import React, { useEffect, useState, useRef } from "react";
import DataTable from "react-data-table-component";
// import { CSVLink } from "react-csv";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Header from "../../Components/Admin/Layout/Header";
import Menu from "../../Components/Admin/Layout/Menu";
import Footer from "../../Components/Admin/Layout/Footer";
import { useSession } from "next-auth/react";

const notify = () =>
  toast.success("Blog Deleted Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const CustomMessage = (data) =>
  toast.success(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
const BlogList = () => {
  // const token = localStorage.getItem("token");
  const refContainer = useRef();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const session = useSession();

  const title = (row) => {
    return row.title;
  };

  const pre_description = (row) => {
    return row.pre_description;
  };
  const description = (row) => {
    return row.description;
  };
  const meta_title = (row) => {
    return row.meta_title;
  };
  const meta_description = (row) => {
    return row.meta_description;
  };
  const meta_keywords = (row) => {
    return row.meta_keywords;
  };
  const is_active = (row) => {
    return row.is_active;
  };

  const customStyles = {
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
    rows: {
      style: {
        fontSize: "16px",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  const columns = [
    {
      name: "Title",
      selector: title,
      sortable: true,
      width: "210px",
    },

    {
      name: "Pre Description",
      selector: pre_description,
      sortable: true,
      width: "210px",
    },
    {
      name: "Description",
      selector: description,
      sortable: true,
      width: "210px",
      // cell: (row) => (
      //   <div dangerouslySetInnerHTML={{ __html: row.description }}></div>
      // ),
    },
    {
      name: "Meta Title",
      selector: meta_title,
      sortable: true,
      width: "210px",
    },
    {
      name: "Meta Description",
      selector: meta_description,
      sortable: true,
      width: "210px",
    },
    {
      name: "Meta Keywords",
      selector: meta_keywords,
      sortable: true,
      width: "180px",
    },
    {
      name: "Status",
      selector: is_active,
      sortable: true,
      cell: (row) => (
        <div>
          {row.is_active == 1 && (
            <span className="badge badge-success">Active</span>
          )}
          {row.is_active == 0 && (
            <span className="badge badge-warning">Inactive</span>
          )}
        </div>
      ),
    },
    {
      name: "Action",
      button: true,
      grow: 1,
      width: "350px",
      cell: (row) => (
        <div>
          <Link href={`/admin/view-blog/${row.id}`}>
            <button
              type="button"
              style={{ marginRight: "5px" }}
              className="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
          </Link>
          <Link href={`/admin/edit-blog/${row.id}`}>
            <button
              type="button"
              style={{ marginRight: "5px" }}
              className="btn btn-sm btn-outline-info"
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            style={{ marginRight: "5px", width: "101px" }}
            onClick={() => {
              StatusUpdate(row.id);
            }}
            className={`btn btn-sm  ${
              row.is_active == 0 ? "btn-outline-primary" : "btn-outline-warning"
            }`}
          >
            {row.is_active == 0 ? "Activate" : "DeActivate"}
          </button>

          <button
            type="button"
            onClick={() => {
              alertContent(row.id);
            }}
            className="btn btn-sm btn-outline-danger"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const temp_rows = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(searchValue.toLowerCase()) !==
      -1
  );

  // const rows_data_for_export = temp_rows.map((d1) =>
  //   columns
  //     .slice(0, columns.length - 1)
  //     .map((d2) => d2.selector.name)
  //     .map((d3) => d1[d3])
  // );

  // const columns_data_for_export = columns
  //   .slice(0, columns.length - 1)
  //   .map((d) => d.name);

  useEffect(() => {
    if (session.status === "authenticated") {
      getBlogData();
    }
    // eslint-disable-next-line
  }, [session.status]);

  const StatusUpdate = async (id) => {
    if (session.status === "authenticated") {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/blog-active/${id}`,
          {
            headers: {
              Authorization: `Bearer ${session.data.user.token}`,
            },
          }
        )
        .then((res) => {
          getBlogData();
          CustomMessage("Status Updated Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getBlogData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/blog`, {
        headers: {
          Authorization: `Bearer ${session.data.user.token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const alertContent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(id);
      }
    });
  };

  const deleteBlog = async (id) => {
    if (session.status === "authenticated") {
      await axios
        .delete(
          `${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/blog-delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${session.data.user.token}`,
            },
          }
        )
        .then((res) => {
          getBlogData();
          notify();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Blog Information</h3>
            </div>
            <div className="card-body">
              <div
                id="example1_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row my-3">
                  <div className="col-sm-12 col-md-8 ">
                    <Link href="/admin/add-blog">
                      <button
                        type="button"
                        style={{ marginRight: "5px" }}
                        className="btn btn-primary"
                      >
                        Add Blog
                      </button>
                    </Link>
                  </div>
                  <div className="col-sm-12 col-md-3 text-end">
                    <label className="d-flex">
                      <input
                        type="search"
                        placeholder="Enter text for search"
                        className="form-control ml-3 "
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-sm-12 col-md-1 text-end">
                    <div className="dt-buttons btn-group flex-wrap">
                      {/* <button
                        className="btn btn-secondary buttons-csv buttons-html5 "
                        tabIndex="0"
                        aria-controls="example1"
                        type="button"
                      >
                        <CSVLink
                          className="text-decoration-none"
                          data={rows_data_for_export}
                          headers={columns_data_for_export}
                          filename={"client_list.csv"}
                        >
                          <span className="text-light">CSV</span>
                        </CSVLink>
                      </button>
                       */}
                    </div>
                  </div>
                </div>
                <div ref={refContainer}>
                  <DataTable
                    title="Client List"
                    customStyles={customStyles}
                    columns={columns}
                    data={temp_rows}
                    pagination
                    striped
                    noHeader
                    highlightOnHover
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
