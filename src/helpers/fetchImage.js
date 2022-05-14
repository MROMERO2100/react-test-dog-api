export const BASE_URL = 'https://dog.ceo/api/breed/hound/images/random/3';

export const fetchImages = () => {

    return fetch(BASE_URL)
    .then(res => res.json())
    .then(data => data.message)
    
}

