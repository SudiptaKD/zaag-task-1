import axios from "axios";
import React, { useEffect, useState } from "react";
import { Hit, RootObject } from "./interface";
import Table from "./Table";

const Home = () => {
  const [posts, setPosts] = useState<Hit[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let x: Hit[] | undefined;
  let y: Hit[] | undefined;

  let url = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0";

  async function fetchPosts() {
    axios.get<RootObject>(url).then((response) => {
      x = response.data?.hits;
      setIsLoading(false);
      setPosts(x);
      console.log("main", x);
    });
  }
  async function fetchPostsAgain() {
    axios.get<RootObject>(url).then((response) => {
      y = [];
      y = response.data?.hits;
    });
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setInterval(function () {
      fetchPostsAgain();
      // eslint-disable-next-line array-callback-return
      y?.map((i) => {
        x?.unshift(i);
      });
      console.log("posts", posts);
      setPosts(x);
    }, 10000);
  }, [isLoading]);

  return (
    <>
      {/* {!posts && <h1>wait</h1>} */}
      {!posts && (
        <div>
          <Table data={undefined} />
        </div>
      )}
      {posts && (
        <div>
          <Table data={posts} />
        </div>
      )}
    </>
  );
};

export default Home;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Hit, RootObject } from "./interface";

// const Home = () => {
//   const [posts, setPosts] = useState<RootObject>();
//   const [posts2, setPosts2] = useState<RootObject>();
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   let x: Hit[] | undefined;

//   let url = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0";

//   async function fetchPosts() {
//     axios.get<RootObject>(url).then((response) => {
//       setPosts(response.data);
//       x = posts?.hits;
//       setIsLoading(false);
//       console.log("main", posts);
//       setInterval(function () {
//         fetchPostsAgain();
//       }, 10000);
//       //   setTimeout(() => {
//       //     fetchPostsAgain();
//       //   }, 2000);
//       //   setTimeout(() => {
//       //     fetchPostsAgain();
//       //   }, 4000);
//     });
//   }
//   async function fetchPostsAgain() {
//     axios.get<RootObject>(url).then((response) => {
//       console.log("again", response.data);
//       setPosts(undefined);
//       setPosts(response.data);
//       console.log("hits1", x);
//       // eslint-disable-next-line array-callback-return
//       posts?.hits.map((i) => {
//         x?.push(i);
//       });
//       console.log("hits2", x);
//     });
//   }
//   useEffect(() => {
//     fetchPosts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoading]);

//   return <div>Home</div>;
// };

// export default Home;
