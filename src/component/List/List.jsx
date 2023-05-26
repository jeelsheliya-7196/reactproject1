import Li from "../Li/Li"
function List(){


    let ulstyle = {display: "flex", padding: 0, listStyle: "none", fontSize :"18px"};
    let listyle = {padding: 20};
    let astyle = {color: "black", textDecoration: "none",textTransform : "uppercase"};
    let namelist = ["Home","Shop","COllections","healtcare","blog", "Pages"];
    return(
        <ul style={ulstyle}>
            {
                namelist.map((val)=>{
                    return (< Li typ={listyle}ast={astyle}name={val}/>)
                })
            }
        </ul>
    )
}
export default List;