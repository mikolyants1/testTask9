import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import './App.css'
import { Fields, IData, IDatasource, IRes, IState, Initial } from './components/types/type'
import getData from './helpers/query/getData';
import { AxiosResponse } from 'axios';
import Loader from './components/ui/load/Loader';
import Error from './components/ui/load/Error';
import { Wrapper } from './components/style/style';
import { Table} from 'antd';
import { coloumns } from './helpers/cols/coloumns';
import PaginateButtons from './components/ui/buttons/PaginateButtons';
import { Context } from './helpers/context';
import InputMapCard from './components/ui/cards/InputMapCard';

function App() {
  const [data,setData] = useState<IState>({} as IState);
  const [field,setField] = useState<Fields>({} as Fields);
  const [state,setState] = useState<Initial>({page:0} as Initial);

  useEffect(():void=>{
    getData(state.page)
    .then(({data}:AxiosResponse<IRes<IData>>)=>{
      const newData:IDatasource[] = data.result
      .map((item:IData,i:number)=>({key:`${i}`,...item}));
      console.log(newData)
      setData({data:newData,base:newData});
    })
    .catch((e):void=>{
      console.log(e)
      setState((prv:Initial)=>({
         ...prv,error:true
      }));
    })
    .finally(():void=>{
      setState((prv:Initial)=>({
        ...prv,loading:false
      }))
    });
  },[state.page]);

  const change = ({target}:ChangeEvent<HTMLInputElement>):void =>{
    const value:string = target.value.trim().toLocaleLowerCase();
    setField((prv:Fields)=>({
      ...prv,[target.name]:value
    }));
  };
  
  const search = useCallback(():void=>{
    const newData:IDatasource[] = data.base
    .filter((i:IDatasource)=>(
      i.product.toLocaleLowerCase().includes(field.product)
    ))
    .filter((i:IDatasource)=>(
      i.id.toLocaleLowerCase().includes(field.id)
    ))
    .filter((i:IDatasource)=>(
      `${i.price}`.toLocaleLowerCase().includes(`${field.price}`)
    ));

    setData((prv:IState)=>({...prv,data:newData}));
  },[field]);

  if (state.loading) return <Loader />;
  if (state.error) return <Error />;

  return (
    <Context.Provider value={{change}}>
      <Wrapper>
        <InputMapCard
         search={search}
        />
        <Table
         dataSource={data.data}
         columns={coloumns}
         pagination={false}
          />
        <PaginateButtons
         setState={setState}
         page={state.page}
         />
      </Wrapper>
    </Context.Provider>
  )
}

export default App
