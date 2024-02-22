export function createDay():string{
  const date:Date = new Date();
  const year:number = date.getFullYear();
  const month:number = date.getMonth() + 1;
  const day:number = date.getDate();
  const dayZero:string = day < 10 ? '0' : "";
  const monthZero:string = month < 10 ? "0" : "";
  return `${year}${monthZero}${month}${dayZero}${day}`;
}