import '../styles/Home.css'
import photo from '../images/photo_sample.png'
import icon from '../images/icon-ready-cropped.png'

function Home(){
    return(
        <main className = 'mainHome'>   

            <h2 className= 'homeDivider'>¿Who are you?</h2>
   
            <div className='homeSectionWrapperA'>
                <div className='homeSectionA1'>
                    <img src={photo} alt="" />
                    <h3>Tomás Cristofani</h3>
                </div>
                <div  className='homeSectionA2'>
                    <h4>About the artist</h4>
                    <p>
                    "Hello! My name is Tom, 24 years old, and I'm a hobbyist artist trying to make some enjoyable content out there during my spare time, whenever my studies allow for it to happen."
                    <br /><br />
                    "I'm from Argentina, and our country is currently struggling financially, and due to this I had to come out of my cave and begin opening commission slots to support myself and my studies. As much as I dislike the fact that I'm doing commissions out of necessity, I still love what I do for people to simply enjoy my work" 
                    "Just don't expect me to ever be satisfied with anything I make."
                    </p>
                </div>
            </div>

            <h2 className= 'homeDivider'>¿What are your goals?</h2>
  
            <div className='homeSectionWrapperB'>
                <p className='homeSectionB1'>
                    As an "amateur" artist, I simply seek to make better works of art that people might enjoy. Whether it is due to commission work or my artistical whims. As I progress, I would be quite interested in making commission work my side job, since drawing is one of the main passions I have in life. My general work stems from Dungeon and Dragons content because it is where I began exposing my art to other people, and thanks to their donations and encouragement is the reason that I am here today."
                    <br /><br />
                    A long term goal for me would be to be involved in some DnD content for a big campaign or the sorts, whether it'd be tokens, maps, illustrations, etc. Something I would really love to try is to make some DnD storytime animations of my own. I'm struggling with the ideas in my head at the moment, but my experience with DnD is still scarce compared to some of the people already putting out this type of content. I'm nothing but a fresh newbie compared to them, so we'll see what happens in the future."
                    <br /><br />
                    Surely there's more for me to attempt in the future, but as of right now, I want to focus on the little things I can afford with my limited free time.
                </p>
                <img className='homeSectionB2' src={icon} alt="" />
            </div>
        </main>
    );
} export default Home