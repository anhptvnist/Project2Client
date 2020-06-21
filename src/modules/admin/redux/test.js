function getPointOfStudent(id, idtern) {
    return dispatch => {
        dispatch({ type: StudentConstants.GET_INFO_OF_STUDENT_REQUEST });
        StudentService.getPointOfStudent(id, idtern)
            .then(res => {
                dispatch({
                    type: StudentConstants.GET_INFO_OF_STUDENT_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: StudentConstants.GET_INFO_OF_STUDENT_FAILURE});
            })
    }
};