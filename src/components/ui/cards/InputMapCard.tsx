import {memo} from 'react'
import InputCard from './input/InputCard';
import { HeaderBlock } from '../../style/style';
import { Button } from 'antd';

interface props {
    search:()=>void
};

function InputMapCard({search}:props):JSX.Element {
 const fields = ['id',"price",'product'];
  return (
      <HeaderBlock>
        {fields.map((i:string):JSX.Element=>(
          <InputCard key={i} name={i} />
        ))}
        <Button onClick={search}>
            search
        </Button>
      </HeaderBlock>
  )
}

export default memo(InputMapCard)