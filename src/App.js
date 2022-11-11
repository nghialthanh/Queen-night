import { useState } from "react";
import Lettle from "./components/Lettle/Lettle";
import SwitchHeart from "./components/Switch/Switch";
import ImageHeart from "./imageHeart";

function App() {
    const [_open, _setOpen] = useState(false);
    const [_more, _setMore] = useState(false);
    return (
        <div className="App">
            <div className="__page">
                <Lettle _open={_open} />
                <SwitchHeart
                    toggle={_setOpen}
                    _open={_open}
                    _setMore={_setMore}
                />
                {!_open && (
                    <div className="__arrow_button">
                        <span>Press Heart</span>
                        <img alt="arrow" src={require("./img/arrow.png")}></img>
                    </div>
                )}
            </div>
            {_more && <ImageHeart />}
        </div>
    );
}

export default App;
