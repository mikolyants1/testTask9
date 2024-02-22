import { ChangeEvent } from "react"

export interface IData {
    brand: null|string,
    id: string,
    price: number,
    product: string
 };
export interface IRes<T> {
    result:T[]
}
 export interface IDatasource extends IData {
    key:string
 }

 export interface IColumns {
   title:string,
   dataIndex:string,
   key:string
 }

 export interface IContext {
  change:(e:ChangeEvent<HTMLInputElement>)=>void,
 }
 export interface IState {
    data:IDatasource[],
    base:IDatasource[]
 }
  
 export type Fields = Omit<IData,"brand">

 export interface Initial {
    error:boolean,
    loading:boolean,
    page:number
 }
