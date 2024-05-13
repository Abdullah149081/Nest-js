const NabPage = () => {
  return (
    <div className="py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="/">Go to Home</a>
        </li>
        <li>
          <a href="/gallery">Go to Gallery</a>
        </li>
        <li>
          <a href="/post">Go to post</a>
        </li>
        <li>
          <a href="/error">Go to Error</a>
        </li>
      </ul>
    </div>
  );
};

export default NabPage;
