// utils/audioManager.ts

class AudioManager {
  private static instance: AudioManager;
  public audio: HTMLAudioElement | null = null;
  public isPlaying: boolean;
  public volume: number;
  private songs: { title: string; src: string }[];
  public currentSongIndex: number = 0;

  private constructor() {
    this.songs = [
      { title: 'It\'s Beginning To Look A Lot Like Christmas', src: './music/beginning_christmas.mp3' },
      { title: 'The Most Wonderful Time Of The Year', src: './music/most_wonderful.mp3' },
      // Add more songs as needed
    ];

    // Initialize volume and isPlaying from localStorage or defaults
    if (typeof window !== 'undefined') {
      const savedVolume = localStorage.getItem('audioVolume');
      this.volume = savedVolume ? parseFloat(savedVolume) : 0.5;

      const savedIsPlaying = localStorage.getItem('isPlaying');
      this.isPlaying = savedIsPlaying ? savedIsPlaying === 'true' : true; // Default to true

      // Initialize audio object
      this.audio = new Audio(this.songs[this.currentSongIndex].src);
      this.audio.volume = this.volume;
      this.audio.onended = this.handleNext;
    } else {
      // Default values for SSR
      this.volume = 0.5;
      this.isPlaying = true; // Default to true
    }
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public play = () => {
    if (this.audio) {
      this.audio.play().catch((error) => {
        if (error.name === 'NotAllowedError') {
          console.warn('Autoplay prevented:', error);
          this.isPlaying = false;
        } else {
          console.warn('Error playing audio:', error);
        }
      });
      this.isPlaying = true;
    }
  };

  public pause = () => {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  };

  public togglePlayPause = () => {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  };

  public handleNext = () => {
    if (this.audio) {
      this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
      this.audio.src = this.songs[this.currentSongIndex].src;
      this.play();
    }
  };

  public handlePrev = () => {
    if (this.audio) {
      this.currentSongIndex =
        this.currentSongIndex === 0 ? this.songs.length - 1 : this.currentSongIndex - 1;
      this.audio.src = this.songs[this.currentSongIndex].src;
      this.play();
    }
  };

  public setVolume = (volume: number) => {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = volume;
    }
  };

  public selectSong = (index: number) => {
    if (this.audio) {
      this.currentSongIndex = index;
      this.audio.src = this.songs[this.currentSongIndex].src;
      this.play();
    }
  };

  public getCurrentSong = () => {
    return this.songs[this.currentSongIndex];
  };

  public getSongs = () => {
    return this.songs;
  };
}

export default AudioManager;
