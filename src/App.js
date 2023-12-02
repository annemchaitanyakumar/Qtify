import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/index';
import HeroSection from './Components/HeroSection/index';
import Card from './Components/Card';
import Section from './Components/Section';
import FilterSection from './Components/FilterSection';
// import { Accordion } from '@mui/material';
import Accordion from "./Components/Accordion";

const App = () => {
  const ENDPOINT = "https://qtify-backend-labs.crio.do/";
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songsInAlbum, setSongsInAlbum] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
      setSongsInAlbum(data);
    });
  
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
      setSongsInAlbum(data);
    });
    axios.get(`${ENDPOINT}songs`).then(({ data }) => {
      setSongs(data);
      setFilteredSongs(data);
    });
    axios.get(`${ENDPOINT}genres`).then(({ data }) => {
      setGenres([{ key: "all", label: "All" }, ...data.data]);
    });
  }, []);

  const AlbumSongs = songsInAlbum.map((item) => item.songs)
  console.log("albumSongs",AlbumSongs)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Section navId='ta' title='Top Albums' data={topAlbums} songs = {AlbumSongs}/>
      <Section navId='na' title='New Albums' data={newAlbums} songs = {AlbumSongs}/>
      <FilterSection
        title='Songs'
        data={filteredSongs}
        filters={genres}
        executeFilter={(genre) => {
          if (genre === 'all') {
            setFilteredSongs(songs);
          } else {
            setFilteredSongs(songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
      <h1 style={{
        textAlign:"center",
        color:"var(--css-white)",
        paddingBottom:"10px"
      }}>FAQs</h1>
      <Accordion title="Is Qtify free to use?" content="Yes! it is 100% free, and has 0% ads!" />
      <Accordion title="Can i download and listen to songs offline?" content="Sorry, unfortunately we don't provide the service todownload any songs." />
      
    </>
  );
};

export default App;
















