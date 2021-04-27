import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {
            title : 'Killer Queen',
            duration : '3:12'
        },
        {
            title : 'Bohemian Rhapsody',
            duration : '6:00'
        },
        {
            title : 'Under Pressure',
            duration : '4:14'
        },
        {
            title : 'Somebody To Love',
            duration : '5:10'
        }
    ]; 
};

const selectedSongReducer = (selectedSong = null, action) =>{
     if(action.type === 'SONG_SELECTED'){
         return action.payload;
     }
     return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});