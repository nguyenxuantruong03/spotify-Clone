import {Price} from '@/types'

export const getURL = () =>{
    let url = 
    process?.env?.NEXT_PUBLIC_SITE_URL ??  // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
    url = url.includes('http')? url : `https://${url}`  // Make sure to include `https://` when not localhost.
    url = url.charAt(url.length -1 ) === '/' ? url: `${url}/`  // Make sure to include `https://` when not localhost.

    return url
}

export const postData = async ({url,data} :{url:string ,data?:{price: Price}}) =>{
    console.log('Post Request:', url,data);

    const res: Response =await fetch(url,{
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        credentials:'same-origin',
        body:JSON.stringify(data)
    })
    if(!res.ok){
        console.log('Error in POST',{url,data,res})

        throw new Error(res.statusText)
    }
    return res.json()
}

export const toDateTime = (secs: number) =>{
    var t = new Date('1970-01-01T00:30:00Z')
    t.setSeconds(secs)
    return t;
}