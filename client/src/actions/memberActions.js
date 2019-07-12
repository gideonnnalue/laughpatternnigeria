import {
    GET_MEMBER,
    MEMBER_LOADING,
    MEMBER_NOT_FOUND,
    CLEAR_CURRENT_MEMBER,
    GET_ERRORS,
    GET_MEMBERS
} from "./types";
import axios from "axios";
import isEmpty from "../validation/is-empty";

export const getAllMembers = () => dispatch => {
    dispatch(setMemberLoading());
    // console.log("worked");
    axios
        .get("/api/members/all")
        .then(res => {
            // console.log(res.data.events);
            dispatch({
                type: GET_MEMBERS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("err");
            dispatch({
                type: GET_MEMBERS,
                payload: {}
            });
        });
};

export const addMember = ({ name, job, desc, memberImage }) => dispatch => {
    let data = new FormData();
    data.append("name", name);
    data.append("job", job);
    data.append("desc", desc);
    data.append("memberImage", memberImage);

    dispatch(setMemberLoading());
    axios
        .post("/api/members/member", data)
        .then(res => {
            console.log(res.data);
            dispatch(getAllMembers());
        })
        .catch(err => {
            console.log(err);
            dispatch(getAllMembers());
        });
};

export const editMember = ({
    id,
    name,
    job,
    desc,
    memberImage
}) => dispatch => {
    // console.log("edit");
    let data = new FormData();
    data.append("id", id);
    data.append("name", name);
    data.append("job", job);
    data.append("desc", desc);
    if (isEmpty(memberImage)) {
        data.append("memberImage", memberImage);
    }

    dispatch(setMemberLoading());
    axios
        .post("/api/members/edit", data)
        .then(res => {
            console.log(res.data);
            dispatch(getAllMembers());
        })
        .catch(err => {
            console.log(err);
            dispatch(getAllMembers());
        });
};

export const deleteMember = memberId => dispatch => {
    dispatch(setMemberLoading());
    axios
        .delete(`/api/members/member/${memberId}`)
        .then(res => {
            console.log(res.data);
            dispatch(getAllMembers());
        })
        .catch(err => {
            dispatch(getAllMembers());
            console.log(err);
        });
};

// Event Loading
export const setMemberLoading = () => {
    return {
        type: MEMBER_LOADING
    };
};
