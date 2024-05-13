import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1>This is GalleryPage component</h1>
      <div className="text-center">
        <h2>Regular Image</h2>
        <img
          src="https://nextjs.org/api/docs-og?title=Components:%20%3Cimage%3E"
          alt=""
          className="w-[500px] h-[300px] object-cover mx-auto"
        />
      </div>
      <div className="text-center">
        <h2>Next Image</h2>
        <Image
        className="mx-auto object-cover"
          src="https://nextjs.org/api/docs-og?title=Components:%20%3Cimage%3E"
          alt="next js"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
