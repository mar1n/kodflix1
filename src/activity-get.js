import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg'

export default function getActivity() {
    return [
      {id: 'football', name: 'Football', logo: football},
      {id: 'basketball', name: 'Basketball', logo: basketball},
      {id: 'rugby', name: 'Rugby', logo: rugby},
      {id: 'tennis', name: 'Tennis', logo: tennis},
      {id: 'pingpong', name: 'Ping pong', logo: pingpong},
      {id: 'dart', name: 'Dart', logo: dart},
    ];
}