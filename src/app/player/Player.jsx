import React from 'react'
import Audio from '../podcast/Audio.jsx'

const Player = React.forwardRef((props, ref) => {
    const { playAudio, isPlaying } = props;
    React.useEffect(()=>{
        if (isPlaying) ref.current.play();
        else ref.current.pause();
    }, [isPlaying, playAudio]);
    return (
        <React.Fragment>
            <section className="player">
                <Audio ref={ref} audioSrc={props.playAudio} onPlay={props.onPlay} onPause={props.onPause}/>
            </section>
            <style jsx>{`
                .player {
                    position: fixed;
                    background: #263669;
                    width: 100%;
                    height: 100px;
                    bottom: 0px;
                }
            `}</style>
        </React.Fragment>
    );
});
export default Player;