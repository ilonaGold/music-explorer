// Spotify Web API Service
// Using Client Credentials Flow for public search without user login

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{
    id: string;
    name: string;
  }>;
  album: {
    id: string;
    name: string;
    images: Array<{
      height: number;
      url: string;
      width: number;
    }>;
  };
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
  preview_url: string | null;
}

export interface SpotifySearchResponse {
  tracks: {
    items: SpotifyTrack[];
    total: number;
  };
}

class SpotifyApiService {
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;
  private tokenExpiresAt: number = 0;

  constructor() {
    // These should be environment variables in production
    this.clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID || '';
    this.clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || '';

    if (!this.clientId || !this.clientSecret) {
      console.error(
        'Spotify API credentials are missing. Please set VITE_SPOTIFY_CLIENT_ID and VITE_SPOTIFY_CLIENT_SECRET environment variables.'
      );
    }
  }

  /**
   * Get access token using Client Credentials Flow
   */
  private async getAccessToken(): Promise<string> {
    // Return cached token if still valid
    if (this.accessToken && Date.now() < this.tokenExpiresAt) {
      return this.accessToken;
    }

    const credentials = btoa(`${this.clientId}:${this.clientSecret}`);

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      });

      if (!response.ok) {
        throw new Error(`Token request failed: ${response.status}`);
      }

      const data = await response.json();

      this.accessToken = data.access_token;
      this.tokenExpiresAt = Date.now() + data.expires_in * 1000 - 60000; // 1 minute buffer

      if (!this.accessToken) {
        throw new Error('Failed to receive access token from Spotify');
      }

      return this.accessToken;
    } catch (error) {
      console.error('Failed to get Spotify access token:', error);
      throw new Error('Unable to search for tracks. Please try again.');
    }
  }

  /**
   * Search for tracks using Spotify Web API
   */
  async searchTracks(
    query: string,
    limit: number = 20
  ): Promise<SpotifyTrack[]> {
    if (!query.trim()) {
      throw new Error('Search query cannot be empty');
    }

    if (!this.clientId || !this.clientSecret) {
      throw new Error('Unable to search for tracks. Please try again.');
    }

    try {
      const token = await this.getAccessToken();

      const searchParams = new URLSearchParams({
        q: query.trim(),
        type: 'track',
        limit: limit.toString(),
      });

      const response = await fetch(
        `https://api.spotify.com/v1/search?${searchParams}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Search request failed: ${response.status}`);
      }

      const data: SpotifySearchResponse = await response.json();
      return data.tracks.items;
    } catch (error) {
      console.error('Failed to search tracks:', error);
      throw new Error('Unable to search for tracks. Please try again.');
    }
  }

  /**
   * Format track duration from milliseconds to MM:SS
   */
  formatDuration(durationMs: number): string {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * Get the best quality image from album images array
   */
  getBestImageUrl(images: SpotifyTrack['album']['images']): string | null {
    if (!images || images.length === 0) return null;

    // Sort by size and return the medium sized image (around 300px)
    const sortedImages = images.sort((a, b) => b.width - a.width);

    // Prefer medium size (around 300px) or fall back to largest
    const mediumImage = sortedImages.find(
      (img) => img.width >= 250 && img.width <= 400
    );
    return mediumImage?.url || sortedImages[0]?.url || null;
  }
}

// Export singleton instance
export const spotifyApi = new SpotifyApiService();
