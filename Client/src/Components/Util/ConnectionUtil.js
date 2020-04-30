
export let PostAPI = (url,data) =>{
    console.log(data)
    let promise = fetch(url,{
        method : "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(data)
    });

    return promise;

}

export let $_GetAPI = (url,data) =>{

    let promise = fetch(url,{
        method : "GET",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        
    });

    return promise;
}