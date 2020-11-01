import { takeLatest, call, put, all } from 'redux-saga/effects';

// SERVICES
import { toast } from 'react-toastify';
import api from '../../../services/api';

// ACTIONS
import { updatePessoalSuccess, updatePessoalFailure } from './actions';

export function* updatePessoal({ payload }){
    try{
        const {
            id, 
            oldPassword,
            password,
            email,
            phone,
            endereco, 
            numero,
            comp, 
            ref, 
            cep, 
            bairro, 
            cidade, 
            estado
         } = payload.data;

        const response = yield call (api.put, 'users', {
            id,
            oldPassword,
            password,
            email,
            phone,
            endereco, 
            numero,
            comp, 
            ref, 
            cep, 
            bairro, 
            cidade, 
            estado
        });

        toast.success('Perfil atualizado com sucesso!', { position: "bottom-right" });

        yield put(updatePessoalSuccess(response.data));
    } catch (err){
        toast.error('Erro ao atualizar perfil, verifique os seus dados!', { position: "bottom-right" });
        yield put(updatePessoalFailure());
    }
}

export default all([
    takeLatest('@user/UPDATE_PESSOAL_REQUEST', updatePessoal),
]);