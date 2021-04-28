import React from 'react';

const Audio = React.forwardRef((props, ref) => {
    const {audioSrc, onPlay, onPause}= props;
    return(
        <React.Fragment>            
            <div className="podcast-info__audio">
                <audio src={audioSrc} ref={ref} controls onPlay={onPlay} onPause={onPause}>
                    <source type="audio/mpeg"/>
                </audio> 
            </div>
            <style jsx>{`
                .podcast-info__audio audio {
                    margin-top: 2em;
                    width: 100%;           
                }
            `}</style>
        </React.Fragment>
    );   
});

export default Audio;