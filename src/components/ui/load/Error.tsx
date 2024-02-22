import { useEffect, useState,memo } from "react";

function Error():JSX.Element {
 const [err,setErr] = useState<string>('');
 useEffect(():void=>{
  setInterval(():void => {
   setTimeout(():void=>setErr(''),0);
   setTimeout(():void=>setErr('.'),200);
   setTimeout(():void=>setErr('..'),400);
   setTimeout(():void=>setErr('...'),600);
   }, 800);
  },[]);
   enum error {
    width ='100%',
    justifyContent='center',
    display='flex',
    textAlign='center'
   }
    return (
         <div style={error}>
           error {err}
         </div>
       );
}

export default memo(Error)