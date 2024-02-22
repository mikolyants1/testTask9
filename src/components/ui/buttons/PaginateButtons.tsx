import { Dispatch, SetStateAction, memo } from "react"
import { ButtonContainer } from "../../style/style"
import { Button } from "antd"
import { Initial } from "../../types/type";

interface props {
  setState:Dispatch<SetStateAction<Initial>>,
  page:number
}
function PaginateButtons({page,setState}:props):JSX.Element {
  const showPage:number = !page ? 1 : page/50 + 1;
  const changePage = (val:number) => ():void => {
    setState((prv:Initial)=>({
    ...prv,page:prv.page + val
     }));
  };

  return (
    <ButtonContainer>
        <Button style={{width:70}}
         onClick={changePage(-50)}
         disabled={page == 0}>
          prev
        </Button>
        <div>
          {showPage}
        </div>
        <Button style={{width:70}}
         onClick={changePage(50)}
         disabled={page == 150}>
          next
        </Button>
    </ButtonContainer>
  )
}

export default memo(PaginateButtons)