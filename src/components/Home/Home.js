import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
}
const slideImages = [
    {
        url: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-massimo-dutti/subhome-xmedia-22//w/1920/IMAGE-landscape-fill-01768e4d-6d38-4cc6-b9a2-1df0f49e2868-default_0.jpg?ts=1685605490714',
    },
    {
        url: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-suits/subhome-xmedia-23//w/1920/IMAGE-landscape-fill-42ce582f-2ca6-4789-8865-5ccf981d4d8a-default_0.jpg?ts=1685704888292',

    },
    {
        url: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-23//w/1920/IMAGE-landscape-fill-210ba689-c0da-4004-a1da-2618c8215e0a-default_0.jpg?ts=1685703858524',

    },
];



const Slidee = () => {

    return (
        <>
            <Slide >
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

                        </div>
                    </div>
                ))}
            </Slide>
        </>)
}
const Home = () =>{

return(
    <>
    <Slidee/>
    </>
)

}
export default Home








