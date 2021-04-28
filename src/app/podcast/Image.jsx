import React from 'react'
import Image from 'next/image'
const PodcastImage = React.forwardRef((props, ref) => {
    return(
        <div  width="350px" height="350px" className="podcast-image__container">
            <Image
                ref={ref}
                width="350px"
                height="350px" 
                data-img-src={props.picture}
                src={props.picture?props.picture:'/podcast-bg.png'}
                alt={props.title}
            />
        </div>
    );
});
export default PodcastImage