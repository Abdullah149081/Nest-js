const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });

  const data = await res.json();

  return (
    <div>
      <h1>This is PostPage component</h1>
      <ul className="flex flex-wrap gap-2">
        {data.map((post) => (
          <li
            className="bg-gray-800 p-4 text-white font-medium rounded-lg capitalize"
            key={post.id}
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
