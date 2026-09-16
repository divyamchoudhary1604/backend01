class ApiResponse{
    constructor(
        statuscode,
        data,
        message = "Success"
    ){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.success = statuscode <400     //200 < 400: true coz success answers in true or false
    }
}
export {ApiResponse}