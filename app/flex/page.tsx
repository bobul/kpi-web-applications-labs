export default function Page() {
  return (
    <main className="h-screen flex flex-col">
      <div className="w-full h-1/4 bg-teal-400">1</div>
      <div className="w-full h-3/4 flex">
        <div className="w-3/4 flex-col h-full">
          <div className="h-3/4 bg-teal-800 flex">
            <div className="flex flex-col h-full w-1/3">
              <div className="h-1/2 bg-orange-300">1</div>
              <div className="h-1/2 bg-orange-500">1</div>
            </div>
            <div className="h-full w-2/3 bg-blue-600">1</div>
          </div>
          <div className="w-full h-1/4 bg-black">1</div>
        </div>
        <div className="w-1/4 h-full bg-orange-100">1</div>
      </div>
    </main>
  )
}