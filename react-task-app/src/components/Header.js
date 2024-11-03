import "./Header.css"
export default function Header(props){
    const {theme,setTheme} = props;
    return(
        <header>
            <div className="logo">
                <span>TASK MANAGEMENT</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light"? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span className="icon">สลับ</span>
            </div>
        </header>
    );
}