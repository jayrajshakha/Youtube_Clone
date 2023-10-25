export interface InitialState {
       video : HomepageVideos[],
       recommendedVideos : RecommendedVideos[],
       searchResults : [],
       curruntPlaying : CurruntPlaying | null,
       searchTerm : string,
       nextPageToken : string | null,
} 

export interface HomepageVideos {}
export interface CurruntPlaying {}
export interface RecommendedVideos {}