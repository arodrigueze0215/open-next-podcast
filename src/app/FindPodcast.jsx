import React from 'react'

const FindPodcast = (props) => {
    return (
        <React.Fragment>
            <div className="list-podcast__more">
                <h3>{`Podcast Not found. You can get more Podcast with (${props.query})`}</h3>
                <button onClick={props.onClick}> Get more podacast </button>
            </div>
            <style jsx>{`
                .list-podcast__more {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .list-podcast__more button {
                    background: #263669;
                    color: white;
                    height: 32px;
                    cursor: pointer;
                    margin: auto 32px;
                    border: 1px solid #263669;
                    border-radius: 4px;
                }
            `}</style>
        </React.Fragment>
    );
}
export default FindPodcast