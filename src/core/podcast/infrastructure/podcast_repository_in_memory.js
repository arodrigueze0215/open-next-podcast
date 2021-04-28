    export default class PodcastRepository {
    constructor () {
        this.allPodcast = new Array();
    }
     all() {        
        return this.allPodcast;
    }

    store(podcast) {
        this.allPodcast.push(podcast)
    }
}