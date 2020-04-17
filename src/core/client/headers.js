export default headers = (jwt) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': jwt,
    }
}