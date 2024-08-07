import React, { useState } from "react";
import { createTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            userName: "default",
            image:"https://s1.52poke.com/wiki/thumb/6/6b/175Togepi.png/300px-175Togepi.png",
            tuit: whatsHappening,
            time: "0s",
        };
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
    };


    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://www.nasa.gov/wp-content/uploads/2015/06/edu_what_is_nasa_emblem.jpg" width={60} />
            </div>

            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>

                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>

                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr /></div>
        </div>

    );

}

export default WhatsHappening;