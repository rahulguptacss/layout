import Link from 'next/link';
import Header from './components/header/page';
import Footer from './components/footer/page';
import CalculateCTASection from './components/calculatecta/page';

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <Header />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] py-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-[#109c54]/10 to-[#0d282b]/10 dark:from-[#109c54]/20 dark:to-[#0d282b]/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#109c54] to-[#096333] drop-shadow-sm select-none">
            404
          </h1>
          
          <div className="mt-6 md:mt-8 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0d282b] dark:text-white">
              Oops! Page not found
            </h2>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#0d282b] border border-transparent rounded-full hover:bg-[#109c54] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#109c54] dark:bg-white dark:text-[#0d282b] dark:hover:bg-gray-100 dark:focus:ring-white w-full sm:w-auto"
            >
              <span>Return to Home</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#0d282b] transition-all duration-200 bg-white border border-gray-200 rounded-full hover:border-[#109c54] hover:text-[#109c54] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <CalculateCTASection />
      <Footer />
    </main>
  );
}
