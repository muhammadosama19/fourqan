function Surah() {
  return (
    <div className="flex justify-between items-center py-[2px] px-2 hover:cursor-pointer hover:bg-neutral-200 hover:rounded-full">
      <span>albafkj</span>
      <span>0</span>
    </div>
  );
}

function Menu() {
  return (
    <div className="h-full px-2 w-80">
      <div className="bg-white py-2 px-2 rounded-lg  overflow-auto h-full overt">
        <div className="flex justify-between items-center mr-3 mb-3">
          <h1 className=" px-6 py-1 rounded-full hover:bg-gray-200 ml-1">
            Surah
          </h1>
          <h1 className="bg-gray-200 px-6 py-1 rounded-full mr-1">Surah</h1>
        </div>
        <h1 className="border-t-[1px] p-2"></h1>
        <div className="">
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
          <Surah />
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main className=" mx-10 my-5 h-screen flex justify-between items-center">
      <Menu />
      <div className="h-screen bg-white py-1 px-4 rounded-lg w-full overflow-auto">
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
        <Ayah />
      </div>
    </main>
  );
}
function Ayah() {
  return (
    <div className="w-full h-auto px-5 py-5 my-1 bg-slate-100 rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:bg-slate-50 p-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>

        </div>
        <h1 className="text-2xl text-right">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</h1>
      </div>
    </div>
  );
}
