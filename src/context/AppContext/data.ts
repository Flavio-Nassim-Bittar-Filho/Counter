export interface Counter {
  btnAdd:string,
  btnDecrement:string,
  btnReset:string,
  counter:number
}

export const globalState:Counter = {
  btnAdd:'+',
  btnDecrement:'-',
  btnReset:'0',
  counter:0
}
