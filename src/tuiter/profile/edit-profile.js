import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setProfile as redex_setprofile } from "../reducers/profile-reducer";
const EditProfileComponent = () => {
    const pf = useSelector((state) => state.profile);
    //useSelector((state) => state.profile): 从 Redux store 中获取 profile 状态，并将其赋值给 pf
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
    } = pf;
    //从 pf 中解构出各种字段
    const [profile, setProfile] = useState({
        firstName,
        lastName,
        bio,
        location,
        website,
        dateOfBirth,
    });
    //使用 useState 定义 profile 本地状态，并初始化为从 pf 中解构出的字段
    const inputList = [
        { key: "firstName", tag: "First Name" },
        { key: "lastName", tag: "Last Name" },
        { key: "bio", tag: "Bio" },
        { key: "location", tag: "Location" },
        { key: "website", tag: "Website" },
        { key: "dateOfBirth", tag: "Birth date" },
    ];
    //inputList 是一个数组，包含需要显示的输入字段的键和标签。
    const dispatch = useDispatch();
    const saveHandler = () => {
        dispatch(redex_setprofile(profile));
    };
    //useDispatch: 获取 dispatch 方法。
    //saveHandler: 定义保存按钮的点击处理函数，分发 redex_setprofile action 更新 Redux store 中的 profile 状态
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
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10%",
                        flex: 1,
                    }}
                >
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg" style={{ color: "black" }}></i>
                    </Link>
                    <div className="fw-bold h5">{`Edit profile`}</div>
                </div>
                <Link to="/tuiter/profile">
                    <button className="rounded-pill btn btn-dark" onClick={saveHandler}>
                        Save
                    </button>
                </Link>
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
                </div>
                <div
                    style={{
                        gap: "20px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "5%",
                        marginBottom: "10%",
                    }}
                >
                    {inputList.map(({ key, tag }) => {
                        //inputList.map：遍历 inputList 数组，为每个元素执行回调函数
                        //回调函数参数 { key, tag }：通过对象解构获取数组元素的 key 和 tag 属性
                        return (
                            <div key={key} style={{ position: "relative" }}>
                                <div
                                    className="text-muted"
                                    style={{
                                        position: "absolute",
                                        top: "2px",
                                        left: "4px",
                                        fontSize: "10px",
                                    }}
                                >
                                    {tag}
                                </div>
                                <input
                                //当输入框的值变化时，触发 onChange 事件处理函数
                                //event.target.value 获取输入框的新值
                                //setProfile 更新 profile 状态，并更新 key 对应的字段值。
                                    value={profile[key]}
                                    onChange={(event) =>
                                        setProfile({ ...profile, [key]: event.target.value })
                                    }
                                    style={{ paddingTop: "20px", width: "100%" }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default EditProfileComponent;
