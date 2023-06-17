const Fetchdata = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ca825e2aamsh0df3e86081ed0e4p147272jsn8b296ad90265',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options).catch((err) => { console.log(err) });
    const jsonData = await response.json();
    return jsonData;

};
export default Fetchdata;

