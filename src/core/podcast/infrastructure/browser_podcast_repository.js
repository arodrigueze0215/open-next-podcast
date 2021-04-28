import Podcast from '../domain/podcast'
export default class PodcastRepository {
    constructor (allPodcast) {
        this.allPodcast = allPodcast;
    }
    all() {   
        const podcastsList = this.allPodcast.map((podcast) => {
            console.log('before', podcast)
            const pod = new Podcast(
                podcast.id,
                podcast.title || '',
                podcast.description.text || '' ,
                podcast.duration.duration,
                podcast.picture || '',
                podcast.url_audio,
                podcast.uploaded_at.date
            )
            console.log('after', pod)
            return pod            
        });
        return podcastsList
    }
    async findPodcastBy(query) {
        const podcastFromAPI = await PodcastRepository.fetchPodcastsBy(query);
        const { audio_clips } = podcastFromAPI.body
        const podcastsList = audio_clips.map((audio_clip) => {
            let image = '';
            if (audio_clip.urls !== undefined && audio_clip.urls.image !== undefined) image = audio_clip.urls.image;
            else if (audio_clip.urls !== undefined && audio_clip.urls.post_image !== undefined) image = audio_clip.urls.post_image.original;
            return new Podcast(
                audio_clip.id,
                audio_clip.title || '',
                audio_clip.description || '' ,
                audio_clip.duration,
                image,
                audio_clip.urls !== undefined ? audio_clip.urls.high_mp3: '',
                audio_clip.uploaded_at
            )            
        });
        return podcastsList
    }
    static async fetchPodcastsBy(query) {
        const podcasts = await fetch(`https://api.audioboom.com/audio_clips?find[query]=*${query}*`);
        return podcasts.json()
    }

}
