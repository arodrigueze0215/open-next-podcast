import React from 'react';
export default function LayoutListPodcast(props) {
    return (
        <section className="list-podcast">
            {props.children}
        <style jsx>{`
            .list-podcast {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 100px;
            }
        `}</style>
        </section>
        

    );
}