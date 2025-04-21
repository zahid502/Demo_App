import {FormikInput, PrimaryButton} from '@components';
import {Images, yupSchemas} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {
  registerUser,
  setError,
  setErrorMessage,
  setLoading,
} from '@redux/slice/auth/register-user-slice';
import store, {RootState} from '@redux/store';
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
import {goBack} from '../../../../root-navigation';

interface IProps {
  message: string;
  error: boolean;
  loading: boolean;
}

const mapStateToProps = (state: RootState) => {
  return {
    error: state.registerUser.error,
    message: state.registerUser.message,
    loading: state.registerUser.loading,
  };
};

const SignUpScreen = memo(({message, error, loading}: IProps) => {
  const dispatch = store.store.dispatch;
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(setError(''));
  }, []);

  const handleSignUp = async (values: {email: string; password: string}) => {
    const {email, password} = values;
    Keyboard.dismiss();
    dispatch(registerUser({email, password}));
  };

  const handleSignIn = () => {
    goBack();
  };

  const handleFocus = () => {
    // Clear the error and error message on input focus
    if (error) {
      dispatch(setError(false));
      dispatch(setErrorMessage(''));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgContainer} source={Images.background}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View style={styles.formHeader}>
              <Text style={styles.headingText}>Register</Text>
              <Text style={styles.labelText}>Create your new account</Text>
            </View>

            <Formik
              initialValues={{
                // email: '',
                // password: '',
                // confirmPassword: '',
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
                confirmPassword: 'cityslicka',
              }}
              validationSchema={yupSchemas.signUpSchema}
              onSubmit={handleSignUp}>
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

                  <FormikInput
                    isRequired
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    labelStyle={styles.labelStyle}
                    secureTextEntry
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onFocus={handleFocus} // Clear error on focus
                    keyboardType={
                      Platform.OS == 'ios' ? 'ascii-capable' : 'default'
                    }
                  />

                  {error && (
                    <View style={styles.errorView}>
                      <Text style={styles.error}>{message}</Text>
                      <View style={styles.corner}></View>
                    </View>
                  )}

                  <PrimaryButton
                    loading={loading}
                    checkNetwork={true}
                    onPress={handleSubmit}
                    title="Sign up"
                    style={styles.button}
                  />
                  <TouchableOpacity activeOpacity={0.8} onPress={handleSignIn}>
                    <Text style={styles.accountText}>
                      Already have an account? Sign in
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

export default connect(mapStateToProps)(SignUpScreen);
