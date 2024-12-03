// utils/audioManager.ts

class AudioManager {
  private static instance: AudioManager;
  public audio: HTMLAudioElement;
  public isPlaying: boolean;
  public volume: number;
  private songs: { title: string; src: string }[];
  public currentSongIndex: number = 0;

  private constructor() {
    this.songs = [
      { title: 'All I Want For Christmas Is You', src: './music/all_i_want_metal.mp3' },
      { title: 'Jingle Bells Cock', src: './music/jingle_bells_cock.mp3' },
      { title: 'It\'s Beginning To Look A Lot Like Christmas', src: './music/beginning_christmas.mp3' },
      { title: 'The Most Wonderful Time Of The Year', src: './music/most_wonderful.mp3' },
      { title: 'Police Stop My Car', src: './music/police_stop_my_car.mp3' },
      // Add more songs as needed
    ];

    this.audio = new Audio(this.songs[this.currentSongIndex].src);

    // Initialize volume and isPlaying from localStorage or defaults
    const savedVolume = localStorage.getItem('audioVolume');
    this.volume = savedVolume ? parseFloat(savedVolume) : 0.2;
    this.audio.volume = this.volume;

    const savedIsPlaying = localStorage.getItem('isPlaying');
    this.isPlaying = savedIsPlaying ? savedIsPlaying === 'true' : false;

    this.audio.onended = this.handleNext;
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public play = () => {
    this.audio.play().catch((error) => {
      if (error.name === 'NotAllowedError') {
        console.warn('Autoplay prevented:', error);
        this.isPlaying = false;
      }
    });
    this.isPlaying = true;
  };

  public pause = () => {
    this.audio.pause();
    this.isPlaying = false;
  };

  public togglePlayPause = () => {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  };

  public handleNext = () => {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.audio.src = this.songs[this.currentSongIndex].src;
    this.play();
  };

  public handlePrev = () => {
    this.currentSongIndex =
      this.currentSongIndex === 0
        ? this.songs.length - 1
        : this.currentSongIndex - 1;
    this.audio.src = this.songs[this.currentSongIndex].src;
    this.play();
  };

  public setVolume = (volume: number) => {
    this.volume = volume;
    this.audio.volume = volume;
  };

  public selectSong = (index: number) => {
    this.currentSongIndex = index;
    this.audio.src = this.songs[this.currentSongIndex].src;
    this.play();
  };

  public getCurrentSong = () => {
    return this.songs[this.currentSongIndex];
  };

  public getSongs = () => {
    return this.songs;
  };
}

export default AudioManager;

