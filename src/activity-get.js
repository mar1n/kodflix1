import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg'

export default function getActivity() {
    return [
      {id: 'football', name: 'Football', logo: football, details:'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby league or rugby union); and Gaelic football.[1][2] These various forms of football are known as football codes.'},
      {id: 'basketball', name: 'Basketball', logo: basketball},
      {id: 'rugby', name: 'Rugby', logo: rugby},
      {id: 'tennis', name: 'Tennis', logo: tennis},
      {id: 'pingpong', name: 'Ping pong', logo: pingpong},
      {id: 'dart', name: 'Dart', logo: dart},
    ];
}