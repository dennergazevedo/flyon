import { takeLatest, call, put, all } from 'redux-saga/effects';

// SERVICES
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

// ACTIONS
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }){
    try{
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password,
    });

    const { token, user } = response.data;

    yield call(api.put, 'token_user', {
        email,
        token
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    
    yield put(signInSuccess(token, user));
    toast.success('Logado com sucesso! Redirecionando...', { position: "bottom-right" });
    }catch(err){
        toast.error('Falha na autenticação, verifique seus dados', { position: "bottom-right" });
        yield put(signFailure());
    }

}

export function* signUp({ payload }){
    try{
        const {nome, email, password, cpf, phone, provider, endereco, numero, comp, bairro, cidade, ref, cep, estado} = payload;

        yield call (api.post, 'users', {
            nome,
            email,
            password,
            phone,
            cpf,
            endereco,
            numero,
            comp,
            bairro,
            cidade,
            ref,
            cep,
            estado,
            provider,
        });

        toast.success('Cadastrado com Sucesso', { position: "bottom-right" });
    } catch(err){
        toast.error('Falha no cadastro, verifique os dados e tente novamente!', { position: "bottom-right" });

        yield put(signFailure());
    }
}

export function setToken({ payload }){
    if(!payload) return;

    const { token } = payload.auth;

    if (token){
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
}

export function signOut(){
    history.push('/');
    toast.success('Deslogado com sucesso! Redirecionando...', { position: "bottom-right" });
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);