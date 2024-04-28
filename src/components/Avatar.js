import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function Avatar({ imageURL, userId, disable }) {

    const path = usePathname()
    return (
        <div>
            <Link href={disable ? path : '/' + userId}>
                {
                    imageURL ? (
                        <Image width={20} height={20} alt='profile' src={imageURL} className="h-10 w-10 rounded-full" />
                    )
                        :
                        (
                            <FaUserCircle className=" w-16 h-16 mx-auto" />
                        )
                }
            </Link>
        </div>
    )
}
