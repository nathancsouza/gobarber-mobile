import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 18px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 200px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 14px;
`;

export const UserAvatar = styled.Image`
  width: 166px;
  height: 166px;
  border-radius: 78px;
  align-self: center;
`;
