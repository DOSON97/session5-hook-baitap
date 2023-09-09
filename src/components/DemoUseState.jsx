import React,{useState}  from 'react'

function DemoUseState() {
    // trong react cso 2 loại components: class và fucntion
    //cú pháp khai báo state trong fucntion => usestate (0)
    
    // trong đó:
    // const [namestate,setNamestate] = uestate(initialState) => namestate gán bằng giá trị initialstate
    // setnamestate: là hàm dùng đẻ cập nhật klaij giá trị cho namestate
    //initialstate: giá trị khởi tạo

    //lưu ý: khi sử dụng usestate thì cần import lên trên

    //các kiểu dữ liệu: nguyên thuỷ và tham chiếu
    // number:
    const [number,setNumber] = useState(0);
    console.log(number);
    console.log(setNumber);//hàm dùng đẻ cập nhật lại state
    // string
    const[text,setText]=useState("hello word")
    const handleChangeText = () => {
        setText("welcom to son");
    }
    //boolean
    const [toggle, setToggle] = useState(true);
    const handleChangeToggle =() => {
        setToggle(!toggle)
    }
    //Array
    const [arrNumber, setArrNumber]= useState([1,2,3,4])
    const handleRandomNumber =() => {
        setArrNumber([...arrNumber, Math.floor(Math.random()*10)])
    }

    //object
    const [objList, setObjList]=useState({
        objNumber:10,
        objArrList:[3,5,7],
    });
    const handleRandomObj = () => {
        setObjList({
           ...objList,
            objArrList:[...objList.objArrList, Math.floor(Math.random()*100)],
        })
    }

    //array + object
    const [data,setData] = useState([
        {id: 1,name: "son",age:27,phone: 1234},
        {id: 2,name: "nam",age:22,phone: 1255534},
        {id: 3,name: "nu",age:21,phone: 1232344},
        {id: 4,name: "phong",age:20,phone: 123434},
])
  return (
    <div>
        {/* kieu number */}
        <h1>Demo use State</h1>
        <h3>{number}</h3>
        {/* cach viết trực tiếp hàm setstate */}
        <button onClick={() =>  setNumber(number-1)} >down</button>
        <button onClick={() =>  setNumber(number+1)} >up</button>
        {/* kieu string */}
        <div>
        <h3>String</h3>
            <p>{text}</p>
            {/* viết setText thông qua 1 hàm */}
            <button onClick={handleChangeText}>chanage text</button>
        </div>
        {/* kieu boolean */}
        <div>
            <h3>boolean</h3>
            {toggle? 
            <div>
                <p>chuc cac ban hoc tap tot</p>
                <button onClick={handleChangeToggle}>change</button>
            </div> : <div>
                <p>cham chi lam bai tap</p>
                <button onClick={handleChangeToggle}>change</button>
                </div>}
        </div>
        {/* kieu Array */}
               <div>
               <h3>Array</h3>
                <p>{arrNumber.toString()}</p>
                <button onClick={handleRandomNumber}>number</button>

        </div> 
        {/* kieu object */}
        <div>
            <h3>Object</h3>
            <p>{objList.objNumber}</p>
            <button onClick={() => setObjList(
                {...objList,objNumber: objList.objNumber -1})}>down</button>
            <button onClick={() => setObjList(
                {...objList,objNumber: objList.objNumber +1})}>up</button>
            <p>{objList.objArrList}</p>
            <button onClick={handleRandomObj}>random</button>
        </div>
        {/* kieu du lieu array + object */}
        {/* dùng hàm map để duyệt qua từng phần tử data,hàm map trả về 1 callbackfunction
        truyền callbackfunction vào map vs 2 or 3 tham số: th1:value,th2:index
        sau dấu => mà dùng {} thì cần return
        còn sau dấu => mà k dùng {} thì k cần return */}
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {data.map((element,index) =>  
            <tr key={element.id}>
                <td>{index + 1}</td>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.age}</td>
                <td>{element.phone}</td>
                <td><button>detail</button></td>
            </tr>)
            }
            </tbody>
        </table>
       
       
    </div>
  );
}

export default DemoUseState