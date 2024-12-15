import profilePic from './assets/hamza.png'
function Card()
{
   return (
<div className="card">
        <img src={profilePic} alt="{Hamza's picture}"className='cardImage' />
        <h2 className='card-title'>Hamza Zaitoun </h2>
        <p className='card-text'>fullstackwebdeveloper</p>
    </div>
   )
}
export default Card