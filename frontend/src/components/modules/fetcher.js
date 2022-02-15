export default async function(method, url, body){
    const RESPONSE = await fetch(url, {
        method: method,
        body: body
    });
    return RESPONSE;
}