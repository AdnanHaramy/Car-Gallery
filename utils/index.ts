export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '5e2c4ca42cmshad9e0f761416b06p17447djsneb3bd5724d0f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        { headers: headers });
    const result = await response.json();
    return result;
}