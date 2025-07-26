import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../imports";
import service from "../../appwrite/configuration";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    //this is update post
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        service.deleteFile(post.featured_image);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featured_image: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await service.uploadFile(data.image[0]);
      //this is create post
      if (file) {
        const fileId = file.$id;
        data.featured_image = fileId;
        const dbPost = await service.createPost({
          ...data,
          userID: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-2xl w-full mx-auto mt-12 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg text-white "
      >
        {/* Top bar with user */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${
              userData?.name || "User"
            }`}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold text-lg">
            {userData?.name || "User"}
          </span>
        </div>

        {/* Title */}
        <input
          {...register("title", { required: true })}
          placeholder="What's the title?"
          className="w-full bg-transparent border-none focus:outline-none text-xl font-bold placeholder-gray-300 mb-4"
        />

        {/* Slug (Hidden but used for logic) */}
        <input type="hidden" {...register("slug", { required: true })} />

        {/* RTE */}
        <div className="mb-6 hidden sm:block">
          <label className="text-sm font-semibold  mb-2 text-gray-200">
            Content
          </label>
          <RTE
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>

        <textarea
          {...register("content", { required: true })}
          placeholder="Write your thoughts..."
          rows={4}
          className="w-full bg-transparent border-none resize-none focus:outline-none text-base text-white placeholder-gray-400 mb-3 sm:hidden block"
        />

        {/* File Upload */}
        <div className="mb-6">
          <label className="text-sm font-semibold block mb-2 text-gray-200">
            Featured Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: !post })}
            className="w-full text-sm text-white file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-indigo-600/40 file:text-white hover:file:bg-indigo-600/70 transition"
          />
        </div>

        {/* Preview Image */}
        {post && (
          <div className="mb-4 rounded-xl overflow-hidden border border-white/20">
            <img
              src={service.getFilePreview(post.featured_image)}
              alt="Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            bgColor="bg-blue-600"
            className="px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition"
          >
            {post ? "Update Post" : "Publish"}
          </Button>
        </div>
      </form>
    </>
  );
}
