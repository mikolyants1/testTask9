import axios, { AxiosResponse } from 'axios';
import { IData, IRes } from '../../components/types/type';
import { createDay } from '../getDay';
import md5 from 'md5';
import getIds from './getIds';

async function getData(offset:number):Promise<AxiosResponse<IRes<IData>>> {
  const day:string = createDay();
  const ids:string[] = await getIds(offset,50);
  return await axios
  .post('http://api.valantis.store:40000/',{
    action:"get_items",
    params:{ids}
   },{
    headers:{
      "X-Auth":md5(`Valantis_${day}`)
    }
  })
}

export default getData