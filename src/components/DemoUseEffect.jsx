import React, { useEffect } from 'react'

function DemoUseEffect() {
  const [number,setNumber]= useState(10);
  const [text,setText]= useState("hello");
  /*
  + useEffect là 1 hook đk cung cấp bởi react
  +useEffect đk dùng để: callApi,líten dom event,update dom,cleanUP,...
  cú pháp của useEfect:
  useEffect( () => {},[] )
   */
 //trường hơp 1 useeffect không có deps
   //+ cú pháp: useEffect( () => {});
    //tính chât:
    //- Callback sẽ luôn đk gọi mỗi khi component mount(render element)
    //-Call back sẽ luôn đk gọi mỗi khi component re-render()
    // useEffect(()=> {
    //   console.log("useeffect dk call");
    //  });

 //trường hợp 2 useEffect có deps
   // +useEffect(callback,[])
   //tính chất: 
      //- callback chỉ chạy 1 lần khi component re-render
      //- callback luôn đk gọi mỗi khi component mount
    // useEffect(()=> {
    //   console.log("useeffect dk call");
    //  },[]);  

 //trường hợp 3: useEffect có deps và có cleanUp
   //cú pháp: useEffect(callback,[dép])
   //tính chất
     //-  callback sẽ luôn gọi mỗi khi component mount(render element)
     // - callback sẽ đk gọi mỗi khi component đk re-render(điều kiện: trong[]có deps  

  useEffect(()=> {
    console.log("useeffect dk call")
   },[text])
   // mỗi khi text thay đổi sẽ gọi lại calback

  return (
    <div>
      <h1>demo use effect</h1>
      <p>{number}</p>
      <button onClick={()=> setNumber(number -1)}>down</button>
      <button onClick={()=> setNumber(number +1)}>up</button>
      <p>{text}</p>
      <button onClick={() => setText("welcome...")}>change text</button>
    </div>
  )
}

export default DemoUseEffect