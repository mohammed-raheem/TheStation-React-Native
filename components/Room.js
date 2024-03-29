import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Caption, useTheme, Title, Text, Paragraph} from 'react-native-paper';

import ArrowIcon from '../assets/icons/ArrowIcon';
import WifiIcon from '../assets/icons/WifiIcon';
import BoardIcon from '../assets/icons/BoardIcon';
import AudioIcon from '../assets/icons/AudioIcon';
import CoolingIcon from '../assets/icons/CoolingIcon';
import PersonIcon from '../assets/icons/PersonIcon';
import StageIcon from '../assets/icons/StageIcon';
import ChairIcon from '../assets/icons/ChairIcon';
import DatashowIcon from '../assets/icons/DatashowIcon';
import MainButton from './elements/MainButton';

function Room({navigation, setBarHeight}) {
  const {colors, fonts} = useTheme();
  const styles = StyleSheet.create({
    roomPage: {
      backgroundColor: '#fff',
      flex: 1,
    },
    headerBg: {
      width: '100%',
    },
    arrowIcon: {
      position: 'absolute',
      top: 34,
      left: 24,
      width: 40,
      height: 40,
    },
    roomFigure: {
      position: 'absolute',
      top: 32.4,
      right: 24,
    },
    roomBg: {
      backgroundColor: colors.primary,
      width: 74,
      height: 49.3,
    },
    roomName: {
      backgroundColor: '#fff',
      width: 49.74,
      height: 49.74,
      position: 'absolute',
      top: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    room: {
      fontFamily: fonts.bold.fontFamily,
      fontSize: 20,
      color: '#424243',
    },
    headerTitle: {
      position: 'absolute',
      bottom: 0,
      left: 24,
      color: '#fff',
      width: 308,
      fontFamily: fonts.bold.fontFamily,
      lineHeight: 32,
      fontSize: 25,
      marginBottom: 21,
    },
    roomBody: {
      marginTop: 28,
      marginLeft: 18,
      marginRight: 18,
      marginBottom: 20,
    },
    bodyTitle: {
      fontFamily: fonts.bold.fontFamily,
      fontSize: 25,
      color: colors.titleColor,
      marginBottom: 15,
    },
    bodyText: {
      fontFamily: fonts.book.fontFamily,
      fontSize: 14,
      color: colors.titleColor,
      opacity: 0.7,
      marginBottom: 40,
      lineHeight: 22,
    },
    roomIcons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 60,
    },
    iconContainer: {
      width: 118,
      height: 91.5,
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 10,
    },
    iconDesc: {
      fontFamily: fonts.book.fontFamily,
      fontSize: 12,
      color: '#5C5C5C',
      width: 105,
      marginTop: 10,
      textAlign: 'center',
    },
    bookBtn: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 55,
    },
    Btn: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      marginBottom: 25,
    },
    btnTitle: {
      fontFamily: fonts.bold.fontFamily,
      color: '#3D3A37',
      fontSize: 16,
      // marginRight: 5,
    },
    btnSubTitle: {
      fontFamily: fonts.book.fontFamily,
      color: '#000',
      fontSize: 10,
    },
  });

  return (
    <View style={styles.roomPage}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.headerBg}
            source={require('../assets/images/single-event-bg.jpg')}
          />
          <View style={styles.roomFigure}>
            <View style={styles.roomBg}></View>
            <View style={styles.roomName}>
              <Text style={styles.room}>Hall</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => {
              navigation.goBack();
              setBarHeight(65);
            }}>
            <ArrowIcon />
          </TouchableOpacity>
          <Title style={styles.headerTitle}>Event Hall</Title>
        </View>
        <View style={styles.roomBody}>
          <Paragraph style={styles.bodyText}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure
          </Paragraph>
          <View style={styles.roomIcons}>
            <View
              style={[
                styles.iconContainer,
                {
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#EEE',
                },
              ]}>
              <WifiIcon width="23.83" height="17.09" />
              <Text style={styles.iconDesc}>Speed WiFi</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#EEE',
                },
              ]}>
              <DatashowIcon width="22.67" height="13.2" />
              <Text style={styles.iconDesc}>Datashow</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {borderBottomWidth: 1, borderColor: '#EEE'},
              ]}>
              <BoardIcon width="17.99" height="24" />
              <Text style={styles.iconDesc}>Chart board</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#EEE',
                },
              ]}>
              <AudioIcon width="15.45" height="21.86" />
              <Text style={styles.iconDesc}>Sound System</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#EEE',
                },
              ]}>
              <CoolingIcon width="21.27" height="23.05" />
              <Text style={styles.iconDesc}>Air Conditioning</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {borderBottomWidth: 1, borderColor: '#EEE'},
              ]}>
              <ChairIcon width="14.36" height="23.4" />
              <Text style={styles.iconDesc}>Customizable Design</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {borderRightWidth: 1, borderRightColor: '#EEE'},
              ]}>
              <PersonIcon width="13.15" height="21.32" />
              <Text style={styles.iconDesc}>Up To 250 Person</Text>
            </View>
            <View
              style={[
                styles.iconContainer,
                {borderRightWidth: 1, borderRightColor: '#EEE'},
              ]}>
              <StageIcon width="21.66" height="16.29" />
              <Text style={styles.iconDesc}>Stage</Text>
            </View>
          </View>
          {/* <Pressable
            style={({pressed}) => [
              {
                opacity: pressed ? 0.9 : 1,
                shadowColor: pressed ? '#000' : '#000',
                shadowOffset: pressed
                  ? {width: 0, height: 3}
                  : {width: 0, height: 1},
                shadowOpacity: pressed ? 0.27 : 0.22,
                shadowRadius: pressed ? 4.56 : 2.22,
                elevation: pressed ? 9 : 3,
              },
              styles.Btn,
            ]}
            onPress={console.log('Pressed')}>
            <Text style={styles.btnTitle}>Book now - </Text>
            <Caption style={styles.btnSubTitle}>2,000,000 IQD per hour</Caption>
          </Pressable> */}
        </View>
      </ScrollView>
      <View style={styles.bookBtn}>
        <MainButton title="Book now - " subTitle="2,000,000 IQD per hour" />
      </View>
    </View>
  );
}

export default Room;
