// import '../styles/global.css';

export default function Card(props) {
  let feed = 'https://d1oah9jnmmw7bq.cloudfront.net';
  return (
    <img className='w-[11.645rem] h-[11.645rem] rounded-lg border border-black shadow-lg'
      key={props.item.name}
      src={feed + props.item.image}
      alt={props.item.name}
    />
  );
}

<div className="rounded-lg b" > </div>