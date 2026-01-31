export default function Members() {
  const members = [
    { name: '민지', englishName: 'Minji', birth: '2004.05.07', color: 'from-pink-400 to-pink-500' },
    { name: '하니', englishName: 'Hanni', birth: '2004.10.06', color: 'from-purple-400 to-purple-500' },
    { name: '다니엘', englishName: 'Danielle', birth: '2005.04.11', color: 'from-blue-400 to-blue-500' },
    { name: '해린', englishName: 'Haerin', birth: '2006.05.15', color: 'from-green-400 to-green-500' },
    { name: '혜인', englishName: 'Hyein', birth: '2008.04.21', color: 'from-yellow-400 to-yellow-500' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">멤버 소개</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`h-32 bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold">{member.name}</h2>
                  <p className="text-lg">{member.englishName}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">생년월일: {member.birth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
