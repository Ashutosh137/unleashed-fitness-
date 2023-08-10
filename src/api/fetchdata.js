import API_KEY from "../config";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
const Fetchdata = async () => {
    const dataq = ['bodyPartList', 'targetList', 'equipmentList']
    var datat = {
        bodyPartList: [],
        targetList: [],
        equipmentList: [],
        allexercise: []
    }

    dataq.forEach(async (item) => {
        if (!(datat.bodyPartList[1] || datat.targetList[1] || datat.equipmentList[1])) {
            var response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${item}`, options).catch((err) => { return 'fail' })
            response = await response.json()
            datat[item] = response;
        }
    })

    if (!datat.allexercise[1]) {
        var response1 = await fetch(`https://exercisedb.p.rapidapi.com/exercises`, options).catch((err) => { return 'fail' })
        response1 = await response1.json()
        datat.allexercise = response1;
    }

    return datat;


};
const Fetchdata1 = async (url) => {
    var response = await fetch(url, options).catch((err) => { console.log(err) })
    response = await response.json();
    return response;
}
export { Fetchdata };
export default (Fetchdata1)

