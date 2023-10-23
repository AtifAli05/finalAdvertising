import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AnySvg from '../../../Assets/Images/svg';
import { colors } from '../../../Utils/Constants/Colors';
import ButtonPrimary from '../../../Components/Common/ButtonPrimary/ButtonPrimary';
import SVGComponent from '../../../Assets/Images/svg/Splash-Logo';
import SplashImg from '../../../Assets/Images/svg/SplashImg';

const { width, height } = Dimensions.get('window');
const logoSize = width * 0.25;
const marginTopTrack = height * 0.12;
const marginTopImg = height * 0.05;
const marginTopButton = height * 0.07;
const skipFontSize = width * 0.04;

const Splash = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <AnySvg
        width={logoSize}
        height={logoSize}
        name={SVGComponent}
        style={{ marginTop: marginTopTrack }}
      />
      <View style={{ alignSelf: 'center', marginTop: marginTopTrack }}>
        <Text style={styles.Track}>
          Track and optimize your{' '}
          <Text style={{ color: colors.buttonBackground }}>Advertising </Text>
          budget
        </Text>
      </View>
      <View>
        <AnySvg
          width={width * 0.08}
          height={height * 0.005}
          name={SplashImg}
          style={{ marginTop: marginTopImg, alignSelf: 'center' }}
        />
      </View>
      <View>
        <ButtonPrimary
          title={'Get Started'}
          style={{
            marginTop: marginTopButton,
            elevation: 6,
            backgroundColor: colors.buttonBackground,
          }}
          buttonPress={() => navigation.navigate('Login')}
        />
        <Text style={[styles.skip, { fontSize: skipFontSize }]}>Skip</Text>
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
    fontSize: width * 0.06,
    fontWeight: '600',
    color: colors.textPrimary,
    lineHeight: width * 0.085,
  },
  skip: {
    fontWeight: '400',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
