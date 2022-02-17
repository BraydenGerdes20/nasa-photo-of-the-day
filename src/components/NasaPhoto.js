import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledSpace = styled.div`
    justify-content: space-evenly;
    padding: 8px;
    border-top: 9px solid #fc3d21;
    border-bottom: 9px solid #fc3d21;
    background-color: ${pr => pr.theme.black};

    h2 {
        color: ${pr => pr.theme.primaryColor};
    }
    p {
        color: ${pr => pr.theme.textColor};
    }
    header {
        color: ${pr => pr.theme.tertiaryColor}
    }
`

// const dummyData = {
  
//     date: "2022-02-16",
//     explanation: "What's that on the Sun? Although it may look like a flowing version of the Eiffel Tower, it is a solar prominence that is actually much bigger -- about the height of Jupiter. The huge prominence emerged about ten days ago, hovered over the Sun's surface for about two days, and then erupted -- throwing a coronal mass ejection (CME) into the Solar System. The featured video, captured from the astrophotographer's backyard in Hendersonville, Tennessee, USA, shows an hour time-lapse played both forwards and backwards. That CME did not impact the Earth, but our Sun had unleashed  other recent CMEs that not only triggered Earthly auroras, but puffed out the Earth's atmosphere enough to cause just-launched Starlink satellites to fall back. Activity on the Sun, including sunspots, prominences, CMEs and flares, continues to increase as the Sun evolves away from a deep minimum in its 11-year magnetic cycle.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)",
//     title: "Eiffel Tower Prominence on the Sun",
//     url: "https://www.youtube.com/embed/liapnqj9GDc?rel=0"
// } 

const NasaPhoto = (props) => {
    return (
            
        <StyledSpace>
            <header>
                <h1>{props.photo.title}</h1>
            </header>
            
            <middle>
                <h2>Date</h2>
                <p>{props.photo.date}</p>
                <img width="800" height="400" src={props.photo.hdurl} />
            </middle>

            <footer>
                <h2>Explanation!</h2>
                <p>{props.photo.explanation}</p>
            </footer>
        </StyledSpace>
    )
}

export default NasaPhoto