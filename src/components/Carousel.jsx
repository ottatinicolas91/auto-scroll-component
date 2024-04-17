import Card from './Card'
import data from '../data.json'
import Marquee from 'react-fast-marquee'

export default function Carousell() {
  return (
    <div className='my-20'>
      <Marquee loop0 speed="35" >
        <div className='flex flex-row' >
          {data.map((item) => {
            return (
              <div className="my-[0.511rem] flex items-center ml-[2.688rem]" >
                  <div className='w-[186.32px] h-[186.32px]'>
                    <Card key={item.id} item={item}/>
                  </div>
                </div>
            )
          })}
        </div>
      </Marquee>
      <Marquee loop0 speed="35" direction='right'>
        <div className='flex flex-row' >
          {data.map((item) => {
            return (
              <div className="my-[1.023rem] flex items-center ml-[2.688rem]" >
                  <div className='w-[186.32px] h-[186.32px]'>
                    <Card key={item.id} item={item}/>
                  </div>
                </div>
            )
          })}
        </div>
      </Marquee>
    </div>
  );
}

<div className='flex m'></div>