import React, {useRef, useState} from 'react';
import * as S from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import CustomButton from '../../components/CustomButton';
import {Paginator} from '../../components/Paginator';
import {Slides} from './slides';
import {Animated, FlatList} from 'react-native';
import OnboardingItem from '../../components/OnboardingItem';
import AsyncStorage from '@react-native-community/async-storage';

const Onboarding: React.FC<any> = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const completeOnBoarding = async () => {
    try {
      await AsyncStorage.setItem('@HasOnBoarded', 'true');
    } catch (e) {}
  };

  const scrollToNextSlide = () => {
    if (currentIndex === Slides.length - 1) {
      completeOnBoarding();
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
    if (currentIndex < Slides.length - 1) {
      const nextIndex = currentIndex + 1;
      slidesRef.current.scrollToIndex({index: nextIndex});
    }
  };

  return (
    <S.Container>
      <FocusAwareStatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Content>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          bounces={true}
          data={Slides}
          keyExtractor={item => item?.id}
          renderItem={({item}) => <OnboardingItem item={item} />}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <S.FooterWrap>
          <Paginator data={Slides} scrollX={scrollX} />
          <CustomButton onPress={scrollToNextSlide} text="Próximo" />
        </S.FooterWrap>
      </S.Content>
    </S.Container>
  );
};

export default Onboarding;
