import React, { useRef } from 'react';
import ImagePodcast from './Image.jsx'
import useGetImage from '../effects/useGetImage';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const PodcastComponent = React.memo(props => {
    const { id, title, description, duration, uploaded_at, picture }= props.podcast
    const imgRef = useRef()
    useGetImage(imgRef)
    return (
        <React.Fragment>
            <article className="podcast-item">
                <ImagePodcast ref={imgRef} 
                    picture={picture} 
                    title={title}
                    />
                <div className="podcast-info">
                    <div className="podcast-info__container">
                        <h1 className="podcast-info__title">{title}</h1>
                        <div className="podcast-info__details">
                            <h3 className="podcast-info__uploaded">{uploaded_at.formatDate()}</h3>
                            <h3>|</h3>
                            <h3 className="podcast-info__duration">{duration.humanize()}</h3>
                        </div>
                        <div className="podcast-info__description">
                            <p>{description.ellipsis(100) === ''? '-- NO DESCRIPTION --' : description.ellipsis(100)}</p>
                        </div>
                        <div className="podcast-info__play-container">
                            <FontAwesomeIcon 
                                size='2x'
                                onClick={props.onPlay}
                                data-id={id}
                                icon={props.playIcon}
                                />
                        </div>
                    </div>
                </div>
            </article>
            <style jsx>{`
                .list-podcast { 
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 100px;
                }
                
                .podcast-item {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    height 100%
                    border-radius: 6px;
                    box-shadow: 4px 4px 12px rgba(0,0,0,0.15);
                    margin:1em;

                }
                
                .podcast-image__container img {
                    border-radius:6px 6px 0px 0px;
                    width: 100%;
                    height: 432px;
                }
                
                
                .podcast-info {
                    width: 95%;
                    margin: 30px 15px;
                }

                .podcast-info__title {
                    font-size: 24px;
                }

                .podcast-info__details {
                    display: flex;
                    flex-direction: row;
                }
                .podcast-info__details h3 {
                    margin: auto 3px;
                }
                /**
                 * Media Queries
                 *******************************************
                 */
                 @media screen and (min-width: 1080px) {
                    .podcast-item {
                        flex-direction: row;
                        height: 100%;
                    } 
                    .podcast-image__container img {
                        height: 100%;
                        width: 350px;

                    }
                  
                    .podcast-info {
                        width: 100%;
                        margin: 30px 60px;
                    }

                }
                
                @media screen and (min-width: 1325px) {
                    .podcast-item {
                        height: 350px;
                        flex-direction: row;
                    }

                    .podcast-image__container img {
                        border-radius:6px 0px 0px 6px;
                    }
                  
                    .podcast-info__description {
                        height: 69px;
                    }
                }

            `}</style>
        </React.Fragment>
    )
}, (prevProps, nextProps) => `${prevProps.podcast.id}` !== nextProps.currentPlay);

export default PodcastComponent;