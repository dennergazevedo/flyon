export function updatePessoalRequest(data){
    return{
        type: '@user/UPDATE_PESSOAL_REQUEST',
        payload: { data },
    };
}

export function updatePessoalSuccess(user){
    return{
        type: '@user/UPDATE_PESSOAL_SUCCESS',
        payload: { user },
    };
}

export function updatePessoalFailure(){
    return{
        type: '@user/UPDATE_PESSOAL_FAILURE',
    };
}