import axios, { AxiosResponse } from 'axios';
import { IRes } from '../../components/types/type';
import { createDay } from '../getDay';
import md5 from 'md5';

async function getIds(offset:number,limit:number):Promise<string[]> {
  const day:string = createDay();
  return await axios
  .post('http://api.valantis.store:40000/',{
    action:"get_ids",
    params:{offset,limit}
   },{
    headers:{
      "X-Auth":md5(`Valantis_${day}`)
    }
  }).then(({data}:AxiosResponse<IRes<string>>)=>data.result)
}

export default getIds