import React, { useEffect, useState, useRef } from "react";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import { capitalizeFirstLetter } from "../../utils/functions";
import Tooltip from "rc-tooltip";
import Header from "../../Components/Admin/Layout/Header";
import Menu from "../../Components/Admin/Layout/Menu";
import Footer from "../../Components/Admin/Layout/Footer";
import { useSession } from "next-auth/react";

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

const Leads = () => {
  // console.log("Leads");

  const refContainer = useRef();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [decoded, setDecode] = useState(4);

  // console.log(token, "Leads");

  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      const decoded = jwt_decode(session.data.user.token);
      setDecode(decoded);
    }
  }, [session.status]);

  const Name = (row) => {
    return row.Name;
  };
  const Email_id = (row) => {
    return row.Email_id;
  };
  const Phone_no = (row) => {
    return row.Phone_no;
  };
  const message = (row) => {
    return row.message;
  };
  const course = (row) => {
    return row.course;
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
      name: "Name",
      selector: Name,
      sortable: true,
      // width: "210px",
      cell: (row) => <div>{capitalizeFirstLetter(row.Name)}</div>,
    },

    {
      name: "Email",
      selector: Email_id,
      sortable: true,
      // width: "210px",
      cell: (row) => (
        <a
          className="text-decoration-none text-dark"
          href={`mailto:${row.Email_id}`}
        >
          {row.Email_id}
        </a>
      ),
    },
    {
      name: "Phone",
      selector: Phone_no,
      sortable: true,
      // width: "210px",
    },
    {
      name: "Message",
      selector: message,
      sortable: true,
      width: "210px",
      cell: (row, i) => (
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay={<span>{row.message}</span>}
        >
          <div
            style={{
              width: "210px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            id={i}
          >
            {row.message}
          </div>
        </Tooltip>
      ),
    },
    {
      name: "Course",
      selector: course,
      sortable: true,
      // width: "210px",
      cell: (row) => <div>{row.course == "null" ? "" : row.course}</div>,
    },
    {
      name: "Action",
      button: true,
      grow: 1,
      width: "300px",
      cell: (row) => (
        <div>
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
  const columns2 = [
    {
      name: "Name",
      selector: Name,
      sortable: true,
      // width: "210px",
      cell: (row) => <div>{capitalizeFirstLetter(row.Name)}</div>,
    },

    {
      name: "Email",
      selector: Email_id,
      sortable: true,
      // width: "210px",
      cell: (row) => (
        <a
          className="text-decoration-none text-dark"
          href={`mailto:${row.Email_id}`}
        >
          {row.Email_id}
        </a>
      ),
    },
    {
      name: "Phone",
      selector: Phone_no,
      sortable: true,
      // width: "210px",
    },
    {
      name: "Message",
      selector: message,
      sortable: true,
      width: "210px",
      cell: (row, i) => (
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay={<span>{row.message}</span>}
        >
          <div
            style={{
              width: "210px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            id={i}
          >
            {row.message}
          </div>
        </Tooltip>
      ),
    },
    {
      name: "Course",
      selector: course,
      sortable: true,
      // width: "210px",
      cell: (row) => <div>{row.course == "null" ? "" : row.course}</div>,
    },
    // {
    //   name: "Action",
    //   button: true,
    //   grow: 1,
    //   width: "300px",
    //   cell: (row) => (
    //     <div>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           alertContent(row.id);
    //         }}
    //         className="btn btn-sm btn-outline-danger"
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   ),
    // },
  ];

  const temp_rows = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(searchValue.toLowerCase()) !==
      -1
  );

  // console.log(temp_rows, "temp_rows");

  const rows_data_for_export = temp_rows.map((d1) =>
    columns
      .slice(0, columns.length - 1)
      .map((d2) => d2.selector.name)
      .map((d3) => d1[d3])
  );

  // console.log(temp_rows, "temp_rows");
  // console.log(columns, "columns");

  const columns_data_for_export = columns
    .slice(0, columns.length - 1)
    .map((d) => d.name);

  // console.log(rows_data_for_export, "rows_data_for_export");
  // console.log(columns_data_for_export, "columns_data_for_export");

  useEffect(() => {
    if (session.status === "authenticated") {
      getUserData();
    }
    // eslint-disable-next-line
  }, [session.status]);

  const getUserData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/leads`, {
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
        deleteLead(id);
      }
    });
  };

  const deleteLead = async (id) => {
    if (session.status === "authenticated") {
      await axios
        .delete(
          `${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/lead-delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${session.data.user.token}`,
            },
          }
        )
        .then((res) => {
          getUserData();
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
              <h3 className="card-title">Leads Information</h3>
            </div>
            <div className="card-body">
              <div
                id="example1_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row my-3">
                  <div className="col-sm-12 col-md-8 "></div>
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
                    </div>
                  </div>
                </div>
                <div ref={refContainer}>
                  <DataTable
                    title="Client List"
                    customStyles={customStyles}
                    columns={decoded.role == 1 ? columns : columns2}
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

export default Leads;
