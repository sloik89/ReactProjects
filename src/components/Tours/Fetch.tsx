
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
const client = createClient({
    space:'87og6nphvq4f',
    environment:'master',
    accessToken:'A1CNEFI6dlkiloVnFIt2Ra0A5wGuzE3Po7t8B77z92U'
})
export type Projects =  {
    title: string;
    description: string;
    id: string;
    img: string;
}

const useFetchProjects = () =>{
    const [projects,setProjects] = useState<Projects[]>([])
    const [loading,setLoading] = useState(true)
    const getData = async()=>{
        try{
            const res = await client.getEntries({content_type:'tours'})
          
            const projects = res.items.map(item=>{
                const {url,desc}= item.fields
                const title = item.fields.title as string
                const description:string = desc?.content[0]?.content[0]?.value
                const id = item.sys.id
                
                const img:string = url?.fields?.file.url
                return {title,description,id,img}
            })
            setProjects(projects)
            setLoading(false)
        }
        catch(err){
            console.log(err)
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return {loading,projects}
}
// client.getEntries({content_type:'tours'}).then((res) => {
//     console.log(res)
//   return res
// })
export default useFetchProjects