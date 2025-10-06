// --- REACT & APP SETUP ---
const { useState, useEffect, useContext, createContext, useRef } = React;

const initialAppData = {
    songs: [ { id: 1, title: "Starlight Echoes", artist: "The Cosmic Keys", album: "Cosmic Collection", duration: "3:45", audio_url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3", artwork: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQyODJ8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 2, title: "Neon Dreams", artist: "Synthwave Surfers", album: "Retro Future", duration: "4:12", audio_url: "https://sample-videos.com/zip/10/mp3/SampleAudio_0.4mb_mp3.mp3", artwork: "https://images.unsplash.com/photo-1593902821204-5835b4528994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQzMTB8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 3, title: "Acoustic Soul", artist: "Luna Bloom", album: "Moonlight Sessions", duration: "3:28", audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", artwork: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQzMzd8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 4, title: "Ho Hey", artist: "The Lumineers", album: "The Lumineers", duration: "2:43", audio_url: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3", artwork: "https://images.unsplash.com/photo-1526478806334-55d443e5c7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQzNjB8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 5, title: "Little Talks", artist: "Of Monsters and Men", album: "My Head Is an Animal", duration: "4:03", audio_url: "https://sample-videos.com/zip/10/mp3/SampleAudio_0.4mb_mp3.mp3", artwork: "https://images.unsplash.com/photo-1542623034-9e32d184752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQzODF8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 6, title: "I Will Wait", artist: "Mumford & Sons", album: "Babel", duration: "4:36", audio_url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", artwork: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ0MDd8&ixlib=rb-4.0.3&q=80&w=400" } ],
    playlists: [ { id: 1, name: "Acoustic Chill", creator: "Ethan Blake", songs: [3, 4, 1], artwork: "https://images.unsplash.com/photo-1459411552784-0636829e3a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ0NDZ8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 2, name: "Wanderlust Tracks", creator: "Olivia Carter", songs: [2, 4, 5, 6], artwork: "https://images.unsplash.com/photo-1506197603052-3cc9c3201bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ0Njl8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 3, name: "Workout Mix", creator: "User", songs: [2, 5, 6], artwork: "https://images.unsplash.com/photo-1542766788-a2f588f447ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ0OTV8&ixlib=rb-4.0.3&q=80&w=400" }, ],
    artists: [ { id: 1, name: "The Cosmic Keys", genre: "Electronic", followers: 50000, artwork: "https://images.unsplash.com/photo-1582202283625-b890a18a93af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ1MjR8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 2, name: "The Lumineers", genre: "Indie Folk", followers: 2500000, artwork: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ1NDZ8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 3, name: "Mumford & Sons", genre: "Indie Folk", followers: 4300000, artwork: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQ1NjZ8&ixlib=rb-4.0.3&q=80&w=400" }, ],
    albums: [ { id: 1, name: "Cosmic Collection", artist: "The Cosmic Keys", songs: [1], artwork: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQyODJ8&ixlib=rb-4.0.3&q=80&w=400" }, { id: 2, name: "The Lumineers", artist: "The Lumineers", songs: [4], artwork: "https://images.unsplash.com/photo-1526478806334-55d443e5c7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4NjQzNjB8&ixlib=rb-4.0.3&q=80&w=400" }, ],
    genres: ["Pop", "Hip Hop", "Rock", "Electronic", "R&B", "Indie", "Classical", "Jazz", "Country", "Metal"],
    user: { name: "Liam Carter", likedSongs: [1, 3, 4], followedArtists: [1, 2, 3], savedAlbums: [1,2] }
};
const AppContext = createContext();

const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const AppProvider = ({ children }) => {
    const [data] = useState(initialAppData);
    const [screen, setScreen] = useState({ name: 'home', params: {} });
    const [history, setHistory] = useState([{ name: 'home', params: {} }]);
    
    // Player State
    const [currentSong, setCurrentSong] = useState(data.songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.75);
    const [isShuffling, setIsShuffling] = useState(false);
    const [repeatMode, setRepeatMode] = useState('none'); // 'none', 'one', 'all'
    const [queue, setQueue] = useState(data.songs.slice(1, 5));
    const audioRef = useRef(null);

    const navigate = (name, params = {}) => {
        const newScreen = { name, params };
        setHistory(prev => [...prev, newScreen]);
        setScreen(newScreen);
    };
    const goBack = () => {
        if (history.length > 1) {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setScreen(newHistory[newHistory.length - 1]);
        }
    };
    
    const playSong = (song, songList = []) => {
        if (!song) return;
        setCurrentSong(song);
        setQueue(songList.filter(s => s.id !== song.id));
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.src = song.audio_url;
            audioRef.current.play().catch(console.error);
        }
    };
    
    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(console.error);
        }
    };
    
    const playNext = () => {
        if (repeatMode === 'one') {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(console.error);
            return;
        }
        
        let nextSong;
        if (isShuffling && queue.length > 0) {
            const randomIndex = Math.floor(Math.random() * queue.length);
            nextSong = queue[randomIndex];
        } else if (queue.length > 0) {
            nextSong = queue[0];
        }
        
        if (nextSong) {
            let newQueue = [...queue];
            if (repeatMode === 'all') {
               newQueue.push(currentSong);
            }
            if (isShuffling) {
                newQueue = newQueue.filter(s => s.id !== nextSong.id);
            } else {
                newQueue.shift();
            }
            playSong(nextSong, [nextSong, ...newQueue]);
        } else if (repeatMode === 'all') {
            // Restart from beginning when queue is empty in repeat all mode
            playSong(data.songs[0], data.songs);
        } else {
            setIsPlaying(false);
        }
    };
    
    const playPrevious = () => {
        // If more than 3 seconds into song, restart it. Otherwise go to previous.
        if (currentTime > 3) {
            audioRef.current.currentTime = 0;
        } else {
            // Find current song index and play previous
            const allSongs = [currentSong, ...queue];
            const currentIndex = 0; // Current song is always first
            if (currentIndex > 0) {
                playSong(allSongs[currentIndex - 1], allSongs);
            } else {
                // Go to last song in queue
                if (queue.length > 0) {
                    playSong(queue[queue.length - 1], data.songs);
                }
            }
        }
    };
    
    const seekTo = (time) => { 
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const value = { 
        data, 
        screen, 
        navigate, 
        goBack, 
        currentSong, 
        isPlaying, 
        currentTime, 
        duration, 
        volume, 
        queue, 
        audioRef, 
        playSong, 
        togglePlay, 
        playNext, 
        playPrevious,
        seekTo, 
        setVolume, 
        isShuffling, 
        setIsShuffling, 
        repeatMode, 
        setRepeatMode, 
        setQueue 
    };

    return (
        <AppContext.Provider value={value}>
            {children}
            <audio 
                ref={audioRef} 
                onTimeUpdate={e => setCurrentTime(e.target.currentTime)} 
                onLoadedMetadata={e => setDuration(e.target.duration)} 
                onPlay={() => setIsPlaying(true)} 
                onPause={() => setIsPlaying(false)} 
                onEnded={playNext}
            />
        </AppContext.Provider>
    );
};

// Update volume when it changes
const useVolumeEffect = (audioRef, volume) => {
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume, audioRef]);
};

// --- REUSABLE COMPONENTS ---
const SongItem = ({ song, onPlay, showArtwork = true }) => {
    const { currentSong } = useContext(AppContext);
    const isPlaying = currentSong?.id === song.id;
    return (
        <div className={`song-item ${isPlaying ? 'song-item--playing' : ''}`} onClick={onPlay}>
            {showArtwork && <img src={song.artwork} alt={song.title} className="song-item__artwork" />}
            <div className="song-item__info">
                <p className="song-item__title">{song.title}</p>
                <p className="song-item__artist">{song.artist}</p>
            </div>
            <button className="icon-btn" onClick={e => e.stopPropagation()}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
        </div>
    );
};

const PlaylistCard = ({ playlist }) => {
    const { navigate } = useContext(AppContext);
    return (
        <div className="playlist-card" onClick={() => navigate('playlist', { id: playlist.id })}>
            {playlist.artwork ? <img src={playlist.artwork} className="playlist-card__artwork"/> : <div className="playlist-card__artwork"><i className="fa-solid fa-music"></i></div>}
            <p className="playlist-card__name">{playlist.name}</p>
            <p className="playlist-card__creator">{playlist.creator}</p>
        </div>
    );
};

const ArtistCard = ({ artist }) => {
    const { navigate } = useContext(AppContext);
    return (
        <div className="artist-card" onClick={() => navigate('artist', { id: artist.id })}>
            <img src={artist.artwork} className="artist-card__artwork"/>
            <p className="artist-card__name">{artist.name}</p>
        </div>
    );
};

 const AlbumCard = ({ album }) => {
    const { navigate } = useContext(AppContext);
    return (
        <div className="playlist-card" onClick={() => navigate('album', { id: album.id })}>
            <img src={album.artwork} className="playlist-card__artwork"/>
            <p className="playlist-card__name">{album.name}</p>
            <p className="playlist-card__creator">{album.artist}</p>
        </div>
    );
};


// --- MAIN LAYOUT COMPONENTS ---
const BottomNav = () => {
    const { screen, navigate } = useContext(AppContext);
    const navItems = [
        { id: 'home', label: 'Home', icon: 'fa-house' },
        { id: 'search', label: 'Search', icon: 'fa-magnifying-glass' },
        { id: 'library', label: 'Library', icon: 'fa-layer-group' }
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map(item => (
                <button key={item.id} className={`nav-item ${screen.name === item.id ? 'nav-item--active' : ''}`} onClick={() => navigate(item.id)}>
                    <i className={`fa-solid ${item.icon} nav-item__icon`}></i>
                    <span className="nav-item__label">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

const AudioPlayerBar = () => {
    const { currentSong, isPlaying, togglePlay, navigate } = useContext(AppContext);
    if (!currentSong) return null;

    return (
        <div className="audio-player-bar" onClick={() => navigate('nowplaying')}>
            <img src={currentSong.artwork} alt={currentSong.title} className="audio-player-bar__artwork" />
            <div className="audio-player-bar__info">
                <p className="audio-player-bar__title">{currentSong.title}</p>
                <p className="audio-player-bar__artist">{currentSong.artist}</p>
            </div>
            <div className="audio-player-bar__controls">
                <button className="icon-btn" onClick={e => e.stopPropagation()}>
                    <i className="fa-regular fa-heart"></i>
                </button>
                <button className="icon-btn play" onClick={e => { e.stopPropagation(); togglePlay(); }}>
                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
            </div>
        </div>
    );
};

// --- FULL-SCREEN COMPONENTS (SCREENS) ---

const QueueModal = ({ onClose }) => {
     const { currentSong, queue, playSong } = useContext(AppContext);
     return (
        <div className="queue-modal">
            <div className="queue-modal__header">
                 <button className="icon-btn" onClick={onClose}><i className="fa-solid fa-chevron-down"></i></button>
                 <h3 className="screen-title">Up Next</h3>
                 <div style={{width: 40}}></div>
            </div>
            <div className="queue-modal__content">
                 <h4 className="section-title" style={{marginTop: 0}}>Now Playing</h4>
                 <SongItem song={currentSong} showArtwork={true} onPlay={() => {}} />
                 <h4 className="section-title">Next in Queue</h4>
                 {queue.length > 0 ? (
                    queue.map(song => <SongItem key={song.id} song={song} showArtwork={true} onPlay={() => playSong(song, queue)} />)
                 ) : (
                    <p style={{color: "var(--color-text-secondary)"}}>No songs in queue.</p>
                 )}
            </div>
        </div>
     );
};

const NowPlayingScreen = () => {
    const { currentSong, isPlaying, currentTime, duration, togglePlay, playNext, playPrevious, goBack, seekTo, volume, setVolume, isShuffling, setIsShuffling, repeatMode, setRepeatMode, audioRef } = useContext(AppContext);
    const [showVolume, setShowVolume] = useState(false);
    const [showQueue, setShowQueue] = useState(false);
    
    // Sync volume with audio element
    useVolumeEffect(audioRef, volume);
    
    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
    const handleProgressClick = e => { 
        const rect = e.currentTarget.getBoundingClientRect(); 
        seekTo(((e.clientX - rect.left) / rect.width) * duration); 
    };

    const toggleRepeat = () => {
        const modes = ['none', 'all', 'one'];
        const nextIndex = (modes.indexOf(repeatMode) + 1) % modes.length;
        setRepeatMode(modes[nextIndex]);
    };

    const repeatIcon = () => {
        if (repeatMode === 'one') return 'fa-repeat-1';
        return 'fa-repeat';
    };

    if (showQueue) {
        return <QueueModal onClose={() => setShowQueue(false)} />;
    }

    return (
        <div className="now-playing-screen">
            <div className="now-playing-screen__header">
                <button className="icon-btn" onClick={goBack}><i className="fa-solid fa-chevron-down"></i></button>
                <span style={{fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-bold)"}}>Now Playing</span>
                <button className="icon-btn"><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
            <div className="now-playing-screen__content">
                <img src={currentSong.artwork} alt={currentSong.title} className="now-playing-screen__artwork" />
                <div className="now-playing-screen__info">
                    <div>
                        <h2 className="now-playing-screen__title">{currentSong.title}</h2>
                        <p className="now-playing-screen__artist">{currentSong.artist}</p>
                    </div>
                    <button className="icon-btn"><i className="fa-regular fa-heart" style={{fontSize: 24}}></i></button>
                </div>
                <div className="now-playing-screen__progress">
                    <div className="progress-bar" onClick={handleProgressClick}><div className="progress-bar__fill" style={{ width: `${progress}%` }}></div></div>
                    <div className="progress-times"><span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span></div>
                </div>
                <div className="now-playing-screen__controls">
                    <button className="icon-btn" style={{color: isShuffling ? 'var(--color-primary)' : 'inherit'}} onClick={() => setIsShuffling(!isShuffling)}>
                        <i className="fa-solid fa-shuffle"></i>
                    </button>
                    <button className="icon-btn" onClick={playPrevious}>
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    <button className="icon-btn play-btn" onClick={togglePlay}>
                        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>
                    <button className="icon-btn" onClick={playNext}>
                        <i className="fa-solid fa-forward-step"></i>
                    </button>
                    <button className="icon-btn" style={{color: repeatMode !== 'none' ? 'var(--color-primary)' : 'inherit'}} onClick={toggleRepeat}>
                        <i className={`fa-solid ${repeatIcon()}`}></i>
                    </button>
                </div>
                <div className="now-playing-screen__bottom-actions">
                    <button className="icon-btn"><i className="fa-solid fa-share-nodes"></i></button>
                     {showVolume && <div className="volume-control">
                        <i className="fa-solid fa-volume-low"></i>
                        <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.01" 
                            value={volume} 
                            onChange={e => setVolume(parseFloat(e.target.value))} 
                        />
                        <i className="fa-solid fa-volume-high"></i>
                     </div>}
                    <button className="icon-btn" onClick={() => setShowVolume(!showVolume)}>
                        <i className="fa-solid fa-volume-high"></i>
                    </button>
                    <button className="icon-btn" onClick={() => setShowQueue(true)}>
                        <i className="fa-solid fa-list-ol"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

const HomeScreen = () => {
    const { data, playSong } = useContext(AppContext);
    return (
        <div className="screen">
            <header className="app-header">
                <h1 className="screen-title">Good Evening</h1>
                <button className="icon-btn"><i className="fa-regular fa-bell" style={{fontSize: 22}}></i></button>
            </header>
            
            <h2 className="section-title">Recently Played</h2>
            <div className="horizontal-scroll">
                {data.songs.map(song => <AlbumCard key={song.id} album={{...song, name: song.title}} />)}
            </div>

            <h2 className="section-title">Your Playlists</h2>
            <div className="horizontal-scroll">
                {data.playlists.map(p => <PlaylistCard key={p.id} playlist={p} />)}
            </div>
            
            <h2 className="section-title">Featured Artists</h2>
             <div className="horizontal-scroll">
                {data.artists.map(a => <ArtistCard key={a.id} artist={a} />)}
            </div>
        </div>
    );
};

const SearchScreen = () => {
    const { data, playSong } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('');
    
    const filteredSongs = searchQuery 
        ? data.songs.filter(song => 
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];
    
    return (
        <div className="screen">
            <h1 className="screen-title" style={{marginBottom: 'var(--space-16)'}}>Search</h1>
            <input 
                type="text" 
                placeholder="What do you want to listen to?" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                    width: '100%', 
                    padding: 'var(--space-16)', 
                    border: 'none', 
                    borderRadius: 'var(--radius-base)', 
                    backgroundColor: 'var(--color-surface-raised)', 
                    color: 'var(--color-text)', 
                    fontSize: 'var(--font-size-base)'
                }} 
            />
            
            {searchQuery && filteredSongs.length > 0 && (
                <>
                    <h2 className="section-title">Search Results</h2>
                    {filteredSongs.map(song => (
                        <SongItem 
                            key={song.id} 
                            song={song} 
                            onPlay={() => playSong(song, filteredSongs)} 
                            showArtwork={true} 
                        />
                    ))}
                </>
            )}
            
            {searchQuery && filteredSongs.length === 0 && (
                <p style={{color: 'var(--color-text-secondary)', marginTop: 'var(--space-24)'}}>
                    No results found for "{searchQuery}"
                </p>
            )}
            
            {!searchQuery && (
                <>
                    <h2 className="section-title">Browse all</h2>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)'}}>
                       {initialAppData.genres.slice(0, 4).map(g => (
                           <div key={g} style={{backgroundColor: `hsl(${Math.random()*360}, 50%, 30%)`, padding: 'var(--space-16)', borderRadius: 'var(--radius-base)', fontWeight: 'var(--font-weight-bold)'}}>{g}</div>
                       ))}
                    </div>
                </>
            )}
        </div>
    );
};

const LibraryScreen = () => {
    const { data, playSong, navigate } = useContext(AppContext);
    const [view, setView] = useState('grid');
    const [tab, setTab] = useState('playlists');

    return (
        <div className="screen">
            <div className="screen-header">
                <h1 className="screen-title">Your Library</h1>
                <div>
                     <button className="icon-btn" onClick={() => setView(v => v === 'grid' ? 'list' : 'grid')}>
                         <i className={`fa-solid ${view === 'grid' ? 'fa-list' : 'fa-grip'}`}></i>
                     </button>
                    <button className="icon-btn"><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div style={{display: 'flex', gap: 'var(--space-8)', marginBottom: 'var(--space-16)'}}>
                <button className="btn" onClick={() => setTab('playlists')} style={{backgroundColor: tab === 'playlists' ? 'var(--color-primary)' : '', color: tab === 'playlists' ? '#000' : ''}}>Playlists</button>
                <button className="btn" onClick={() => setTab('artists')} style={{backgroundColor: tab === 'artists' ? 'var(--color-primary)' : '', color: tab === 'artists' ? '#000' : ''}}>Artists</button>
                <button className="btn" onClick={() => setTab('albums')} style={{backgroundColor: tab === 'albums' ? 'var(--color-primary)' : '', color: tab === 'albums' ? '#000' : ''}}>Albums</button>
            </div>

            {tab === 'playlists' && (
                <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-8)'}}>
                    {data.playlists.map(p => (
                        <SongItem 
                            key={p.id} 
                            song={{...p, title: p.name, artist: p.creator, artwork: p.artwork}} 
                            onPlay={() => navigate('playlist', { id: p.id })}
                        />
                    ))}
                </div>
            )}
            {tab === 'artists' && (
                <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-8)'}}>
                    {data.artists.map(a => (
                        <SongItem 
                            key={a.id} 
                            song={{...a, title: a.name, artist: a.genre}} 
                            onPlay={() => navigate('artist', { id: a.id })}
                        />
                    ))}
                </div>
            )}
            {tab === 'albums' && (
                <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-8)'}}>
                    {data.albums.map(al => (
                        <SongItem 
                            key={al.id} 
                            song={{...al, title: al.name, artwork: al.artwork}} 
                            onPlay={() => navigate('album', { id: al.id })}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const DetailsScreen = ({ type, id }) => {
    const { data, goBack, playSong } = useContext(AppContext);
    let item, songs, title, meta;

    if (type === 'playlist') {
        item = data.playlists.find(p => p.id === id);
        if (!item) return null;
        songs = item.songs.map(songId => data.songs.find(s => s.id === songId)).filter(Boolean);
        title = item.name;
        meta = `By ${item.creator} • ${songs.length} songs`;
    } else if (type === 'album') {
        item = data.albums.find(a => a.id === id);
        if (!item) return null;
        songs = item.songs.map(songId => data.songs.find(s => s.id === songId)).filter(Boolean);
        title = item.name;
        meta = `${item.artist} • Album`;
    }

    const handlePlay = () => {
        if (songs && songs.length > 0) {
            playSong(songs[0], songs);
        }
    };
    
    return (
         <div className="screen" style={{padding: 0, paddingBottom: 'var(--content-padding-bottom)'}}>
            <div style={{position: 'absolute', top: 16, left: 16, zIndex: 10}}>
                 <button className="icon-btn" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} onClick={goBack}>
                     <i className="fa-solid fa-arrow-left"></i>
                 </button>
            </div>
             <div className="details-header">
                <img src={item.artwork} className="details-header__artwork" />
                <h1 className="details-header__title">{title}</h1>
                <p className="details-header__meta">{meta}</p>
             </div>
             <div className="details-actions">
                 <button className="icon-btn"><i className="fa-regular fa-heart" style={{fontSize: 24}}></i></button>
                 <button className="btn btn--primary" onClick={handlePlay} style={{width: '60px', height: '60px', fontSize: '24px'}}>
                     <i className="fa-solid fa-play"></i>
                 </button>
                 <button className="icon-btn"><i className="fa-solid fa-ellipsis-vertical" style={{fontSize: 24}}></i></button>
             </div>
             <div style={{padding: '0 16px'}}>
                {songs.map(song => (
                    <SongItem 
                        key={song.id} 
                        song={song} 
                        onPlay={() => playSong(song, songs)} 
                        showArtwork={false} 
                    />
                ))}
             </div>
         </div>
    );
};

const ArtistScreen = ({ id }) => {
    const { data, goBack, playSong } = useContext(AppContext);
    const artist = data.artists.find(a => a.id === id);
    
    if (!artist) return null;
    
    const artistSongs = data.songs.filter(s => s.artist === artist.name);
    
     const handlePlay = () => {
        if (artistSongs && artistSongs.length > 0) {
            playSong(artistSongs[0], artistSongs);
        }
    };

    return (
        <div className="screen" style={{padding: 0, paddingBottom: 'var(--content-padding-bottom)'}}>
             <div style={{position: 'absolute', top: 16, left: 16, zIndex: 10}}>
                 <button className="icon-btn" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} onClick={goBack}>
                     <i className="fa-solid fa-arrow-left"></i>
                 </button>
            </div>
            <div style={{position: 'relative', height: '300px'}}>
                <img src={artist.artwork} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, var(--color-background), transparent)', padding: 'var(--space-16)', paddingTop: 'var(--space-48)'}}>
                    <h1 className="screen-title">{artist.name}</h1>
                    <p style={{color: 'var(--color-text-secondary)'}}>{artist.followers.toLocaleString()} followers</p>
                </div>
            </div>
            <div style={{padding: 'var(--space-16)'}}>
                 <div className="details-actions" style={{justifyContent: 'flex-start'}}>
                     <button className="btn">Follow</button>
                      <button className="btn btn--primary" onClick={handlePlay} style={{width: '50px', height: '50px', fontSize: '20px'}}>
                         <i className="fa-solid fa-play"></i>
                     </button>
                 </div>
                 <h2 className="section-title">Popular</h2>
                 {artistSongs.map(song => (
                     <SongItem 
                         key={song.id} 
                         song={song} 
                         onPlay={() => playSong(song, artistSongs)} 
                     />
                 ))}
            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
    const { screen } = useContext(AppContext);

    const renderScreen = () => {
        switch (screen.name) {
            case 'home': return <HomeScreen />;
            case 'search': return <SearchScreen />;
            case 'library': return <LibraryScreen />;
            case 'playlist': return <DetailsScreen type="playlist" id={screen.params.id} />;
            case 'album': return <DetailsScreen type="album" id={screen.params.id} />;
            case 'artist': return <ArtistScreen id={screen.params.id} />;
            case 'nowplaying': return <NowPlayingScreen />;
            default: return <HomeScreen />;
        }
    };
    
    const showPlayer = screen.name !== 'nowplaying';

    return (
        <div className="app">
            {renderScreen()}
            {showPlayer && <AudioPlayerBar />}
            {showPlayer && <BottomNav />}
        </div>
    );
};

// --- RENDER ---
const AppWithProvider = () => <AppProvider><App /></AppProvider>;
ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
