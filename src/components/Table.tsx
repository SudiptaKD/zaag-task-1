import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Hit } from "./interface";

const Table: React.FC<{ data: Hit[] | undefined }> = ({ data }) => {
  const [posts, setPosts] = useState<Hit[]>();
  const [posts2, setPosts2] = useState<Hit[]>();
  useEffect(() => {
    if (data !== undefined) {
      setPosts(data);
    }
  });
  //console.log("postsTable", posts);

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "url",
      headerName: "URL",
      width: 150,
      editable: true,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 150,
      editable: true,
    },
    {
      field: "author",
      headerName: "Author",
      width: 150,
      editable: true,
    },
  ];

  const rows: {
    title: string;
    url: string;
    created_at: Date;
    author: string;
  }[] = [];
  // eslint-disable-next-line array-callback-return
  if (posts) {
    posts?.map((i, j) => {
      rows[j].title = i.title;
      rows[j].url = i.url;
      rows[j].created_at = i.created_at;
      rows[j].author = i.author;
    });
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Table;
