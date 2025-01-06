export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 opacity-50"></div>
      

      <div className="relative z-10 text-center">
        <p className="text-lg md:text-xl text-white mb-6">
          Bu sizning yangi loyihangizga xush kelibsiz! React, Next.js va Tailwind CSS bilan ishlashni davom ettiring.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/api/users"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-md shadow-md transition"
          >
            Usres
          </a>
     
        </div>
      </div>
      
      

      <footer className="absolute bottom-4 text-sm text-gray-300">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/rahmatillo9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Butcher
          </a>
        </p>
      </footer>
    </div>
  );
}
