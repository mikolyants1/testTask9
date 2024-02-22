import { Input } from 'antd'
import { useContext } from 'react'
import { Context } from '../../../../helpers/context'
import { IContext } from '../../../types/type';

interface props {
    name:string
}
function InputCard({name}:props):JSX.Element {
  const {change} = useContext<IContext>(Context);
  return (
    <Input 
     placeholder={name}
     onChange={change}
     name={name}
    />
  )
}

export default InputCard