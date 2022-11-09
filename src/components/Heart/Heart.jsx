function Heart(props) {
    return (
        <div className="__heart" color={props.color || ""} style={props.style}>
            <span>Q</span>
        </div>
    );
}
export default Heart;
