import "./portfolioList.styles.scss";

const PortfolioList = ({title, active, setSelected, id}) => {
    return ( 
        <li className={active ? "portfolio active" : "portfolioList"} onClick={()=> setSelected(id)}> 
            {title}
        </li>
     );
}
 
export default PortfolioList;