import React from "react"
import Link from 'next/link'

const Banner = () => {
    return (
        <Link href="/" className="bannerContainer">
            <img src="/logo.svg" alt="Octopus Group Logo" />
        </Link>
    )
}

export default Banner