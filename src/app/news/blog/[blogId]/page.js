const DynamicPage = ({ params, searchParams }) => {


    return (
        <div>
            <h1 className="text-4xl font-bold text-center">
                Dynamic Route {params.blogId}
            </h1>
            <h1 className="text-4xl font-bold text-center">
                Dynamic Route {searchParams.id}
            </h1>
        </div>
    );
};

export default DynamicPage;
