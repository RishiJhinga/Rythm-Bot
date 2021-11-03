module.exports = {
    app: {
        px: 'mf',
        token: 'ODg4NDIyMjI4MzgxODIzMDA3.YUSdrQ.xaxewnnFWCGHYzEBPd4Nbtx1c3g',
        playing: ''
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
