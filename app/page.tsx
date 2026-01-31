export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">NewJeans</h1>
          <p className="text-xl text-gray-600">뉴진스 팬 페이지</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
          <p className="text-lg text-gray-600 mb-6">
            NewJeans는 2022년 데뷔한 5인조 걸그룹입니다.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-pink-500">2022</div>
              <div className="text-gray-600">데뷔</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-500">5</div>
              <div className="text-gray-600">멤버</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-500">∞</div>
              <div className="text-gray-600">팬덤</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
