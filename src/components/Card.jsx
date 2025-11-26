import React from 'react'

const Card = ({movie: {title, vote_average, poster_path, release_date, original_language}}) => {
  return (
    <div className='card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/public/assets/No-Poster.png'} alt={title}/>
        <div className='card-body'>
            <h2 className= 'title'>{title} </h2>
            <div className='content'>
                <div className='rating'>
                    <img src='/assets/Rating.png' alt='Rating' />
                    <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    <span>.</span>
                    <p>{original_language}</p>
                    <span>.</span>
                    <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card