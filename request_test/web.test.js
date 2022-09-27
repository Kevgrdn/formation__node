import axios from "axios"

// Ne pas prendre en compte ce fichier, car il est possible de faire la requête directement avec POSTMAN.
async function test_filters(){
    try {
        const {data} = await axios.get(`http://127.0.0.1:5005`, {params: {
            title: "contre vent"
        }})
        if (data.query && data.query.title) {
            console.log("API is Good");
        }
        else{
            console.log("NOT GOOD", { data});
        }
    } catch (error) {
        console.error(error.message);
    }
}

test_filters()