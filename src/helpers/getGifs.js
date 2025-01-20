export const getGifs = async( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=vFcmini2pECfhup6pGftMSmqFFXERdOs&q=${  category }&limit=3`;
        const response = await fetch( url );
        const { data } = await response.json();

        const gifs = data.map( img => {
                            return {
                                id: img.id,
                                title: img.title,
                                url: img.images?.downsized_medium.url
                            }
        });

        // console.log(gifs);

        return gifs;
    };