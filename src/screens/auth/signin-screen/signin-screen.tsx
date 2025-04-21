import {FormikInput, PrimaryButton} from '@components';
import {Images, ScreenEnum, yupSchemas} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {
  authenticateUser,
  setError,
  setErrorMessage,
  setLoading,
} from '@redux/slice/auth/auth-slice';
import store, {RootState} from '@redux/store';
import {PrefManager} from '@services';
import {Formik} from 'formik';
import React, {memo, useEffect, useMemo} from 'react';
import {
  ImageBackground,
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import createStyles from './styles';
import {navigate} from '../../../../root-navigation';

interface IProps {
  message: string;
  error: boolean;
  loading: boolean;
}

const mapStateToProps = (state: RootState) => {
  return {
    error: state.auth.error,
    message: state.auth.message,
    loading: state.auth.loading,
  };
};

const SignInScreen = memo(({message, error, loading}: IProps) => {
  const dispatch = store.store.dispatch;
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(setError(''));
  }, []);

  const handleSignIn = (values: {email: string; password: string}) => {
    const {email, password} = values;

    Keyboard.dismiss();
    dispatch(authenticateUser({email, password}));
  };

  const handleFocus = () => {
    // Clear the error and error message on input focus
    if (error) {
      dispatch(setError(false));
      dispatch(setErrorMessage(''));
    }
  };

  const handleSignUp = () => {
    navigate(ScreenEnum.SignUp);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgContainer} source={Images.background}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View style={styles.formHeader}>
              <Text style={styles.headingText}>Welcome back</Text>
              <Text style={styles.labelText}>Login to your account</Text>
            </View>

            <Formik
              initialValues={{
                // email: '',
                // password: '',
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
              }}
              validationSchema={yupSchemas.signInSchema}
              onSubmit={handleSignIn}>
              {({handleSubmit, handleChange, values, errors, touched}) => (
                <>
                  <FormikInput
                    isRequired
                    name="email"
                    label="Email"
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    value={values.email}
                    labelStyle={styles.labelStyle}
                    onChangeText={handleChange('email')}
                    onFocus={handleFocus} // Clear error on focus
                  />

                  <FormikInput
                    isRequired
                    name="password"
                    label="Password"
                    placeholder="Enter Password"
                    labelStyle={styles.labelStyle}
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onFocus={handleFocus} // Clear error on focus
                    keyboardType={
                      Platform.OS == 'ios' ? 'ascii-capable' : 'default'
                    }
                  />

                  {error && (
                    <View style={styles.errorView}>
                      <Text style={styles.error}>{message}</Text>
                      <View style={styles.corner} />
                    </View>
                  )}

                  <PrimaryButton
                    loading={loading}
                    checkNetwork={true}
                    onPress={handleSubmit}
                    title="Sign in"
                    style={styles.button}
                  />
                  <TouchableOpacity activeOpacity={0.8} onPress={handleSignUp}>
                    <Text style={styles.accountText}>
                      Don't have an account? Sign up
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
});

export default connect(mapStateToProps)(SignInScreen);
