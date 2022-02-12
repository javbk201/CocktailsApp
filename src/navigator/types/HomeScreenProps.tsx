import {NavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamsList} from './ParamsList';

/** Screen type prop */
export type HomeScreenProp = NativeStackScreenProps<ParamsList, 'Home'>;

/** Type to use navigation prop with useNavigation() */
export type HomeScreenNavigationProp = NavigationProp<ParamsList, 'Home'>;

/** Type to use route prop with useRoute()s */
export type HomeScreenRouteProp = RouteProp<ParamsList, 'Home'>;
