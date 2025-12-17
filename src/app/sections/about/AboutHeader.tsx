export default function AboutHeader() {
  return (
    <div className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30 will-change-transform">
      <h1 className="text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white">
        A little bit about me
      </h1>
      <p className="w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080] font-semibold">
        Who I am and what I do.
      </p>
    </div>
  );
}
