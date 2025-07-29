import React from 'react';
import type { SpotifyTrack } from '../services/spotifyApi';
import { spotifyApi } from '../services/spotifyApi';
import './TrackResult.css';

interface TrackResultProps {
  track: SpotifyTrack;
}

class TrackResult extends React.Component<TrackResultProps> {
  render() {
    const { track } = this.props;
    const imageUrl = spotifyApi.getBestImageUrl(track.album.images);
    const duration = spotifyApi.formatDuration(track.duration_ms);
    const artistNames = track.artists.map((artist) => artist.name).join(', ');

    return (
      <div className="track-result">
        <div className="track-artwork">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${track.album.name} cover`}
              className="album-image"
            />
          ) : (
            <div className="album-placeholder">
              <span>♪</span>
            </div>
          )}
        </div>

        <div className="track-info">
          <h3 className="track-name">{track.name}</h3>
          <p className="track-artist">{artistNames}</p>
          <p className="track-album">{track.album.name}</p>
        </div>

        <div className="track-actions">
          <span className="track-duration">{duration}</span>
          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-link"
            title="Open in Spotify"
          >
            <span className="spotify-icon">▶</span>
            Play on Spotify
          </a>
        </div>
      </div>
    );
  }
}

export default TrackResult;
