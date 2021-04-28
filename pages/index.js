import React from 'react';

//core
import ListAllPodcast from '@core/podcast/actions/list_all_podcasts/';
import { PodcastRepository } from '@core/podcast/infrastructure/api_podcast_repository/';
import { default as BrowserRepository } from '@core/podcast/infrastructure/browser_podcast_repository';

//App
import App from '@app/index'
import  { findPodcast } from '@app/providers/find-podcast'

const Index = (props) => {
    const browserRepository = new BrowserRepository(props.podcasts);
    const podcasts = browserRepository.all();
    return (
        <React.Fragment>
            <App podcasts={podcasts} findPodcast={findPodcast(podcasts)}/>
            <style jsx global>{`
                body {
                    font-family: system-ui, Helvetica, Arial, sans-serif;
                    margin: 0;
                    color: #263669;
                }
            `}</style>
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const podcastRepository = new PodcastRepository();
    const listAllPodcast = new ListAllPodcast(podcastRepository);
    const podcasts = await listAllPodcast.execute();

    return {
        props: {
            podcasts: JSON.parse(JSON.stringify(podcasts))
        }
        
    }

};

export default Index