import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg'

export default function getActivity() {
    return [
      {id: 'football', name: 'Football', logo: football, details:'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby league or rugby union); and Gaelic football.[1][2] These various forms of football are known as football codes.'},
      {id: 'basketball', name: 'Basketball', logo: basketball, details:'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender\'s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one or more one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated.'},
      {id: 'rugby', name: 'Rugby', logo: rugby, details: 'Rugby union, widely known simply as rugby, is a contact team sport that originated in England in the first half of the 19th century. One of the two codes of rugby football, it is based on running with the ball in hand. In its most common form, a game is played between two teams of 15 players using an oval-shaped ball on a rectangular field with H-shaped goalposts at either end.'},
      {id: 'tennis', name: 'Tennis', logo: tennis, details: 'Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent\'s court. The object of the game is to maneuver the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will.'},
      {id: 'pingpong', name: 'Ping pong', logo: pingpong, details: 'Table tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball back and forth across a table using small rackets. The game takes place on a hard table divided by a net. Except for the initial serve, the rules are generally as follows: players must allow a ball played toward them to bounce one time on their side of the table, and must return it so that it bounces on the opposite side at least once. A point is scored when a player fails to return the ball within the rules. Play is fast and demands quick reactions. Spinning the ball alters its trajectory and limits an opponent\'s options, giving the hitter a great advantage.'},
      {id: 'dart', name: 'Dart', logo: dart, details: 'To run in mainstream web browsers, Dart relies on a source-to-source compiler to JavaScript. According to the project site, Dart was "designed to be easy to write development tools for, well-suited to modern app development, and capable of high-performance implementations."[16] When running Dart code in a web browser the code is precompiled into JavaScript using the dart2js compiler. Compiled as JavaScript, Dart code is compatible with all major browsers with no need for browsers to adopt Dart. Through optimizing the compiled JavaScript output to avoid expensive checks and operations, code written in Dart can, in some cases, run faster than equivalent code hand-written using JavaScript idioms.'},
    ];
}