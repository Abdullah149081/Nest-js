"use client";
const Error = ({ error, reset }) => {
  return (
    <div>
      <h1>This is Error component</h1>
      <div className="flex justify-center flex-col mt-10">
        <p className="text-center text-red-500">{error.message}</p>
        <button onClick={() => reset()}>Retry</button>
      </div>
    </div>
  );
};

export default Error;
