
import axios from 'axios';

const VIMEO_API_URL = 'https://api.vimeo.com';
const ACCESS_TOKEN = "46327ad9e7494bba27e48968e005d6b9";

const vimeoClient = axios.create({
  baseURL: VIMEO_API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const getVideos = async (page = 1, perPage = 100) => {
  try {
    const response = await vimeoClient.get('/me/videos', {
      params: {
        page,
        per_page: perPage,
        fields: 'uri,name,description,pictures,embed,tags',
        sort: 'date',
        direction: 'desc'
      },
    });
    
    return response.data.data.map(video => ({
      id: video.uri.split('/').pop(),
      title: video.name,
      description: video.description,
      image: video.pictures.sizes[3].link, // Use a medium/large size
      video: video.embed.html.match(/src="([^"]+)"/)?.[1] || '', // Extract src from embed code or use player_embed_url if available
      tags: video.tags.map(tag => tag.name.toLowerCase())
    }));
  } catch (error) {
    console.error('Error fetching Vimeo videos:', error);
    return [];
  }
};
