export default async function(method, url, body, mime){
    const RESPONSE = await fetch(url, {
        method: method,
        body: body,
        headers: new Headers({
            'content-type': mime ? mime : 'application/x-www-form-urlencoded;charset=UTF-8'
        })
    });
    return RESPONSE;
}