import { useNavigate, useParams } from 'react-router';
import { SongType } from '../App';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  songs: SongType[];
};
type SongParam = { id?: string };

const SongDetail = (props: Props) => {
  const { id } = useParams<SongParam>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [musician, setMusician] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const YOUTUBE_LINK = 'https:/m.youtube.com/watch?v=';

  useEffect(() => {
    const song = props.songs.find((song) => song.id === parseInt(id ? id : '', 10));
    if (song) {
      setTitle(song.title ? song.title : '');
      setMusician(song.musician ? song.musician : '');
      setLink(song.youtube_link ? YOUTUBE_LINK + song.youtube_link : '');
    } else {
      navigate('/songs');
    }
  }, [id, navigate, props.songs]);

  return (
    <div className='mt-5'>
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        <a href={link} target='new'>
          View Youtube
        </a>
      </p>
      <Link to='/songs'>Return SongList</Link>
    </div>
  );
};

export default SongDetail;
