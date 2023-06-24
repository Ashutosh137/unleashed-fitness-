const Fetchdata = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "f3b7b288f6mshd7cef5647a7b5c0p15d59bjsn05cc46c940e4",
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options).catch((err) => { console.log(err) });
    const jsonData = await response.json();
    return jsonData;

};
export default Fetchdata;

