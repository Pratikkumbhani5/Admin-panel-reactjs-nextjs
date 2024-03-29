import React, { useEffect, useState, useRef } from "react";
import Header from "../Header";
import DataTable from "react-data-table-component";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const notify = () =>
  toast.success("User Deleted Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const UserList = () => {
  const token = localStorage.getItem("token");
  const refContainer = useRef();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const title = (row) => {
    return row.title;
  };

  const firstName = (row) => {
    return row.firstName;
  };
  const lastName = (row) => {
    return row.lastName;
  };
  const email = (row) => {
    return row.email;
  };
  const role = (row) => {
    return row.role;
  };

  const customStyles = {
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const columns = [
    {
      name: "Title",
      selector: title,
      sortable: true,
    },
    {
      name: "First Name",
      selector: firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: email,
      sortable: true,
      cell: (row) => (
        <a className="text-decoration-none" href={`mailto:${row.email}`}>
          {row.email}
        </a>
      ),
    },
    {
      name: "Role",
      selector: role,
      sortable: true,
    },
    {
      name: "Action",
      button: true,
      grow: 1,
      width: "150px",
      cell: (row) => (
        <div>
          <Link to={`/edit/${row._id}`}>
            <button
              type="button"
              style={{ marginRight: "5px" }}
              className="btn btn-outline-info"
            >
              Edit
            </button>
          </Link>

          <button
            type="button"
            onClick={() => {
              alertContent(row._id);
            }}
            className="btn btn-outline-danger"
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

  const rows_data_for_export = temp_rows.map((d1) =>
    columns
      .slice(0, columns.length - 1)
      .map((d2) => d2.selector.name)
      .map((d3) => d1[d3])
  );

  const columns_data_for_export = columns
    .slice(0, columns.length - 1)
    .map((d) => d.name);

  const download_pdf = () => {
    const doc = new jsPDF();

    const temp_rowData = temp_rows.map((d1) =>
      columns
        .slice(0, columns.length - 1)
        .map((d2) => d2.selector.name)
        .map((d3) => d1[d3])
    );
    doc.autoTable({
      head: [columns_data_for_export],
      body: temp_rowData,
    });
    // console.log(columns_data_for_export, temp_rows);
    doc.save("client_list.pdf");
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  const getUserData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.users);
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
        deleteUser(id);
      }
    });
  };

  const deleteUser = async (id) => {
    console.log(id);
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getUserData();
        notify();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">User Information</h3>
            </div>
            <div className="card-body">
              <div
                id="example1_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row my-3">
                  <div className="col-sm-12 col-md-8 ">
                    <Link to="/add-user">
                      <button
                        type="button"
                        style={{ marginRight: "5px" }}
                        className="btn btn-primary"
                      >
                        Add User
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
                      <button
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

                      <button
                        className="btn btn-secondary buttons-pdf buttons-html5"
                        tabIndex="0"
                        aria-controls="example1"
                        type="button"
                        onClick={download_pdf}
                      >
                        <span>PDF</span>
                      </button>
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
    </div>
  );
};

export default UserList;
