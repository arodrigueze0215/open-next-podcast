import PodcastRepository from '../../src/core/podcast/infrastructure/podcast_repository_in_memory'
describe('test the fetch of audioboom API', () => {
    test('get all podcast from API', () => {
        const podcastRepository = new PodcastRepository();
        const all = podcastRepository.all()
        expect(all.length).toBe(0)    
    });
});