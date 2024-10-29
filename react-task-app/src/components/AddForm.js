import "./AddForm.css"
export default function AddForm(props){
    const {title, setTitle, saveTask} = props;
    return(
        <>
        <h2>แอพบริหารจัดการงาน</h2>
        <form className="form group" onSubmit={saveTask}>
            <div className="from-control">
                <input type="text" className="text-input" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button type="submit" className="submit-btn">เพิ่ม</button>
            </div>
            
        </form>
        </>
    );
}