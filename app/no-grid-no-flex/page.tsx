export default function Page() {
  return (
    <main className="h-screen relative">
      <div className="w-full h-1/4 bg-teal-400">1</div>
      <div className="w-full h-3/4 relative">
        <div className="w-3/4 h-full absolute left-0 top-0">
          <div className="h-3/4 bg-teal-800 relative">
            <div className="absolute left-0 top-0 h-full w-1/3">
              <div className="h-1/2 bg-orange-300">1</div>
              <div className="h-1/2 bg-orange-500">1</div>
            </div>
            <div className="absolute left-1/3 top-0 h-full w-2/3 bg-blue-600">1</div>
          </div>
          <div className="w-full h-1/4 bg-black">1</div>
        </div>
        <div className="w-1/4 h-full absolute right-0 top-0 bg-orange-100">1</div>
      </div>
    </main>
  );
}
