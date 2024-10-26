import Image from 'next/image';
import React from 'react'

interface Props{
  icon: string;
}

 const SocialMediaConatct: React.FC<Props> = ({icon}) => {
  return (
    <div className='w-[60px] h-[60px] dark:bg-white flex justify-center items-center rounded-full'>
      <Image src={icon} alt="fb icon" />
    </div>
  )
}


export default SocialMediaConatct;