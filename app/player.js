const audioController = {
    _nextSongs: [],
    _lastSongs: [],
    _actualSong: null,
    _progress_bar: document.getElementById("progress"),
    _controller: document.getElementById("media"),
    initializePlayer(playlist) {
        this._nextSongs = playlist;
        this._controller.addEventListener('timeupdate', function () {
            player._progress_bar.value = (this.currentTime / this.duration) * 100;
        });
        this._progress_bar.addEventListener('input', function (){
            audioController._controller.currentTime = (this.value/100) * audioController._controller.duration;
        })
        this._actualSong = this._nextSongs.pop();
    },
    loadSong: function () {
        this._controller.src = this._actualSong.song_url;
    }
}

export default audioController;