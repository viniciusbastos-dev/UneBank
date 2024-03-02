import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {showMessage} from 'react-native-flash-message';

const createAccount = async (
  fullName: string,
  phone: string,
  email: string,
  password: string,
) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await userCredential.user?.updateProfile({
      displayName: fullName,
    });

    await firestore().collection('users').doc(userCredential.user.uid).set({
      phone: phone,
    });

    showMessage({
      message: 'Usuário cadastrado com sucesso!',
      type: 'success',
    });
  } catch (error: any) {
    if (error?.code === 'auth/email-already-in-use') {
      showMessage({
        message: 'Este endereço de email já está sendo usado. ',
        type: 'danger',
      });
    } else {
      showMessage({
        message: 'Erro ao cadastrar usuário',
        type: 'danger',
      });
    }
  }
};

export const Authentication = {
  createAccount,
};
