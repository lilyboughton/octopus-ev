import Link from 'next/link'

export default function IndexPage() {
    return (
        <>
            <div className="linksToCars">
                <Link href="/cars/polestar-2" className='link'>
                    <img src='polestar2.webp' />
                    Polestar 2
                </Link>
                <Link href="/cars/tesla-model-y" className='link'>
                    <img src='modely.webp' />
                    Tesla Model Y
                </Link>
            </div>
        </>
    )
}
