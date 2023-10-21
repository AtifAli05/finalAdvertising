import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnySvg from '../../../Assets/Images/svg';

import {colors} from '../../../Utils/Constants/Colors';
import {WP} from '../../../Utils';
import ButtonPrimary from '../../../Components/Common/ButtonPrimary/ButtonPrimary';
import SVGComponent from '../../../Assets/Images/svg/Splash-Logo';
import  SplashImg  from '../../../Assets/Images/svg/SplashImg';
const Splash = ({navigation}) => {

  return (
    <View style={styles.mainContainer}>
      <AnySvg
        width={65.28}
        height={64.79}
        name={SVGComponent}
        style={{marginTop: 165}}
      />
      <View
        style={{
          alignSelf: 'center',
          marginTop: 67,
        }}>
        <Text style={styles.Track}>
          Track and optimize your{' '}
          <Text style={{color: colors.buttonBackground}}>Advertising </Text>
          budget
        </Text>
      </View>
      <View>
        <AnySvg
          width={9.28}
          height={1.91}
          name={SplashImg}
          style={{marginTop: 60, alignSelf: 'center'}}
        />
      </View>
      <View>
        <ButtonPrimary
          title={'Get Started'}
          style={{
            marginTop: 50,
            elevation: 6,
            backgroundColor: colors.buttonBackground,
          }}
          buttonPress={() => navigation.navigate('Login')}
        />
        <Text style={styles.skip}>Skip</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  Track: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.textPrimary,
    lineHeight: 35,
  },
  skip: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
