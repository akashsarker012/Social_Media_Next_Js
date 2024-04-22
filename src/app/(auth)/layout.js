import Image from 'next/image'
import { Toaster } from 'react-hot-toast';
export default function AuthLayout({ children }) {
    return (
      <main>
        <header className="w-full sticky top-0 h-16 shadow z-40 bg-white">
        <Toaster/>
          <div className="container mx-auto flex justify-center items-center h-full">
             <Image
               src={'/assets/logo.png'}
               width={190}
               height={64}
               alt='logo'
             />
          </div>
        </header>
        { children}
      </main>
    );
  }
  