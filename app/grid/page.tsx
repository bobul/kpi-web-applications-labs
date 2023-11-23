export default function Page() {
  return (
    <main className="h-screen grid grid-rows-4 grid-cols-6">
      <div className="row-span-1 col-span-6 bg-teal-400">1</div>
      <div className="row-span-2 col-span-4 grid grid-rows-2 grid-cols-5">
        <div className="grid row-span-4 col-span-2">
          <div className="bg-orange-300">1</div>
          <div className="bg-orange-500">1</div>
        </div>
        <div className="row-span-2 col-start-3 col-span-3 bg-blue-600">1</div>
      </div>
      <div className="row-span-4 col-start-5 col-span-2 bg-orange-500">1</div>
      <div className="row-span-1 col-span-4 bg-black">1</div>
    </main>
  );
}
