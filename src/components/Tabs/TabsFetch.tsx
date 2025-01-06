
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
const client = createClient({
    space:'87og6nphvq4f',
    environment:'master',
    accessToken:'A1CNEFI6dlkiloVnFIt2Ra0A5wGuzE3Po7t8B77z92U'
})
export type Projects =  {
    title: string;
    tempDescription: string;
    id: string;
    company: string;
    dates:string;
    order:number
}

const useFetchProjects = () =>{
    const [projects,setProjects] = useState<Projects[]>([])
    const [loading,setLoading] = useState(true)
    const getData = async()=>{
        try{
            const res = await client.getEntries({content_type:'tabs'})
            console.log(res)
            const projects = res.items.map(item=>{
                const {company,dates,order,title,duties}= item.fields
                // console.log(duties.content[0].content[0].value)
                const tempDescription:string = duties?.content[0]?.content[0]?.value
                const id = item.sys.id
                
                
                return {title,company,id,dates,order,tempDescription}
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