/**
 * Auto-generated Media Assets from Pexels API
 * Project: ml-bangla
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "38863563",
    "url": "https://images.pexels.com/photos/38863563/pexels-photo-38863563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Scenic view of architectural buildings and greenery in Dhaka, Bangladesh.",
    "avg_color": "#899486"
},
  editorialPhotos: [
    {
    "id": "35531557",
    "url": "https://images.pexels.com/photos/35531557/pexels-photo-35531557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "The Shaheed Minar monument in Bangladesh, symbolizing language movement sacrifices.",
    "avg_color": "#5C5250"
},
    {
    "id": "35140170",
    "url": "https://images.pexels.com/photos/35140170/pexels-photo-35140170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A serene view of buildings by the river in Pirganj, Bangladesh, under clear blue skies.",
    "avg_color": "#91B4D0"
},
    {
    "id": "37009551",
    "url": "https://images.pexels.com/photos/37009551/pexels-photo-37009551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Aerial view of National Parliament House, Dhaka, surrounded by lush greenery under a clear sky.",
    "avg_color": "#8F8A74"
}
  ],
  ambientVideo: {
    "id": "15439666",
    "videoUrl": "https://videos.pexels.com/video-files/15439666/15439666-hd_1918_1080_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/15439666/3d-cgi-clip-dj-15439666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1918,
    "height": 1080
}
};
