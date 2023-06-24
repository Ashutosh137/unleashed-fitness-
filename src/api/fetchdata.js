const Fetchdata = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "d20d31456fmsh2662da9faa7b729p157270jsndb6c64a41fd0",
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options).catch((err) => { console.log(err) });
    const jsonData = await response.json();
    return jsonData;

};
export default Fetchdata;

