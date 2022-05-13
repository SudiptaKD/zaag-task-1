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
  console.log("postsTable", posts);
  return (
    <div>
      {posts?.map((i) => {
        return <h6>{i.title}</h6>;
      })}
    </div>
  );
};

export default Table;
