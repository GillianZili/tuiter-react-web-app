import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    const {
        firstName,
        lastName,
        handle,
        profilePicture,
        bannerPicture,
        bio,
        website,
        location,
        dateOfBirth,
        dateJoined,
        followingCount,
        followersCount,
    } = profile;
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    gap: "10%",
                }}
            >
                <Link to="/tuiter/home">
                    <i className="bi bi-arrow-left" style={{ color: "black" }}></i>
                </Link>
                <div>
                    <div className="fw-bold h5">{`${firstName} ${lastName}`}</div>
                    <div className="text-muted">{`123 tuits`}</div>
                </div>
            </div>
            <img
                src={bannerPicture}
                width="100%"
                style={{ marginBottom: "-12%" }}
            ></img>
            <div
                style={{
                    paddingLeft: "5%",
                    paddingRight: "5%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                    }}
                >
                    <img className="rounded-circle" src={profilePicture} width="25%" />
                    <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill btn btn-outline-dark">
                            Edit profile
                        </button>
                    </Link>
                </div>
                <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                    <div className="fw-bold h4">{`${firstName} ${lastName}`}</div>
                    <div className="text-muted">{`@${handle}`}</div>
                </div>
                <div>{bio}</div>
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        paddingTop: "3%",
                        paddingBottom: "3%",
                    }}
                >
                    {[
                        { icon: "bi bi-geo-alt-fill", text: location },
                        { icon: "bi bi-lightbulb", text: `Born ${dateOfBirth}` },
                        { icon: "bi bi-calendar3", text: `Joined ${dateJoined}` },
                    ].map(({ icon, text }) => (
                        <div
                            key={icon}
                            style={{ display: "flex", gap: "5px" }}
                            className="text-muted"
                        >
                            <i className={icon}></i>
                            <div>{text}</div>
                        </div>
                    ))}
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                    {[
                        { key: "Following", val: followingCount },
                        { key: "Followers", val: followersCount },
                    ].map(({ key, val }) => (
                        <div key={key} style={{ display: "flex", gap: "5px" }}>
                            <div>{val}</div>
                            <div className="text-muted">{key}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
