const PagesHeader = ({ pageTitle }) => {
  return (
    <>
      <header
        className={`text-gray-700 bg-header-bg bg-fixed bg-no-repeat md:bg-cover bg-contain md:bg-left-bottom bg-top h-[200px] w-full flex items-center justify-center`}
      >
        <div className="">
          <h1 className="text-gray-100 font-semibold lg:text-4xl text-3xl">
            {pageTitle}
          </h1>
        </div>
      </header>
    </>
  );
};

export default PagesHeader;
