import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../appwrite/configuration";

const PostCard = ({ $id, title, featured_image,userID}) => {
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = userData && userData.$id === userID;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Featured Image */}
      {featured_image && (
        <Link to={`/post/${$id}`}>
          <img
            src={service.getFilePreview(featured_image)}
            alt={title}
            className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
          />
        </Link>
      )}

      {/* Content */}
      <div className="p-4">
        <Link to={`/post/${$id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Action Buttons */}
        <div className="flex justify-between  items-center">
          <Link
            to={`/post/${$id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors  mx-auto"
          >
            Read More
          </Link>

          {/* Edit button - only show for post author */}
          {/* {isAuthor && (
            <Link
              to={`/edit-post/${$id}`}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Edit Post
            </Link> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
// import React from "react";
// import service from "../appwrite/configuration";
// import { Link } from "react-router-dom";

// const PostCard = ({ $id, title, featured_image }) => {
//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full   bg-gray-100 rounded-lg mb-4  overflow-hidden">
//         <div className="w-full  object-fit mb-4">
//           <img
//             src={service.getFilePreview(featured_image)}
//             alt={title}
//             className="rounded-[20px] p-4 "
//           />
//         </div>

//         <h2 className="font-bold text-xl">{title}</h2>
//       </div>
//     </Link>
//   );
// };

// export default PostCard;
