import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';
import { mocked } from 'ts-jest/utils';

import * as AuthSession from 'expo-auth-session';

import * as mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('expo-auth-session');

describe('Auth Hook', () => {
  // it('should be able to sign in with Google account existing', async () => {
  // const googleMocked = mocked(AuthSession.startAsync as any);

  // googleMocked.mockReturnValue({
  //   type: 'success',
  //   user: {
  //     id: '1',
  //     email: 'lucas@teste.com',
  //     name: 'Lucas',
  //     photo: 'photo.png',
  //   },
  // });

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   await act(() => result.current.signInWithGoogle());

  //   expect(result.current.user).toBeTruthy();
  //   // https://app.rocketseat.com.br/h/forum/react-native/2c4d36dc-7ef0-43ba-ac95-151713748431
  // });

  it('user should not connect if cancel authentication with google', async () => {
    const googleMocked = mocked(AuthSession.startAsync as any);

    googleMocked.mockReturnValue({
      type: 'success',
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toHaveProperty('id');
    // https://app.rocketseat.com.br/h/forum/react-native/2c4d36dc-7ef0-43ba-ac95-151713748431
  });
});
