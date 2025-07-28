import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt={`${APP_NAME} logo`}
            width={48}
            height={48}
            priority
          />
          {/* Este span ahora solo aparece en pantallas lg o más grandes */}
          <span className="hidden lg:block ml-3 text-2xl font-bold">
            {APP_NAME}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
