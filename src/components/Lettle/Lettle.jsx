import Heart from "../Heart/Heart";

function Lettle(props) {
    const renderString = () => {
        let string = "__lettle ";
        if (props._open) string += "__flap";
        return string;
    };
    return (
        <div className={renderString()}>
            <div className="__lettle_container">
                <div className="__lettle_container_content">
                    <div className="__lettle_container_content_text">
                        <img alt="anh Q" src={require("../../img/q4.jpg")} />
                        {/* <button onClick={() => props._setMore((old) => !old)}>
                            YΓͺu
                        </button> */}
                        <span className="__sign">π πΎππ·π±</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lettle;
