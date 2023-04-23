import {useState} from "react"
interface Props {
    name:string;
    email: string;
    age:number;
    isMarried:boolean;
    friend : string[];
    country:Countries;
    heigth?:string;//means in app where we import this component, we could use it or not
}
export enum Countries {
    france = "france",
    canada = "Canada",
    london = "london"
}

export const Person = (props: Props) =>{  
    
    return (
       <div>
           <h1>Name :{props.name}</h1>
           <h1>Email:{props.email}</h1>
           <h1>Age:{props.age}</h1>
           <h1>this person {props.isMarried ? "is" : "is not"} Married</h1>
           {props.friend.map((friend: string)=>{
            return <h1>{friend}</h1>
           })}
            <h1>I'm from Country  :{props.country}</h1>
       </div>
    );
   };