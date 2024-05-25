import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'} className="hidden items-center space-x-2 sm:flex">
      <div className="flex flex-col text-sm leading-none">
        <span className="text-lg font-bold tracking-tighter dark:text-white">Fuat</span>
      </div>
    </Link>
  )
}

export default Logo