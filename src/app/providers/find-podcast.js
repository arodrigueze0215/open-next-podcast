import FindPodcast from '@core/podcast/actions/find_podcast'
import PodcastRepository from '@core/podcast/infrastructure/browser_podcast_repository'

export const findPodcast = (data) => {
    const browserPodcastRepository = new PodcastRepository(data);
    return new FindPodcast(browserPodcastRepository);
}
