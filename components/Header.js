import Image from 'next/image'
import HeaderItem from './HeaderItem'

import { HomeIcon, SearchIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, UserIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow max-w-2xl justify-evenly">
                <HeaderItem name="Home" Icon={HomeIcon}/>
                <HeaderItem name="Trending" Icon={LightningBoltIcon}/>
                <HeaderItem name="Verified" Icon={BadgeCheckIcon}/>
                <HeaderItem name="Collections" Icon={CollectionIcon}/>
                <HeaderItem name="Search" Icon={SearchIcon}/>
                <HeaderItem name="Acount" Icon={UserIcon}/>
            </div>
            <Image 
                className='object-contain'
                src='https://links.papareact.com/ua6/'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
